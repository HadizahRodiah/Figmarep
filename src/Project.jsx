import React from 'react'
import Rectangle1 from './assets/Rectangle1.png'
import Rectangle2 from './assets/Rectangle2.png'

const Project = () => {
  return (
    <div >
       <div className='flex flex-rows-2 flex-col md:flex-row mx-10 rounded-lg my-5'>
        <div className='flex-1'>
         <img src={Rectangle1} alt="" className='w-full rounded-lg' />
        </div>
        <div className='flex-1 flex-col rounded-lg bg-green-800'>
        <div className='px-10 md:px-20 mt-10 py-4'>
        <p className='text-sm md:text-xl mb-5 md:mb-7 text-white'>For Business owner</p>
          <h1 className='text-3xl md:text-5xl text-white mb-4 md:mb-5'>Discover Talent On Your Terms</h1>
          <p className='text-sm text-white mb-10 md:mb-20'>Find the right talent your way, with flexibility and control to meet your specific needs and goal</p>
          
          <div className='flex flex-col pt-4 md:pt-5 md:flex-row border-t border-white justify-between mt-3 md:mt-5 px-2'>
            <div className='mx-1 my-2 md:mx-5 text-xs md:text-sm text-white'><p>Discover talent for every phase of your business growth.</p></div>
            <div className='mx-1 my-2 md:mx-5 text-xs md:text-sm text-white'><p>Control when and how your business Operate</p></div>
            <div className='mx-1 my-2 md:mx-5 text-xs md:text-sm text-white'><p>Explore diverse solution to achieve your business goals</p></div>
          </div>
          <div className='mt-7 md:mt-10'>
            <button className="bg-white h-7 w-32 md:w-80 md:h-10 font-bold text-sm text-green-400 rounded-lg w-64 md:w-80">Post a Job</button>
          </div>
       
        </div>
        </div>
       </div> 
       {/*second card */}
       <div className='flex flex-rows-2 flex-col md:flex-row mx-10 rounded-lg my-20'>
        <div className='flex-1 flex-col rounded-lg bg-blue-700'>
        <div className='px-10 md:px-20 mt-10 py-5'>
        <p className='text-sm md:text-xl mb-5 md:mb-7 text-white'>For Talents</p>
          <h1 className='text-3xl md:text-5xl text-white mb-4 md:mb-5'>Explore exceptional opportunities</h1>
          <p className='text-sm text-white mb-10 md:mb-10'>Discover unique and high-quality opportunities tailored to your goals and interests.</p>

          <div className='flex flex-col pt-5 md:pt-10 md:flex-row border-t border-white justify-between mt-3 md:mt-5 px-2'>
            <div className='mx-1 my-2 md:mx-5 text-xs md:text-sm text-white'><p>Find opportunities at every stage of your freelance journey..</p></div>
            <div className='mx-1 my-2 md:mx-5 text-xs md:text-sm text-white'><p>Control when and how you work.</p></div>
            <div className='mx-1 my-2 md:mx-5 text-xs md:text-sm text-white'><p>Explore different Ways to grow and earn.</p></div>
          </div>
          <div className='mt-7 md:mt-10'>
            <button className="bg-white h-7 md:h-10 w-32 md:w-80 font-bold text-sm text-blue-700 rounded-lg w-64 md:w-80">Explore Jobs</button>
          </div>
       
        </div>
        </div>
        <div className='flex-1'>
         <img src={Rectangle2} alt="" className='w-full rounded-lg' />
        </div>
       </div>
       
    </div>
  )
}

export default Project