import Image from 'next/image'
import React from 'react'
import CountDown from './CountDown'

const Offer = () => {
  return (
    <div className='bg-black flex flex-col md:flex-row h-screen md:justify-between md:bg-[url(/offerBg.png)] md:h-[70vh]'>
      <div className='flex-1 flex flex-col justify-center items-center text-center p-6 gap-8 text-white'>
        <h1 className='text-5xl lg:6xl font-bold'>Delicious Burger & French Fry</h1>
        <p className='xl:text-xl'>Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.</p>
        <CountDown/>
        <button className='bg-red-500 p-3 rounded-md py-3 px-6'>
          Order Now
        </button>
      </div >
      <div className='flex-1 w-full relative'>
        <Image src="/offerProduct.png" alt='' fill className='w-full h-50vh object-contain'/>
      </div>
    </div>
  )
}

export default Offer