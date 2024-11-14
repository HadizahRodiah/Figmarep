import React from 'react'
import Google from './assets/Google.png'
import Apple from './assets/Apple.png'

const Signin = () => {
  return (
    <div className=' flex justify-center'>
        <div className='w-80 md:w-96 px-5 flex flex-col mb-20 mt-20 px-10 pt-10 justify-center items-center border rounded-lg'>
            <h1 className='text-semibold text-lg m-7 md:m-10'>Login to Linkr</h1>
            <form action=" ">
              <div className=' flex flex-col'>
                <label className='flex align-start ml-5' htmlFor="">Email</label>
                <input className='w-64 md:w-80 h-11 m-5  rounded-lg mt-1 border'></input>
              </div>
              <div className=' flex  flex-col'>
                <label className='flex align-start ml-5' htmlFor="">Password</label>
                <input className='w-64 md:w-80 h-11 m-5  rounded-lg mt-1 border'></input>
              </div>
              <div className="flex flex-row justify-between mx-5 md:mx-10">
               <div className='flex flex-row'>
                 <input type="checkbox" />
                 <label className='text-xs mx-2'>Keep me logged in</label>
               </div>
               <div>
                  <h4 className='text-red-600 text-xs'> Forgot Password?</h4>
               </div>
              </div>
              <button className='w-64 md:w-80 m-5 bg-red-900 mt-5 h-10 rounded-lg text-white'>Login</button>
            </form>
            <div className='m-5 justify-center border-t border-black'>
                <p className='w-64 text-center'>or</p>
            </div>
            <div className='flex flex-row gap-5px justify-between'>
                <div className='bg-blue-400 mr-2 w-2/3 md:w-1/2 rounded-lg flex flex-row'>
                 <img src={Google} alt="" className="h-7 mx-1 mt-3 w-7" />
                 <p className='text-sm m-1'>Continue with google</p>
                </div>
                <div className='bg-gray-200 ml-2 w-2/3  md:w-1/2 rounded-lg flex flex-row'>
                 <img src={Apple} alt="" className="h-7 mx-1 mt-3 w-7"  />
                 <p className='text-sm m-1'>Continue with Apple</p>
                </div>
            </div>
            <h1 className=' flex text-center text-xs mt-5 mb-10'>Don't have an account? <span className='ml-1 text-2xs text-red-700'>SignUp</span></h1>
        </div>
    </div>
  )
}

export default Signin