import React from 'react'
import logo from "../../assets/ehizuahublogo.png"
import { IoMdNotifications } from "react-icons/io";
import { GoMail } from "react-icons/go";
const TopNav = () => {
  return (
    <div>
      <nav className="flex items-center justify-between py-3 border-b border-[#DE1D80]">
        <div className="flex w-full max-w-[200px] ">
          <img src={logo} alt="" />
        </div>
        <div className="flex items-center gap-5">
          <div className="relative  cursor-pointer">
            <IoMdNotifications size={24} color="#DE1D80" />
            <div className="absolute top-0 right-0 rounded-full h-3 w-3 bg-white flex justify-center items-center">
              <p className='primary text-[0.5rem] text-center'>4</p>
            </div>
          </div>
          
          <div className="relative cursor-pointer">
            <GoMail size={24} color="#DE1D80" />
            <div className="absolute top-0 right-[-2px] rounded-full h-3 w-3 bg-white flex justify-center items-center">
              <p className='primary text-[0.5rem] text-center'>1</p>
            </div>
          </div>

          <div className="w-[50px] h-[50px] border rounded-full">
            <img src="" alt="" />
          </div>
        </div>
      </nav>
   
    </div>
  )
}

export default TopNav