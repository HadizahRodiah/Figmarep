import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='bg-black w-full mt-20 h-30'>
            <div className='flex flex-col md:justify-center text-white md:flex-row border-t border-white gap-2 md:gap-10 py-10 px-2 md:px-20 '>
         <p className='md:mr-10 text-xs md:text-sm mx-10 md:mx-5'>@ 2024 Linkr TalentPlace</p>
         <p className='mx-10 md:ml-5 text-xs'>Term Of Service</p>
         <p className='mx-10 md:mx-5 text-xs md:text-sm'>Privacy Policy</p>
         <p className='mx-10 md:mx-5 text-xs md:text-sm'>FAQs</p>

        </div>
        </div>
    </div>
  )
}

export default Footer