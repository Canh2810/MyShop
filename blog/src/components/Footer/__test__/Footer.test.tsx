import { render } from '@testing-library/react'

import Footer from '..'

const setup = () => render(<Footer />)

describe('Footer component', () => {
  it('should render correctly', () => {
    const { container } = setup()
    expect(container).toMatchSnapshot()
  })
})
