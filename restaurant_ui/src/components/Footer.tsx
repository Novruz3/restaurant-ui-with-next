import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='h-12 md:h-12 flex p-4 lg:p-20 xl:p-40 justify-between items-center text-red-500'>
      <Link href="/" className='font-bold'>MASSIMO</Link>
      <p>ALL RIGHTS RESERVED</p>
    </div>
  )
}

export default Footer