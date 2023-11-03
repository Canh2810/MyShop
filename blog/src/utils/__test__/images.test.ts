import { toBase64, shimmer, generatePlaceholder } from '..'

describe('shimmer', () => {
  it('should generate an SVG string with a shimmer effect', () => {
    const w = 100
    const h = 100
    const result = shimmer(w, h)

    // Basic checks for the presence of key SVG components
    expect(result).toContain('<svg')
    expect(result).toContain('linearGradient')
    expect(result).toContain('animate')

    // Additional specific checks if required
    expect(result).toMatch(`<svg width="${w}" height="${h}"`)
    expect(result).toMatch(`rect width="${w}" height="${h}"`)
  })
})

describe('toBase64', () => {
  it('should convert a string to base64 encoding', () => {
    const str = 'Hello, world!'
    const result = toBase64(str)

    // Basic checks for the presence of a valid base64 string
    expect(typeof result).toBe('string')
    expect(result).toMatch(/^[a-zA-Z0-9+/]*={0,2}$/)

    // Additional specific checks if required
    expect(Buffer.from(str).toString('base64')).toEqual(result)
  })
})

describe('generatePlaceholder', () => {
  it('should generate a data URL based on the given width and height', () => {
    const w = 100
    const h = 100
    const result = generatePlaceholder(w, h)

    // Basic checks for the presence of a valid data URL
    expect(typeof result).toBe('string')
    expect(result).toMatch(/^data:image\/svg\+xml;base64,/)

    // Additional specific checks if required
    expect(result).toContain(toBase64(shimmer(w, h)))
  })
})
