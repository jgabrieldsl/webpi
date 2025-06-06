import { useState, useEffect } from 'react'
import { useAuthActions, useAuthState } from '@/hooks/useAuth'
import type { ModalQrCodeProps } from '@/types'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog'

const ModalQrCode: React.FC<ModalQrCodeProps> = ({
  iconSrc,
  buttonText,
  dialogTitle,
  dialogDescription,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const {
    qrCode,
    isLoading,
    isAuthenticated,
    error,
    username,
    isRedirecting,
  } = useAuthState()

  const { generateQRCode, resetAuthState } = useAuthActions()

  const partnerSite = import.meta.env.VITE_BASE_URL_SUPERIDWEB
  const apiKey = import.meta.env.VITE_BASE_APIKEY_SUPERIDWEB

  useEffect(() => {
    if (isModalOpen) {
      generateQRCode(partnerSite, apiKey)
    }

    return () => {
      resetAuthState()
    }
    // eslint-disable-next-line
  }, [isModalOpen])

  const handleOpenChange = (open: boolean) => {
    setIsModalOpen(open)
  }

  return (
    <Dialog open={isModalOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <button
          className="flex items-center justify-center gap-3 w-full px-8 py-3 text-base text-center text-[#8391A1] font-normal border border-solid border-[#4600c9] rounded-full"
          disabled={isLoading}
        >
          <img
            src={iconSrc}
            className="w-6 h-6 object-contain object-center rounded-full"
            alt="SuperID App Icon"
          />
          <span>{isLoading ? 'Gerando QR Code...' : buttonText}</span>
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription>{dialogDescription}</DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center justify-center">
          {isAuthenticated ? (
            isRedirecting ? (
              <div className="text-center">
                <p className="text-green-500 text-lg font-semibold">Login bem-sucedido!</p>
                <p>Usuário: {username}</p>
                <div className="mt-4">
                  <p className="mt-2">Redirecionando para a página inicial...</p>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <p className="text-green-500 text-lg font-semibold">Login bem-sucedido!</p>
                <p>Usuário: {username}</p>
              </div>
            )
          ) : error ? (
            <p className="text-red-500 text-center">{error}</p>
          ) : qrCode ? (
            <>
              <img src={qrCode} alt="QR Code" className="w-48 h-48 mb-4" />
              <p className="text-center">Aguardando escaneamento...</p>
            </>
          ) : (
            <p className="text-center">Gerando QR Code...</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ModalQrCode