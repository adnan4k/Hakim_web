import React from 'react'

function Podcas() {
  return (
    <div className='flex'>
      <div className='flex bg-[#C7EBFF] justify-center items-center w-full h-[400px]' >
      <div className='bg-[#C7EBFF]  w-full h-[30%]  flex flex-col items-center  z-0 '>
            <h2 className='text-[#5A5A5A] my-3 text-2xl font-semibold '>There will be future</h2>
            <h2 className='capitalize my-3 text-[#5686E1] text-5xl font-bold'>PODCASTS</h2>
            <p className='text-[#5A5A5A] my-3 text-xl font-semibold'>Available here</p>
            <button className='my-3 bg-[#01A3FFE8] py-2 text-xl rounded-3xl px-10 text-white'>Subscirbe</button>
        </div>
        <div className="bg-[#C7EBFF] w-full h-screen  z-10 rounded-full  bg-end items-end justify-end">
             <img src="/images/podcaster.png" alt="" className=' object-cover justify-end' />
        </div>
      </div>
        
    </div>
  )
}

export default Podcas