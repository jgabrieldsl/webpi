import { useState } from 'react'
import {
  LeftSidePanel,
  Logo,
  WelcomeText,
  ModalQrCode,
  SubmitButton,
  RegisterLink,
} from '@/components'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '@/firebase'
import { useAuthState } from '@/hooks/useAuth'

const Login = () => {
  const {
    error,
    setError,
    isLoadingAuth,
    setIsLoadingAuth
  } = useAuthState()

  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!username || !password) {
      setError('Por favor, preencha e-mail e senha.')
      return
    }
    try {
      setIsLoadingAuth(true)
      await loginUser(username, password)
      navigate('/home')
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError('Erro desconhecido.')
      }
    } finally {
      setIsLoadingAuth(false)
    }
  }

  return (
    <div className="overflow-x-hidden">
      <div className="w-screen h-screen flex flex-col md:flex-row bg-white">
        <LeftSidePanel />
        <div className="flex w-full md:w-1/2 items-center justify-center bg-white p-12">
          <div className="flex flex-col justify-start w-full max-w-md mx-auto">
            <Logo src="/ic_launcher-playstore 2.png" alt="SuperID Logo" />
            <div className="flex flex-col items-stretch justify-center w-full mt-8">
              <WelcomeText
                title="Bem vindo de volta ao SuperID Web"
                description="Faça o login para continuar"
              />
              <ModalQrCode
                iconSrc="/ic_launcher-playstore 2.png"
                buttonText="Continuar com Super ID App"
                dialogTitle="Login fácil, entre com o SuperID App"
                dialogDescription="Abra o aplicativo, faça login com seu usuário e senha, localize a opção 'SuperID Web', selecione 'Escanear QR Code' e aponte a câmera do seu dispositivo para o QR Code abaixo."
              />
              <div className="text-[#8391a1] text-sm font-normal text-center self-center mt-8">
                ------------- ou entre com seu email e senha -------------
              </div>
              {error && (
                <div className="text-red-500 text-sm text-center mt-4">
                  {error}
                </div>
              )}
              <form className="mt-8 w-full" onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="E-mail"
                  required
                  value={username || ''}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full text-[15px] text-[#8391A1] font-medium rounded-full border border-[#E8ECF4] bg-[#F7F8F9] px-6 py-4 outline-none"
                />
                <div className="mt-4 w-full">
                  <div className="relative w-full">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Senha"
                      required
                      value={password || ''}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full text-[15px] text-[#8391A1] font-medium rounded-full border border-[#E8ECF4] bg-[#F7F8F9] px-6 py-4 outline-none"
                    />
                    <button
                      type="button"
                      className="absolute right-4 top-1/2 transform -translate-y-1/2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <img
                        src={showPassword ? '/eyeicon-closed.png' : '/eyeicon.png'}
                        className="w-5 h-5 object-contain"
                        alt="Show/Hide Password"
                      />
                    </button>
                  </div>
                  <div className="text-right mt-3">
                    <a href="#" className="text-[#6A707C] text-sm font-semibold">
                      Esqueceu sua senha?
                    </a>
                  </div>
                </div>
                <SubmitButton text={isLoadingAuth ? 'Carregando...' : 'Entrar'} />
              </form>
              <RegisterLink
                text="Não tem uma conta?"
                linkText="Registre-se"
                linkHref="#"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login