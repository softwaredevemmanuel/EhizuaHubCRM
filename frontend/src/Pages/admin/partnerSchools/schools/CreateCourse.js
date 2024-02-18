import React, { useState, useEffect } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom'
import axios from 'axios';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import ReactLoading from "react-loading";
import AdminLogin from "../../AdminLogin";


const CreateCourse = () => {
    const [admin, setAdmin] = useState(false)
    const [course, setCourse] = useState('');
    const [loading, setLoading] = useState(false);



    useEffect(() => {
        let staffToken = JSON.parse(localStorage.getItem('StaffToken'));
        if (staffToken && staffToken.token) {
            setAdmin(true);

        }
    }, []);

    const createCourse = () => {
        if (course) {
            setLoading(true);

            axios
                .post('http://localhost:5000/api/auth/create-subject', {

                    course
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
        createCourse();
    };

    const clearForm = () => {
        setCourse('');
    };

    return (
        <div>
            {!admin ? (
                <AdminLogin />
            ) : (
                <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-screen">
                    <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
                        <div className='flex justify-between '>
                        </div>
                    </div>

                    <div className='flex justify-between '>
                        <p className='text-[#F13178] text-sm mt-6 font-extrabold ' >Create Course</p>
                        <Link to='/partner-schools/hr' className='mt-3'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

                    </div>

                    <div className='border-[#F13178] border-b '></div>
                    {loading && (
                        <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                            <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
                        </div>
                    )}

                    <form 
                        className='bg-slate-200 h-fit rounded-md pb-4'
                        onSubmit={handleSubmit}
                    >
                        <div className='sm:flex gap-4 mt-6 px-8'>
                            <p className='text-sm text-gray-600 w-[80px] pt-2'>Name</p>
                            <input
                                type='text'
                                placeholder='eg Fullstack Web Development'
                                className='rounded-md w-full h-[40px] outline-none pl-4'
                                value={course}
                                onChange={(event) => setCourse(event.target.value)}
                            />

                        </div>



                        <div className='flex justify-center'>

                            <button className=' bg-[#F13178] px-4 w-fit text-white  rounded-md mt-6'>
                                Create
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

export default CreateCourse