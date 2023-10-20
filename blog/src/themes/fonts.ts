import { Inter, Work_Sans, Plus_Jakarta_Sans } from 'next/font/google'
import localFont from 'next/font/local'

export const inter = Inter({
  weight: '400',
  subsets: ['latin'],
})

export const work_sans = Work_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
})

export const plus_jakarta_sans = Plus_Jakarta_Sans({
  weight: ['400', '600'],
  subsets: ['latin'],
})

export const source_serif_pro = localFont({
  src: [
    {
      path: '../assets/fonts/source-serif-pro/SourceSerifPro-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/source-serif-pro/SourceSerifPro-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
  ],
})

export const fontFamilies = {
  primary: work_sans.style.fontFamily,
  secondary: source_serif_pro.style.fontFamily,
  tertiary: plus_jakarta_sans.style.fontFamily,
  quaternary: inter.style.fontFamily,
}

export const fontWeights = {
  normal: 400,
  semiBold: 500,
  bold: 600,
}

export const fontSizes = {
  tiny: '12px',
  sm: '14px',
  md: '16px',
  lg: '24px',
  xl: '40px',
}

export const lineHeights = {
  tiny: '20px',
  sm: '20px',
  md: '18px',
  lg: '35px',
  xl: '48px',
}
