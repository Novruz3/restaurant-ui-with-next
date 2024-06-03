import Featured from '@/components/Featured'
import Offer from '@/components/Offer'
import Slider from '@/components/Slider'
import React from 'react'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <Slider />
      <Featured />
      <Offer/>
    </div>
  )
}

export default Home