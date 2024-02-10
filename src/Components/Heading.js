import React from 'react'
import { ReactTyped,Typed } from "react-typed";
// import { Typed } from 'react-typed'

const Heading = () => {
  return (
    <div>
        <div className='max-w-[800px] flex flex-col text-center justify-center mx-auto h-screen'>
            <div className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</div>
            <h1 className='text-white md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
            <div className='flex justify-center items-center'>
                <p className='text-white md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast,flexible financing for</p>
                <ReactTyped 
                 className='text-white md:text-5xl sm:text-4xl text-xl font-bold pl-2 md:pl-4'
                strings={['BTB','BTC','SASS']} 
                typeSpeed={120} 
                backSpeed={140} 
                loop />
            </div>
            <p className=' md:text-2xl text-xl font-bold text-gray-500'>Monitor you data analytics to increase revenue for BTB, BTC,SASS platforms.</p>
            <button className='bg-[#00df9a] w-[200px] font-medium mx-auto my-4 py-4 rounded-md'>Get Started</button>
        </div>
    </div>
  )
}

export default Heading