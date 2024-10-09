import React from 'react'
import { useState } from 'react';
import CustomInput from '../CustomInput/CustomInput'
function Contact() {
  let [selectedSubject, setSelectedSubject] = useState('General Inquiry');
  let [message, setMessage] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault();
    console.log('Submitted:', { subject: selectedSubject, message });
    // Here you would typically send the data to a server
  };
  const subjects = ['General Inquiry', 'Report Fraud', 'Bugs', 'Just rage'];

  return (
    <>
    <main>
      <div className='flex flex-wrap justify-center items-center m-8'>
        <div className='flex flex-col justify-center items-center h-20 gap-5 '>
          <h1 className='
            text-5xl text-yellow-400 font-bold'>Contact Us</h1>
            <p>Any Question or remarks? Just write us a message!</p>
        </div>
      </div>
      <div className='h-max flex justify-center my-[60px]'>
        <div className='bg-[#FFFFFF] w-[1197px] h-[667px] shadow-xl rounded-lg flex '>
          <div className='bg-[#011C2B] text-white w-[491px] m-2 rounded-xl'>
            <div className='relative overflow-hidden p-12 flex flex-col h-full justify-between '>
            <div className='flex flex-col gap-3 text-lg'>
              <h1 className='font-semibold font-sans text-3xl '>Contact Information</h1>
              <p className='font-light  '>Say something to start a live chat!</p>
            </div>
            <div className='flex flex-col gap-16 text-lg'>
              <p className='flex  items-center gap-5'><span><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#FFFFFF"><path d="M771.33-485.33q-3.33-119.89-86.69-203.2-83.36-83.32-203.31-86.66V-842q73.67 1.33 137.84 29.83 64.16 28.5 112.33 76.67t76.67 112.33Q836.67-559 838-485.33h-66.67Zm-166.66 0q-3.34-50-38.34-84.67t-85-38v-66.67q77.67 3.34 132.17 57.5Q668-563 671.33-485.33h-66.66ZM796-120q-119 0-240-55.5T333-333Q231-435 175.5-556T120-796q0-18.67 12.67-31.33Q145.33-840 164-840h147.33q14 0 24.34 9.83Q346-820.33 349.33-806L376-675.33q2 14.66-.67 26Q372.67-638 364.67-630l-99 100q24 41.67 52.5 78.5T381-381.33q35 35.66 73.67 65.5Q493.33-286 536-262.67l94.67-96.66q9.66-10.34 23.16-14.5 13.5-4.17 26.84-2.17L806-349.33q14.67 4 24.33 15.5Q840-322.33 840-308v144q0 18.67-12.67 31.33Q814.67-120 796-120Z"/></svg></span>+1012 3456</p>
              <p className='flex  items-center gap-5'><span><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#FFFFFF"><path d="M146.67-160q-27 0-46.84-19.83Q80-199.67 80-226.67v-506.66q0-27 19.83-46.84Q119.67-800 146.67-800h666.66q27 0 46.84 19.83Q880-760.33 880-733.33v506.66q0 27-19.83 46.84Q840.33-160 813.33-160H146.67ZM480-454.67 813.33-670v-63.33L480-521.33l-333.33-212V-670L480-454.67Z"/></svg></span>demo@gmail.com</p>
              <p className='flex  items-center gap-5'><span><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#FFFFFF"><path d="M480.06-486.67q30.27 0 51.77-21.56 21.5-21.55 21.5-51.83 0-30.27-21.56-51.77-21.55-21.5-51.83-21.5-30.27 0-51.77 21.56-21.5 21.55-21.5 51.83 0 30.27 21.56 51.77 21.55 21.5 51.83 21.5ZM480-80Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"/></svg></span>132 Dartmouth Street Boston, Massachusetts 02156 United States</p>
            </div>
            <div className='flex gap-5'>
            <button className="group bg-yellow-400 rounded-full p-1 hover:bg-white text-black">
              <svg
                className="w-6 h-6 transition-colors duration-300 group-hover:fill-black fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                fill="currentColor"
              >
                <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
              </svg>
            </button>
              <button className="group bg-yellow-400 rounded-full p-1 hover:bg-white text-black">
                <svg className="w-6 h-6 transition-colors duration-300 group-hover:fill-black fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                fill="currentColor">
                  <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
              </svg></button>
              <button className="group bg-yellow-400 rounded-full p-1 hover:bg-white text-black">
              <svg
                  className="w-6 h-6 transition-colors duration-300 group-hover:fill-black fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 30 30"
                  fill="currentColor">
                  <path d="M25.12,6.946c-2.424-1.948-6.257-2.278-6.419-2.292c-0.256-0.022-0.499,0.123-0.604,0.357 c-0.004,0.008-0.218,0.629-0.425,1.228c2.817,0.493,4.731,1.587,4.833,1.647c0.478,0.278,0.638,0.891,0.359,1.368 C22.679,9.572,22.344,9.75,22,9.75c-0.171,0-0.343-0.043-0.501-0.135C21.471,9.598,18.663,8,15.002,8 C11.34,8,8.531,9.599,8.503,9.615C8.026,9.892,7.414,9.729,7.137,9.251C6.86,8.775,7.021,8.164,7.497,7.886 c0.102-0.06,2.023-1.158,4.848-1.65c-0.218-0.606-0.438-1.217-0.442-1.225c-0.105-0.235-0.348-0.383-0.604-0.357 c-0.162,0.013-3.995,0.343-6.451,2.318C3.564,8.158,1,15.092,1,21.087c0,0.106,0.027,0.209,0.08,0.301 c1.771,3.11,6.599,3.924,7.699,3.959c0.007,0.001,0.013,0.001,0.019,0.001c0.194,0,0.377-0.093,0.492-0.25l1.19-1.612 c-2.61-0.629-3.99-1.618-4.073-1.679c-0.444-0.327-0.54-0.953-0.213-1.398c0.326-0.443,0.95-0.541,1.394-0.216 C7.625,20.217,10.172,22,15,22c4.847,0,7.387-1.79,7.412-1.808c0.444-0.322,1.07-0.225,1.395,0.221 c0.324,0.444,0.23,1.066-0.212,1.392c-0.083,0.061-1.456,1.048-4.06,1.677l1.175,1.615c0.115,0.158,0.298,0.25,0.492,0.25 c0.007,0,0.013,0,0.019-0.001c1.101-0.035,5.929-0.849,7.699-3.959c0.053-0.092,0.08-0.195,0.08-0.301 C29,15.092,26.436,8.158,25.12,6.946z M11,19c-1.105,0-2-1.119-2-2.5S9.895,14,11,14s2,1.119,2,2.5S12.105,19,11,19z M19,19 c-1.105,0-2-1.119-2-2.5s0.895-2.5,2-2.5s2,1.119,2,2.5S20.105,19,19,19z"></path>
              </svg>
              </button>
            </div>
            <div className='absolute w-[300px] bottom-[-51px] right-[-60px]'>
              <img src="./Images/circle.png" alt="" />
            </div>
            </div>
            
          </div>
          <div>
          <div className="container w-[700px]  p-6 relative h-[667px]">
      <form onClick={handleSubmit}>
        <div className="m-10  grid grid-cols-1 md:grid-cols-2 gap-6">
          <CustomInput
            label="First Name"
            type="text"
            placeholder="Enter your first name"
          />
          <CustomInput
            label="Last Name"
            type="text"
            placeholder="Enter your last name"
          />
          <CustomInput
            label="Email"
            type="email"
            placeholder="Enter your email"
          />
          <CustomInput
            label="Phone Number"
            type="text"
            placeholder="Enter your email"
          
          />
        </div>
        
        <div className="m-10">
          <h2 className="text-xl font-semibold mb-4">Select Subject?</h2>
          <div className="flex flex-wrap gap-4">
            {subjects.map((subject, index) => (
              <label key={index} className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-blue-600"
                  name="subject"
                  value={subject}
                  checked={selectedSubject === subject}
                  onChange={() => setSelectedSubject(subject)}
                />
                <span className="ml-2">{subject}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div className="m-10">
        <CustomInput
            label="Message"
            type="text"
            placeholder="Enter your message"
          />
        </div>
        
        <div className="flex justify-end">
          <button
            type="submit"
            className=" justify-center text-lg w-52 h-14 px-6 py-2 bg-[#011C2A] text-white rounded-lg hover:bg-yellow-400  hover:text-[#011C2A] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center"
          >
            Send Message
            {/* <Send className="ml-2 h-4 w-4" /> */}
          </button>
        </div>
        <div className='absolute bottom-[-40px] right-[140px]'>
          <img src="./Images/arrow.png" alt="arrow" />
        </div>
      </form>
    </div>
          </div>
        </div>      
      </div>
    </main>
    </>
  )
}

export default Contact