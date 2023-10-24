import { fontSizes, fontWeights, lineHeights } from './fonts'
import { colors } from './colors'
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { mode, StyleConfig } from '@chakra-ui/theme-tools'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  colors,
  fonts: {
    primary: 'var(--work-sans-font)',
    secondary: 'var(--source-serif-pro-font)',
    tertiary: 'var(--plus-jakarta-sans-font)',
    quaternary: 'var(--inter-font)',
  },
  fontSizes,
  fontWeights,
  lineHeights,
  styles: {
    global: (props: StyleConfig) => ({
      body: {
        bg: mode('white', 'dark.300')(props),
        color: mode('dark.100', 'white')(props),
      },
    }),
  },
})

export default theme
