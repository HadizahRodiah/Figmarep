import React from 'react'
import { Facebook, Instagram, Spotify, TwitterX, Youtube } from 'react-bootstrap-icons'

const Footer2 = () => {
  return (
    <div className='bg-black text-white'>
        <div className=' bg-black gap-10 text-white flex flex-col md:flex-row'>
            <div className='flex flex-col mx-10  mt-5 md:m-20'>
             <h1>Quick Links</h1>
             <a href="" className='text-xs md:text-sm m-1'>How to hire</a>
             <a href="" className='text-xs md:text-sm m-1'>How to find Work</a>
             <a href="" className='text-xs md:text-sm m-1'>Talent MarketPlace</a>
             <a href="" className='text-xs md:text-sm m-1'>Post a Job</a>
            </div>
            <div className='flex flex-col mx-10 mt-2  md:m-20'>
             <h1>Resources</h1>
             <a href="" className='text-xs md:text-sm m-1'>Support Center</a>
             <a href="" className='text-xs md:text-sm m-1'>Linkr Reviews</a>
             <a href="" className='text-xs md:text-sm m-1'>Blog</a>
             <a href="" className='text-xs md:text-sm m-1'>Community</a>
             <a href="" className='text-xs md:text-sm m-1'>Affiliate Programme</a>
            </div>
            <div className='flex flex-col mx-10 my-2 md:m-20'>
             <h1>Company</h1>
             <a href="" className='text-xs md:text-sm m-1'>About Us</a>
             <a href="" className='text-xs md:text-sm m-1'>Careers</a>
             <a href="" className='text-xs md:text-sm m-1'>Contact Us</a>
             <a href="" className='text-xs md:text-sm m-1'>Partners</a>
            </div>
        </div>
        <div className='flex flex-row mx-10  md:mx-20 gap-2 mb-5'>
            <span className='text-xs mt-2'>Follow us</span>
            <div className='flex flex-row gap-2 mt-2'>
            <Facebook width={15} height={15}/>
            <Instagram width={15} height={15}/>
            <Youtube width={15} height={15}/>
            <TwitterX width={15} height={15}/>
            <Spotify width={15} height={15}/>
            </div>
        </div>
        <div className='flex flex-col md:flex-row border-t border-white gap-2 md:gap-10 py-10 px-2 md:px-20 '>
         <p className='md:mr-10 text-xs md:text-sm mx-10 md:mx-5'>@ 2024 Linkr TalentPlace</p>
         <p className='mx-10 md:ml-5 text-xs'>Term Of Service</p>
         <p className='mx-10 md:mx-5 text-xs md:text-sm'>Privacy Policy</p>
         <p className='mx-10 md:mx-5 text-xs md:text-sm'>FAQs</p>

        </div>
    </div>
  )
}

export default Footer2