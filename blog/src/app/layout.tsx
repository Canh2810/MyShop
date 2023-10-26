import type { Metadata } from 'next'
import { Inter, Work_Sans, Plus_Jakarta_Sans } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
// import GlobalTheme from './themes'
import { Providers } from './providers'

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
  variable: '--inter-font',
})

const work_sans = Work_Sans({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--work-sans-font',
})

const plus_jakarta_sans = Plus_Jakarta_Sans({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--plus-jakarta-sans-font',
})

const source_serif_pro = localFont({
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
  variable: '--source-serif-pro-font',
})

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Blog page, can login, logout, view all posts, single post, search post by post title',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers
      className={`${work_sans.variable} ${inter.variable} ${source_serif_pro.variable} ${plus_jakarta_sans.variable} `}
    >
      {children}
    </Providers>
  )
}
