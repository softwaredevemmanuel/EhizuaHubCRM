import React, { useState, useEffect } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { IoMdCloseCircle } from "react-icons/io";
import { LuRefreshCcw } from "react-icons/lu";
import { Link } from 'react-router-dom'
import axios from 'axios';
import toastr from 'toastr';
import ReactLoading from "react-loading";
import AdminLogin from "../../AdminLogin";

const TimeTable = () => {
    const [user, setUser] = useState(false)
    const [newRow, setNewRow] = useState(false)
    const [selectedMondayHubCourses, setSelectedMondayHubCourses] = useState([]);
    const [selectedTuesdayHubCourses, setSelectedTuesdayHubCourses] = useState([]);
    const [selectedWednesdayHubCourses, setSelectedWednesdayHubCourses] = useState([]);
    const [selectedThursdayHubCourses, setSelectedThursdayHubCourses] = useState([]);
    const [selectedFridayHubCourses, setSelectedFridayHubCourses] = useState([]);
    const [selectedSaturdayHubCourses, setSelectedSaturdayHubCourses] = useState([]);
    const [allHubCourses, setHubAllCourse] = useState([]);
    const [timeTableList, setTimeTableList] = useState([]);
    const [selectedStartTime, setSelectedStartTime] = useState('');
    const [selectedEndTime, setSelectedEndTime] = useState('');
    const [loading, setLoading] = useState(false);
    const [reload, setReload] = useState('');
    const [offices, setOffices] = useState([]);
    const [location, setLocation] = useState('');
    const [selected, setSelected] = useState(false);
    let adminUser = JSON.parse(localStorage.getItem('User'));



    useEffect(() => {
        let staffToken = JSON.parse(localStorage.getItem('StaffToken'));
        if (staffToken && staffToken.token) {
            setUser(true);

        }
    }, []);

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


    // Fetch Hub Courses
    useEffect(() => {
        setLoading(true)
        async function fetchHubCourses() {
            try {
                const response = await axios.get('http://localhost:5000/api/auth/upskill_courses', {
                    headers: {
                        location: location
                    }
                });
                setHubAllCourse(response.data.message);
                setLoading(false)
            } catch (error) {
                toastr.error('Error retrieving Courses');
            }
        }

        fetchHubCourses();
    }, [location, reload]);

    // Fetch Hub Time Table
    useEffect(() => {
        setLoading(true)
        async function fetchTimeTable() {
            try {
                const response = await axios.get('http://localhost:5000/api/auth/time-table', {
                    headers: {
                        location: location
                    }
                });
                setTimeTableList(response.data.message);
                setLoading(false)
            } catch (error) {
                toastr.error('Error retrieving Courses');
            }
        }

        fetchTimeTable();
    }, [reload, location]);

    useEffect(() => {
        if (selectedMondayHubCourses.length !== 0) {
            setSelected(true)
        } else if (selectedTuesdayHubCourses.length !== 0) {
            setSelected(true)
        } else if (selectedWednesdayHubCourses.length !== 0) {
            setSelected(true)
        } else if (selectedThursdayHubCourses.length !== 0) {
            setSelected(true)
        } else if (selectedFridayHubCourses.length !== 0) {
            setSelected(true)
        } else if (selectedSaturdayHubCourses.length !== 0) {
            setSelected(true)
        } else {
            setSelected(false)

        }
    }, [selectedMondayHubCourses, selectedTuesdayHubCourses, selectedWednesdayHubCourses, selectedThursdayHubCourses, selectedFridayHubCourses, selectedSaturdayHubCourses])


    const handleMondayCourses = (course) => {
        if (selectedMondayHubCourses.includes(course)) {
            setSelectedMondayHubCourses(selectedMondayHubCourses.filter((selectedMondayHubCourse) => selectedMondayHubCourse !== course));

        } else {
            setSelectedMondayHubCourses([...selectedMondayHubCourses, course]);

        }
    };
    const handleTuesdayCourses = (course) => {
        if (selectedTuesdayHubCourses.includes(course)) {
            setSelectedTuesdayHubCourses(selectedTuesdayHubCourses.filter((selectedTuesdayHubCourse) => selectedTuesdayHubCourse !== course));

        } else {
            setSelectedTuesdayHubCourses([...selectedTuesdayHubCourses, course]);
        }
    };
    const handleWednesdayCourses = (course) => {
        if (selectedWednesdayHubCourses.includes(course)) {
            setSelectedWednesdayHubCourses(selectedWednesdayHubCourses.filter((selectedWednesdayHubCourse) => selectedWednesdayHubCourse !== course));

        } else {
            setSelectedWednesdayHubCourses([...selectedWednesdayHubCourses, course]);
        }
    };
    const handleThursdayCourses = (course) => {
        if (selectedThursdayHubCourses.includes(course)) {
            setSelectedThursdayHubCourses(selectedThursdayHubCourses.filter((selectedThursdayHubCourse) => selectedThursdayHubCourse !== course));

        } else {
            setSelectedThursdayHubCourses([...selectedThursdayHubCourses, course]);
        }
    };
    const handleFridayCourses = (course) => {
        if (selectedFridayHubCourses.includes(course)) {
            setSelectedFridayHubCourses(selectedFridayHubCourses.filter((selectedFridayHubCourse) => selectedFridayHubCourse !== course));

        } else {
            setSelectedFridayHubCourses([...selectedFridayHubCourses, course]);
        }
    };
    const handleSaturdayCourses = (course) => {
        if (selectedSaturdayHubCourses.includes(course)) {
            setSelectedSaturdayHubCourses(selectedSaturdayHubCourses.filter((selectedSaturdayHubCourse) => selectedSaturdayHubCourse !== course));

        } else {
            setSelectedSaturdayHubCourses([...selectedSaturdayHubCourses, course]);
        }
    };



    const NewRow = () => {
        setNewRow(true)

    }
    const CancelNewRow = () => {
        setNewRow(false)

    }

    const createTimeTable = () => {
        let adminEmail = JSON.parse(localStorage.getItem('User'));

        if (selectedStartTime && selectedEndTime &&
            (selectedMondayHubCourses ||
                selectedTuesdayHubCourses ||
                selectedWednesdayHubCourses ||
                selectedThursdayHubCourses ||
                selectedFridayHubCourses ||
                selectedSaturdayHubCourses)) {

            setLoading(true); // Start loading indicator
            axios.post("http://localhost:5000/api/auth/time-table", {
                adminEmail: adminEmail.email,
                startTime: selectedStartTime,
                endTime: selectedEndTime,
                mondayArray: selectedMondayHubCourses,
                tuesdayArray: selectedTuesdayHubCourses,
                wednesdayArray: selectedWednesdayHubCourses,
                thursdayArray: selectedThursdayHubCourses,
                fridayArray: selectedFridayHubCourses,
                saturdayArray: selectedSaturdayHubCourses,
                location: location


            })
                .then(response => {
                    toastr.success(response.data.message);

                    if (reload == 'reload') {
                        setReload('')

                    } else {
                        setReload('reload')
                    }
                    setNewRow(false)

                    // Clear input fields after successful submission
                    setSelectedStartTime('')
                    setSelectedEndTime('')
                    setSelectedMondayHubCourses([]);
                    setSelectedTuesdayHubCourses([]);
                    setSelectedWednesdayHubCourses([]);
                    setSelectedThursdayHubCourses([]);
                    setSelectedFridayHubCourses([]);
                    setSelectedSaturdayHubCourses([]);


                    setLoading(false); // Stop loading indicator




                })
                .catch(error => {
                    toastr.error(error.response.data.message);
                    setLoading(false); // Stop loading indicator

                })

        } else {
            toastr.warning('Please fill in all required fields.');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createTimeTable();
    };

    const Refresh = () => {
        if (reload === '') {
            setReload('reload')

        } else {
            setReload('')

        }
    }

    return (

        <div className="">
            {!user ? (
                <AdminLogin />
            ) : (

                <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full pb-12">
                    <div className='flex justify-between '>
                        <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Time Table</p>

                    </div>

                    <div className='border-[#F13178] border-b '></div>

                    {loading && (
                        <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                            <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
                        </div>
                    )}

                    <div className="flex justify-between">
                        <div className='pt-1 flex gap-4'>
                            <p className='text-[#134574] font-bold'>Office</p>

                            <select
                                className='rounded-lg h-[30px] w-[200px] text-slate-500 outline-none bg-slate-200 px-4'
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
                        <div className="flex gap-2">
                            <button onClick={Refresh}>
                                <div className='flex gap-2 text-gray-500'>

                                    <LuRefreshCcw size={24} />
                                    <p className='hidden sm:block'>Refresh</p>
                                </div>
                            </button>

                            {location !== '' ? (
                                <button onClick={NewRow}>
                                    <div className="flex text-slate-200 bg-[#134574] rounded-lg">

                                        <p className="py-1 pl-2">New</p>
                                        <CiSquarePlus size={32} className="text-slate-200 py-1" />
                                    </div>

                                </button>

                            ) : (
                                <button onClick={NewRow} className=" cursor-not-allowed">
                                    <div className="flex text-slate-300 bg-slate-400 rounded-lg">

                                        <p className="py-1 pl-2">New</p>
                                        <CiSquarePlus size={32} className="text-slate-300 py-1" />
                                    </div>

                                </button>
                            )}
                        </div>

                    </div>

                    <div>
                        <div className="grid grid-cols-7 text-[#134574] bg-slate-400 h-[40px] items-center">
                            <div className="border-r border-white h-[40px] flex items-center pl-2 font-bold">
                                <p>Time</p>
                            </div>
                            <div className="border-r border-white h-[40px] flex items-center pl-2 font-bold">
                                <p>Monday</p>
                            </div>
                            <div className="border-r border-white h-[40px] flex items-center pl-2 font-bold">
                                <p>Tuesday</p>
                            </div>
                            <div className="border-r border-white h-[40px] flex items-center pl-2 font-bold">
                                <p>Wednesday</p>
                            </div>
                            <div className="border-r border-white h-[40px] flex items-center pl-2 font-bold">
                                <p>Thursday</p>
                            </div>
                            <div className="border-r border-white h-[40px] flex items-center pl-2 font-bold">
                                <p>Friday</p>
                            </div>
                            <div className="border-r border-white h-[40px] flex items-center pl-2 font-bold">
                                <p>Saturday</p>
                            </div>
                        </div>


                    </div>

                    {timeTableList && timeTableList.map((timeTable, index) => (
                        <div key={index}>
                            <div className="grid grid-cols-7 text-[#134574] bg-slate-200 items-center">
                                <div className="border-r border-white flex items-center pl-2">
                                    <p>{timeTable.startTime} - {timeTable.endTime}</p>
                                </div>
                                <div className="border-r border-white  flex items-center pl-2">
                                    <p>{timeTable.monday}</p>
                                </div>
                                <div className="border-r border-white  flex items-center pl-2">
                                    <p>{timeTable.tuesday}</p>
                                </div>
                                <div className="border-r border-white  flex items-center pl-2">
                                    <p>{timeTable.wednesday}</p>
                                </div>
                                <div className="border-r border-white  flex items-center pl-2">
                                    <p>{timeTable.thursday}</p>
                                </div>
                                <div className="border-r border-white  flex items-center pl-2">
                                    <p>{timeTable.friday}</p>
                                </div>
                                <div className="border-r border-white flex items-center pl-2">
                                    <p>{timeTable.saturday}</p>
                                </div>
                            </div>


                        </div>

                    ))}



                    {newRow && (
                        <form onSubmit={handleSubmit}>
                            {allHubCourses.length > 1 && (

                                <div className="flex justify-center text-xl text-slate-600 font-bold pt-4">
                                    <p>Select TIme and Courses </p>
                                </div>
                            )}

                            <div className="border border-slate-100 mt-4 px-2">
                                {allHubCourses.length > 1 && (
                                    <div className="flex justify-between">
                                        <div className="flex gap-4 ">
                                            <div>
                                                <p>Start</p>
                                                <input
                                                    type="time"
                                                    className="px-4 bg-slate-100 rounded-md"
                                                    value={selectedStartTime}
                                                    onChange={(event) => setSelectedStartTime(event.target.value)}
                                                />
                                            </div>
                                            <div>
                                                <p>End</p>
                                                <input
                                                    type="time"
                                                    className="px-4 bg-slate-100 rounded-md"
                                                    value={selectedEndTime}
                                                    onChange={(event) => setSelectedEndTime(event.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <button onClick={CancelNewRow} className="flex gap-1">
                                            <p>CLose</p>
                                            <IoMdCloseCircle size={28} className="text-slate-500" />

                                        </button>
                                    </div>
                                )}

                                {allHubCourses.length > 1 ? (
                                    <div>
                                        <div className="border border-slate-500 mt-4">
                                            <p className="flex items-center text-center justify-center font-bold text-xl text-[#134574]">Monday</p>
                                            <div className='text-gray-600 mt-2'>
                                                <div className="grid grid-cols-4 border border-slate-200">
                                                    {allHubCourses.map((course, index) => (
                                                        <div key={index} className="border-r border-slate-500 pl-2">

                                                            <input
                                                                type='checkbox'
                                                                id={`hubCourse-${index}`}
                                                                value={course.course}
                                                                checked={selectedMondayHubCourses.includes(course.course)}
                                                                onChange={() => handleMondayCourses(course.course)}
                                                                className="pr-4"
                                                            />
                                                            <label htmlFor={`course-${index}`} className="pl-1">{course.course}</label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border border-slate-500 mt-4">
                                            <p className="flex items-center text-center justify-center font-bold text-xl text-[#134574]">Tuesday</p>
                                            <div className='text-gray-600 mt-2'>
                                                <div className="grid grid-cols-4 border border-slate-200">
                                                    {allHubCourses.map((course, index) => (
                                                        <div key={index} className="border-r border-slate-500 pl-2">

                                                            <input
                                                                type='checkbox'
                                                                id={`hubCourse-${index}`}
                                                                value={course.course}
                                                                checked={selectedTuesdayHubCourses.includes(course.course)}
                                                                onChange={() => handleTuesdayCourses(course.course)}
                                                                className="pr-4"
                                                            />
                                                            <label htmlFor={`course-${index}`} className="pl-1">{course.course}</label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border border-slate-500 mt-4">
                                            <p className="flex items-center text-center justify-center font-bold text-xl text-[#134574]">Wednesday</p>
                                            <div className='text-gray-600 mt-2'>
                                                <div className="grid grid-cols-4 border border-slate-200">
                                                    {allHubCourses.map((course, index) => (
                                                        <div key={index} className="border-r border-slate-500 pl-2">

                                                            <input
                                                                type='checkbox'
                                                                id={`hubCourse-${index}`}
                                                                value={course.course}
                                                                checked={selectedWednesdayHubCourses.includes(course.course)}
                                                                onChange={() => handleWednesdayCourses(course.course)}
                                                                className="pr-4"
                                                            />
                                                            <label htmlFor={`course-${index}`} className="pl-1">{course.course}</label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border border-slate-500 mt-4">
                                            <p className="flex items-center text-center justify-center font-bold text-xl text-[#134574]">Thursday</p>
                                            <div className='text-gray-600 mt-2'>
                                                <div className="grid grid-cols-4 border border-slate-200">
                                                    {allHubCourses.map((course, index) => (
                                                        <div key={index} className="border-r border-slate-500 pl-2">

                                                            <input
                                                                type='checkbox'
                                                                id={`hubCourse-${index}`}
                                                                value={course.course}
                                                                checked={selectedThursdayHubCourses.includes(course.course)}
                                                                onChange={() => handleThursdayCourses(course.course)}
                                                                className="pr-4"
                                                            />
                                                            <label htmlFor={`course-${index}`} className="pl-1">{course.course}</label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border border-slate-500 mt-4">
                                            <p className="flex items-center text-center justify-center font-bold text-xl text-[#134574]">Friday</p>
                                            <div className='text-gray-600 mt-2'>
                                                <div className="grid grid-cols-4 border border-slate-200">
                                                    {allHubCourses.map((course, index) => (
                                                        <div key={index} className="border-r border-slate-500 pl-2">

                                                            <input
                                                                type='checkbox'
                                                                id={`hubCourse-${index}`}
                                                                value={course.course}
                                                                checked={selectedFridayHubCourses.includes(course.course)}
                                                                onChange={() => handleFridayCourses(course.course)}
                                                                className="pr-4"
                                                            />
                                                            <label htmlFor={`course-${index}`} className="pl-1">{course.course}</label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border border-slate-500 mt-4">
                                            <p className="flex items-center text-center justify-center font-bold text-xl text-[#134574]">Saturday</p>
                                            <div className='text-gray-600 mt-2'>
                                                <div className="grid grid-cols-4 border border-slate-200">
                                                    {allHubCourses.map((course, index) => (
                                                        <div key={index} className="border-r border-slate-500 pl-2">

                                                            <input
                                                                type='checkbox'
                                                                id={`hubCourse-${index}`}
                                                                value={course.course}
                                                                checked={selectedSaturdayHubCourses.includes(course.course)}
                                                                onChange={() => handleSaturdayCourses(course.course)}
                                                                className="pr-4"
                                                            />
                                                            <label htmlFor={`course-${index}`} className="pl-1">{course.course}</label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                ) : (
                                    <div>
                                        <div className="flex justify-center mt-12 ">
                                            <p className="font-bold text-[#F13178] ">No Courses Created for {location}</p>

                                        </div>
                                        <div className="flex justify-center mb-12 text-sm text-slate-500">
                                            <p>Create courses in this location to be able to set a time table</p>
                                        </div>
                                    </div>
                                )}


                                {allHubCourses.length > 1 && (

                                    <div className="flex justify-center pb-8">
                                        {selected ? (
                                            <button
                                                className=" bg-[#F13178] mt-8 px-2 text-center items-center rounded-md font-bold flex justify-center h-[30px]">
                                                <div className="flex items-center justify-center">
                                                    <p className="text-white pl-2">Create</p>
                                                </div>
                                            </button>
                                        ) : (

                                            <button
                                                className="bg-slate-400 mt-8 px-2 text-center items-center rounded-md font-bold flex justify-center h-[30px] cursor-not-allowed"
                                                disabled
                                            >
                                                <div className="flex items-center justify-center">
                                                    <p className="text-slate-300 pl-2">Create</p>
                                                </div>
                                            </button>

                                        )}
                                    </div>
                                )}



                            </div>
                        </form>
                    )}



                </div>


            )}


        </div>

    )

}

export default TimeTable