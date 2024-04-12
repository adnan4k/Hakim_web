import React from 'react'

function Podcas() {
  return (
    <div className='flex mt-[10%]'>
      <div className='flex bg-[#C7EBFF] my-auto justify-center items-center w-full sm:h-[400px]' >
      <div className='bg-[#C7EBFF] my-auto  w-full sm:h-[30%]  flex  flex-col justify-center items-center  z-0 '>
            <h2 className='text-[#5A5A5A] my-3 text-xl sm:text-2xl font-semibold '>There will be future</h2>
            <h2 className='capitalize my-3 text-[#5686E1] text-3xl sm:text-5xl font-bold'>PODCASTS</h2>
            <p className='text-[#5A5A5A] my-3 text-xl font-semibold'>Available here</p>
            <button className='my-3 bg-[#01A3FFE8] py-2 text-xl rounded-3xl px-10 text-white'>Subscirbe</button>
        </div>
        <div className="bg-[#C7EBFF] -py-32 w-full  sm:h-screen  flex z-0 rounded-full  bg-end items-end justify-end">
             <img src="/images/podcaster.png" alt="" className='justif h-full' />
        </div>
      </div>
        
    </div>
  )
}

export default Podcas