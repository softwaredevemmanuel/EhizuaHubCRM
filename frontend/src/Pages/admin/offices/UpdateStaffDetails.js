import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom'
import { TiCameraOutline } from "react-icons/ti";
import ReactLoading from "react-loading";
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import { useParams } from 'react-router-dom';


const UpdateStaffDetails = () => {
    const [selectedTitle, setSelectedTitle] = useState('');
    const [selectedUser, setSelectedUser] = useState('');
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [allHubCourses, setHubAllCourse] = useState([""]);
    const [allSchoolCourses, setAllSchoolCourse] = useState([""]);
    const [allSchools, setAllSchools] = useState([""]);
    const [phone, setPhone] = useState('');
    const [position, setPosition] = useState('');
    const [salary, setSalary] = useState('');
    const [sickLeave, setSickLeave] = useState('1');
    const [accountNumber, setAccountNumber] = useState('');
    const [bankName, setBankName] = useState('');
    const [homeAddress, setHomeAddress] = useState('');
    const [nextOfKinFullName, setNextOfKinFullName] = useState('');
    const [nextOfKinNumber, setNextOfKinNumber] = useState('');
    const [nextOfKinAddress, setNextOfKinAddress] = useState('');
    const [hubInstructor, setHubInstrutor] = useState(false);
    const [schoolInstructor, setSchoolInstrutor] = useState(false);
    const [selectedJobType, setSelectedJobType] = useState('');
    const [loading, setLoading] = useState(false); // New state for loading indicator
    const [checkedHubCourses, setCheckedHubCourses] = useState([]);
    const [checkedSchoolCourses, setCheckedSchoolCourses] = useState([]);
    const [officePositions, setOfficePositions] = useState([]);

    const { officeName: contentParam } = useParams();



    const handleCheckboxChangeHub = (event) => {
        const { value, checked } = event.target;

        if (checked) {
            setCheckedHubCourses((prevCheckedHubCourses) => [...prevCheckedHubCourses, value]);
            setHubInstrutor(true)
        } else {
            setCheckedHubCourses((prevCheckedHubCourses) =>
                prevCheckedHubCourses.filter((course) => course !== value)
            );
            setHubInstrutor(false)
            setSelectedHubCourses([])

        }
    };
    const handleCheckboxChangeSchool = (event) => {
        const { value, checked } = event.target;

        if (checked) {
            setCheckedSchoolCourses((prevCheckedSchoolCourses) => [...prevCheckedSchoolCourses, value]);
            setSchoolInstrutor(true)
        } else {
            setCheckedSchoolCourses((prevCheckedSchoolCourses) =>
                prevCheckedSchoolCourses.filter((course) => course !== value)
            );
            setSchoolInstrutor(false)
            setSelectedSchoolCourses([])

        }
    };


    // Fetch Office Positions
    useEffect(() => {
        async function fetchPositions() {
            try {
                const response = await axios.get('http://localhost:5000/api/auth/office-positions',{
                    headers:{
                        location:contentParam
                    }
                });
                setOfficePositions(response.data.message);
            } catch (error) {
                toastr.error('Error retrieving Area Offices');
            }
        }

        fetchPositions();
    }, []);

    // Fetch Hub Courses
    useEffect(() => {
        async function fetchHubCourses() {
            try {
                const response = await axios.get('http://localhost:5000/api/auth/all_upskill_courses');
                setHubAllCourse(response.data.message);
            } catch (error) {
                toastr.error('Error retrieving Courses');
            }
        }

        fetchHubCourses();
    }, []);

    // Fetch School Courses
    useEffect(() => {
        async function fetchSchoolCourses() {
            try {
                const response = await axios.get('http://localhost:5000/api/auth/all_school_subject');
                setAllSchoolCourse(response.data.message);
            } catch (error) {
                toastr.error('Error retrieving Courses');
            }
        }

        fetchSchoolCourses();
    }, []);


    // Fetch School Courses
    useEffect(() => {
        async function fetchSchools() {

            try {

                const response = await axios.get('http://localhost:5000/api/auth/partner-schools', {

                });
                setAllSchools(response.data.message)

            } catch (error) {
                toastr.error('Error fetching schools data');
            }
        }

        fetchSchools();

    }, []);


    const createStaff = () => {
        if (
            selectedTitle &&
            firstName &&
            lastName &&
            email &&
            position &&
            phone) {
            setLoading(true); // Start loading indicator

            axios.post("http://localhost:5000/api/auth/create-staff", {
                title: selectedTitle,
                user: selectedUser,
                first_name: firstName,
                middle_name: middleName,
                last_name: lastName,
                email: email,
                selectedJobType: selectedJobType,
                dateOfBirth: dateOfBirth,
                position: position,
                hubInstructor: hubInstructor,
                schoolInstructor: schoolInstructor,
                hubCourse: selectedHubCourses,
                schoolCourse: selectedSchoolCourses,
                school: selectedSchools,
                phone: phone,
                salary: salary,
                office: contentParam,
                sick_leave: sickLeave,
                homeAddress: homeAddress,
                bankName: bankName,
                accountNumber: accountNumber,
                nextOfKinFullName: nextOfKinFullName,
                nextOfKinNumber: nextOfKinNumber,
                nextOfKinAddress: nextOfKinAddress

            })
                .then(response => {
                    toastr.success(response.data.message);

                    // Clear input fields after successful submission
                    setSelectedTitle('');
                    setFirstName('');
                    setLastName('');
                    setMiddleName('');
                    setEmail('');
                    setPhone('');
                    setSickLeave('');
                    setPosition('');
                    setHubInstrutor(false);
                    setSchoolInstrutor(false);
                    setSelectedJobType('');
                    setAccountNumber('');
                    setDateOfBirth('');
                    setSalary('');
                    setBankName('');
                    setHomeAddress('');
                    setNextOfKinNumber('');
                    setNextOfKinFullName('');
                    setNextOfKinAddress('');
                    setHubInstrutor(false);
                    setSchoolInstrutor(false);

                })
                .catch(error => {
                    toastr.error(error.response.data.message);
                })
                .finally(() => {
                    setLoading(false); // Stop loading indicator
                });
        } else {
            toastr.warning('Please fill in all required fields.');
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        createStaff();
    };

    const [selectedHubCourses, setSelectedHubCourses] = useState([]);
    const [selectedSchoolCourses, setSelectedSchoolCourses] = useState([]);
    const [selectedSchools, setSelectedSchools] = useState([]);

    const handleHubCheckboxChange = (course) => {
        if (selectedHubCourses.includes(course)) {
            setSelectedHubCourses(selectedHubCourses.filter((selectedHubCourse) => selectedHubCourse !== course));

        } else {
            setSelectedHubCourses([...selectedHubCourses, course]);
        }
    };

    const handleSchoolCheckboxChange = (course) => {
        if (selectedSchoolCourses.includes(course)) {
            setSelectedSchoolCourses(selectedSchoolCourses.filter((selectedSchoolCourse) => selectedSchoolCourse !== course));
        } else {
            setSelectedSchoolCourses([...selectedSchoolCourses, course]);
        }
    };

    const handleSchoolCheckbox = (school) => {
        if (selectedSchools.includes(school)) {
            setSelectedSchools(selectedSchools.filter((selectedSchools) => selectedSchools !== school));
        } else {
            setSelectedSchools([...selectedSchools, school]);
        }
    };




    return (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full">
            <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
                <div className='flex justify-between '>
                </div>
            </div>

            <div className='flex justify-between '>
                <p className='text-[#F13178] text-[20px] mt-2 font-extrabold' >Register Staff</p>
                <Link to='' className='mt-2'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

            </div>

            <div className='border-[#F13178] border-b '></div>

            <form className='bg-slate-200 sm:h-full rounded-md pb-8' onSubmit={handleSubmit}>
                <div className='sm:flex gap-4  sm:mt-6 px-8'>

                    <div className=''>

                        <p className='text-sm text-gray-600 w-[120px] pt-2 sm:pt-2'>Title</p>
                        <select
                            className='rounded-md w-[120px] h-[40px] text-gray-600 pl-2 outline-none'
                            value={selectedTitle}
                            onChange={(event) => setSelectedTitle(event.target.value)}
                        >
                            <option value="">Choose</option>
                            <option value="Mr">Mr</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Master">Master</option>
                            <option value="Miss">Miss</option>
                        </select>

                    </div>
                    <div className=''>

                        <p className='text-sm text-gray-600 w-[120px] pt-4 sm:pt-2'>User</p>
                        <select
                            className='rounded-md w-[120px] h-[40px] text-gray-600 pl-2 outline-none'
                            value={selectedUser}
                            onChange={(event) => setSelectedUser(event.target.value)}
                        >
                            <option value="">Select</option>
                            <option value="Staff">Staff</option>
                            <option value="Admin">Admin</option>
                        </select>

                    </div>
                    <div className='w-full'>


                    </div>
                </div>
                <div className='sm:flex gap-4 mt-2 px-8'>

                    <div className='w-full'>
                        <p className='text-sm text-gray-600 w-[180px] pt-2'>First Name</p>
                        <input
                            type='text'
                            className='rounded-md w-full h-[40px] outline-none pl-4'
                            value={firstName}
                            onChange={(event) => setFirstName(event.target.value)}
                        />

                    </div>

                    <div className='w-full'>

                        <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'> Middle Name</p>
                        <input
                            type='text'
                            className='rounded-md w-full h-[40px] outline-none pl-4'
                            value={middleName}
                            onChange={(event) => setMiddleName(event.target.value)}
                        />

                    </div>
                </div>

                <div className='sm:flex gap-4 mt-2 sm:mt-2 px-8'>
                    <div className='w-full'>

                        <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'> Last Name</p>
                        <input
                            type='text'
                            className='rounded-md w-full h-[40px] outline-none pl-4'
                            value={lastName}
                            onChange={(event) => setLastName(event.target.value)}
                        />
                    </div>
                    <div className='w-full'>

                        <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'>Phone</p>
                        <input
                            type='number'
                            placeholder='E.g 08031234567'
                            className='rounded-md w-full h-[40px] outline-none pl-4'
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)}
                        />

                    </div>
                </div>
                <div className='sm:flex gap-4  sm:mt-2 px-8'>
                    <div className='w-full'>

                        <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'>Email</p>
                        <input
                            type='email'
                            placeholder='example@gmail.com'
                            className='rounded-md w-full h-[40px] outline-none pl-4'
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>

                    <div className='w-full'>

                        <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'>Position</p>
                        <select
                            className='rounded-md w-full h-[40px] text-gray-600 pl-2 outline-none'
                            value={position}
                            onChange={(event) => setPosition(event.target.value)}
                        >
                            <option value=''>Select Position</option>
                            {officePositions.map((position, index) => (
                                <option key={index} value={`${position.title}`}>
                                    {position.title}
                                </option>
                            ))}
                        </select>

                    </div>
                </div>
                <div className='sm:flex gap-4  sm:mt-2 px-8'>
                    <div className='w-full'>

                        <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'>Status</p>
                        <select
                            className='rounded-md w-full h-[40px] text-gray-600 pl-2 outline-none'
                            value={selectedJobType}
                            onChange={(event) => setSelectedJobType(event.target.value)}
                        >
                            <option value="">Select</option>
                            <option value="Part Time">Part Time</option>
                            <option value="Full Time">Full Time</option>
                            <option value="Hybrid">Hybrid</option>
                        </select>
                    </div>

                    <div className='w-full'>

                        <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'>Casual Leave</p>
                        <select
                            className='rounded-md w-full h-[40px] text-gray-600 pl-2 outline-none'
                            value={sickLeave}
                            onChange={(event) => setSickLeave(event.target.value)}
                        >
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                            <option value='7'>7</option>
                            <option value='8'>8</option>
                            <option value='9'>9</option>
                            <option value='10'>10</option>
                        </select>

                    </div>
                </div>


                <div className='grid'>


                    <div className='gap-4 mt-2 px-8'>
                        <div className='flex gap-4'>
                        <p className='text-sm text-gray-600 pt-2'>Hub Instructor</p>
                        <input
                            type='checkbox'
                            className='rounded-md w-[20px] h-[20px] mt-2 outline-none pl-4'
                            value={'true'}
                            checked={checkedHubCourses.includes('true')}
                            onChange={handleCheckboxChangeHub}
                        />
                        </div>
                    
                        {hubInstructor && (
                            <div className='text-gray-600 mt-2'>
                                <label className='w-full font-bold'>Select Courses:</label>
                                {allHubCourses.map((course, index) => (
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
                        )}
                        <div className='flex gap-4'>
                        <p className='text-sm text-gray-600 pt-4'>School Instructor</p>
                        <input
                            type='checkbox'
                            className='rounded-md w-[20px] h-[20px] mt-4 outline-none pl-4'
                            value={'true'}
                            checked={checkedSchoolCourses.includes('true')}
                            onChange={handleCheckboxChangeSchool}
                        />

                        </div>
                    

                        {schoolInstructor && (
                            <div className='grid sm:grid-cols-2 gap-4 border border-slate-400 mt-2'>
                                <div className='text-gray-600 px-4'>
                                    <label className='font-bold'>Assign School to instructor:</label>

                                    {allSchools.map((school, index) => (
                                        <div key={index}>
                                            <input
                                                type='checkbox'
                                                id={`schoolCourse-${index}`}
                                                value={school.schoolName}
                                                checked={selectedSchools.includes(school.schoolName)}
                                                onChange={() => handleSchoolCheckbox(school.schoolName)}
                                            />
                                            <label htmlFor={`schoolCourse-${index}`}>{school.schoolName}</label>
                                        </div>
                                    ))}
                                </div>

                                <div className='text-gray-600'>
                                    <label className='font-bold'>Select Courses:</label>
                                    {allSchoolCourses.map((course, index) => (
                                        <div key={index}>
                                            <input
                                                type='checkbox'
                                                id={`schoolCourse-${index}`}
                                                value={course.course}
                                                checked={selectedSchoolCourses.includes(course.course)}
                                                onChange={() => handleSchoolCheckboxChange(course.course)}
                                            />
                                            <label htmlFor={`schoolCourse-${index}`}>{course.course}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>


                        )}

                    </div>
                    <div className='flex pt-5'>


                    </div>
                </div>




                <div className='sm:flex gap-4  sm:mt-2 px-8'>
                    <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'>DOB</p>
                    <input
                        type='date'
                        className='rounded-md w-full h-[40px] outline-none pl-4 text-gray-600'
                        value={dateOfBirth}
                        onChange={(event) => setDateOfBirth(event.target.value)}
                    />
                    <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'>Salary</p>
                    <input
                        type='number'
                        className='rounded-md w-full h-[40px] outline-none pl-4'
                        value={salary}
                        onChange={(event) => setSalary(event.target.value)}
                    />

                </div>

                <div className='sm:flex gap-4  sm:mt-4 px-8'>
                    <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'>Bank</p>
                    <input
                        type='text'
                        className='rounded-md w-full h-[40px] outline-none pl-4'
                        value={bankName}
                        onChange={(event) => setBankName(event.target.value)}
                    />
                    <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'>Number</p>
                    <input
                        type='number'
                        className='rounded-md w-full h-[40px] outline-none pl-4'
                        value={accountNumber}
                        onChange={(event) => setAccountNumber(event.target.value)}
                    />

                </div>

                <div className='sm:flex gap-4 sm:mt-4 px-8'>
                    <p className='text-sm text-gray-600 w-[80px] pt-4 sm:pt-2'>Address</p>
                    <textarea
                        placeholder='Staff Home Address'
                        className='outline-none w-full rounded-md h-[80px] pl-4 pt-2'
                        value={homeAddress}
                        onChange={(event) => setHomeAddress(event.target.value)}
                    />

                </div>

                <div className='flex gap-4 mt-4 px-8'>
                    <p className='text-sm text-gray-600  pt-2'>Profile Picture</p>
                    <input type='file' />


                </div>

                <div className='flex justify-center mt-4 text-gray-600 font-bold'>
                    <p>Next Of Kin Details</p>
                </div>

                <div className='border-slate-50 border-b '></div>

                <div className='sm:flex gap-4 mt-2 sm:mt-6 px-8'>
                    <div className='w-full'>
                        <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'>Full Name</p>
                        <input
                            type='text'
                            className='rounded-md w-full h-[40px] outline-none pl-4'
                            value={nextOfKinFullName}
                            onChange={(event) => setNextOfKinFullName(event.target.value)}
                        />

                    </div>
                    <div className='w-full'>

                        <p className='text-sm text-gray-600 w-[180px] pt-4 sm:pt-2'>Phone Number</p>
                        <input
                            type='number'
                            className='rounded-md w-full h-[40px] outline-none pl-4'
                            value={nextOfKinNumber}
                            onChange={(event) => setNextOfKinNumber(event.target.value)}
                        />

                    </div>
                </div>


                <div className='sm:flex gap-4 sm:mt-2 px-8'>
                    <div className='w-full'>
                        <p className='text-sm text-gray-600 w-[80px] pt-4 sm:pt-2'>Address</p>
                        <textarea
                            placeholder='Next Of Kin Home Address'
                            className='outline-none w-full rounded-md h-[80px] pl-4 pt-2'
                            value={nextOfKinAddress}
                            onChange={(event) => setNextOfKinAddress(event.target.value)}
                        />

                    </div>
                </div>




                <div className='flex gap-8 justify-center px-8'>

                    <button 
                        className=' bg-[#F13178] px-2 w-full sm:w-[180px] text-white md:text-[15px]  rounded-lg  mt-6 text-[11px] flex items-center text-center justify-center gap-4 font-bold h-[40px]'
                        type='submit'
                        >
                        Create Staff
                    </button>
                </div>





            </form>





            <div className="grid grid-cols-2 lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-fit pb-44">


            </div>



        </div>
    )
}

export default UpdateStaffDetails