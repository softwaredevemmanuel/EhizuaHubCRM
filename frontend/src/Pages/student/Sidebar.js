import React, { useState } from "react";
import { BsPatchQuestionFill } from "react-icons/bs";
import { CiMemoPad } from "react-icons/ci";
import { FaTools, FaUserMinus } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { HiClipboardList } from "react-icons/hi";
import { IoMdPerson } from "react-icons/io";
import logo from "../../assets/ehizuahublogo.png";
import { Link } from "react-router-dom";
import { FaBars} from "react-icons/fa6";


const staff = [
  { id: "1", icon: <CiMemoPad />, name: "Dashboard", url: "/dashboard" },
  {
    id: "2",
    icon: <HiClipboardList />,
    name: "Attendance",
    url: "staff-attendance/hr",
  },
  {
    id: "3",
    icon: <IoMdPerson />,
    name: "Staff Section",
    url: "ehizua-staff/hr",
  },
  {
    id: "4",
    icon: <BsPatchQuestionFill />,
    name: "Complaints",
    url: "staff-complaints/hr",
  },
  { id: "5", icon: <FaTools />, name: "Inventory", url: "inventory/hr" },
  { id: "6", icon: <GiReceiveMoney />, name: "Loan", url: "staff-loan/hr" },
  {
    id: "7",
    icon: <FaUserMinus />,
    name: "Leave section",
    url: "staff-leave/hr",
  },

 


];
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const Sidebar = () => {
  const [hidden,setHiidden] = useState(false)
  const[reveal,setReveal] = useState(true)
   

   const toggle = ()=>{
    setHiidden(!hidden)
   }

   const toggle2 =()=>{
     setReveal(!reveal)
   }
  return (
    <section className="">

      <div className="relative h-full">
        {
          reveal?
          <div onClick={toggle2} className="flex z-10 md:hidden relative pt-[10px] left-0 h-full bg-[#C8D1DA]  cursor-pointer text-gray-500">
              <FaBars size={27}/>   
          </div>
          :""
  
        }
        <div className={classNames(reveal? "hidden left-[-300px]" : " absolute z-10 w-[250px] md:hidden flex flex-col bg-[#134574] border-r border-pink-500 px-6 py-3 h-full gap-3")}>
      
            <div onClick={toggle2} className="flex absolute right-[-30px] cursor-pointer text-gray-500">
              <FaBars size={27}/>   
            </div>
          <div className=" bg-white w-full max-w-[200px] p-2 rounded-lg">
            <img src={logo} alt="" />
          </div>

          <div className="flex flex-col gap-4 py-10">
            {staff.map((item) => {
              return (
                <Link
                  to={item.url}
                  key={item.id}
                  href={item.href}
                  className="flex items-center text-white gap-3"
                >
                  <div className="text-white">
                    {item.icon}
                  </div>
                  <p> 
                  {item.name}
                  </p>
                
                </Link>
              );
            })}
          </div>
        </div>


       {/* desktop view side nav */}
        <div className={classNames(!hidden? "hidden md:flex flex-col bg-[#134574] px-6 w-[230px] py-3 gap-3 h-screen overflow-y-scroll"  :"hidden md:flex flex-col bg-[#134574] px-6  py-3 gap-3 h-screen overflow-y-scroll" )}>
           <div  onClick={toggle} className="hidden md:flex absolute right-[32px] top-[14px] cursor-pointer text-white  z-20 ">
              <FaBars size={27}/> 
          </div>
          <div className={classNames(hidden?  " bg-white w-full hidden p-2" :"md:max-w-[120px]  bg-white p-2 rounded-lg")}>
            <img src={logo} alt="" />
          </div>

          <div className="flex flex-col gap-4 py-10">
            {staff.map((item) => {
              return (
                <Link
                  to={item.url}
                  key={item.id}
                  href={item.href}
                  className="flex items-center text-white gap-3"
                >
                  <div className="text-white">
                    {item.icon}
                  </div>
                  <p className={classNames(
                  hidden? 
                  "hidden" 
                  : "md:flex")
                  }> 
                  {item.name}
                  </p>
                
                </Link>
              );
            })}
          </div>
        </div>
   

      </div>

      
    </section>
  );
};

export default Sidebar;