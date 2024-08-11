"use client"

import { useRouter } from 'next/navigation'

export default function Name() {
  const router = useRouter()

  const goToHome = () => {
    router.push('/homepage')
  }

  return (
    <>
    <div>
      <h1 style={{backgroundColor: 'lightcoral'}} >Welcome to the  Namepage</h1>
      <button onClick={goToHome}>Go to Homepage</button>
    </div>
    </>
  )
}
