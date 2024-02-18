import React, { useState, useEffect } from 'react';
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom'
import AdminLogin from '../../AdminLogin';
import axios from 'axios';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import ReactLoading from "react-loading";


const CreateSchoolStudent = () => {
    

    const [admin, setAdmin] = useState(false)
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [guardiansPhone, setGuardianPhone] = useState('');
    const [guardiansEmail, setGuardianEmail] = useState('');
    const [year, setYear] = useState('');
    const [term, setTerm] = useState('');
    const [level, setLevel] = useState('');
    const [schools, setSchools] = useState([]);
    const [arrayCourses, setArrayCourses] = useState([]);
    const [selectSchool, setSelectSchool] = useState('');
    const [loading, setLoading] = useState(false);

    const [checkedCourses, setCheckedCourses] = useState([]);
    const [formattedDate, setFormattedDate] = useState('');

    useEffect(() => {
        let staffToken = JSON.parse(localStorage.getItem('StaffToken'));
        if (staffToken && staffToken.token) {
            setAdmin(true);

        }
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
     

    useEffect(() => {
        const currentDate = new Date();
        const options = { year: 'numeric' };
        const formattedString = currentDate.toLocaleDateString('en-US', options).replace(/\//g, '');
        setFormattedDate(formattedString);


    }, []);
    console.log(formattedDate)


    useEffect(() => {
        async function fetchSchools() {

            try {

                const response = await axios.get('http://localhost:5000/api/auth/partner-schools', {

                });
                setSchools(response.data.message)

            } catch (error) {
                toastr.error('Error fetching schools data');
            }
        }

        fetchSchools();

    }, []);


    useEffect(() => {
        async function fetchCourses() {
            try {
                // Check if selectSchool is available before making the API call
                if (selectSchool) {
                    const response = await axios.get('http://localhost:5000/api/auth/partner-schools-course', {
                        headers: {
                            school: selectSchool,
                        },
                    });
                    setArrayCourses(response.data.courses);
                }
            } catch (error) {
                toastr.error('Error fetching course data');
            }
        }

        fetchCourses();
    }, [selectSchool]);




    const createStudent = () => {
        if (selectSchool && firstName && lastName && checkedCourses && level && year && term) {
            setLoading(true);

            axios
                .post('http://localhost:5000/api/auth/register-school-student', {
                    selectSchool,
                    firstName,
                    lastName,
                    level,
                    checkedCourses,
                    year,
                    term,
                    guardiansPhone,
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
        setLevel('');
        setGuardianPhone('');
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
                        <p className='text-[#F13178] text-sm mt-5 font-extrabold' >Register New Student / Pupil</p>
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
                        className='bg-slate-200  h-full rounded-md pb-8'
                    >
                        <div className='sm:flex gap-4 mt-6 px-8'>
                            <p className='text-sm text-gray-600 w-[80px] pt-2'>School:</p>
                            <select
                                placeholder='School Name'
                                className='rounded-md w-full h-[40px] outline-none pl-4 text-gray-400'
                                value={selectSchool}
                                onChange={(event) => setSelectSchool(event.target.value)}
                            >
                                <option> Select School</option>
                                {schools.map((schools, index) => (
                                    <option key={index} value={schools.schoolName}>
                                        {schools.schoolName}
                                    </option>
                                ))}
                            </select>

                        </div>

                        <div className='sm:flex gap-4  sm:mt-6 px-8'>
                            <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'>First Name:</p>
                            <input
                                type='text'
                                className='rounded-md w-full h-[40px] outline-none pl-4'
                                value={firstName}
                                onChange={(event) => setFirstName(event.target.value)}
                            />
                            <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'>Last Name: </p>
                            <input
                                type='test'
                                className='rounded-md w-full h-[40px] outline-none pl-4'
                                value={lastName}
                                onChange={(event) => setLastName(event.target.value)}
                            />


                        </div>


                        <div className='lg:flex'>
                            <div className='sm:flex gap-4  sm:mt-6 px-8 md:w-[550px]'>
                                <p className='text-sm text-gray-600 w-[80px] pt-4 sm:pt-2'>Class:</p>
                                <select
                                    className='rounded-md w-full h-[40px] outline-none pl-4 text-gray-400'
                                    value={level}
                                    onChange={(event) => setLevel(event.target.value)}
                                >
                                    <option>Select Class</option>
                                    <option value='Primary 1'>Primary 1</option>
                                    <option value='Primary 2'>Primary 2</option>
                                    <option value='Primary 3'>Primary 3 </option>
                                    <option value='Primary 4'>Primary 4</option>
                                    <option value='Primary 5'>Primary 5 </option>
                                    <option value='Primary 6'>Primary 6 </option>
                                    <option value='JSS 1'>Junior Secondary School 1</option>
                                    <option value='JSS 2'>Junior Secondary School 2</option>
                                    <option value='JSS 3'>Junior Secondary School 3</option>
                                    <option value='SSS 1'>Senior Secondary School 1</option>
                                    <option value='SSS 2'>Senior Secondary School 2</option>
                                    <option value='SSS 3'>Senior Secondary School 3</option> <option>Primary 1</option>
                                </select>

                            </div>

                            <div className='grid grid-cols-2 w-full gap-12'>
                                <div className='sm:flex gap-4  sm:mt-6 pl-8'>
                                    <p className='text-sm text-gray-600 pt-4 sm:pt-2'>Session:</p>
                                    <select
                                        className='rounded-md w-full h-[40px] outline-none pl-4 text-gray-400'
                                        value={year}
                                        onChange={(event) => setYear(event.target.value)}
                                    >
                                        <option>Select Session</option>
                                        <option value='2023/2024'>2023/2024</option>
                                        <option value='2024/2025'>2024/2025</option>
                                        <option value='2025/2026'>2025/2026</option>
                                        <option value='2026/2027'>2026/2027</option>
                                        <option value='2027/2028'>2027/2028</option>
                                    </select>

                                </div>
                                <div className='sm:flex gap-4  sm:mt-6 pr-8'>
                                    <p className='text-sm text-gray-600 pl-2 pt-4 sm:pt-2'>Term:</p>
                                    <select 
                                        className='rounded-md w-full h-[40px] outline-none pl-4 text-gray-400'
                                        value={term}
                                        onChange={(event) => setTerm(event.target.value)}
                                    >
                                        <option value=''>Select Term</option>
                                        <option value='First Term'>First Term</option>
                                        <option value='Second Term'>Second Term</option>
                                        <option value='Third Term'>Third Term</option>
                                    </select>

                                </div>


                            </div>


                        </div>



                        <div className='sm:flex gap-4 mt-2 sm:mt-6 px-8'>
                            <p className='text-sm text-gray-600 w-[80px] pt-2'>Courses:</p>

                            <div className='grid grid-cols-2 w-full lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3'>
                                {arrayCourses.map((course, index) => (

                                    <div className=' items-center justify-center text-center'>
                                        <label className='text-sm text-gray-600 pt-4 sm:pt-2 w-full'>
                                            {course}
                                        
                                        <input 
                                            type='checkbox' 
                                            className='rounded-md w-full h-[20px] outline-none' 
                                            value={course}
                                            checked={checkedCourses.includes(course)}
                                            onChange={handleCheckboxChange}
                                            />
                                        </label>
                                    </div>
                                ))}




                            </div>




                        </div>
                        {/* <p>Checked Courses: {checkedCourses.join(', ')}</p> */}


                        <div className='border-slate-400 border-b pt-8'></div>
                        <p className='text-slate-400 text-[20px] mt-2 font-extrabold text-center' >
                            Optional <span className='text-base font-normal'>(Parents or Guidance Information)</span>
                        </p>


                        <div className='sm:flex gap-4  sm:mt-6 px-8'>
                            <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'>Email:</p>
                            <input 
                                type='email' 
                                placeholder='example@gmail.com' 
                                className='rounded-md w-full h-[40px] outline-none pl-4' 
                                value={guardiansEmail}
                                onChange={(event) => setGuardianEmail(event.target.value)}
                                />
                            <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'>Phone: </p>
                            <input 
                                type='number' 
                                placeholder='Eg 08012345678' 
                                className='rounded-md w-full h-[40px] outline-none pl-4' 
                                value={guardiansPhone}
                                onChange={(event) => setGuardianPhone(event.target.value)}
                                />
                        </div>


                        <div className='flex gap-8 justify-center px-8'>

                            <button 
                                type='submit'
                                className=' bg-[#F13178] px-2 w-full sm:w-[180px] text-white md:text-[15px]  rounded-lg  mt-6 text-[11px] flex items-center text-center justify-center gap-4 font-bold h-[40px]'>
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

export default CreateSchoolStudent