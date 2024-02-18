import React from 'react'
import logo from "../../assets/ehizuahublogo.png"
import { FaFacebook, FaInstagram, FaLinkedinIn, FaLocationDot, FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='bg-[#23517c] px-[30px] flex flex-col text-white py-[20px] gap-[20px]'>

       <div className="flex flex-col sm:flex-row justify-between gap-3">
         <div className="flex flex-col gap-7">
            <div className="flex w-full max-w-[200px] ">
                <img src={logo} alt="" className='object-cover w-full' />
            </div>
            <p className="text-[0.6rem] w-full max-w-[300px]">
            We view the field of creative technology as 
            helping to “disrupt” the way people today interact
            with computers, and usher in a more integrated, 
            immersive experience.
            </p>
            <div className="flex gap-3 items-center primary">
            <FaLinkedinIn />
            <FaInstagram />
            <FaFacebook />
            <FaXTwitter />
            </div>
         </div>
         <div className="flex flex-col sm:flex-row sm:justify-between text-[0.67rem] font-light gap-[30px]">
           <div className="flex flex-col w-full max-w-[400px]">
            <p className='text-[1.2rem] font-bold'>Policy</p>
            <a href="">Privacy Policy</a>
            <a href="">Terms and Conditions</a>
            <a href="">Refund Policy</a>
           </div>
           <div className="flex flex-col w-full max-w-[400px]">
            <p className='text-[1.2rem] font-bold'>Company</p>
            <a href="">About us </a>
            <a href="">Our Partners</a>
            <a href="">Courses</a>
           </div>
         </div>
       </div>

       <div className="flex flex-col lg:flex-row justify-between gap-3">
         <div className="flex flex-col gap-4">
            <div className="flex w-full max-w-[200px] primary gap-3">
              <FaLocationDot size={24} />
              <p className='text-[0.7rem]  text-white'>16 Buckingham Street Surry Hills NSW 2010.
              Australia. +61 2 8970 0696</p>
            </div>
            <div className="flex gap-3 primary max-w-[200px] w-full">
              <FaLocationDot size={24} />
              <p className='text-[0.7rem] text-white'>6, Hon Fatai Eletu Street, Container Bus Stop,
               Awoyaya, Lekki Phone: +234 8073 693 973</p>
            </div>
         </div>

         <div className="flex flex-col sm:flex-row   sm:justify-between text-[0.67rem] font-light gap-[30px]">
           <div className="flex flex-col w-full max-w-[400px]">
            <p className='text-[1.2rem] font-bold'>Resources</p>
            <a href="">Blog</a>
            <a href="">FaQs</a>
            <a href="">Partnerships</a>
           </div>
           <div className="flex flex-col w-full max-w-[400px]">
            <p className='text-[1.2rem] font-bold'>Contact</p>
            <a href="">info@ehizuahub.com</a>
            <a href="">+234 080 123 4567</a>
            <a href="">+234 080 123 4567</a>
           </div>
         </div>

       </div>


    </div>
  )
}

export default Footer
