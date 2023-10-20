import { colors } from './colors'
import { fontFamilies } from './fonts'
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { mode, StyleConfig } from '@chakra-ui/theme-tools'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  colors,
  fonts: fontFamilies,
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
