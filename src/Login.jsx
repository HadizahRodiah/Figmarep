import React from 'react'
import Footer from './Footer'

const Login = () => {
  return (
    <>
    <div className='px-10 py-10 flex md:flex justify-center md:justify-center '> 
     <div className='w-80 md:w-3/4 pt-10 md:pt-20 pb-20 rounded-lg  border border-black text-black flex flex-col justify-center items-center'>
            <div className='w-48 md:w-96 flex flex-row mb-10 ml-5 mt-5 rounded-lg md:gap-20 border '>
             <div className='md:w-full text-xs md:text-sm my-1 md:my-2 mx-2 hover:bg-gray-200 hover:border-gray-400 p-2 rounded-lg'><h1>apply as employer</h1></div>
             <div className=' md:w-full text-xs md:text-sm my-1 md:my-2 mx-2 hover:bg-gray-200 border-gray-400 p-2 rounded-lg'><h1>apply as freelencer</h1></div>
            </div>
            <div className='w-5/6 flex flex-col md:flex-row item-center justify-between'>
              <div className=' flex  flex-col mt-3 md:mt-0'>
                <label className='flex align-start ml-2 md:ml-5' htmlFor="Firstname">First name</label>
                <input className='w-64 md:w-80 h-10 md:h-11 md:m-5  rounded-lg mt-1 border'></input>
              </div>
              <div className='flex  flex-col mt-3 md:mt-0'>
                <label className=' flex align-start  ml-2 md:ml-5' htmlFor="Lastname">Last name</label>
                <input className='w-64 h-10 md:h-11 md:w-80 md:m-5 md:w-80 rounded-lg mt-1 border'></input>
              </div>
            </div>
            <div className=' w-5/6 flex flex-col mt-3 md:mt-0'>
                <label className=' flex align-start  ml-2 md:ml-5' htmlFor="">Email</label>
                <input className='w-64 md:w-full h-10 md:h-11 md:m-5 rounded-lg mt-1 border'></input>
              </div>
              <div className=' w-5/6  flex flex-col mt-3 md:mt-0'>
                <label className=' flex align-start  ml-2 md:ml-5' htmlFor="">Company name</label>
                <input className=' w-64 md:w-full h-10 md:h-11 md:m-5 rounded-lg mt-1 border'></input>
              </div>
              <div className=' w-5/6 flex flex-col mt-3 md:mt-0'>
                <label className=' flex align-start  ml-2 md:ml-5' htmlFor="">Password</label>
                <input className='w-64 md:w-full h-10 md:h-11 md:m-5 rounded-lg mt-1 border'></input>
              </div>
        </div>
        </div>
        <Footer/>
    </>
  )
}

export default Login