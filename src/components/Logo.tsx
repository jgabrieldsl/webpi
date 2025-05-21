import type { LogoProps } from '@/types/login.i'

const Logo: React.FC<LogoProps> = ({ src, size = 'w-24 h-24', alt }) => (
  <img
    src={src}
    className={`${size} object-contain object-center rounded-[20px]`}
    alt={alt}
  />
)

export default Logo