import React from 'react'
import HeroImage from '../assets/picwish.png'

const Hero = () => {
  return (
    <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
      <div className='grid md:grid-cols-2 max-w-[12240px] m-auto'>
          <div className='flex flex-col justify-center md: items-start w-full px-2 py-8'>
            <p className='text-2xl'> Unique Safety & Excellent</p>
            <h1 className='py-3 text-5xl md:text-7xl font-bold'>Security Services</h1>
            <p className='text-2xl py-3'>This is our Promise</p>
            <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
          </div>
          <div>
            <img className='w-full' src={HeroImage} alt="" />
          </div>
      </div>
      <div className='absolute flex flex-col py-8 md:min-w-[780px] bottom-[-1%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border-border-slate-300 rounded-xl text-center shadow-xl'>
      <p>Security Services</p> 
      <div className='flex justify-between flex-wrap px-4'>
        <p className='flex px-4 py-2 text-slate-500'>24/7 Armed Guard</p>
        <p className='flex px-4 py-2 text-slate-500'>High Tech Security devices</p>
        <p className='flex px-4 py-2 text-slate-500'>Dog  Guarding</p>
        <p className='flex px-4 py-2 text-slate-500'>Security Training</p>
      </div>
      </div>
    </div>
  )
}

export default Hero