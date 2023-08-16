import React from 'react'
import Delivery from './img/delivery.png'
import HeroBg from './img/heroBg.png'



const HomeContainer = () => {
  return (
    <section id='home' className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full'>
    <div className='py-2 flex-1 flex flex-col items-start justify-center gap-6'>
      <div className='flex items-center gap-2 justify-center bg-orange-100 px-2 py-1 rounded-full'> 
        <p className='text-base text-orange-500 font-semibold'> Bike Delivery</p>
        <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
        <img src={Delivery} className='w-full h-full object-contain' alt='delivery'/>
        </div>
        </div>
        <p className='text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor'>The Fastest Delivery in <span className='text-orange-600 text-[3rem] lg:text-[5rem]'>Your City</span></p>
        <p className='text-base text-textColor text-center md:text-left md:w-[80%]'> FlashFood offers you the fastest and efficient delivery of your favourite food items from the restaurants from your city, TRY ORDERING NOW!</p>
        <button type='button' className='bg-gradient-to-br  from-orange-400  to-orange-500  w-full md:w-auto p-4 px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100'>Order Now</button>
    </div>

    <div className='py-2 relative flex-1 flex items-center'>
        <img src={HeroBg} className='ml-auto h-620 w-full lg:h-650 lg:w-auto' alt='hero-bg'/>

            
            {/* <div className='w-full h-full absolute top- left-0 flex items-center justify-center py-4 gap-4 flex-wrap'>
                <div className='lg:w-190  p-8 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg '>
                    <img src={I1} className='w-35 -mt-20' alt='I1'/>
                    <p className='text-base font-semibold text-textColor flex items-center justify-center mt-3'>Chocolate</p>
                    <p className='text-sm font-semibold text-red-600 flex items-center justify-center'>$ 2.5</p>
                </div>
                <div className='lg:w-190  p-8 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg'>
                    <img src={F1} className='w-35 -mt-20' alt='F1'/>
                    <p className='text-base font-semibold text-textColor flex items-center justify-center mt-3'>Strawberries</p>
                    <p className='text-sm font-semibold text-red-600 flex items-center justify-center'>$ 3.5</p>
                </div>
                <div className='lg:w-190  p-8 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg'>
                    <img src={C3} className='w-35 -mt-20' alt='c3'/>
                    <p className='text-base font-semibold text-textColor flex items-center justify-center mt-3'>Chicken Kebab</p>
                    <p className='text-sm font-semibold text-red-600 flex items-center justify-center'>$ 6.25</p>
                </div>
                <div className='lg:w-190  p-8 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg'>
                    <img src={Fi1} className='w-35 -mt-20' alt='Fi1'/>
                    <p className='text-base font-semibold text-textColor flex items-center justify-center mt-3'>Fish Kebab</p>
                    <p className='text-sm font-semibold text-red-600 flex items-center justify-center'>$ 7.25</p>
                </div>

            </div> */}
        </div>
  </section>
  )
}

export default HomeContainer