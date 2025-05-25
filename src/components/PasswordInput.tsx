import type { PasswordInputProps } from '@/types/login.i'
import InputField from './InputField'

const PasswordInput: React.FC<PasswordInputProps> = ({ showPassword, togglePassword, placeholder }) => (
  <div className="relative w-full">
    <InputField
      type={showPassword ? 'text' : 'password'}
      placeholder={placeholder}
    />
    <button
      type="button"
      className="absolute right-4 top-1/2 transform -translate-y-1/2"
      onClick={togglePassword}
    >
      <img
        src={showPassword ? '/eyeicon.png' : '/ic_launcher-playstore 2.png'}
        className="w-5 h-5 object-contain"
        alt="Show/Hide Password"
      />
    </button>
  </div>
)

export default PasswordInput