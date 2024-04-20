import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import  axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

function ViewAll() {
    const [data,setData] = useState([]);
  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://backend.hakimethio.et:4000/post/get-post');
        console.log(response.data[0].image);
        setData(response.data); // Assuming the response data is the array of testimonies
      } catch (error) {
        console.error("Error fetching testimonies:", error);
      }
    };

    fetchData();
  }, [])
  return (
    <div>
        <Navbar />
        <div className='grid grid-cols-3 gap-5 mx-10  my-14'>
             {data.map((item) =>(<div key={item.id} className="max bg-white flex flex-col justify-center items-center p-5 border border-[#AAAAAAAA] rounded-lg shadow-lg">
            <div key={item.id} className="flex flex-col">
            <img src={`http://backend.hakimethio.et:4000/images/${item.image}`} alt={item.title} className="mx-auto w-full rounded-2xl " />
            <h2 className="text-center text-xl font-semibold ">{item.title}</h2>
            </div>
            <p className="text-center my-5">{item.content}</p>
            <Link to='/post-detail' state={{content:item.content,image:item.image,title:item.title}}>
             <button className="px-10 py-2 bg-[#41BAFF] text-white text-[16px]  text-nowrap rounded-3xl">Read More</button>
             </Link>
            </div>))}
        </div>
        <Footer />
    </div>
  )
}

export default ViewAll