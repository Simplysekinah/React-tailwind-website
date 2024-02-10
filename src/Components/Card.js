import React from 'react'
import { TbUserDollar } from "react-icons/tb";
import { IoMdContacts } from "react-icons/io";
import { PiUsersThreeFill } from "react-icons/pi";

const Card = () => {
    return (
        <div className='w-full px-4 py-[10rem] bg-white'>
            <div className=' max-w-[1024px] grid md:grid-cols-3 mx-auto gap-8 p-4 my-4'>
                <div className=' shadow-xl w-full flex flex-col rounded-lg p-4 my-4 hover:scale-105 duration-100'>
                    <div>
                        <TbUserDollar size={50} className='bg-white mx-auto' />
                    </div>
                    <h1 className='font-bold py-8 text-center text-2xl'>Single User</h1>
                    <p className=' text-4xl text-center font-bold'>$149</p>
                    <div className=' font-medium text-center'>
                        <p className=' border-b py-2 mx-8 mt-8'>500 GB Storage</p>
                        <p className=' border-b py-2 mx-8'>1 Granted User</p>
                        <p className=' border-b py-2 mx-8'>Send up to 2 GB</p>
                    </div>
                    <button className='text-black bg-[#00df9a] rounded-md font-medium w-[200px] my-6 py-3 px-6 mx-auto'>Start Trial</button>
                </div>
                <div className=' bg-gray-100 shadow-xl w-full flex flex-col rounded-lg md:my-0 p-4 my-8 hover:scale-105 duration-100'>
                    <div>
                        <IoMdContacts size={50} className='bg-transparent mx-auto' />
                    </div>
                    <h1 className='font-bold py-8 text-center text-2xl'>Single User</h1>
                    <p className=' text-4xl text-center font-bold'>$149</p>
                    <div className=' font-medium text-center'>
                        <p className=' border-b py-2 mx-8 mt-8'>500 GB Storage</p>
                        <p className=' border-b py-2 mx-8'>1 Granted User</p>
                        <p className=' border-b py-2 mx-8'>Send up to 2 GB</p>
                    </div>
                    <button className='text-black bg-[#00df9a] rounded-md font-medium w-[200px] my-6 py-3 px-6 mx-auto'>Start Trial</button>
                </div>
                <div className=' shadow-xl w-full flex flex-col rounded-lg p-4 my-4 hover:scale-105 duration-100'>
                    <div>
                        <PiUsersThreeFill size={50} className=' bg-white mx-auto' />
                    </div>
                    <h1 className='font-bold py-8 text-center text-2xl'>Single User</h1>
                    <p className=' text-4xl text-center font-bold'>$149</p>
                    <div className=' font-medium text-center'>
                        <p className=' border-b py-2 mx-8 mt-8'>500 GB Storage</p>
                        <p className=' border-b py-2 mx-8'>1 Granted User</p>
                        <p className=' border-b py-2 mx-8'>Send up to 2 GB</p>
                    </div>
                    <button className='text-black bg-[#00df9a] rounded-md font-medium w-[200px] my-6 py-3 px-6 mx-auto'>Start Trial</button>
                </div>
            </div>
        </div>
    )
}

export default Card