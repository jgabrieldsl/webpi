export interface LeftSidePanelProps {
  backgroundColor?: string
}

export interface LogoProps {
  src: string
  size?: string
  alt: string
}

export interface WelcomeTextProps {
  title: string
  description: string
}

export interface ModalQrCodeProps {
  iconSrc: string
  buttonText: string
  dialogTitle: string
  dialogDescription: string
}

export interface SubmitButtonProps {
  text: string
  disabled?: boolean
  onClick?: () => void
}

export interface RegisterLinkProps {
  text: string
  linkText: string
  linkHref: string
}