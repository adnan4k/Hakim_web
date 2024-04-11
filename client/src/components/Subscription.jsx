import React, { useState } from "react";

function Subscription() {
    const [emailData,setEmail] = useState({
        email:''
    });
      
//   const handleChange = (e) => {
//     const { title, value } = e.target;
//     setFormData(prev => ({ ...prev, [title]: value }));

//   };

    const handleChange = (e) =>{
       const {value,title} = e.target
       setEmail(prev=>({...prev,[title]:value}))
    }
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md sm:text-center">
            <p className="mx-auto mb-8 max-w-2xl  text-black mt-10 font-semibold md:mb-12 sm:text-2xl font-Raleway dark:text-gray-400">
              Join us in journey of creating a health awareness in our
              community.
            </p>
            <form action="#">
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                <div className="relative w-full">
                  <label
                    for="email"
                    className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Enter Email
                  </label>
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input
                    className=" block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-2 border-[#00A3FF] sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-4 focus:border-[#00A3FF] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-[#00A3FF]"
                    placeholder="Enter your email"
                    type="email"
                    id="email"
                    value={emailData.email}
                    onChange={handleChange}
                    required=""
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="py-3 px-5 w-full rounded-full text-sm font-medium text-center text-white  border cursor-pointer bg-[#00A3FF] border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Subscription;
