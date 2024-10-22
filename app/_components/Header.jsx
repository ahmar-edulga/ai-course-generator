import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-between p-5 shadow-sm'>
      <Link href={'/'}>
        {/* <Image src={'/logo.svg'} width={150} height={100}/> */}
        <h1 className="font-bold text-2xl bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">EDULGA</h1>
        </Link>
        <Link href={'/dashboard'}>
          <Button>Get Started</Button>
        </Link>
    </div>
  )
}

export default Header