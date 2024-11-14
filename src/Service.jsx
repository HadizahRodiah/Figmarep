import React from 'react'
import Brief from './assets/briefcase.png'
import World from './assets/world.png'
import { StarFill } from 'react-bootstrap-icons'
import User1 from './assets/user-pen.png'
import User2 from './assets/Vector.png'
import User3 from './assets/Vector1.png'

const Service = () => {
  return (
    <div>
        <div className='flex  flex-col md:flex-row gap-2 mt-10 m-5'>
         <div className=' border px-10 py-10 m-5 rounded-lg '>
            <div className='flex m-5 md:m-10 mb-2 justify-center'>
            <img src={Brief} alt=""  />
            </div>
            <h1 className='text-black font-bold text-1xl md:text-2xl px-5 py-3 '>Effortlessly Link With Premier Talent</h1>
            <p className='text-xs md:text-sm'> Discover and connect with African Finest freelance professionals in just a few clicks. Our Streamlined platform make finding the right talent easier than ever.</p>
         </div>
         <div className='border px-10 py-10 m-5 rounded-lg'>
         <div className='flex m-5 md:m-10 mb-2 justify-center'>
            <img src={World} alt=""  />
            </div>
            <h1 className='text-black font-bold text-1xl md:text-2xl px-5 py-3 '>Post A Job And Secure Top Talent</h1>
            <p className='text-xs md:text-sm'>Simply post Your Job and our Platform will match you with Top African freelancers who have the skills you need. Gwt the right Talent quickly and efficiently</p>
         </div>
         <div className='border px-10 py-10 m-5 rounded-lg'>
         <div className='flex m-5 md:m-10 mb-2 justify-center'>
            <img src={Brief} alt=""  />
            </div>
            <h1 className='text-black font-bold text-1xl md:text-2xl px-5 py-3 '>Affordable Access To Top Talent</h1>
            <p className='text-xs md:text-sm'>Gain access to high quality freelancers at competitive rates, helping you achieve your project goals without breaking the bank</p>
         </div>
        </div>
        <div className='flex flex-col  gap-2 mt-10 m-5'>
         <div className='flex justify-center '>
         <h1 className='text-2xl text-black font-bold'>Get Started in 3 Easy Steps</h1>
         </div>
         <div className='flex flex-col md:flex-row'> 
            <div className='border flex flex-row rounded-lg bg-gray-200  px-10 py-10 m-5 '>
            <img src={User1} alt="A" className='h-7 mt-5' /> 
               <div className='flex flex-col'><h1 className="font-bold text-xl md:text-2xl px-5 py-3">Sign Up</h1>
               <p className='px-6 text-xs md:text-sm'>Create Your account in minutes and unlock a world of top african freelance talent. Its fast, simple and free to join.</p>
               </div>
            </div>
            <div className='border flex flex-row rounded-lg bg-gray-200  px-10 py-10 m-5'>
            <img src={User2} alt="A" className='h-7 mt-5' /> 
               <div className='flex flex-col'><h1 className="font-bold text-xl md:text-2xl px-5 py-3">Browse/Post a job</h1>
               <p className='px-6 text-xs md:text-sm'>Explore our diverse talent pool or post your job to attract the best freelancers.Whether you are looking or posting. its seamless and Straightforward. </p>
               </div>
               
            </div>
            <div className='border flex flex-row rounded-lg bg-gray-200  px-10 py-10 m-5 '>
            <img src={User3} alt="A" className='h-7 mt-5' /> 
                <div className='flex flex-col'><h1 className="font-bold text-xl md:text-2xl px-5 py-3">Connect & Collaborate</h1>
                <p className='px-6 text-xs md:text-sm'>Choose the right freelancer and start collaborating on your project. Our platform facilitates smooth communication and project management for successful outcomes.</p>           
                </div>
            </div>

         </div>

        </div>
        <div className='flex flex-col mt-10 mx-10 justify-center '>
         <div className='flex flex-start flex-col my-3'>
            <h1 className='font-bold text-2xl'>Browse Talent By Category</h1>
            <p className=' text-sm'>Seeking Work explore jon listing</p>
         </div>
           <div className='flex flex-col md:flex-row gap-2 mt-5 mb-2'>
           <div className='bg-gray-200 w-64 md:w-80 rounded-lg p-5'>
               <h1 className='text-xl  text-black text-center'>Development & It</h1>
               <div className=' p-5 flex flex-row justify-between'>
                  <StarFill width={15} height={15}/>
                  <p className='text-xs'>1000 skills</p>
               </div>
            </div>
            <div className='bg-gray-200 w-64 md:w-80 rounded-lg p-5'>
               <h1 className='text-xl text-black text-center'>AI service</h1>
               <div className=' p-5 flex flex-row justify-between'>
                  <div className='flex flex-row text-xs'><StarFill width={15} height={15} className='mb-2'/><h4 className='mx-1'>4.8/5</h4></div>
                  <p className='text-xs'>1000 skills</p>
               </div>
            </div>
            <div className='bg-gray-200 w-64 md:w-80 rounded-lg p-5'>
               <h1 className='text-xl  text-black text-center'>Design & Creative</h1>
               <div className=' p-5 flex flex-row justify-between'>
               <div className='flex flex-row text-xs'><StarFill width={15} height={15} className='mb-2'/><h4 className='mx-1'>4.8/5</h4></div>
                  <p className='text-xs'>1000 skills</p>
               </div>
            </div>
            <div className='bg-gray-200 w-64 md:w-80 rounded-lg p-5'>
               <h1 className='text-xl  text-black text-center'>Sales & Marketing</h1>
               <div className=' p-5 flex flex-row justify-between'>
               <div className='flex flex-row text-xs'><StarFill width={15} height={15} className='mb-2'/><h4 className='mx-1'>4.8/5</h4></div>
                  <p className='text-xs'>1000 skills</p>
               </div>
            </div>

           </div>
            
            <div className='flex flex-col md:flex-row gap-2 md:mt-5 mb-2 justify-center'>
            <div className='bg-gray-200 w-64 md:w-80 rounded-lg p-5'>
               <h1 className='text-xl  text-black text-center'>Writing & Translation</h1>
               <div className=' p-5 flex flex-row justify-between'>
               <div className='flex flex-row text-xs'><StarFill width={15} height={15} className='mb-2'/><h4 className='mx-1'>4.8/5</h4></div>
                  <p className='text-xs'>1000 skills</p>
               </div>
            </div>
            <div className='bg-gray-200 w-64 md:w-80 rounded-lg p-5'>
               <h1 className='text-xl text-black text-center'>Admin & Customer Support</h1>
               <div className=' p-5 flex flex-row justify-between'>
               <div className='flex flex-row text-xs'><StarFill width={15} height={15} className='mb-2'/><h4 className='mx-1'>4.8/5</h4></div>
                  <p className='text-xs'>1000 skills</p>
               </div>
            </div>
            <div className='bg-gray-200 w-64 md:w-80 rounded-lg p-5'>
               <h1 className='text-xl text-black text-center'>Finance & Accounting</h1>
               <div className=' p-5 flex flex-row justify-between'>
               <div className='flex flex-row text-xs'><StarFill width={15} height={15} className='mb-2'/><h4 className='mx-1'>4.8/5</h4></div>
                  <p className='text-xs'>1000 skills</p>
               </div>
            </div>
            <div className='bg-gray-200 w-64 md:w-80 rounded-lg p-5'>
               <h1 className='text-xl text-black text-center'>Engineering & Architecture</h1>
               <div className=' p-5 flex flex-row justify-between'>
               <div className='flex flex-row text-xs'><StarFill width={15} height={15} className='mb-2'/><h4 className='mx-1'>4.8/5</h4></div>
                  <p className='text-xs'>1000 skills</p>
               </div>
            </div>
            </div>
            <div>
            </div>
         </div>
        </div>
   
  )
}

export default Service