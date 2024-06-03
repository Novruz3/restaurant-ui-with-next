import { pizzas } from '@/data/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryPage = () => {
  return (
    <div className='flex flex-wrap text-red-500'>
      {pizzas.map((item) =>
        <Link href={`/product/${item.id}`} className='w-full flex flex-col group odd:bg-fuchsia-50 justify-between h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4'>
          {item.img && (
            <div className='relative h-[80%]'>
              <Image src={item.img} alt={ item.title} fill className='object-contain'/>
            </div>
          )
          }
          <div className='flex items-center justify-between font-bold '>
            <h1 className='text-2xl'>{item.title}</h1>
            <h2 className='text-base group-hover:hidden'>${ item.price}</h2>
            <button className='bg-red-500 hidden group-hover:block text-white p-2 rounded-md uppercase'>Add to Cart</button>
            </div>
      </Link>
      )}
    </div>
  )
}

export default CategoryPage