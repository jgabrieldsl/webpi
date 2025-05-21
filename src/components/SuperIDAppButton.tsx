import type { SuperIDAppButtonProps } from '@/types/login.i'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog'

const SuperIDAppButton: React.FC<SuperIDAppButtonProps> = ({
  iconSrc,
  buttonText,
  dialogTitle,
  dialogDescription,
}) => (
  <Dialog>
    <DialogTrigger className="flex items-center justify-center gap-3 w-full px-8 py-3 text-base text-center text-[#8391A1] font-normal border border-solid border-[#4600c9] rounded-full">
        <img
          src={iconSrc}
          className="w-6 h-6 object-contain object-center rounded-full"
          alt="SuperID App Icon"
        />
        <span className="text-[#8391A1]">{buttonText}</span>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{dialogTitle}</DialogTitle>
        <DialogDescription>{dialogDescription}</DialogDescription>
      </DialogHeader>
    </DialogContent>
  </Dialog>
)

export default SuperIDAppButton