import { IoMdPerson } from "react-icons/io";
import { PiStudent } from "react-icons/pi";
import { FaUserMinus } from "react-icons/fa6";
import { BsPatchQuestionFill } from "react-icons/bs";
import { MdCelebration } from "react-icons/md";
import { Link } from "react-router-dom";

import Sidebar from "./Sidebar";



const AdminDashboard = () => {

    return (
        <section className="flex-col flex md:flex-row justify-between w-full h-full">

            <Sidebar/>

            {/* right section  */}
            <div className="w-full  bg-[#C8D1DA] px-5 flex flex-col gap-3">
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


        </section>
    )
}

export default AdminDashboard
