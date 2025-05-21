import type { InputFieldProps } from '@/types/login.i'

const InputField: React.FC<InputFieldProps> = ({ type, placeholder, value, onChange }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="w-full text-[15px] text-[#8391A1] font-medium rounded-full border border-[#E8ECF4] bg-[#F7F8F9] px-6 py-4 outline-none"
  />
)

export default InputField