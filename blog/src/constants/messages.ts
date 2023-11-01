export const ERROR_MESSAGES = {
  FIELD_REQUIRED: (fieldName: string) => `${fieldName} is required`,
  FIELD_INVALID: (fieldName: string) =>
    `Invalid format of ${fieldName}, please check.`,
  LOGIN_INVALID: 'Invalid email or password',
  FAIL_TO_FETCH: 'Something went wrong!! Please try again.',
}
