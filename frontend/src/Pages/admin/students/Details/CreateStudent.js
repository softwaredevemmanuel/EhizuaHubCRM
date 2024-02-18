import React, { useState, useEffect } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useParams } from 'react-router-dom'
import { TiCameraOutline } from "react-icons/ti";
import axios from 'axios';
import ReactLoading from "react-loading";
import toastr from 'toastr';


const CreateStudent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [email, setEmail] = useState('');
    const [course, setCourse] = useState('');
    const [allCourses, setAllCourse] = useState([]);
    const [phone, setPhone] = useState('');
    const [guardiansFullname, setGuardianFullname] = useState('');
    const [guardiansPhone, setGuardianPhone] = useState('');
    const [guardiansAddress, setGuardianAddress] = useState('');
    const [courseFee, setCourseFee] = useState('');
    const [amountPaid, setAmountPaid] = useState('');
    const [homeAddress, setHomeAddress] = useState('');

    const [loading, setLoading] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');

    const { location: locationParams } = useParams();
    const [selectedHubCourses, setSelectedHubCourses] = useState([]);

    const handleHubCheckboxChange = (course) => {
        if (selectedHubCourses.includes(course)) {
            setSelectedHubCourses(selectedHubCourses.filter((selectedHubCourse) => selectedHubCourse !== course));

        } else {
            setSelectedHubCourses([...selectedHubCourses, course]);
        }
    };


    // Fetch Courses
    useEffect(() => {
        setLoading(true)
        async function fetchCourses() {
            try {
                const response = await axios.get('http://localhost:5000/api/auth/upskill_courses');
                setAllCourse(response.data.message);
                setLoading(false)
            } catch (error) {
                toastr.error('Error retrieving Courses');
            }
        }

        fetchCourses();
    }, []);


    const createStudent = () => {
        if (firstName && lastName && email && selectedHubCourses && phone ) {
            setLoading(true);

            axios
                .post('http://localhost:5000/api/auth/create-student', {
                    
                    firstName,
                    lastName,
                    middleName,
                    phone,
                    email,
                    courseArray : selectedHubCourses,
                    location: locationParams,
                    address: homeAddress,
                    guardiansFullname,
                    guardiansPhone,
                    guardiansAddress,
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
        createStudent();
    };

    const clearForm = () => {
        setFirstName('');
        setLastName('');
        setMiddleName('');
        setEmail('');
        setSelectedHubCourses([]);
        setPhone('');
        setGuardianFullname('');
        setGuardianPhone('');
        setGuardianAddress('');
        setHomeAddress('');
    };


    return (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full">
            <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
                <div className='flex justify-between '>
                </div>
            </div>

            <div className='flex justify-between '>
                <p className='text-[#F13178] text-[20px] mt-2 font-extrabold' >Register Student</p>
                <Link to='/student-section/hr' className='mt-2'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

            </div>

            <div className='border-[#F13178] border-b '></div>

            {loading && (
                <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
                </div>
            )}

            <form className='bg-slate-200 sm:h-full rounded-md pb-8' onSubmit={handleSubmit}>
                <div className='sm:flex gap-4 mt-6 px-8'>
                    <p className='text-sm text-gray-600 w-[180px] pt-2'>First</p>
                    <input 
                        type='text' 
                        placeholder='First Name' 
                        className='rounded-md w-full h-[40px] outline-none pl-4' 
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                    />
                    <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'> Middle</p>
                    <input 
                        type='text' 
                        placeholder='Middle Name' 
                        className='rounded-md w-full h-[40px] outline-none pl-4'
                        value={middleName}
                        onChange={(event) => setMiddleName(event.target.value)}
                    />
                </div>

                <div className='sm:flex gap-4 mt-2 sm:mt-6 px-8'>
                    <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'> Last</p>
                    <input 
                        type='text' 
                        placeholder='Middle Name' 
                        className='rounded-md w-full h-[40px] outline-none pl-4' 
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                    />
                    <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'>Phone</p>
                    <input 
                        type='number' 
                        placeholder='Students Phone Number' 
                        className='rounded-md w-full h-[40px] outline-none pl-4' 
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                    />

                </div>
                <div className='sm:flex gap-4  sm:mt-6 px-8'>
                    <p className='text-sm text-gray-600 w-[70px] pt-4 sm:pt-2'>Email</p>
                    <input 
                        type='email' 
                        placeholder='example@gmail.com' 
                        className='rounded-md w-full sm:w-[350px] h-[40px] outline-none pl-4' 
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                  

                </div>

                <p className='text-center mt-4'>Select Course</p>
                <div className='border border-slate-400 mt-4  mx-8'>
                    <div className='grid grid-cols-3 px-4 py-2'>

                        {allCourses.map((course, index) => (
                            <div key={index}>
                                <input
                                    type='checkbox'
                                    id={`hubCourse-${index}`}
                                    value={course.course}
                                    checked={selectedHubCourses.includes(course.course)}
                                    onChange={() => handleHubCheckboxChange(course.course)}
                                />
                                <label htmlFor={`course-${index}`}>{course.course}</label>
                            </div>
                        ))}
                    </div>

                </div>


                <div className='sm:flex gap-4 sm:mt-6 px-8'>
                    <p className='text-sm text-gray-600 w-[80px] pt-4 sm:pt-2'>Address</p>
                    <textarea 
                        placeholder='Students Home Address' 
                        className='outline-none w-full rounded-md h-[40px] pl-4 pt-2' 
                        value={homeAddress} 
                        onChange={(event) => setHomeAddress(event.target.value)}
                    />

                </div>



                <div className='flex justify-center mt-4 text-gray-600 font-bold'>
                    <p>Guidiance or Next of Kin Details</p>
                </div>

                <div className='border-slate-50 border-b '></div>

                <div className='sm:flex gap-4 mt-2 sm:mt-6 px-8'>
                    <div className='w-full'>
                        <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'>Full Name</p>
                        <input
                            type='text'
                            className='rounded-md w-full h-[40px] outline-none pl-4'
                            value={guardiansFullname}
                            onChange={(event) => setGuardianFullname(event.target.value)}
                        />

                    </div>
                    <div className='w-full'>

                        <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'>Phone Number</p>
                        <input
                            type='number'
                            className='rounded-md w-full h-[40px] outline-none pl-4'
                            value={guardiansPhone}
                            onChange={(event) => setGuardianPhone(event.target.value)}
                        />

                    </div>
                </div>


                <div className='sm:flex gap-4 sm:mt-2 px-8'>
                    <div className='w-full'>
                        <p className='text-sm text-gray-600 w-[80px] pt-4 sm:pt-2'>Address</p>
                        <textarea
                            className='outline-none w-full rounded-md h-[80px] pl-4 pt-2'
                            value={guardiansAddress}
                            onChange={(event) => setGuardianAddress(event.target.value)}
                        />

                    </div>
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
    )
}

export default CreateStudent