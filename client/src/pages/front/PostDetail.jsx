import React from 'react'
import Navbar from '../../components/Navbar'
import {useLocation} from "react-router-dom"
import Footer from '../../components/Footer'
function PostDetail() {
    const location = useLocation()
    const {content,title,image} = location.state || '' 
    
    return (
    <div>
        <Navbar />
        <div className='flex flex-col justify-center items-center my-10'>
            <img src={`http://backend.hakimethio.et:4000/images/${image}`} className='w object-scale-down' alt={title} />
           <h1 className='text-center my-4 text-xl font-semibold'>{title}</h1>
           <p>{content} </p>

        </div>
        <Footer />
    </div>
  )
}

export default PostDetail