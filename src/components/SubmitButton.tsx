import type { SubmitButtonProps } from '@/types'

const SubmitButton: React.FC<SubmitButtonProps> = ({ text, disabled, onClick }) => (
  <button
    type="submit"
    className="w-full mt-8 py-4 text-white text-lg font-semibold rounded-full bg-[#4500C9] hover:bg-[#3b00ab] transition-colors"
    disabled={disabled}
    onClick={onClick}
  >
    {text}
  </button>
)

export default SubmitButton