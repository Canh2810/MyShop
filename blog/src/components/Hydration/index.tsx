'use client'

import { useEffect } from 'react'
import { useAuthStore } from '@/stores'

const Hydrations = () => {
  useEffect(() => {
    useAuthStore.persist.rehydrate()
  }, [])

  return null
}

export default Hydrations
