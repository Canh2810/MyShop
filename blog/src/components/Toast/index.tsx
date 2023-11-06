import { ButtonVariants, CommonStatus } from '@/types'
import { Button } from '..'

interface ToastProps {
  title: string
  status?: CommonStatus
  onClose: () => void
}

const Toast = ({
  title,
  status = CommonStatus.Success,
  onClose,
}: ToastProps) => {
  console.log('title', title)
  console.log('status', title)
  return (
    <div
      className="fixed right-[15%] top-[10%] flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 z-[500]"
      role="alert"
    >
      {status === CommonStatus.Success ? (
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
        </div>
      ) : (
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
          </svg>
          <span className="sr-only">Error icon</span>
        </div>
      )}
      <div className="ml-3 text-sm font-normal">{title}</div>
      <Button
        onClick={onClose}
        variant={ButtonVariants.Text}
        className="ml-auto -mx-1.5 -my-1.5"
      >
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </Button>
    </div>
  )
}

export default Toast
