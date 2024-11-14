import React from 'react'

const Review = () => {
  return (
    <div>
        <div className='mx-10'>
            <div className='flex flex-col md:flex-row gap-5 justify-center mb-10 mt-20 pt-20'>
               <div className='bg-gray-200 md:w-1/3 rounded-lg text-center px-10 py-10'>
                 <h1 className='font-semibold text-xl'>Sarah Johnson</h1>
                 <h2 className='text-md m-1 font-semibold'>Founder of CreativeEdge Agency</h2>
                 <p className='text-sm'>Finding Talent for my projects has never been easier. The Platform provides diverse. Top Notch options tailored to my needs</p>
               </div>
               <div className='bg-gray-200 md:w-1/3 rounded-lg text-center px-10 py-10'>
                 <h1 className='font-semibold text-xl'>Micheal Brown</h1>
                 <h2 className='text-md m-1 font-semibold'>Freelance Graphic Designer</h2>
                 <p>The platform has helped me discover new opportunities that fit perfectly with my freelance goals. Highly Recommended</p>
               </div>
               <div className='bg-gray-200 md:w-1/3 rounded-lg text-center px-10 py-10'>
                 <h1 className='font-semibold text-xl'>Sarah Johnson</h1>
                 <h2 className='text-md m-1 font-semibold'>Co-Founder of Innovative Marketing Group</h2>
                 <p className='text-sm'>As a business owner the ability to control how my team works is a huge advantage. Seamless experience and great results</p>
               </div>
            </div>
        </div>
        <div>
        <div className=' bg-gray-200 rounded-lg flex flex-col justify-center text-center py-5 md:py-10 md:px-20 mx-10 my-20'>
            <h1 className='text-3xl md:text-5xl px-2 font-semibold mt-10 py-3 md:py-5'> Empower Your Business and Career</h1>
            <p className='text-xs md:text-sm px-5 md:px-20 py-5'>Unlock endless opportunities today! Whether you are a business owner looking for a top talent or a freelancer seeking the perfect gigs, our platform put you in control, join now and take you next step toward success!</p>
            <div className='flex justify-center mt-5 mb-10'>
            <button className='bg-red-800 w-32 text-xs md:text-sm md:w-80 px-2 py-2 h-10 font-bold text-white  md:h-10 rounded-lg'>Get Started Today</button>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Review