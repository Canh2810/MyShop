import { render } from '@testing-library/react'
import Badge from '..'
import { CommonVariants } from '@/types'

describe('Badge component', () => {
  it('should render primary variant', () => {
    const { container } = render(<Badge title="Test Badge" />)
    expect(container).toMatchSnapshot()
  })
  it('should render secondary variant', () => {
    const { container } = render(
      <Badge variant={CommonVariants.Secondary} title="Test Badge" />,
    )
    expect(container).toMatchSnapshot()
  })
})
