import { render } from '@testing-library/react'
import SubscribeForm from '..'

describe('LoadingIndicator Component', () => {
  it('should render correctly', () => {
    const { container } = render(<SubscribeForm />)
    expect(container).toMatchSnapshot()
  })
})
