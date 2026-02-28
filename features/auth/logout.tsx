'use client'

import LoadingIndicator from '@/components/loading-indicator'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const LogOutPage = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const signOut = async () => {
      setIsLoading(true)
      localStorage.removeItem('jwt-token')
      router.push('/login')
      setIsLoading(false)
    }
    void signOut()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return isLoading ? <LoadingIndicator /> : <></>
}

export default LogOutPage
