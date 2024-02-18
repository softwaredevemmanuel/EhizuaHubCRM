import React, { useState, useEffect } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom'
import { TiCameraOutline } from "react-icons/ti";
import AdminLogin from '../../AdminLogin';
import axios from 'axios';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import ReactLoading from "react-loading";


const CreateSchool = () => {

    const [admin, setAdmin] = useState(false);
    const [schoolName, setSchoolName] = useState('');
    const [monday, setMonday] = useState(false);
    const [tuesday, setTuesday] = useState(false);
    const [wednesday, setWednesday] = useState(false);
    const [thursday, setThursday] = useState(false);
    const [friday, setFriday] = useState(false);
    const [saturday, setSatuday] = useState(false);
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [duration, setDuration] = useState('1x A Week');
    const [amountPaid, setAmountPaid] = useState('');
    const [courseFee, setCourseFee] = useState('');
    const [schoolAddress, setSchoolAddress] = useState('');
    const [allCourses, setAllCourse] = useState([]);
    const [loading, setLoading] = useState(false);

    const [checkedCourses, setCheckedCourses] = useState([]);



    useEffect(() => {
        let staffToken = JSON.parse(localStorage.getItem('StaffToken'));
        if (staffToken && staffToken.token) {
            setAdmin(true);

        }
    }, []);

    // Fetch Courses
    useEffect(() => {
        setLoading(true)
        async function fetchCourses() {
            try {
                const response = await axios.get('http://localhost:5000/api/auth/all_school_subject');
                setAllCourse(response.data.message);
                setLoading(false)
            } catch (error) {
                toastr.error('Error retrieving Courses');
            }
        }

        fetchCourses();
    }, []);


    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;

        if (checked) {
            setCheckedCourses((prevCheckedCourses) => [...prevCheckedCourses, value]);
        } else {
            setCheckedCourses((prevCheckedCourses) =>
                prevCheckedCourses.filter((course) => course !== value)
            );
        }
    };


    const createSchool = () => {
        if (schoolName) {
            setLoading(true);

            axios
                .post('http://localhost:5000/api/auth/create-school', {
                    schoolName,
                    checkedCourses,
                    monday,
                    tuesday,
                    wednesday,
                    thursday,
                    friday,
                    saturday,
                    phone,
                    email,
                    duration,
                    courseFee,
                    amountPaid,
                    schoolAddress
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
        createSchool();
    };

    const clearForm = () => {
        setSchoolName('');
        setMonday(false);
        setTuesday(false);
        setWednesday(false);
        setThursday(false);
        setFriday(false);
        setSatuday(false);
        setEmail('');
        setPhone('');
        setDuration('');
        setCourseFee('');
        setAmountPaid('');
        setSchoolAddress('');
        setCheckedCourses([]);
    };
    return (
        <div>
            {!admin ? (
                <AdminLogin />
            ) : (
                <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full">
                    <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
                        <div className='flex justify-between '>
                        </div>
                    </div>

                    <div className='flex justify-between '>
                        <p className='text-[#F13178] text-[20px] mt-2 font-extrabold' >Register School</p>
                        <Link to='/partner-schools/hr' className='mt-2'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

                    </div>

                    <div className='border-[#F13178] border-b '></div>


                    {loading && (
                        <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                            <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
                        </div>
                    )}


                    <form
                        onSubmit={handleSubmit}
                        className='bg-slate-200 rounded-md pb-8'
                    >
                        <div className='sm:flex gap-4 mt-6 px-8'>
                            <p className='text-sm text-gray-600 w-[80px] pt-2'>Name</p>
                            <input
                                type='text'
                                placeholder='School Name'
                                className='rounded-md w-full h-[40px] outline-none pl-4'
                                value={schoolName}
                                onChange={(event) => setSchoolName(event.target.value)}
                            />

                        </div>



                        <div className='sm:flex gap-4 mt-2 sm:mt-6 px-8'>
                            <p className='text-sm text-gray-600 w-[80px] pt-2'>Courses</p>

                            <div className='grid grid-cols-2 w-full lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3'>
                               

                                {allCourses.map((course, index) => (

                                    <div 
                                        key={index}
                                        className=' items-center justify-center text-center'>
                                        <p className='text-sm text-gray-600  pt-4 sm:pt-2 w-full'> {course.course}</p>
                                        <input 
                                            type='checkbox' 
                                            className='rounded-md w-full h-[20px] outline-none' 
                                            value={course.course}
                                            checked={checkedCourses.includes(course.course)}
                                            onChange={handleCheckboxChange}
                                        />
                                    </div>

                                ))}


                            </div>



                        </div>

                        {/* <p>Checked Courses: {checkedCourses.join(', ')}</p> */}

                        <div className='sm:flex gap-4 mt-2 sm:mt-6 px-8'>
                            <p className='text-sm text-gray-600 w-[80px] pt-2'>Days</p>

                            <div className='grid grid-cols-3 w-full md:flex '>
                                <div className=' items-center justify-center text-center md:w-full'>
                                    <p className='text-sm text-gray-600 pt-4 sm:pt-2 w-full'>Monday</p>
                                    <input 
                                        type='checkbox' 
                                        className='rounded-md w-full h-[20px] outline-none' 
                                        value="monday"
                                        onChange={(event) => setMonday(event.target.value)} 
                                    />
                                </div>


                                <div className=' items-center justify-center text-center md:w-full'>
                                    <p className='text-sm text-gray-600  pt-4 sm:pt-2 w-full'>Tuesday</p>
                                    <input 
                                        type='checkbox' 
                                        className='rounded-md w-full h-[20px] outline-none'
                                        value="tuesday"
                                        onChange={(event) => setTuesday(event.target.value)} 
                                    />
                                </div>

                                <div className=' items-center justify-center text-center md:w-full'>
                                    <p className='text-sm text-gray-600 pt-4 sm:pt-2 w-full'>Wednesday</p>
                                    <input 
                                        type='checkbox' 
                                        className='rounded-md w-full h-[20px] outline-none ' 
                                        value='wednesday'
                                        onChange={(event) => setWednesday(event.target.value)}
                                        />
                                </div>

                                <div className=' items-center justify-center text-center md:w-full'>
                                    <p className='text-sm text-gray-600 pt-4 sm:pt-2 w-full'>Thursday</p>
                                    <input 
                                        type='checkbox' 
                                        className='rounded-md w-full h-[20px] outline-none ' 
                                        value='thursday'
                                        onChange={(event) => setThursday(event.target.value)}
                                        />
                                </div>

                                <div className=' items-center justify-center text-center md:w-full'>
                                    <p className='text-sm text-gray-600 pt-4 sm:pt-2 w-full'>Friday</p>
                                    <input 
                                        type='checkbox' 
                                        className='rounded-md w-full h-[20px] outline-none ' 
                                        value='friday'
                                        onChange={(event) => setFriday(event.target.value)}
                                    />
                                </div>
                                <div className=' items-center justify-center text-center md:w-full'>
                                    <p className='text-sm text-gray-600 pt-4 sm:pt-2 w-full'>Saturday</p>
                                    <input 
                                        type='checkbox' 
                                        className='rounded-md w-full h-[20px] outline-none ' 
                                        value="saturday"
                                        onChange={(event) => setSatuday(event.target.value)} 
                                    />
                                </div>

                            </div>



                        </div>
                        <div className='sm:flex gap-4  sm:mt-6 px-8'>
                            <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'>Email</p>
                            <input 
                                type='email' 
                                placeholder='example@gmail.com' 
                                className='rounded-md w-full h-[40px] outline-none pl-4' 
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                            <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'>Phone </p>
                            <input 
                                type='number' 
                                placeholder='Eg 08012345678' 
                                className='rounded-md w-full h-[40px] outline-none pl-4' 
                                value={phone}
                                onChange={(event) => setPhone(event.target.value)}/>


                        </div>
                        <div className='sm:flex gap-4 sm:mt-6 px-8'>

                            <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'>Duration</p>
                            <select 
                                className='rounded-md w-full h-[40px] text-gray-600 pl-2 outline-none'
                                value={duration}
                                onChange={(event) => setDuration(event.target.value)}
                            >
                                <option value='1x A Week'>Once A Week</option>
                                                <option value='2x A Week'>2 Times A Week</option>
                                                <option value='3x A Week'>3 Times A Week</option>
                                                <option value='4x A Week'>4 Times A Week</option>
                                                <option value='5x A Week'>5 Times A Week</option>
                            </select>
                            <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'>Fee</p>
                            <input 
                                type='number' 
                                placeholder='Course Fee Per Child' 
                                className='rounded-md w-full h-[40px] outline-none pl-4' 
                                value={courseFee}
                                onChange={(event) => setCourseFee(event.target.value)}/>

                        </div>
                        <div className='sm:flex gap-4 sm:mt-6 px-8'>
                            <p className='text-sm text-gray-600 w-[80px] pt-4 sm:pt-2'>Address</p>
                            <textarea 
                                placeholder='School Address' 
                                className='outline-none w-full rounded-md h-[80px] pl-4 pt-2' 
                                value={schoolAddress} 
                                onChange={(event) => setSchoolAddress(event.target.value)} 
                            />

                        </div>


                        <div className='flex gap-8 justify-center px-8'>

                            <button className=' bg-[#F13178] px-2 w-full sm:w-[180px] text-white md:text-[15px]  rounded-lg  mt-6 text-[11px] flex items-center text-center justify-center gap-4 font-bold h-[40px]'>
                                Register
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

export default CreateSchool