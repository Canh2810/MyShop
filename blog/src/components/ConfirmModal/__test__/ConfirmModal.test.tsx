import React from 'react'
import { render, waitFor, screen } from '@testing-library/react'
import ConfirmModal from '..'
import userEvent from '@testing-library/user-event'

const onSubmitMock = jest.fn()
const onCloseMock = jest.fn()

const setup = () =>
  render(
    <ConfirmModal
      title="This is modal"
      onSubmit={onSubmitMock}
      onClose={onCloseMock}
    />,
  )

describe('ConfirmModal', () => {
  it('renders the modal with the correct', () => {
    const { container } = setup()
    expect(container).toMatchSnapshot()
  })

  it('calls the onClose callback when clicking the Cancel button', async () => {
    setup()
    await userEvent.click(screen.getByText('Cancel'))
    expect(onCloseMock).toHaveBeenCalled()
  })

  it('calls the onSubmit callback when clicking the Confirm button', async () => {
    setup()
    await userEvent.click(screen.getByText('Confirm'))
    await waitFor(() => expect(onSubmitMock).toHaveBeenCalled())
  })
})
