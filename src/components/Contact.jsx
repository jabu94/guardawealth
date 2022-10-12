import React from 'react'
import Contactpic from '../assets/'

function Contact() {
  return (
    <div>
        <div className='grid sm:grid-cols-2 w-full px-6'>
            <div>
                <img className='' src={ContactPic} alt="" />
                
            </div>
            <div>
                <input type="text" />
            </div>


        </div>
    </div>
  )
}

export default Contact