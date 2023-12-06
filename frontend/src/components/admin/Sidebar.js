import dashboard from "../../assets/Dashboard.svg"
import logo from "../../assets/ehizuahublogo.png"
import { FaTools } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { RiHomeOfficeFill } from "react-icons/ri";
import { CiMemoPad } from "react-icons/ci";
import { HiClipboardList } from "react-icons/hi";
import { MdMenuBook } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { PiStudent } from "react-icons/pi";
import { FaUserMinus } from "react-icons/fa6";
import { BsPatchQuestionFill } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { FaBuilding } from "react-icons/fa";
import { CiDiscount1 } from "react-icons/ci";
import { useState } from "react"
import { Link } from "react-router-dom";



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




const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const openToggle = () => {
        setOpen(!open)
    }
    return (

            <div className="bg-[#134574] w-full   md:w-[336px] gap-[20px] px-[20px] py-[20px]  md:py-[30px] flex flex-col">
                <div className="flex items-center justify-between">
                    <div className="md:max-w-[136px] w-full max-w-[150px] bg-white rounded-[4px] mx-3 px-[11px] py-[18px]"><img src={logo} alt="" /></div>
                    <button className="flex md:hidden  text-white" onClick={openToggle}>
                        {
                            !open ? <IoClose className="cursor-pointer" size={32} /> : <CiMenuFries className="cursor-pointer" size={32} />
                        }
                    </button>

                </div>

                <div className={`" ${open ? "md:flex hidden" : "flex-col"} flex flex-row md:flex-col text-[14px]  h-full gap-2 text-white "`}>
                    <Link to="/dashboard/hr">

                        <button className="flex w-full items-start p-3 gap-4 rounded-[4px] hover:bg-blue-300 transition-all">
                            <img src={dashboard} alt="dashboard" />
                            <p>Dashboard</p>
                        </button>
                    </Link>


                    <p className="text-[10px] mx-3 text-gray-500 font-bold  ">OFFICES SECTION</p>

                    <Link to="/office-locations/hr">
                        <button className="flex w-full items-center p-1 gap-4 rounded-[4px] hover:bg-blue-300 transition-all">
                            <RiHomeOfficeFill />
                            <p>Location</p>
                        </button>
                    </Link>

                    <p className="text-[10px] mx-3 text-gray-500 font-bold  ">STAFF SECTION</p>
                    {
                        staff.map((item, index) => (
                            <Link to={`/${item.url}`} key={index}>
                                <button className="flex w-full items-center p-1 gap-4 rounded-[4px] hover:bg-blue-300 transition-all">
                                    {item.icon}
                                    <p >{item.name}</p>
                                </button>
                            </Link>
                        ))
                    }

                    <p className="text-[10px] mx-3 text-gray-500 font-bold  ">STUDENT SECTION</p>
                    {
                        students.map((item, index) => (

                            <Link to={`/${item.url}`} key={index}>
                                <button className="flex w-full items-center p-1 gap-4 rounded-[4px] hover:bg-blue-300 transition-all">
                                    {item.icon}
                                    <p >{item.name}</p>
                                </button>
                            </Link>

                        ))
                    }

                    <p className="text-[10px] mx-3 text-gray-500 font-bold  ">SCHOOL SECTION</p>

                    {
                        school.map((item, index) => (
                            <Link to={`/${item.url}`} key={index}>

                                <button className="flex w-full items-center p-1 gap-4 rounded-[4px] hover:bg-blue-300 transition-all">
                                    {item.icon}
                                    <p >{item.name}</p>
                                </button>
                            </Link>
                        ))
                    }


                </div>
            </div>



    )
}

export default Sidebar
