import dynamic from 'next/dynamic'
import React from 'react'

interface NoSSRProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

const NoSSR: React.FC<NoSSRProps> = ({ children, fallback = null }) => {
  return <>{children}</>
}

export default dynamic(() => Promise.resolve(NoSSR), {
  ssr: false,
  loading: () => null
})