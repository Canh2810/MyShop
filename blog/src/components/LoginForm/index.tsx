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
  CommonStatus,
  TextFieldTypes,
  TypoVariants,
} from '@/types'

// Constants
import { ERROR_MESSAGES, ROUTES } from '@/constants'

// Icons
import { Email, Lock } from '@/assets'

// Utils
import { checkEmail } from '@/utils'

// Hooks
import { loginService } from '@/services'
import { useAuthStore } from '@/stores'

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
  const login = useAuthStore((state) => state.login)

  /**
   * Handle login
   * @param data email and password value
   */
  const handleSubmitLoginForm: SubmitHandler<ILoginForm> = useCallback(
    (data: ILoginForm) => {
      const response = loginService(data)
      if (response.status === CommonStatus.Success) {
        response.data && login(response.data)
        router.push(ROUTES.HOME)
      } else {
        setErrorMessage(response.message || '')
      }
    },
    [router],
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
      <Button variant={ButtonVariants.Container} type="submit">
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
