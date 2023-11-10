import { render } from '@testing-library/react'
import Hydrations from '..'

const useAuthStoreMock = {
  persist: {
    rehydrate: jest.fn(),
  },
}

jest.mock('@/stores', () => ({
  ...jest.requireActual('@/stores'),
  useAuthStore: () => useAuthStoreMock,
}))

describe('Hydrations component', () => {
  it('should call useAuthStore.persist.rehydrate on mount', () => {
    render(<Hydrations />)
    expect(useAuthStoreMock.persist.rehydrate()).toHaveBeenCalled()
  })
})
