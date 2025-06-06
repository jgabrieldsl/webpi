import type { RegisterLinkProps } from '@/types'

const RegisterLink: React.FC<RegisterLinkProps> = ({ text, linkText, linkHref }) => (
  <div className="flex items-center justify-center gap-2 mt-16 md:mt-24 text-base text-center">
    <span className="text-[#1E232C] font-medium">{text}</span>
    <a href={linkHref} className="text-[#4500C9] font-bold">
      {linkText}
    </a>
  </div>
)

export default RegisterLink