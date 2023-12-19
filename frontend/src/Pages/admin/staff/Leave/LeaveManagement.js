import React from 'react'
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development'
// import { IoIosArrowRoundBack } from "react-icons/io";


import { useState } from "react";
import AdminLogin from "../../AdminLogin"

const LeaveManagement = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isPosition, setIsPosition] = useState(false);

    const showPositions = () => {
        setIsPosition(!isPosition);
        setIsOpen(false);

    };

    const showLocations = () => {
        setIsOpen(!isOpen);
        setIsPosition(false);

    };

    const data = [
        [' 1', 'Okereke Emmanuel', '09015653022', 'Yes', 'Example@gmail.com', 'View More'],
        [' 2', 'Okereke Emmanuel', '09015653022', 'Yes', 'Example@gmail.com', 'View More'],
        [' 3', 'Okereke Emmanuel', '09015653022', 'Yes', 'Example@gmail.com', 'View More'],
        [' 4', 'Okereke Emmanuel', '09015653022', 'Yes', 'Example@gmail.com', 'View More'],
        [' 5', 'Okereke Emmanuel', '09015653022', 'Yes', 'Example@gmail.com', 'View More'],
        [' 7', 'Okereke Emmanuel', '09015653022', 'Yes', 'Example@gmail.com', 'View More'],
        [' 8', 'Okereke Emmanuel', '09015653022', 'Yes', 'Example@gmail.com', 'View More'],
        [' 9', 'Okereke Emmanuel', '09015653022', 'Yes', 'Example@gmail.com', 'View More'],
        [' 10', 'Okereke Emmanuel', '09015653022', 'Yes', 'Example@gmail.com', 'View More'],
        [' 11', 'Okereke Emmanuel', '09015653022', 'Yes', 'Example@gmail.com', 'View More'],
        [' 12', 'Okereke Emmanuel', '09015653022', 'Yes', 'Example@gmail.com', 'View More'],
        [' 13', 'Okereke Emmanuel', '09015653022', 'Yes', 'Example@gmail.com', 'View More'],

    ];
    const [user, setUser] = useState(false)

    return (
        <div className="">
            {user ? (
                <AdminLogin />

            ) : (
                <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full">
                    <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
                        <div className='flex justify-between '>
                            <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Ehizua Hub Awoyaya</p>
                            {/* <Link to='/staff-leave-location' className='mt-8'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link> */}

                        </div>
                    </div>
                    <div className='border-[#F13178] border-b '></div>


                    <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3  lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-full pb-8">


                        <Link to="/all-leave" className="bg-[#134574] max-w-[195px] px-2 lg:max-w-[263px] w-full text-center items-center rounded-[6px] py-4 font-bold flex flex-col justify-center">
                            <div className="grid md:grid-cols-2">
                                <p className="text-6xl text-[#F13178]">10</p>
                                <div>
                                    <p className="p-2 ">Leave Requests</p>
                                </div>
                            </div>
                        </Link>


                        <Link to="/declined-leave" className="bg-[#134574] max-w-[195px] px-2 lg:max-w-[263px] w-full text-center items-center rounded-[6px] py-4 font-bold flex flex-col justify-center">
                            <div className="grid md:grid-cols-2">
                                <p className="text-6xl text-[#C70202]">3</p>
                                <div>
                                    <p className="p-2">Declined Leave</p>
                                </div>  </div>
                        </Link>


                        <Link to="/pending-leave" className="bg-[#134574] max-w-[195px] px-2 lg:max-w-[263px] w-full text-center items-center rounded-[6px] py-4 font-bold flex flex-col justify-center">
                            <div className="grid md:grid-cols-2">
                                <p className="text-6xl text-[#CEAE04]">1</p>
                                <div>
                                    <p className="p-2">Pending Leave</p>
                                </div>  </div>
                        </Link>

                        <Link to="/approved-leave" className="bg-[#134574] max-w-[195px] px-2 lg:max-w-[263px] w-full text-center items-center rounded-[6px] py-4 font-bold flex flex-col justify-center">
                            <div className="grid md:grid-cols-2">
                                <p className="text-6xl text-[#16DA70]">3</p>
                                <div>
                                    <p className="p-2">Approved Leave</p>
                                </div>  </div>
                        </Link>


                    </div>

                  
                    <div className="grid grid-cols-2 lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-fit pb-44">




                    </div>



                </div>
            )}
            {/* right section  */}



        </div>
    )
}

export default LeaveManagement