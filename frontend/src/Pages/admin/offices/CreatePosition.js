import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";
import axios from 'axios';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import ReactLoading from "react-loading";
import { useParams } from 'react-router-dom';
import AdminLogin from '../AdminLogin';



const CreatePosition = () => {
    const [jobTitle, setJobTitle] = useState('')
    const [jobStatus, setJobStatus] = useState('')
    const [jobDescription, setJobDescription] = useState('')
    const [loading, setLoading] = useState(false);
    const [admin, setAdmin] = useState(false)
    const { officeName: contentParam } = useParams();




    useEffect(() => {
        let staffToken = JSON.parse(localStorage.getItem('StaffToken'));
        if (staffToken && staffToken.token) {
            setAdmin(true);

        }
    }, []);


    const createPosition = () => {
        let userEmail = JSON.parse(localStorage.getItem('User'));

        if (jobTitle && jobStatus && jobDescription) {
            setLoading(true);

            axios
                .post('http://localhost:5000/api/auth/create-position', {

                    email: userEmail.email,
                    jobTitle: jobTitle,
                    status: jobStatus,
                    description: jobDescription,
                    location: contentParam
                })
                .then((response) => {
                    toastr.success(response.data.message);
                    clearForm();
                })
                .catch((error) => {
                    toastr.error(error.response.data.message);
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            toastr.warning('Please fill in all required fields.');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createPosition();
    };

    const clearForm = () => {
        setJobTitle('');
        setJobStatus('');
        setJobDescription('');
    };

    return (
        <div>
            {!admin ? (
                <AdminLogin />
            ) : (
                <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-screen">
                    <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
                        <div className='flex justify-between '>
                            <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Create New Position</p>
                            <Link to={`/office-details/hr/${contentParam}`} className='mt-8'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

                        </div>
                    </div>
                    <div className='border-[#F13178] border-b '></div>

                    {loading && (
                        <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                            <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>

                        <div className='sm:flex gap-4'>
                            <div className='w-full'>
                                <label className='text-gray-600 '>Job Title</label>
                                <input
                                    type='text'
                                    placeholder='E.g Animation Instructor'
                                    className='pl-4 h-[40px] w-full rounded-md outline-none mt-1'
                                    value={jobTitle}
                                    onChange={(event) => setJobTitle(event.target.value)}
                                />
                            </div>

                            <div className='w-full'>

                                <p className=' text-gray-600 w-full pt-4 sm:pt-2'>Job Status</p>
                                <select
                                    className='rounded-md w-full h-[40px] text-gray-600 pl-2 outline-none'
                                    value={jobStatus}
                                    onChange={(event) => setJobStatus(event.target.value)}
                                >
                                    <option value=''>Select</option>
                                    <option value='Part Time'>Part Time</option>
                                    <option value='Full Time'>Full Time</option>
                                    <option value='Hybrid'>Hybrid</option>
                                </select>

                            </div>
                        </div>

                        <div className='mt-4'>
                            <label className='text-gray-600'>Job Description</label>
                            <textarea
                                placeholder='Message'
                                className='pl-4 h-[100px] w-full rounded-md outline-none mt-1 pt-2'
                                value={jobDescription}
                                onChange={(event) => setJobDescription(event.target.value)} />
                        </div>

                        <div className="flex justify-start">
                            <button className="bg-[#F13178] px-2 mt-4 text-center items-center rounded-[6px] font-bold flex justify-center h-[40px] w-fit">
                                <div className="flex">
                                    <p className="text-white px-2">Create</p>
                                </div>
                            </button>
                        </div>
                    </form>




                    <div className="grid grid-cols-2 lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-fit pb-44">

                    </div>



                </div>
            )}
        </div>





    )
}

export default CreatePosition