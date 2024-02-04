import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";
import axios from 'axios';
import toastr from 'toastr';
import ReactLoading from "react-loading";
import { useNavigate } from 'react-router-dom';



const CreateCourse = () => {
    const [loading, setLoading] = useState(false);
    const [offices, setOffices] = useState([]);
    const [location, setLocation] = useState('');
    const [course, setCourse] = useState('');
    const [price, setPrice] = useState('');
    const [duration, setDuration] = useState('');
    const [courseDetails, setCourseDetails] = useState('');
    const navigate = useNavigate();

    let adminUser = JSON.parse(localStorage.getItem('User'));



    // Fetch All Offices
    useEffect(() => {
        async function fetchOffices() {
            try {
                setLoading(true);
                const response = await axios.get('http://localhost:5000/api/auth/all_offices', {
                    headers: {
                        token: adminUser.Token,
                    }
                });
                setOffices(response.data.message);
            } catch (error) {
                if (error.response.data.error === "Token expired") {

                    toastr.error("Session expired. Please login again");
                    setTimeout(() => {
                        localStorage.clear();
                        window.location.reload();
                    }, 2000);
                } else {
                    toastr.error('Error retrieving Offices');
                    setLoading(false)
                }
            } finally {
                setLoading(false); // Set loading to false regardless of success or failure
            }
        }

        fetchOffices();
    }, []);

    const createCourse = () => {
        if (course && price && duration) {
            setLoading(true);

            axios
                .post('http://localhost:5000/api/auth/create-course', {

                    course,
                    price,
                    duration,
                    courseDetails,
                    location
                })
                .then((response) => {
                    toastr.success(response.data.message);
                    clearForm();
                    navigate('/student-course/hr')
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
        setOffices([]);
        setDuration('');
        setPrice('');
        setCourseDetails('');
    };

    return (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-screen">
            <div className="w-full  bg-[#C8D1DA] flex flex-col gap-3">
                <div className='flex justify-between '>
                    <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Create New Course</p>
                    <Link to='/student-course/hr' className='mt-8'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

                </div>
            </div>
            <div className='border-[#F13178] border-b '></div>

            {loading && (
                <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
                </div>
            )}
            

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                    <div className='pt-1 gap-4'>
                        <p className='text-[#134574] font-bold'>Office</p>

                        <select
                            className='rounded-lg h-[30px] w-full text-slate-500 outline-none bg-slate-200 px-4'
                            value={location}
                            onChange={(event) => setLocation(event.target.value)}
                        >
                            <option value=''>Select Location</option>
                            {offices.map((office, index) => (
                                <option key={index} value={`${office.officeName}`}>
                                    {office.officeName}
                                </option>
                            ))}
                        </select>


                    </div>
                    <div className="">

                        <label className='text-[#134574] '>Course Name</label>
                        <input
                            type='text'
                            placeholder='E.g Process Engine Automation'
                            className='pl-4 h-[40px] w-full rounded-md outline-none mt-1'
                            value={course}
                            onChange={(event) => setCourse(event.target.value)}

                        />
                    </div>
                </div>
                <div className='grid grid-cols-2 mt-2 gap-4'>
                    <div className=''>
                        <p className='text-[#134574] '>Duration In Weeks</p>
                        <input
                            type='number'
                            placeholder='E.g 12'
                            className='pl-4 h-[40px]  rounded-md outline-none mt-1 w-full'
                            value={duration}
                            onChange={(event) => setDuration(event.target.value)}
                        />

                    </div>
                    <div className="">
                        <p className='text-[#134574] '> ₦ Course Price</p>
                        <input
                            type='number'
                            placeholder='E.g 600000'
                            className='pl-4 h-[40px] w-full rounded-md outline-none mt-1'
                            value={price}
                            onChange={(event) => setPrice(event.target.value)}
                        />

                    </div>

                </div>

                <div>
                    <label className='text-[#134574] '>Course Details</label>
                    <textarea
                        placeholder='Message'
                        className='pl-4 h-[100px] w-full rounded-md outline-none mt-1'
                        value={courseDetails}
                        onChange={(event) => setCourseDetails(event.target.value)}
                    />
                </div>



                <div>
                    <label className='text-[#134574] '>Upload Image</label>
                    <input type='file' multiple className='pl-4 h-[40px] w-full rounded-md outline-none mt-1' />
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



    )
}

export default CreateCourse