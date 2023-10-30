export interface ILoginForm {
  email: string
  password: string
}

export type LoginFormField = Exclude<keyof ILoginForm, ''>
