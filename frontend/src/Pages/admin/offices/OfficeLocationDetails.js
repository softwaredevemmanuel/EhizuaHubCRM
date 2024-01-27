import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";
import { TbBrandOffice } from "react-icons/tb";
import { Dialog, Transition } from '@headlessui/react'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineAttachEmail } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { LuRefreshCcw } from "react-icons/lu";
import ReactLoading from "react-loading";
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




const OfficeLocationDetails = () => {
    const [open, setOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false);
    const [isPosition, setIsPosition] = useState(false);
    const [loading, setLoading] = useState(false);
    const [allStaff, setAllStaff] = useState([]);
    const [totalPosition, setTotalPosition] = useState('');
    const [totalVacantPosition, setTotalVacantPositions] = useState('');
    const [vacantPosition, setVacantPositions] = useState([]);
    const [totalLeave, setTotalLeave] = useState('');
    const [numberOfStaff, setNumberOfStaff] = useState('');
    const [adminId, setAdminId] = useState('');
    const [officeDetails, setOfficeDetails] = useState(false);
    const [deleteButton, setDeleteButton] = useState(false);
    const [deleteLocation, setDeleteLocation] = useState('');
    const [viewStaff, setViewStaff] = useState(true);
    const [viewPosition, setViewPosition] = useState(false);
    const [viewVancancies, setViewVacancies] = useState(false);
    const [allPosition, setAllPositions] = useState([]);
    const [refresh, setRefresh] = useState('');
    const { officeName: contentParam } = useParams();
    const navigate = useNavigate();


    const showlocations = () => {
        setIsOpen(!isOpen);
        setIsPosition(!false);
    }

    const Refresh = () => {
        if(refresh === ''){
            setRefresh('Refreshed')

        }else{
            setRefresh('')

        }
    }
    const DeleteLocation = () => {
        setOpen(true)
    }

    const ViewStaff = () => {
        setViewStaff(true)
        setViewPosition(false)
        setViewVacancies(false)
    }
    const ViewPositions = () => {
        setViewPosition(true)
        setViewStaff(false)
        setViewVacancies(false)
    }
    
    const ViewVacancies = () => {
        setViewVacancies(true)
        setViewStaff(false)
        setViewPosition(false)

    }
    const Compare = () => {
        if (deleteLocation === contentParam) {
            setDeleteButton(true)
        } else {
            setDeleteButton(false)

        }
    }

    const DeleteOffice = async () => {
        let user_token = JSON.parse(localStorage.getItem('User'));
        setLoading(true);
        try {
            const response = await axios.delete('http://localhost:5000/api/auth/delete-location', {
                headers: {
                    location: contentParam,
                },
                data: {
                    adminId: adminId,
                    email: user_token.email

                },
            });

            toastr.success(response.data.message)
            setLoading(false);
            navigate('/office-locations/hr')

        } catch (error) {
            toastr.error(error.response.data.error)
            setLoading(false);
        }
    };


    useEffect(() => {
        Compare()
    }, [deleteLocation, refresh]);

    // Get office Details
    useEffect(() => {
        async function fetchOfficeDetails() {
            try {
                const response = await axios.get('http://localhost:5000/api/auth/office-details', {
                    headers: {
                        location: contentParam
                    }
                });

                setOfficeDetails(response.data.message);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        }
        fetchOfficeDetails();

    }, [contentParam, refresh]);

    // Get Staff by Office Location
    useEffect(() => {
        async function fetchStaff() {
            try {
                const response = await axios.get('http://localhost:5000/api/auth/staff-by-location', {
                    headers: {
                        location: contentParam
                    }
                });

                setAllStaff(response.data.staff);
                setNumberOfStaff(response.data.numberOfStaff)
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        }

        fetchStaff();

    }, [contentParam, refresh]);


    // Get Position by Office Location
    useEffect(() => {
        async function fetchPositions() {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:5000/api/auth/office-positions', {
                    headers: {
                        location: contentParam
                    }
                });
                setTotalPosition(response.data.totalPosition)
                setAllPositions(response.data.message)
            } catch (error) {
                toastr.error('Error retrieving Offices');
            } finally {
                setLoading(false);
            }
        }

        fetchPositions();
    }, [contentParam, refresh]);


    // Get Vacant Positions
    useEffect(() => {
        async function fetchVacantPositions() {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:5000/api/auth/vacant-positions', {
                    headers: {
                        location: contentParam
                    }
                });
                setTotalVacantPositions(response.data.message);
                setVacantPositions(response.data.allPositions);
            } catch (error) {
                toastr.error('Error retrieving Offices');
            } finally {
                setLoading(false);
            }
        }
        fetchVacantPositions();
    }, [contentParam, refresh]);

    // Count Those On Leave
    useEffect(() => {
        async function fetchTotalLeave() {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:5000/api/auth/on-leave', {
                    headers: {
                        location: contentParam
                    }
                });
                setTotalLeave(response.data.message);
            } catch (error) {
                toastr.error('Error retrieving Offices');
            } finally {
                setLoading(false);
            }
        }
        fetchTotalLeave();
    }, [contentParam, refresh]);




    return (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full pb-12">

            {loading && (
                <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
                </div>
            )}

            <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
                <div className='flex justify-between '>
                    <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Office Overview</p>
                    <Link to='/office-locations/hr' className='mt-8'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

                </div>
            </div>
            <div className='border-[#F13178] border-b '></div>

            <div className='flex justify-end'>

                {/* <div className='pt-1 flex gap-4'>
                    <p className='text-[#134574] font-bold'>Position</p>

                    <select type='date' className='rounded-lg h-[30px] w-[200px] text-slate-500 outline-none bg-slate-200 px-4' >
                        <option>Sort by position</option>
                        <option>Tutor</option>
                    </select>

                </div> */}
                <button onClick={Refresh}>
                    <div className='flex gap-2 text-gray-500'>

                        <LuRefreshCcw size={24} />
                        <p className='hidden sm:block'>Refresh</p>
                    </div>
                </button>


            </div>



            <div className='text-[#134574] bg-slate-400 h-full rounded-lg pb-1'>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
                    <div className="grid grid-cols-2 rounded-md text-[#134574] gap-1 max-w-[980px] w-full m-1 bg-slate-500 p-1 h-[140px] mb-auto">
                        <div className='flex justify-center items-center gap-3 bg-slate-400 h-[40px] '>
                            <p className=' font-extrabold'>{totalPosition}</p>
                            <button onClick={ViewPositions}>Positions</button>
                        </div>
                        <div className='flex justify-center items-center gap-3 bg-slate-400 h-[40px] '>
                            <Link to={`/create-position/hr/${contentParam}`} className="bg-slate-500 px-2 rounded-md font-bold flex h-[30px] mx-1 items-center">
                                <p className="text-white pl-2 text-sm">New </p>
                                <FaCirclePlus size={24} className="pl-2 mr-2 text-white" />
                            </Link>
                        </div>

                        <div className='flex justify-center items-center gap-3 bg-slate-400 h-[40px]'>
                            <p className=' font-extrabold'>{numberOfStaff}</p>
                            <button onClick={ViewStaff}>Staff</button>
                        </div>
                        <div className='flex justify-center items-center gap-3 bg-slate-400 h-[40px]'>
                            <Link to={`/create-staff/hr/${contentParam}`} className="bg-slate-500 px-2 rounded-md font-bold flex h-[30px] mx-1 items-center">
                                <p className="text-white pl-2 text-sm">New</p>
                                <FaCirclePlus size={24} className="pl-2 mr-2 text-white" />
                            </Link>
                        </div>

                        <div className='flex justify-center items-center gap-3 bg-slate-400 h-[40px]'>
                            <p className=' font-extrabold text-red-700'>{totalVacantPosition}</p>
                            <button
                                className='text-red-700'
                                onClick={ViewVacancies}
                            >
                                Vacancy
                            </button>
                        </div>
                        <div className='flex justify-center items-center gap-3 bg-slate-400 h-[40px]'>
                            <p className=' font-extrabold'>{totalLeave}</p>
                            <p>On Leave</p>
                        </div>

                    </div>

                    <div className='w-full sm:col-span-2 px-4 sm:px-2 md:pr-2 bg-[#2b6091] text-white text-sm'>
                        <div className='flex justify-between'>
                            <p className='font-bold text-center justify-center pt-2 underline'>Office Details</p>

                            <div className='flex gap-2'>
                                <Link to={`/update-office-location/${contentParam}`} className='font-bold text-center justify-end pt-2'>
                                    <div className='flex gap-1  bg-slate-400 px-1 rounded-lg'>
                                        Edit
                                        <CiEdit size={20} />

                                    </div>
                                </Link>
                                <button onClick={DeleteLocation} className='font-bold text-center justify-end pt-2'>
                                    <div className='flex gap-1  bg-slate-400 px-1 rounded-lg text-red-500'>
                                        <p>Delete</p>
                                        <MdDelete size={20} />

                                    </div>
                                </button>
                            </div>


                        </div>

                        {officeDetails && (
                            <div className='pb-4 sm:pb-1'>
                                <div className='flex gap-2'>
                                    <TbBrandOffice className='mt-3' />
                                    <p className='pt-2 font-bold'>Name: </p>
                                    <p className='pt-2'>{officeDetails.officeName} </p>
                                </div>
                                <div className='flex gap-2'>
                                    <IoLocationOutline className='mt-3' />
                                    <p className='pt-2 font-bold'>Address: </p>
                                    <p className='pt-2'>{officeDetails.officeAddress} {officeDetails.state} </p>
                                </div>
                                <div className='flex gap-2'>
                                    <MdOutlineAttachEmail className='mt-3' />
                                    <p className='pt-2 font-bold'>Email Address: </p>
                                    <p className='pt-2'>{officeDetails.officeEmail}</p>
                                </div>
                                <div className='flex gap-2'>
                                    <FaPhoneAlt className='mt-3' />
                                    <p className='pt-2 font-bold'>Phone Number: </p>
                                    <p className='pt-2'>{officeDetails.officePhone}</p>
                                </div>
                            </div>


                        )}

                    </div>
                </div>


            </div>

            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
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
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-slate-100 px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                                    <div>

                                        <div className=" text-center text-[#134574]">
                                            <Dialog.Title as="h3" className="text-base font-bold leading-6 text-red-600">
                                                DANGER ZONE
                                            </Dialog.Title>

                                            <div className="mt-2 gap-2">
                                                <p className='text-left underline'>Note</p>
                                                <p className='text-left text-xs text-slate-500 pl-4'>1. All Staff assigned to that location will still be available</p>
                                                <p className='text-left text-xs text-slate-500 pl-4'>2. You will not ba able to get staff details based on this location</p>
                                                <p className='text-left text-xs text-slate-500 pl-4'>3. You can still view staff assigned to this location in the general staff section</p>
                                                <p className="text-sm mt-4">Are you sure you want to delete location?</p>

                                                <p className="text-sm mt-4">Type <span className='text-red-600 font-bold'>{contentParam}</span> to proceed?</p>

                                                <input
                                                    type="text"
                                                    onChange={(event) => setDeleteLocation(event.target.value)}
                                                    className='pt-1 text-center border border-slate-300 rounded-md outline-none w-full'
                                                    value={deleteLocation}

                                                />

                                                <p className="text-sm text-red-600 mt-4">Enter Your Admin ID to proceed</p>

                                            </div>
                                            <div className="mt-2 grid gap-2 ">
                                                <input
                                                    type="password"
                                                    className='pt-1 text-center border border-slate-300 rounded-md outline-none'
                                                    onChange={(event) => setAdminId(event.target.value)}
                                                    value={adminId}

                                                />

                                                {deleteButton ? (
                                                    <button
                                                        type='submit'
                                                        className='py-1 text-center bg-red-600 px-1 rounded-lg text-white text-sm mt-4'
                                                        onClick={DeleteOffice}
                                                    >
                                                        Delete
                                                    </button>

                                                ) : (
                                                    <input
                                                        value='Delete'
                                                        className='py-1 text-center bg-slate-200 px-1 rounded-lg text-white text-sm mt-4'
                                                    />
                                                )}

                                            </div>


                                        </div>
                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>


            {/* View Positions */}
            {viewPosition && (
                <div>
                    <div className='flex items-center justify-center '>
                        <p className='text-[#134574] text-[20px] mt-8 font-extrabold' >Positions</p>

                    </div>
                    <div className='border-slate-100 border-b '></div>


                    <div className='bg-slate-200  h-[520px] rounded-lg sm:px-1 mt-2'>
                        <div className='overflow-x-auto mt-1'>
                            <div className='p-1 h-[500px]'>
                                <table className="w-[1000px] bg-white border border-gray-500 mb-8">
                                    <thead>
                                        <tr className='text-[#134574] bg-slate-400'>
                                            <th className="border p-2">Title</th>
                                            <th className="border p-2">Status</th>
                                            <th className="border p-2">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {allPosition.map((position, index) => (
                                            <tr key={index} className='hover:bg-gray-200'>
                                                <td className="border p-3">{position.title}</td>
                                                <td className="border p-3">{position.status}</td>
                                                <td className="border p-3">{position.description}</td>


                                            </tr>
                                        ))}
                                    </tbody>

                                </table>
                            </div>
                        </div>

                    </div>
                </div>

            )}
            {/* View Staff */}
            {viewStaff && (
                <div>
                    <div className='flex items-center justify-center '>
                        <p className='text-[#134574] text-[20px] mt-8 font-extrabold' >Staff</p>

                    </div>
                    <div className='border-slate-100 border-b '></div>


                    <div className='bg-slate-200  h-[520px] rounded-lg sm:px-1 mt-2'>
                        <div className='overflow-x-auto mt-1'>
                            <div className='p-1 h-[500px]'>
                                <table className="w-[1000px] bg-white border border-gray-500 mb-8">
                                    <thead>
                                        <tr className='text-[#134574] bg-slate-400'>
                                            <th className="border p-2">Full-Name</th>
                                            <th className="border p-2">Position</th>
                                            <th className="border p-2">Status</th>
                                            <th className="border p-2">Verified</th>
                                            <th className="border p-2">Email</th>
                                            <th className="border p-2">Details</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {allStaff.map((staff, index) => (
                                            <tr key={index} className='hover:bg-gray-200'>
                                                <td className="border p-3">{staff.firstName} {staff.lastName}</td>
                                                <td className="border p-3">{staff.position}</td>
                                                <td className="border p-3">{staff.user}</td>
                                                <td className="border p-3">{staff.isVerified === 1 ? 'True' : 'False'}</td>
                                                <td className="border p-3">{staff.email}</td>
                                                <td className="border p-3">
                                                    <Link to={`/staff-details/hr/${staff._id}`}>
                                                        <p className='text-green-600 underline'>View More</p>
                                                    </Link></td>

                                            </tr>
                                        ))}
                                    </tbody>

                                </table>
                            </div>
                        </div>

                    </div>
                </div>

            )}
            {/* View Vacancies */}
            {viewVancancies && (
                <div>
                    <div className='flex items-center justify-center '>
                        <p className='text-[#134574] text-[20px] mt-8 font-extrabold' >Vacancies</p>

                    </div>
                    <div className='border-slate-100 border-b '></div>


                    <div className='bg-slate-200  h-[520px] rounded-lg sm:px-1 mt-2'>
                        <div className='overflow-x-auto mt-1'>
                            <div className='p-1 h-[500px]'>
                                <table className="w-[1000px] bg-white border border-gray-500 mb-8">
                                    <thead>
                                        <tr className='text-[#134574] bg-slate-400'>
                                            <th className="border p-2">Title</th>
                                            <th className="border p-2">Status</th>
                                            <th className="border p-2">Description</th>


                                        </tr>
                                    </thead>
                                    <tbody>
                                        {vacantPosition.map((position, index) => (
                                            <tr key={index} className='hover:bg-gray-200'>
                                                <td className="border p-3">{position.title}</td>
                                                <td className="border p-3">{position.status}</td>
                                                <td className="border p-3">{position.description}</td>


                                            </tr>
                                        ))}
                                    </tbody>

                                </table>
                            </div>
                        </div>

                    </div>
                </div>

            )}

        </div>



    )
}

export default OfficeLocationDetails