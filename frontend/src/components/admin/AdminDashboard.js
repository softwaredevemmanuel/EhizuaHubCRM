
import dashboard from "../../assets/Dashboard.svg"
import logo from "../../assets/ehizuahublogo.png"
import { FaTools } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { RiHomeOfficeFill } from "react-icons/ri";
import { CiMemoPad } from "react-icons/ci";
import { HiClipboardList } from "react-icons/hi";
import { MdCelebration, MdMenuBook } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { PiStudent } from "react-icons/pi";
import { FaUserMinus } from "react-icons/fa6";
import { BsPatchQuestionFill } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { FaBuilding } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import { MdDashboard } from "react-icons/md";
import { useState,Fragment } from "react"
import { Link } from "react-router-dom";


import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import Sidebar from "./Sidebar";

const staff = [
    { id: "1", icon: <CiMemoPad />, name: "Memo", url: "staff-memo/hr" },
    { id: "2", icon: <HiClipboardList />, name: "Attendance", url: "staff-attendance/hr" },
    { id: "3", icon: <IoMdPerson />, name: "Staff Section", url: "ehizua-staff/hr" },
    { id: "4", icon: <BsPatchQuestionFill />, name: "Complaints", url: "staff-complaints/hr" },
    { id: "5", icon: <FaTools />, name: "Inventory", url: "inventory/hr" },
    { id: "6", icon: <GiReceiveMoney />, name: "Loan", url: "staff-loan/hr" },
    { id: "7", icon: <FaUserMinus />, name: "Leave section", url: "staff-leave/hr" },

]
const school = [
    { id: "1", icon: <CiMemoPad />, name: "Memo", url: "school-memo/hr" },
    { id: "2", icon: <FaBuilding />, name: "Patner Schools", url: "partner-schools/hr" },
    { id: "3", icon: <CiDiscount1 />, name: "Course Discounts", url: "school-course-discount/hr" },
    { id: "4", icon: <BsPatchQuestionFill />, name: "Complaints", url: "school-complaints/hr" },

]

const students = [
    { id: "1", icon: <MdMenuBook />, name: "Courses and Curriculum", url: "student-course/hr" },
    { id: "2", icon: <CiMemoPad />, name: "Memo", url: "student-memo/hr" },
    { id: "3", icon: <PiStudent />, name: "student Section", url: "ehizua-students/hr" },
    { id: "4", icon: <HiClipboardList />, name: "Attendance", url: "student-attendance/hr" },
    { id: "5", icon: <BsPatchQuestionFill />, name: "Complaints", url: "student-complaints/hr" },
]


const teams = [
  { id: 1, name: 'Heroicons', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Workcation', href: '#', initial: 'W', current: false },
]
const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function  AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="">
    <Sidebar/>
 
     
        

             {/* right section  */}
            <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3">
                <div className="flex justify-between  text-white py-3 items-start border-b  border-[#DD137B]">
                    <div className="pt-[70px]">
                        <p className="text-[2rem] font-bold">Welcome Admin</p>
                        <p>Streamlining Management, One Click at a Time</p>
                    </div>

                    <div className="bg-black text-white flex flex-col items-center justify-center px-2">
                        <p className="">Today</p>
                        <p className="text-[1.75rem] font-bold">10:35am</p>
                        <p className="text-[0.8rem] text-gray-500">Mon 22, 20323</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 rounded-[10px] bg-[#134574] text-white max-w-[980px] w-full px-8 py-20">
                    <div className="flex flex-col gap-4">
                        <p className="text-[2.5rem] font-extrabold">Elevate Your Learning
                            with Every Click</p>
                        <Link className="px-3 bg-[#DD137B] max-w-[243px] w-full text-center rounded-[4px] py-4 font-bold">Create a Memo</Link>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-full pb-44">

                    <Link className=" bg-[#134574] max-w-[195px] px-2 lg:max-w-[263px] w-full text-center items-center rounded-[6px] py-4 font-bold flex gap-4 justify-center">
                        <FaUserMinus size={38} />
                        <div className="flex flex-col items-center lg:items-start">
                            <p>Leave Request</p>
                            <p>4</p>
                        </div>
                    </Link>

                    <Link className=" bg-[#134574] max-w-[195px] px-2 lg:max-w-[263px] w-full text-center items-center rounded-[6px] py-4 font-bold flex gap-4 justify-center">
                        <IoMdPerson size={38} />
                        <div className="flex flex-col items-center lg:items-start">
                            <p>Number of staff</p>
                            <p>4</p>
                        </div>
                    </Link>

                    <Link className=" bg-[#134574] max-w-[195px] px-2 lg:max-w-[263px] w-full text-center items-center rounded-[6px] py-4 font-bold flex gap-4 justify-center">
                        <PiStudent size={38} />
                        <div className="flex flex-col items-center lg:items-start">
                            <p>Number of students</p>
                            <p>4</p>
                        </div>
                    </Link>

                    <Link className=" bg-[#134574] max-w-[195px] px-2 lg:max-w-[263px] w-full text-center items-center rounded-[6px] py-4 font-bold flex gap-4 justify-center">
                        <MdCelebration size={38} />
                        <div className="flex flex-col items-center lg:items-start">
                            <p>Birthday Celebration</p>
                            <p>4</p>
                        </div>
                    </Link>

                    <Link className=" bg-[#134574] max-w-[195px] px-2 lg:max-w-[263px] w-full text-center items-center rounded-[6px] py-4 font-bold flex gap-4 justify-center">
                        <BsPatchQuestionFill size={38} />
                        <div className="flex flex-col items-center lg:items-start">
                            <p>Leave Request</p>
                            <p>4</p>
                        </div>
                    </Link>


                </div>


            </div>


     



   
    </div>
  )
}
