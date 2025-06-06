import axios from 'axios'
import jsQR from 'jsqr'
import { useAuthState } from './useAuthState'
import { loginUser } from '@/firebase'
import { useNavigate } from 'react-router-dom'

let pollingInterval: NodeJS.Timeout | null = null

export const useAuthActions = () => {
  const {
    setQRCode,
    setLoginToken,
    setIsLoading,
    setIsAuthenticated,
    setError,
    setUserUID,
    setUsername,
    setPassword,
    setIsRedirecting,
    resetAuthState,
  } = useAuthState.getState()

  const navigate = useNavigate()

  const generateQRCode = async (partnerSite: string, apiKey: string) => {
    setIsLoading(true)
    setError(null)
    setQRCode(null)
    setLoginToken(null)

    try {
      const response = await axios.post(import.meta.env.VITE_BASE_URL_PERFORMAUTH, {
        partnerSite,
        apiKey,
      })

      const { qrCode } = response.data
      setQRCode(qrCode)
      setIsLoading(false)

      const img = new Image()
      img.src = qrCode
      img.onload = () => {
        const canvas = document.createElement('canvas')
        canvas.width = img.width
        canvas.height = img.height
        const ctx = canvas.getContext('2d')
        if (ctx) {
          ctx.drawImage(img, 0, 0)
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
          const code = jsQR(imageData.data, imageData.width, imageData.height)
          if (code) {
            setLoginToken(code.data)
            startPolling()
          } else {
            setError('Falha ao extrair loginToken do QR Code')
            setIsLoading(false)
            stopPolling()
          }
        } else {
          setError('Falha ao processar QR Code')
          setIsLoading(false)
          stopPolling()
        }
      }

      img.onerror = () => {
        setError('Erro ao carregar imagem do QR Code')
        setIsLoading(false)
        stopPolling()
      }
    } catch {
      setError('Falha ao gerar QR Code')
      setIsLoading(false)
      stopPolling()
    }
  }

  const checkLoginStatus = async (loginToken: string) => {
    try {
      const response = await axios.post(import.meta.env.VITE_BASE_URL_GETLOGINSTATUS, {
        loginToken,
      })

      const { userUID, username, password, loginTime } = response.data
      if (userUID && username && password && loginTime) {
        setUserUID(userUID)
        setUsername(username)
        setPassword(password)
        setIsLoading(false)

        try {
          await loginUser(username, password)
          setIsAuthenticated(true)
          setIsRedirecting(true)

          // Delay para navegar para a home
          setTimeout(() => {
            navigate('/home')
            setIsRedirecting(false)
            stopPolling()
          }, 1000)
        } catch (error: any) {
          if (error.message.includes('invalid-credential')) {
            setError('Credenciais inválidas: e-mail ou senha incorretos.')
          } else {
            setError(error.message)
          }
          setIsLoading(false)
          stopPolling()
        }
      } else {
        setIsLoading(false)
      }
    } catch (error: any) {
      if (error.response?.status === 410) {
        setError('Token expirado ou limite de requisições atingido')
        setIsLoading(false)
        stopPolling()
        generateQRCode(import.meta.env.VITE_BASE_URL_SUPERIDWEB, import.meta.env.VITE_BASE_APIKEY_SUPERIDWEB)
      } else {
        setError('Falha ao verificar status de login')
        setIsLoading(false)
      }
    }
  }

  const startPolling = () => {
    if (pollingInterval) return
    pollingInterval = setInterval(() => {
      const { loginToken: currentToken, isAuthenticated } = useAuthState.getState()
      if (currentToken && !isAuthenticated) {
        checkLoginStatus(currentToken)
      } else {
        stopPolling()
      }
    }, 19000)
  }

  const stopPolling = () => {
    if (pollingInterval) {
      clearInterval(pollingInterval)
      pollingInterval = null
    }
  }

  return {
    generateQRCode,
    checkLoginStatus,
    startPolling,
    stopPolling,
    resetAuthState,
  }
}