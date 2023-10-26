import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Search } from '@/assets'
import TextField from '..'
import { TextFieldTypes, TextFieldVariants } from '@/types'

describe('TextField component', () => {
  const mockChange = jest.fn()
  const props = {
    icon: <Search />,
    name: 'test',
    placeholder: 'test',
    id: 'test',
    value: '',
    onChange: mockChange,
  }

  it('render with variant is outlined and type is text', () => {
    const { container } = render(<TextField {...props} />)
    expect(container).toMatchSnapshot()
  })

  it('render with variant is filled and type is text', () => {
    const { container } = render(
      <TextField {...props} variant={TextFieldVariants.Filled} />,
    )
    expect(container).toMatchSnapshot()
  })

  it('render with variant is outlined and type is password', () => {
    const { container } = render(
      <TextField {...props} type={TextFieldTypes.Password} />,
    )
    expect(container).toMatchSnapshot()
  })
  it('render with variant is filled and type is password', () => {
    const { container } = render(
      <TextField
        {...props}
        variant={TextFieldVariants.Filled}
        type={TextFieldTypes.Password}
      />,
    )
    expect(container).toMatchSnapshot()
  })

  it('should call onChange handler when value changes', async () => {
    const { getByPlaceholderText } = render(<TextField {...props} />)
    const textfield = getByPlaceholderText('test')

    await userEvent.type(textfield, 'abc')

    expect(mockChange).toHaveBeenCalled()
  })
})
