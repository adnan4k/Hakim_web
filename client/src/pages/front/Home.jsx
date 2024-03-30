import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'

function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <section className='featured flex flex-col justify-center items-center mt-5'>
             <h2 className='text-center text-5xl font-extrabold'>Feature post</h2>
             <p className='text-2xl my-5'>I want to talk about the hard stuff people wonder about but maybe are embarassed...</p>
             <p className='text-2xl my-'>I want to talk about the hard stuff are embarassed...</p>
        </section>

    </div>
  )
}

export default Home