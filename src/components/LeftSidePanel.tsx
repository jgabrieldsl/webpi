import type { LeftSidePanelProps } from '@/types'

const LeftSidePanel: React.FC<LeftSidePanelProps> = ({ backgroundColor = '#4500C9' }) => (
  <div className="hidden md:flex w-full md:w-1/2">
    <div className="flex w-full h-full min-h-screen" style={{ backgroundColor }} />
  </div>
)

export default LeftSidePanel