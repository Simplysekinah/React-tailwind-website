import React from 'react'
import laptop from'../Assets/images.jpg'

const Analytics = () => {
  return (
    <div className=' bg-white w-full py-16 px-4'>
        <div className=' mx-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className=' w-[500px] mx-auto my-4' src={laptop} alt="" />
            <div className='flex flex-col justify-center'>
                <h1 className='text-[#00df9a] font-bold py-4'>DATA ANALYTICS DASHBOARD</h1>
                <p className='font-bold text-2xl md:text-4xl sm-text-3xl py-2'>Manage Data Analytics Centrally</p>
                <div className=' text-md py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, fuga! Accusamus praesentium quidem officia eligendi aperiam aspernatur debitis. Natus soluta veniam, vero blanditiis eligendi a nostrum facere magni assumenda odit?Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum impedit culpa modi assumenda sunt amet unde voluptate alias a! Fugiat, voluptates soluta quisquam quo nobis libero maiores. Nisi, dolores ipsa?</div>
                <button className='bg-black text-[#00df9a] w-[200px] font-medium mx-auto my-4 py-4 rounded-md md:mx-0'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics