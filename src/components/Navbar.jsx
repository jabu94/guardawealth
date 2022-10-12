import React  from 'react'
import logo from '../assets/logo2.png'


const Navbar = () => {



  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
           <div className='flex items-center'>
            <img src={logo} alt="/"  className='rounded-full p-2 w-16'/>
             <h1 className='text-1.5xl text-black mr-4 sm:text-1.9xl'><b>Guarda</b>Wealth.</h1>
             <ul className=' hidden md:flex items-left'>
                <li>Home</li>
                <li>About</li>
                <li>Support</li>
                <li>Platforms</li>
                <li>Pricing</li>
             </ul>
           </div>
      <div className=' flex pr-4 md:hidden' >
        
      </div>
      <div className='hidden md:flex pr-4'>
        <button className='px-8 py-3 '>Sign In</button>
      </div>

      </div>
      
           <ul className='absolute bg-zinc-200 w-xl px-8 hidden ' >
                <li className='border-b-2 border-zinc-300 w-full'>Home</li>
                <li className='border-b-2 border-zinc-300 w-full'>About</li>
                <li className='border-b-2 border-zinc-300 w-full'>Support</li>
                <li className='border-b-2 border-zinc-300 w-full'>Platforms</li>
                <li className='border-b-2 border-zinc-300 w-full'>Pricing</li>
                <li> <button className='px-8 py-3 br-8 w-full'>Sign In</button></li>
           </ul>

           
      
        
       
    </div>
  )
}

export default Navbar