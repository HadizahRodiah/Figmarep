import React from 'react'
import Read from './assets/Read.png'
import  Oppo from './assets/Oppo.png'
import Bank1 from './assets/Bank1.png'
import Bank2 from './assets/Bank2.png'
import Service from './Service'
import Nav from './Nav'
import Project from './Project'
import Review from './Review'
import Footer2 from './Footer2'

const Home = () => {
  return (
    <div>
      <Nav/>
        <div className='flex flex-rows-2  flex-col md:flex-row justify-between m-10'>
         <div className='flex-1 p-10 flex-col '>
           <div className='px-10  py-10 '>
            <h1 className='text-4xl md:text-5xl font-bold text-black py-3'>Global Gigs For <br className='hidden md:inline'/> African Freelancers</h1>
            <p className='text-xs md:text-sm'>Connecting African Tech Talents With Global Opportunities.</p>
           </div>
           <div className='flex flex-row px-10  gap-2 md:gap-5'>
            <a href="" className='bg-transparent border border-red-900 rounded-lg text-black text-sm md:text-xl p-2'>Browse Talent</a>
            <a href="" className='bg-red-900 rounded-lg text-white text-bold text-sm md:text-xl p-2'>Post A job</a>
           </div>
           <div className='flex flex-col py-3 px-10'>
            <p className='semi-bold mb-2'>Trusted by</p>
            <div className='flex gap-2 flex-row'>
                <img src={Oppo} alt="" className='h-4' />
                <img src={Bank1} alt="" className='h-6'/>
                <img src={Bank2} alt="" className='h-6' />
            </div>

           </div>

         </div>
         <div className='flex-1 '>
           <img src={Read} alt="" className='md:m-10 md:w-96 md:h-96' />
         </div>
        </div>
        <Service/>
        <Project/>
        <Review/>
        <Footer2/>
    </div>
  )
}

export default Home