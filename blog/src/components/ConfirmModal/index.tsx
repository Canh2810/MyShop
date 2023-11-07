import { memo } from 'react'
import { Button, Typography } from '..'
import { ButtonVariants } from '@/types'

interface ConfirmModalProps {
  title: string
  isLoading?: boolean
  onSubmit: () => void
  onClose: () => void
}

const ConfirmModal = ({
  title,
  isLoading,
  onSubmit,
  onClose,
}: ConfirmModalProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-light-700 z-[100] ">
      <div className=" top-0 left-0 w-full h-full" onClick={onClose}></div>
      <div className="bg-white dark:bg-dark-300 rounded-xl p-6 absolute top-2/4 left-2/4 translate-y-[-50%] translate-x-[-50%] z-[101] text-center">
        <Typography>{title}</Typography>
        <div className="flex items-center gap-7 justify-center mt-10">
          <Button onClick={onClose}>Cancel</Button>
          <Button
            variant={ButtonVariants.Container}
            isLoading={isLoading}
            onClick={onSubmit}
          >
            Confirm
          </Button>
        </div>
      </div>
    </div>
  )
}

export default memo(ConfirmModal)
