import { menu } from '@/data/data'
import Link from 'next/link'
import React from 'react'

const Menu = () => {
  return (
    <div className='p-4 flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] md:flex-row lg:px-20 xl:px-40 items-center'>
      {
        menu.map(cat =>
          <Link href={`menu/${cat.slug}`} key={cat.id} style={{backgroundImage: `url(${cat.img})`}} className='h-1/3 w-full bg-cover p-8'>
            <div className={`text-${cat.color} w-1/2`}>
              <h1 className='uppercase text-xl font-bold'>{cat.title}</h1>
              <p className='text-sm my-2'>{cat.desc}</p>
              <button className={`hidden lg:block bg-${cat.color} text-${cat.color === "black" ? "white" : "red-500"} rounded-md py-2 px-4`}>Explore</button>
            </div>
          </Link>
        )
      }
    </div>
  )
}

export default Menu