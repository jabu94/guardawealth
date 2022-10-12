import React from 'react'
import Support from '../assets/hero3.jpg'

function About() {
  return (
    <div className='w-full  mt-24'>

      <div className='w-full h-[700px] bg-gray-900/90 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={Support} alt="" />
      </div>

      <div className='max-w-[1240px] mx-auto text-white relative'>
        
        <div className='px-4 py-12'>
          <h2 className=' text-3xl pt-8 text-slate-300 uppercase text-center'>Services</h2>
           <h3 className='text-5xl font-bold py-6 text-center'> Finding the right partners</h3>
           <p className='text -center py-4 text-slate-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptatibus ipsam rerum odio itaque et impedit nam officia facere sapiente, quam reiciendis distinctio, quis unde. Asperiores blanditiis facilis deleniti quaerat!</p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
          <div className='bg-white rounded-xl shadow-2xl'>
            <div className='p-8'>
              <h3 className='font-bold text-2xl my-6'>Guarding Service</h3>
              <p p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dicta recusandae, quia beatae voluptate natus aperiam non sit illum nobis soluta reiciendis itaque commodi dolore! Temporibus porro eveniet officia nobis!</p>
            </div>
            <div className='bg-slate-100 pl-8 py-4 text-purple-600'>
              <p className='flex items-center text-purple-600'>What more</p>
            </div>
          </div>

          <div className='bg-white rounded-xl shadow-2xl'>
            <div className='p-8'>
              <h3 className='font-bold text-2xl my-6'>Guarding Service</h3>
              <p p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dicta recusandae, quia beatae voluptate natus aperiam non sit illum nobis soluta reiciendis itaque commodi dolore! Temporibus porro eveniet officia nobis!</p>
            </div>
            <div className='bg-slate-100 pl-8 py-4 text-purple-600'>
              <p className='flex items-center text-purple-600'>What more</p>
            </div>
          </div>

          <div className='bg-white rounded-xl shadow-2xl'>
            <div className='p-8'>
              <h3 className='font-bold text-2xl my-6'>Guarding Service</h3>
              <p p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dicta recusandae, quia beatae voluptate natus aperiam non sit illum nobis soluta reiciendis itaque commodi dolore! Temporibus porro eveniet officia nobis!</p>
            </div>
            <div className='bg-slate-100 pl-8 py-4 text-purple-600'>
              <p className='flex items-center text-purple-600'>What more</p>
            </div>
          </div>


        </div>

        
        

      </div>

    </div>
  )
}

export default About