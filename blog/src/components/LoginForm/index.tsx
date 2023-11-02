'use client'

// Libs
import { memo, useCallback, useState } from 'react'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/navigation'

// Components
import { Button, TextField, Typography } from '../index'

// Types
import {
  ButtonVariants,
  ILoginForm,
  LoginFormField,
  TextFieldTypes,
  TypoVariants,
} from '@/types'

// Constants
import { ERROR_MESSAGES, LOCAL_STORAGE_KEY, ROUTES } from '@/constants'

// Icons
import { Email, Lock } from '@/assets'

// Utils
import { checkEmail, setLocalStorageItem } from '@/utils'

// Hooks
import { useAuth } from '@/hooks'

const LoginForm = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const loginFormField: LoginFormField[] = ['email', 'password']
  const { control, clearErrors, handleSubmit } = useForm<ILoginForm>({
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const router = useRouter()

  const {
    login: { mutate, isPending },
  } = useAuth()

  /**
   * Handle login
   * @param data email and password value
   */

  const handleSubmitLoginForm: SubmitHandler<ILoginForm> = useCallback(
    (data: ILoginForm) => {
      mutate(data, {
        onSuccess: (response) => {
          // Redirect to home page when login success
          setLocalStorageItem(LOCAL_STORAGE_KEY.AUTH, response.token)
          router.push(ROUTES.HOME)
        },
        onError: (error) => {
          // Show error message when login fail
          setErrorMessage(
            error.message === ERROR_MESSAGES.LOGIN_INVALID
              ? error.message
              : ERROR_MESSAGES.FAIL_TO_FETCH,
          )
        },
      })
    },
    [],
  )

  return (
    <form
      onSubmit={handleSubmit(handleSubmitLoginForm)}
      className="relative w-[500px] flex flex-col gap-[28px] bg-white p-10 rounded-xl shadow-md"
    >
      <Typography
        component="h1"
        variant={TypoVariants.HeadingMedium}
        className="text-center"
      >
        LOGIN
      </Typography>
      {loginFormField.map((item) => {
        const title = item === 'email' ? 'Email' : 'Password'
        return (
          <Controller
            key={item}
            control={control}
            name={item}
            rules={{
              required: ERROR_MESSAGES.FIELD_REQUIRED(title),
              ...(item === 'email' && {
                validate: (value: string) => checkEmail(value),
              }),
            }}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <TextField
                icon={item === 'email' ? <Email /> : <Lock />}
                id={item}
                type={
                  item === 'email'
                    ? TextFieldTypes.Text
                    : TextFieldTypes.Password
                }
                name={item}
                placeholder={title}
                value={value}
                errorMessage={error?.message}
                onChange={(data) => {
                  clearErrors(item)
                  onChange(data)
                }}
              />
            )}
          />
        )
      })}
      <Button
        variant={ButtonVariants.Container}
        type="submit"
        isLoading={isPending}
      >
        Login
      </Button>
      {errorMessage && (
        <p className="text-center absolute bottom-2 left-0 right-0  text-danger">
          {errorMessage}
        </p>
      )}
    </form>
  )
}

export default memo(LoginForm)
