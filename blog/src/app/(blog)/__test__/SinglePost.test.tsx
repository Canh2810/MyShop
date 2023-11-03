import { render } from '@testing-library/react'
import SinglePost from '../post/[id]/page'
import * as utils from '@/utils'
import { POST_MOCK } from '@/constants'

jest.mock('@/utils')

describe('Single Post page', () => {
  it('should render correctly', async () => {
    jest.spyOn(utils, 'get').mockResolvedValue(POST_MOCK)
    const { container } = render(await SinglePost({ params: { id: 1 } }))

    expect(container).toMatchSnapshot()
  })
})
