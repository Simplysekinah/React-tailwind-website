import React from 'react'
import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <div className=' mx-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl text-[#00df9a] font-bold'>REACT.</h1>
                <p className='py-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore commodi fuga molestiae tempora ipsam. Suscipit molestias illo vero dolore soluta unde, perferendis, deleniti quidem ea veritatis enim architecto consequatur similique.</p>
                <div className=' md:w-[75%] flex justify-between my-6'>
                    <FaDribbbleSquare size={30}/>
                    <FaFacebookSquare size={30}/>
                    <FaGithubSquare size={30}/>
                    <FaInstagram size={30}/>
                    <FaTwitterSquare size={30}/>
                </div>
            </div>
            <div className=' lg:col-span-2 mt-6 flex justify-between'>
                <div>
                    <h6 className='font-medium text-gray-400'>Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm'>Analytics</li>
                        <li className='py-2 text-sm'>Marketing</li>
                        <li className='py-2 text-sm'>Commerce</li>
                        <li className='py-2 text-sm'>Insights</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm'>Pricing</li>
                        <li className='py-2 text-sm'>Documentation</li>
                        <li className='py-2 text-sm'>Guides</li>
                        <li className='py-2 text-sm'>API Status</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Company</h6>
                    <ul>
                        <li className='py-2 text-sm'>About</li>
                        <li className='py-2 text-sm'>Blog</li>
                        <li className='py-2 text-sm'>Jobs</li>
                        <li className='py-2 text-sm'>Press</li>
                        <li className='py-2 text-sm'>Careers</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Legal</h6>
                    <ul>
                        <li className='py-2 text-sm'>Claim</li>
                        <li className='py-2 text-sm'>Policy</li>
                        <li className='py-2 text-sm'>Terms</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer