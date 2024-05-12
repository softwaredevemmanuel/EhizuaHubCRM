import React, { useEffect, useState, Fragment, useRef } from 'react';
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { FaTimes } from "react-icons/fa";
import AdminLogin from "../../AdminLogin"
import { LuRefreshCcw } from "react-icons/lu";
import toastr from 'toastr';
import axios from 'axios';
import ReactLoading from "react-loading";
import '../../../../index.css'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom';


const PendingLeave = () => {

    const [user, setUser] = useState(false)
    const [reload, setReload] = useState('');
    const [leaveRequest, setLeaveRequest] = useState([]);
    const [approved, setApproved] = useState('');
    const [reject, setRejected] = useState('');
    const [loading, setLoading] = useState(false);
    const [approveOpen, setApproveOpen] = useState(false)
    const [rejectOpen, setRejectOpen] = useState(false)
    const cancelButtonRef = useRef(null)
    const navigate = useNavigate();



    useEffect(() => {
        let staffToken = JSON.parse(localStorage.getItem('StaffToken'));
        if (staffToken && staffToken.token) {
            setUser(true);

        }
    }, []);

    const Refresh = () => {
        if (reload === '') {
            setReload('reload')

        } else {
            setReload('')

        }
    }

    useEffect(() => {
        setLoading(true)
        // Fetch tutors when the component mounts
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


    const handleRejectLeave = (id) => {
        setLoading(true)
        setRejectOpen(false)

        fetch(`http://localhost:5000/api/auth/reject-leave-request/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                // Include any additional headers as needed
            },
        })
            .then(response => response.json())
            .then(data => {
                toastr.success(data.reject);
                setRejected('')
                setLeaveRequest(prevLeaveRequest => prevLeaveRequest.filter(tutor => tutor._id !== id));
                setLoading(false)
                navigate('/leave-management');



            })
            .catch(error => {
                console.error('Error Rejecting Tutor:', error);
                toastr.error('Error Rejecting Tutor:', error)
                setLoading(false)
            });
    };


    const handleApproveLeave = (id) => {
        setLoading(true)
        setApproveOpen(false)

        fetch(`http://localhost:5000/api/auth/approve-leave-request/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                // Include any additional headers as needed
            },
        })
            .then(response => response.json())
            .then(data => {
                toastr.success(data.approve);
                setRejected('')
                setApproved('')
                toastr.success(data.notApprove)
                setLeaveRequest(prevLeaveRequest => prevLeaveRequest.filter(tutor => tutor._id !== id));
                setLoading(false)
                navigate('/leave-management');



            })
            .catch(error => {
                setLoading(false)


            });
    };


    const handleApprove = (id) => {
        setApproved("Approved")
        setApproveOpen(true)

    };
    const handleReject = (id) => {
        setRejected("Rejected");
        setRejectOpen(true)

    };
    const handleNo = (id) => {
        setRejected("");
        setApproved("");
        setLeaveRequest(prevLeaveRequest => prevLeaveRequest.filter(tutor => tutor._id !== id));

    };


    const newLeaveRequest = leaveRequest.filter(item => item.isApproved === 0);

    return (
        <div className="">
            {!user ? (
                <AdminLogin />

            ) : (
                <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full">
                    <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
                        <div className='flex justify-between '>
                            <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Pending Leave Request</p>
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


                    {newLeaveRequest.map((staff, index) => (

                        <div key={index} className='pl-5 rounded-xl "w-[412px] h-[50px] bg-slate-400 text-[#134574] flex items-center justify-between mt-1 pr-5'>
                            <div className='flex'>

                                <div className='sm:flex items-center gap-2'>
                                    <p className='text-[#134574] ml-2 '>{staff.email}</p>
                                    <Link to={`/staff-leave-details/${staff._id}`} className='ml-2 text-[#FFF] underline text-xs '>View More</Link>
                                </div>
                            </div>

                            <div className='flex gap-4'>
                                <button onClick={() => handleApprove()} className="flex bg-slate-300 rounded-xl  sm:w-32 items-center justify-center">
                                    <p className='text-[#2C8B59] sm:pl-4 hidden sm:block'>Accept</p>
                                    <TiTick size={26} className="text-[#2C8B59]" />
                                </button>


                                <button onClick={() => handleReject()} className="flex bg-slate-300 rounded-xl sm:w-32 items-center justify-center">
                                    <p className='text-red-600 sm:pl-4 hidden sm:block'>Decline</p>
                                    <FaTimes size={20} className="text-red-600" />
                                </button>

                            </div>
                      

                            {approved && (

                                <Transition.Root show={approveOpen} as={Fragment}>
                                    <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setApproveOpen}>
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                                        </Transition.Child>

                                        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                                            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                                <Transition.Child
                                                    as={Fragment}
                                                    enter="ease-out duration-300"
                                                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                                                    leave="ease-in duration-200"
                                                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                                >
                                                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                                                        <div className="sm:flex sm:items-start">
                                                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                                                                <ExclamationTriangleIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                                                            </div>
                                                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                                <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                                    Approve Leave
                                                                </Dialog.Title>
                                                                <div className="mt-2">
                                                                    <p className="text-sm text-gray-500">
                                                                        Are you sure you want to approve leave?
                                                                    </p>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse justify-center">
                                                            <button
                                                                type="button"
                                                                className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                                                onClick={() => handleApproveLeave(staff._id)}
                                                            >
                                                                Approve
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                                                onClick={() => setApproveOpen(false)}
                                                                ref={cancelButtonRef}
                                                            >
                                                                Cancel
                                                            </button>
                                                        </div>
                                                    </Dialog.Panel>
                                                </Transition.Child>
                                            </div>
                                        </div>
                                    </Dialog>
                                </Transition.Root>

                            )}

                            {reject && (

                                <Transition.Root show={rejectOpen} as={Fragment}>
                                    <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setRejectOpen}>
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                                        </Transition.Child>

                                        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                                            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                                <Transition.Child
                                                    as={Fragment}
                                                    enter="ease-out duration-300"
                                                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                                                    leave="ease-in duration-200"
                                                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                                >
                                                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                                                        <div className="sm:flex sm:items-start">
                                                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                                                <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                                                            </div>
                                                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                                                <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                                    Reject Leave
                                                                </Dialog.Title>
                                                                <div className="mt-2">
                                                                    <p className="text-sm text-gray-500">
                                                                        Are you sure you want to Reject leave?
                                                                    </p>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse justify-center">
                                                            <button
                                                                type="button"
                                                                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                                                onClick={() => handleRejectLeave(staff._id)}>
                                                                Reject
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                                                onClick={() => setRejectOpen(false)}
                                                                ref={cancelButtonRef}
                                                            >
                                                                Cancel
                                                            </button>
                                                        </div>
                                                    </Dialog.Panel>
                                                </Transition.Child>
                                            </div>
                                        </div>
                                    </Dialog>
                                </Transition.Root>

                            )}


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

export default PendingLeave