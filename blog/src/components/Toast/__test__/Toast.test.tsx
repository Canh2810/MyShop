import React from 'react'
import { render } from '@testing-library/react'
import Toast from '..'
import { CommonStatus } from '@/types'
import userEvent from '@testing-library/user-event'

describe('Toast component', () => {
  it('renders success toast correctly', () => {
    const { container } = render(
      <Toast title="Success Toast" onClose={() => {}} />,
    )
    expect(container).toMatchSnapshot()
  })

  it('renders error toast correctly', () => {
    const { container } = render(
      <Toast
        title="Error Toast"
        status={CommonStatus.Failed}
        onClose={() => {}}
      />,
    )
    expect(container).toMatchSnapshot()
  })

  it('calls onClose when the close button is clicked', async () => {
    const onCloseMock = jest.fn()
    const { container } = render(
      <Toast title="Success Toast" onClose={onCloseMock} />,
    )

    // Click the close button
    const closeButton = container.querySelector('.w-3')
    if (closeButton) {
      await userEvent.click(closeButton)
      expect(onCloseMock).toHaveBeenCalledTimes(1)
    }
  })
})
