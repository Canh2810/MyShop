'use client'

import { useTheme } from 'next-themes'

const Home = () => {
  const { resolvedTheme, setTheme } = useTheme()
  return (
    <>
      <h1 className="font-primary text-2xl leading-8">This is text</h1>
      <h1 className="font-secondary text-light-700">This is text</h1>
      <h1 className="font-tertiary">This is text</h1>
      <h1 className="font-quaternary">This is text</h1>
      <button
        onClick={() => {
          setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
        }}
      >
        Toggle
      </button>
    </>
  )
}

export default Home
