import { User, Status } from '.'

export interface LoginResponse {
  status: Status
  message?: string
  data?: User
}
