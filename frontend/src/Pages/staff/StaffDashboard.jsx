import { MdCelebration } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { PiStudent } from "react-icons/pi";
import { FaUserMinus } from "react-icons/fa6";
import { BsPatchQuestionFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import StaffLogin from "./StaffLogin";
// import team from '../../assets/team.png'


export default function StaffDashboard() {
    const [user, setUser] = useState(false)

    return (
        <div className="">
            {user ? (

                <StaffLogin />

            ) : (
                <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3">
                    <div className="flex justify-between  text-white py-3 items-start border-b  border-[#DD137B]">
                        <div className="pt-[20px]">
                            <p className="text-[2rem] font-bold">Welcome Emmanuel</p>
                            <p className="text-[#DD137B]">Insight for Efficient Operations and Happy Staff</p>
                        </div>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols rounded-[10px] bg-[#134574] text-white max-w-[980px] w-full px-8 py-20">
                        <div className="flex flex-col gap-4">
                            <p className="text-[2.5rem] font-extrabold">Elevate Your Team's Potential</p>
                            <Link className="px-3 bg-[#DD137B] max-w-[243px] w-full text-center rounded-[4px] py-4 font-bold items-center">
                                <div className="text-white flex items-center justify-center">
                                    <p>Memo</p>
                                    <div className="bg-white rounded-[50px] w-6 h-6 ml-4 flex items-center justify-center">
                                        <p className="text-[#DD137B]">2</p>
                                    </div>
                                </div>


                            </Link>
                        </div>
                        {/* <div className="flex flex-col">
                            <img src={team}/>
                        </div> */}
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-full pb-44">

                        <Link className=" bg-[#134574] max-w-[195px] px-2 lg:max-w-[263px] w-full text-center items-center rounded-[6px] py-4 font-bold flex gap-4 justify-center">
                            <FaUserMinus size={38} />
                            <div className="flex flex-col items-center lg:items-start">
                                <p>Pending Leave Request</p>
                                <p>1</p>
                            </div>
                        </Link>

                        <Link className=" bg-[#134574] max-w-[195px] px-2 lg:max-w-[263px] w-full text-center items-center rounded-[6px] py-4 font-bold flex gap-4 justify-center">
                            <IoMdPerson size={38} />
                            <div className="flex flex-col items-center lg:items-start">
                                <p>Create Report</p>
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
                                <p> Make Complaints</p>
                            </div>
                        </Link>


                    </div>


                </div>
            )}
            {/* right section  */}



        </div>
    )
}
