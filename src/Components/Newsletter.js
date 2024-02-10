import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 px-4'>
      <div className=' mx-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className=' lg:col-span-2 my-4'>
          <h1 className='text-white md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Wants tips & tricks to optimize your flow?</h1>
          <p className='text-white'>sign up with our newsletter and stay up to date</p>
        </div>
        <div className='ml-4 '>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input className='py-2 rounded-md w-full text-black flex' type="email" placeholder='Enter Email' />
            <button className='text-black bg-[#00df9a] rounded-md font-medium w-[200px] ml-4 my-6 py-2'>Notify me</button>
          </div>
          <p className='text-white py-2'>We care about the protection of your data. Read our <span className='text-[#00df9a]'>Privacy Policy</span></p>
        </div>
      </div>
    </div>
  )
}

export default Newsletter