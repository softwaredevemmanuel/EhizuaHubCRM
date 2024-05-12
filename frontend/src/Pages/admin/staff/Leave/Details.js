import React, { useEffect, useState, useRef, Fragment } from 'react';
import { Link, useParams } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { FaTimes } from "react-icons/fa";
import AdminLogin from "../../AdminLogin"
import axios from 'axios';
import toastr from 'toastr';
import ReactLoading from "react-loading";
import { LuRefreshCcw } from "react-icons/lu";
import JoditEditor from 'jodit-react';
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom';


const StaffLeaveDetails = () => {

    const [user, setUser] = useState(false)
    const [leaveRequest, setLeaveRequest] = useState([]);
    const [reload, setReload] = useState('');
    const [loading, setLoading] = useState(false);
    const [formattedDate, setFormatedDate] = useState('');
    const { _id: idParams } = useParams();
    const editor = useRef(null);
    const [content, setContent] = useState('')
    const [approved, setApproved] = useState('');
    const [reject, setRejected] = useState('');
    const [approveOpen, setApproveOpen] = useState(false)
    const [rejectOpen, setRejectOpen] = useState(false)
    const cancelButtonRef = useRef(null)
    const navigate = useNavigate();



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

    const leaveDetails = leaveRequest.find(item => item._id == idParams);

    useEffect(() => {
        if (leaveDetails) {


            // Input date string
            const dateString = leaveDetails.leaveEndDate;

            // Split the date string by '-'
            const parts = dateString.split('-');

            // Extract year, month, and day
            const year = parts[0];
            const month = parts[1];
            const day = parts[2];

            // Convert month number to month name
            const monthNames = [
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];
            const monthName = monthNames[Number(month) - 1]; // Adjust month index

            // Output formatted date
            setFormatedDate(`${day} ${monthName} ${year}`);


        }
    })


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
        setApproveOpen(false)
        setLoading(true)

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

    return (
        <div className="">
            {!user ? (
                <AdminLogin />

            ) : (
                <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full">
                    <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
                        <div className='flex justify-between '>
                            <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' > Leave Details</p>
                            <Link to='/leave-management' className='mt-8'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

                        </div>
                    </div>
                    <div className='border-[#F13178] border-b '></div>

                    <div className='flex justify-between'>
                        {leaveDetails && leaveDetails.isApproved == 0 && (

                            <div className='text-yellow-600'>
                                <p>Pending</p>
                            </div>
                        )}

                        {leaveDetails && leaveDetails.isApproved == 1 && (

                            <div className='text-green-600'>
                                <p>Approved</p>
                            </div>
                        )}
                        {leaveDetails && leaveDetails.isApproved == 2 && (

                            <div className='text-red-600'>
                                <p>Rejected</p>
                            </div>
                        )}
                        <button onClick={Refresh}>
                            <div className='flex gap-2 text-gray-500'>
                                <p className=''>Refresh</p>

                                <LuRefreshCcw size={24} />
                            </div>
                        </button>
                    </div>


                    {loading && (
                        <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                            <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
                        </div>
                    )}


                    {leaveDetails && (

                        <div className='pl-5 rounded-xl "w-[412px] h-full bg-slate-400 mt-2 pr-5'>
                            <div className='grid sm:grid-cols-2 gap-4'>
                                <div className='bg-slate-300 mt-2 pb-2 pl-2 rounded-md text-[#134574]'>
                                    <div className='flex gap-8 pt-2'>
                                        <p>Name:</p>

                                        <h2>{leaveDetails.fullName}</h2>
                                    </div>
                                    <div className='flex gap-8 pt-2'>
                                        <p>Location:</p>

                                        <h2>{leaveDetails.location}</h2>
                                    </div>
                                    <div className='flex gap-8 pt-2'>
                                        <p>Email:</p>

                                        <h2>{leaveDetails.email}</h2>
                                    </div>
                                    <div className='flex gap-8 pt-2'>
                                        <p>Position:</p>

                                        <h2>{leaveDetails.position}</h2>
                                    </div>
                                </div>
                                <table className="table-auto border-separate border border-slate-500 mt-2 text-[#134574] rounded-md">
                                    <thead>
                                        <tr className='bg-slate-400'>
                                            <th className="border p-2">Leave Type</th>
                                            <th className="border p-2">Duration</th>
                                            <th className="border p-2">Days</th>

                                        </tr>
                                    </thead>
                                    <tbody className='bg-slate-300'>
                                        <tr className=''>
                                            <td className="border p-3"> Casual</td>
                                            <td className="border p-3">{leaveDetails.leaveStartDate.split('-')[2]} - {formattedDate} </td>
                                            <td className="border p-3"> {parseInt(leaveDetails.leaveEndDate.split('-')[2]) - parseInt(leaveDetails.leaveStartDate.split('-')[2])}</td>

                                        </tr>

                                    </tbody>
                                </table>
                            </div>


                            <div className='pb-8'>
                                <p className='text-white pt-8'>Reason</p>

                                <div
                                    className='w-full rounded-md py-1 px-4 lg:pr-10 pr-4 bg-slate-200  text-slate-700'
                                    dangerouslySetInnerHTML={{ __html: leaveDetails.purposeOfLeave }} />
                            </div>

                            {leaveDetails && leaveDetails.isApproved != 0 && (

                                <div className='mb-6 bg-slate-300 p-2'>
                                    <p className='text-[#F13178] pt-2 font-bold mb-2 text-center'>ADMIN Comment</p>
                                    <div dangerouslySetInnerHTML={{ __html: leaveDetails.adminComment }} />

                                </div>
                            )}
                        </div>
                    )}

                    {leaveDetails && leaveDetails.isApproved == 0 && (
                        <div>
                            <div className='pb-8'>
                                <p className='text-[#F13178] pt-8 font-bold mb-2'>Comment</p>
                                <div className='px-4 mt-6'>

                                    <JoditEditor
                                        ref={editor}
                                        value={content}
                                        tabIndex={1} // tabIndex of textarea
                                        onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                        onChange={newContent => { }}

                                    />

                                </div>
                                <div className='flex gap-4 mt-4 justify-center'>
                                    <button onClick={() => handleApprove()} className="flex bg-[#16DA70] rounded-xl  w-32 items-center justify-center">
                                        <p className='text-white'>Accept</p>
                                        <TiTick size={26} className="text-white" />
                                    </button>

                                    <button onClick={() => handleReject()} className="flex bg-[#DA162E] rounded-xl w-32 items-center justify-center">
                                        <p className='text-white'>Decline</p>
                                        <FaTimes size={20} className="text-white" />
                                    </button>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-fit pb-44">
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
                                                                className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                                                                onClick={() => handleApproveLeave(leaveDetails._id)}
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
                                                                onClick={() => handleRejectLeave(leaveDetails._id)}
                                                            >
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


                    )}
                    <div className="grid grid-cols-2 lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-fit pb-44">
                    </div>


                </div>
            )}
            {/* right section  */}



        </div>
    )
}

export default StaffLeaveDetails