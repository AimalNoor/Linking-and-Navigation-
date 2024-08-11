"use client"
import Link from 'next/link'

export default function Homepage() {
  return (
    <>
      <div>
        <h1 style={{ backgroundColor: 'lightblue' }}>Welcome to the Homepage</h1>
        <Link href="/Namepage">
          Go to Name page
        </Link>
      </div>
    </>
  )
}

