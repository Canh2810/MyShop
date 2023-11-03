import { get, post } from '..'

describe('get function', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should fetch data and return it on success', async () => {
    const responseData = { key: 'value' }
    const mockJsonPromise = Promise.resolve(responseData)
    const mockFetchPromise = Promise.resolve({
      ok: true,
      json: () => mockJsonPromise,
    })

    global.fetch = jest.fn().mockResolvedValue(mockFetchPromise)

    const url = 'https://example.com/api/data'
    const result = await get(url)

    expect(global.fetch).toHaveBeenCalledWith(url)
    expect(result).toEqual(responseData)
  })

  it('should throw an error on non-OK response', async () => {
    const responseData = { status: 404 }
    const mockJsonPromise = Promise.resolve(responseData)
    const mockFetchPromise = Promise.resolve({
      ok: false,
      json: () => mockJsonPromise,
    })

    global.fetch = jest.fn().mockResolvedValue(mockFetchPromise)

    const url = 'https://example.com/api/not-found'

    await expect(get(url)).rejects.toThrow('Request failed with status 404')
  })
})

describe('post function', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('should post data and return the response data on success', async () => {
    const requestData = { key: 'value' }
    const responseData = { success: true }
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue(responseData),
    }
    global.fetch = jest.fn().mockResolvedValue(mockResponse)

    const url = 'https://example.com/api/post'
    const result = await post(url, requestData)

    expect(global.fetch).toHaveBeenCalledWith(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })

    expect(result).toEqual(responseData)
  })

  it('should throw an error on non-OK response', async () => {
    const requestData = { key: 'value' }
    const responseData = { status: '400' }
    const mockResponse = {
      ok: false,
      json: jest.fn().mockResolvedValue(responseData),
    }
    global.fetch = jest.fn().mockResolvedValue(mockResponse)

    const url = 'https://example.com/api/error'

    await expect(post(url, requestData)).rejects.toThrow(
      'Request failed with status 400',
    )
  })
})
