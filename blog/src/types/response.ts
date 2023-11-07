import { User, CommonStatus } from '.'

export interface LoginResponse {
  status: CommonStatus
  message?: string
  data?: User
}
