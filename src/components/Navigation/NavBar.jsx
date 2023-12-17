import React from 'react'
import reactimg from '../../assets/react.svg'

export default function NavBar() {
  return (
    <div className='bg-primary h-8 flex items-center justify-center lg:justify-start'>
        <div className='flex lg:mx-4 lg:flex-row-reverse'>
            <h1 className='font-bold font-lg'>Smartgrow</h1>
            <img className='w-6 mx-0.5' src={reactimg} alt=""/>
        </div>
    </div>
  )
}
