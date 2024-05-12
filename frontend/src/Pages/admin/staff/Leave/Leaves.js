import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development'
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { MdOutlinePending } from "react-icons/md";
import AdminLogin from "../../AdminLogin"
import toastr from 'toastr';
import ReactLoading from "react-loading";
import { LuRefreshCcw } from "react-icons/lu";


const AllLeave = () => {


    const [user, setUser] = useState(false)
    const [leaveRequest, setLeaveRequest] = useState([]);
    const [reload, setReload] = useState('');
    const [loading, setLoading] = useState(false);


    const Refresh = () => {
        if (reload === '') {
            setReload('reload')

        } else {
            setReload('')

        }
    }

    useEffect(() => {
        let staffToken = JSON.parse(localStorage.getItem('StaffToken'));
        if (staffToken && staffToken.token) {
            setUser(true);

        }
    }, []);


    useEffect(() => {
        // Fetch tutors when the component mounts
        setLoading(true)
        async function fetchLeave() {
            try {
                const response = await axios.get('http://localhost:5000/api/auth/staff-leave-request');
                setLeaveRequest(response.data.leave);
                setLoading(false)
            } catch (error) {
                toastr.error('Error retrieving tutors');
                setLoading(false)

            }
        }

        fetchLeave();
    }, [reload]);

    return (
        <div className="">
            {!user ? (
                <AdminLogin />

            ) : (
                <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full">
                    <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
                        <div className='flex justify-between '>
                            <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >All Leave Request</p>
                            <Link to='/leave-management' className='mt-8'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

                        </div>
                    </div>
                    <div className='border-[#F13178] border-b '></div>

                    {loading && (
                        <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                            <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
                        </div>
                    )}

                    <div className='flex justify-end'>
                        <button onClick={Refresh}>
                            <div className='flex gap-2 text-gray-500'>
                                <p className=''>Refresh</p>

                                <LuRefreshCcw size={24} />
                            </div>
                        </button>
                    </div>

                    {leaveRequest.map((staff, index) => (

                        <div key={index} className='pl-5 rounded-md "w-[412px] h-[50px] bg-slate-400 flex items-center justify-between mt-5 pr-5'>
                            <div className='flex'>

                                <div className='sm:flex items-center gap-2'>
                                    <p className='text-[#134574] ml-2 '>{staff.email}</p>
                                    <Link to={`/staff-leave-details/${staff._id}`} className='ml-2 text-[#FFF] underline text-xs '>View More</Link>
                                </div>
                            </div>

                            <div className='flex gap-4'>
                                <div className="flex bg-slate-300 rounded-xl sm:w-32 items-center justify-center gap-2">
                                    <p className='text-yellow-600 sm:pl-4 hidden sm:block'
                                        style={{ color: staff.isApproved === 1 ? 'green' : staff.isApproved === 0 ? 'gray' : 'red' }}>
                                        {staff.isApproved === 1 && 'Approved'}
                                        {staff.isApproved === 0 && 'Pending'}
                                        {staff.isApproved === 2 && 'Rejected'}</p>
                                    {staff.isApproved == 1 && (

                                        <TiTick size={26} className="text-[#2c8b59]" />
                                    )}
                                    {staff.isApproved == 2 && (

                                        <FaTimes size={20} className="text-red-600" />
                                    )}

                                    {staff.isApproved == 0 && (

                                        <MdOutlinePending size={20} className="text-yellow-600" />
                                    )}


                                </div>
                            </div>

                        </div>
                    ))}



                    <div className="grid grid-cols-2 lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-fit pb-44">

                    </div>



                </div>
            )}
            {/* right section  */}



        </div>
    )
}

export default AllLeave