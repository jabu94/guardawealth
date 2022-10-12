import React from 'react'

function Services() {
  return (
    <div className='w-full my-32'>
      <div className='max-w-[1240] mx-auto'>
        <div className='text-center'>
        <h2 className='text-5xl font-bold'>Trusted by developers across the world </h2>
        <p className='text-3xl py-6 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores sed odit quis accusamus dolore vero minima delectus, quasi voluptas omnis sapiente nemo harum, quae eaque sequi cumque numquam, veniam ipsum?</p>
        </div>


      <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
        <div className='border py-8 rounded-xl shadow-xl'>
           <p className='text-6xl font-bold text-purple-700'>100%</p>
            <p className='text-grey-400 mt-2'>Completion</p>
        </div>

        <div className='border py-8 rounded-xl shadow-xl'>
           <p className='text-6xl font-bold text-purple-700'>24/7</p> 
            <p className='text-grey-400 mt-2'>Completion</p>
        </div>

        <div className='border py-8 rounded-xl shadow-xl'>
           <p className='text-6xl font-bold text-purple-700'>100K</p>
            <p className='text-grey-100 mt-2'>Completion</p>
        </div>
       </div>
      

      </div>
        
    </div>
  )
}

export default Services