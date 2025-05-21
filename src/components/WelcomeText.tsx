import type { WelcomeTextProps } from '@/types/login.i'

const WelcomeText: React.FC<WelcomeTextProps> = ({ title, description }) => (
  <div className="flex flex-col items-stretch justify-center self-start mb-8">
    <h1 className="text-2xl font-bold leading-tight tracking-tight text-[#1E232C]">
      {title}
    </h1>
    <p className="text-[#8391A1] text-base font-normal self-start">
      {description}
    </p>
  </div>
)

export default WelcomeText