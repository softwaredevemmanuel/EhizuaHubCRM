import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import StaffLogin from "../StaffLogin";
import { FaCirclePlus } from "react-icons/fa6";
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";
import axios from 'axios';
import toastr from 'toastr';
import ReactLoading from "react-loading";

const Complaints = () => {
    const [user, setUser] = useState(false)
    const [feedback, setFeedback] = useState('feedback')
    const [complaints, setComplaints] = useState('complaints')
    const [complaintsResponse, setComplaintsResponse] = useState([])
    const [feedbackResponse, setFeedbackResponse] = useState([])
    const [loading, setLoading] = useState(false)
    const [content, setContent] = useState([])


    // Fetch Complaints
    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('User'));
        setLoading(true)
        async function fetchContent() {
            try {
                const response = await axios.get('http://localhost:5000/api/staff/feedback_complaints', {
                    headers: {
                        email: user.email
                    }
                });

                setFeedbackResponse(response.data.feedback);
                setComplaintsResponse(response.data.complaints);
                setLoading(false)
            } catch (error) {
                toastr.error('Error retrieving Courses');
                setLoading(false)

            }
        }

        fetchContent();
    }, []);



    return (
        <div className="">
            {user ? (
                <StaffLogin />
            ) : (
                <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-screen">
                    <div className='flex justify-between'>
                        <nav className="flex mt-6" aria-label="Breadcrumb">
                            <ol role="list" className="flex items-center space-x-4">
                                <li>
                                    <div>
                                        <Link to="/dashboard" className="text-[#F13178] hover:text-[#134574]">
                                            <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                                            <span className="sr-only">Home</span>
                                        </Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-[#F13178]" aria-hidden="true" />
                                        <div className="ml-4 text-xs font-bold text-[#F13178]">
                                            COMPLAINTS
                                        </div>

                                    </div>

                                </li>

                            </ol>
                        </nav>
                    </div>

                    <div className='border-[#F13178] border-b '></div>



                    {loading && (
                        <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                            <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
                        </div>
                    )}

                    <div className=" grid md:grid-cols-2 bg-slate-200 p-2 gap-1">

                        <div className="mt-4 md:mt-0">
                            <div className="grid grid-cols-3">
                                <p className=' text-center bg-[#F13178]'></p>
                                <p className=' text-center text-[#FFF] bg-[#F13178]'>Complaints</p>
                                <Link to={`/staff/${complaints}`} className="flex justify-end text-[#FFF] bg-[#F13178] ">
                                    <p className=' '> New</p>
                                    <FaCirclePlus size={26} className="pl-2 mr-2 " />
                                </Link>
                            </div>
                            <div className='bg-slate-500 h-[300px] pt-2 overflow-y-auto'>


                                {/* <Link to='/staff-complaints-details'>
                                    <div className='bg-slate-300 p-1 mx-1 rounded-lg text-[#F13178] mb-2'>
                                        <div className='flex justify-between px-2'>
                                            <p className='font-bold'>Title: <span className="text-sm">hehehehehe</span></p>
                                            <div>
                                                <IoMailUnreadOutline size={20} className=' mx-auto' />
                                            </div>

                                        </div>

                                        <p className='px-2 text-sm'>jejejejejejeje</p>
                                    </div>
                                </Link> */}


                                {complaintsResponse && complaintsResponse.map((comp, index) => (

                                    <div key={index} className='bg-slate-300 p-1 mx-1 rounded-lg text-[#134574] mb-2'>
                                        <div className='flex  px-2'>
                                            <p className='font-bold text-sm'>Title: {comp.title}</p>


                                        </div>
                                        <div className="flex text-sm items-center">
                                            <p className="font-bold text-xs pr-2">Complaints:</p>
                                            <div dangerouslySetInnerHTML={{ __html: comp.content.slice(0, 30) }} />
                                            <p className="font-bold text-xs pr-2">.....</p>
                                            <Link to={`/staff/${complaints}/details/${comp.complaintId}`}>
                                                <p className=' underline text-green-800 text-xs '>View More</p>
                                            </Link>
                                        </div>
                                    </div>
                                ))}



                            </div>
                        </div>

                        <div className="mt-4 md:mt-0">
                            <div className="grid grid-cols-3">
                                <p className=' text-center bg-[#134574]'></p>
                                <p className=' text-center text-[#FFF] bg-[#134574]'>Feedback</p>
                                <Link to={`/staff/${feedback}`} className="flex justify-end text-[#FFF] bg-[#134574] ">
                                    <p className=' '> New</p>
                                    <FaCirclePlus size={26} className="pl-2 mr-2 " />
                                </Link>
                            </div>

                            <div className='bg-slate-500 h-[300px] pt-2 overflow-y-auto'>

                                {feedbackResponse.map((feed, index) => (

                                    <div key={index} className='bg-slate-300 p-1 mx-1 rounded-lg text-[#134574] mb-2'>
                                        <div className='flex justify-between px-2'>
                                            <div className="flex gap-2  items-center text-sm">
                                                <p className="font-bold text-xs">Comment:</p>
                                                <div dangerouslySetInnerHTML={{ __html: feed.content }} />
                                            </div>
                                            <Link to={`/staff/${feedback}/details/${feed.feedbackId}`}>
                                                <p className=' underline text-[#134574] text-sm '>View Details</p>
                                            </Link>

                                        </div>
                                        {[1, 2, 3, 4, 5].map((starNumber) => (
                                            <div key={starNumber} className="inline-block relative w-4 sm:w-6" >
                                                <input
                                                    type="checkbox"
                                                    id={`star-checkbox-${starNumber}`}
                                                    className="absolute opacity-0"
                                                    checked={feed.star.includes(`star ${starNumber}`)}
                                                    readOnly
                                                />
                                                <label
                                                    htmlFor={`star-checkbox-${starNumber}`}
                                                    className={`block text-white cursor-pointer ${feed.star.includes(`star ${starNumber}`) ? 'text-blue-500' : 'text-gray-400'}`}
                                                >
                                                    <svg
                                                        className={`w-4 sm:w-5 h-4 sm:h-5 fill-current`}
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M12 2L15.09 8.5H22L17 13.4L19.91 21.05L12 17.15L4.09 21.05L7 13.4L2 8.5H8.91L12 2Z"
                                                        />
                                                    </svg>
                                                </label>
                                            </div>
                                        ))}

                                    </div>
                                ))}



                            </div>
                        </div>





                    </div>


                </div>
            )
            }
            {/* right section  */}



        </div >

    )
}

export default Complaints