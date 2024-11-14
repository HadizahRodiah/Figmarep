import React from 'react'
import Logo from './assets/Logo.png'
const Nav = () => {
  return (
    <nav className='text-black border border-black px-8 md:px-16 lg:px-24 w-screen' >
        <div className=' mt-2 py-2 flex justify-center md:justify-between item-center'>
            <div>
                <img src={Logo} alt="" />
            </div>
            <div className='flex space-x-2 md:space-x-6 flex-row m-2 text-sm font-bold md:text-xl flex-shrink text-black justify-between '>
             <a href="">Home</a>
             <a href="">Works</a>
             <a href="">job</a>
             <a href="">About </a>
             <a href="">Contact </a>
            </div>
            <div className='flex flex-row flex-shrink text-black justify-between gap-2 '>
             <a href="" className="text-sm m-2 md:text-xl font-bold">Login</a>
             <a href="" className='bg-red-900 py-3 px-2 text-xs md:text-sm rounded-lg font-bold text-white'>SignUP</a>
            </div>
        </div>
    </nav>
  )
}

export default Nav