import React, { useState, useEffect } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { IoMdCloseCircle } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { IoIosUndo } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { LuRefreshCcw } from "react-icons/lu";
import { MdOutlineNoteAdd } from "react-icons/md";
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
    const [courseBreak, setCourseBreak] = useState('');
    const [allHubCourses, setHubAllCourse] = useState([]);
    const [timeTableList, setTimeTableList] = useState([]);
    const [selectedStartTime, setSelectedStartTime] = useState('');
    const [selectedEndTime, setSelectedEndTime] = useState('');
    const [loading, setLoading] = useState(false);
    const [reload, setReload] = useState('');
    const [offices, setOffices] = useState([]);
    const [location, setLocation] = useState('');
    const [selected, setSelected] = useState(false);
    const [displayTable, setDisplayTable] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [deleteMode, setDeleteMode] = useState(false);
    const [verifyDelete, setVerifyDelete] = useState(false);
    const [cancelFirstRow, setCancelFirstRow] = useState(true);
    const [row_Id, setRow_Id] = useState('');
    const [start_time, setStart_Time] = useState('');
    const [stop_time, setStop_Time] = useState('');
    const [displayType, setDisplayType] = useState('Horizontal');
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


    const handleEdit = () => {
        if (editMode == false) {
            setEditMode(true)
            setDeleteMode(false)
            setDisplayTable(true)
            setNewRow(false)


        } else {
            setEditMode(false)
            setDeleteMode(false)
            setDisplayTable(false)

        }
    }
    const handleDelete = () => {
        if (deleteMode == false) {
            setDeleteMode(true)
            setEditMode(false)
            setDisplayTable(true)
            setNewRow(false)


        } else {
            setDeleteMode(false)
            setEditMode(false)
            setDisplayTable(false)
        }
    }

    const NewRow = () => {
        setNewRow(true)
        setDeleteMode(false)
        setEditMode(false)
        setDisplayTable(true)
        if (displayType == "Vertical") {
            setCancelFirstRow(false)
        }

    }

    const CancelNewRow = () => {
        setNewRow(false)
        setDisplayTable(false)
        setCancelFirstRow(true)

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
                location: location,
                courseBreak: courseBreak


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
    const DeleteTimeTable = () => {
        let adminEmail = JSON.parse(localStorage.getItem('User'));
        setLoading(true); // Start loading indicator
        axios.delete(`http://localhost:5000/api/auth/time-table/${row_Id}`, {
            headers: {
                email: adminEmail.email
            }
        })
            .then(response => {
                toastr.success(response.data.message);

                if (reload == 'reload') {
                    setReload('')
                    setVerifyDelete(false)
                    setDeleteMode(false)
                    setDisplayTable(true)

                } else {
                    setReload('reload')
                    setVerifyDelete(false)
                    setDeleteMode(false)
                    setDisplayTable(false)

                }


                setLoading(false); // Stop loading indicator

            })
            .catch(error => {
                toastr.error(error.response.data.message);
                setLoading(false); // Stop loading indicator

            })


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

    const CancelVerifyDialog = () => {
        setVerifyDelete(false)

    }

    const handleClick = (start_time, stop_time, rowId) => {
        console.log(rowId);
        setRow_Id(rowId)
        setStart_Time(start_time)
        setStop_Time(stop_time)
        setVerifyDelete(true)
    };

    useEffect(() => {

    }, [displayType])
    return (

        <div className="">
            {!user ? (
                <AdminLogin />
            ) : (

                <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full pb-12 ">
                    <div className='flex justify-between '>
                        <div className="flex gap-2">

                            <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Time Table</p>
                            <div className='pt-1 flex gap-4 mt-8'>
                                <select
                                    className='rounded-lg text-slate-500 outline-none bg-slate-300 px-4'
                                    value={displayType}
                                    onChange={(event) => setDisplayType(event.target.value)}
                                >
                                    <option value='Horizontal'>Horizontal</option>
                                    <option value='Vertical'>Vertical</option>

                                </select>


                            </div>
                        </div>

                    </div>


                    <div className='border-[#F13178] border-b '></div>

                    {loading && (
                        <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                            <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
                        </div>
                    )}

                    {verifyDelete && (

                        <div className=" z-50 fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">

                            <div className="bg-gray-100 w-[380px]  rounded-lg px-4 ">

                                <div className="flex justify-end pt-2">
                                    <button onClick={CancelVerifyDialog}>
                                        <FaTimes size={18} />

                                    </button>

                                </div>

                                <div className=" text-center text-[#134574] pt-2 mb-8">
                                    <div as="h3" className="text-base font-bold leading-6 text-red-600">
                                        Delete {start_time} - {stop_time} Time Table?
                                    </div>

                                    <div className="mt-2 grid gap-2 pt-2  justify-center">
                                        <button
                                            type='submit'
                                            className='py-1 text-center bg-red-600 px-1 rounded-lg text-white text-sm mt-4 w-fit px-4'
                                            onClick={DeleteTimeTable}
                                        >
                                            Delete
                                        </button>
                                    </div>


                                </div>
                            </div>
                        </div>
                    )}

                    <div className="sm:flex justify-between">
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
                        <div className="flex gap-2 mt-1 justify-center">
                            {(location !== '' && allHubCourses.length > 1) && (
                                <div className="flex gap-2">
                                    <button onClick={Refresh}>
                                        <div className='flex gap-2 text-gray-500'>
                                            <p className=''>Refresh</p>

                                            <LuRefreshCcw size={24} />
                                        </div>
                                    </button>


                                    <div className="flex gap-2">
                                        <button onClick={NewRow}>
                                            <div className="flex text-slate-100 sm:bg-slate-500 rounded-lg">

                                                <p className="py-1 pl-2 text-slate-500 sm:text-slate-100">New</p>
                                                <MdOutlineNoteAdd size={32} className="text-slate-500 py-1 sm:text-slate-100" />
                                            </div>

                                        </button>

                                        {timeTableList.length >= 1 ? (

                                            <div className="flex gap-2">
                                                {editMode ? (

                                                    <button onClick={handleEdit}>
                                                        <div className="flex text-slate-200 sm:bg-green-600 rounded-lg">

                                                            <p className="py-1 pl-2 text-green-600 sm:text-slate-100">Undo</p>
                                                            <IoIosUndo size={32} className="text-green-600 py-1 sm:text-slate-200" />
                                                        </div>

                                                    </button>
                                                ) : (

                                                    <button onClick={handleEdit}>
                                                        <div className="flex text-slate-200 sm:bg-green-600 rounded-lg">

                                                            <p className="py-1 pl-2 text-green-600 sm:text-slate-100">Edit</p>
                                                            <CiEdit size={32} className="text-green-600 py-1 sm:text-slate-200" />
                                                        </div>

                                                    </button>
                                                )}
                                                {deleteMode ? (

                                                    <button onClick={handleDelete}>
                                                        <div className="flex text-slate-200 sm:bg-red-600 rounded-lg">

                                                            <p className="py-1 pl-2 text-red-600 sm:text-slate-100">Undo</p>
                                                            <IoIosUndo size={32} className="py-1 text-red-600 sm:text-slate-200" />
                                                        </div>

                                                    </button>
                                                ) : (
                                                    <button onClick={handleDelete}>
                                                        <div className="flex text-slate-200 sm:bg-red-600 rounded-lg">

                                                            <p className="py-1 pl-2 text-red-600 sm:text-slate-100">Delete</p>
                                                            <MdOutlineCancel size={32} className=" py-1 text-red-600 sm:text-slate-200" />
                                                        </div>

                                                    </button>
                                                )}
                                            </div>
                                        ) : (
                                            <div className="flex gap-2">


                                                <button className=" cursor-not-allowed" >
                                                    <div className="flex text-slate-300 sm:bg-slate-400 rounded-lg">

                                                        <p className="py-1 pl-2 ">Edit</p>
                                                        <CiEdit size={32} className="py-1 text-green-600 sm:text-slate-200" />
                                                    </div>

                                                </button>

                                                <button className=" cursor-not-allowed">
                                                    <div className="flex text-slate-300 bg-slate-400 rounded-lg">

                                                        <p className="py-1 pl-2 ">Delete</p>
                                                        <MdOutlineCancel size={32} className="text-slate-300 py-1" />
                                                    </div>

                                                </button>

                                            </div>
                                        )}
                                    </div>
                                </div>

                            )}
                        </div>

                    </div>




                    {displayType == "Vertical" ? (
                        <div>
                            {location !== '' ? (

                                <div className='overflow-x-auto mt-1'>
                                    {editMode && (

                                        <div className="flex justify-center font-bold mt-4 text-slate-500">
                                            <p>Select a row to edit</p>
                                        </div>
                                    )}
                                    {deleteMode && (

                                        <div className="flex justify-center font-bold  mt-4 text-slate-500">
                                            <p>Select a row to DELETE</p>
                                        </div>
                                    )}
                                    <div className="flex w-[1000px]">

                                        {cancelFirstRow && (
                                            <div className="grid  text-[#134574] items-center gap-1">
                                                <div className="bg-slate-400 border-r border-white h-[80px]  flex items-center pl-2 font-bold w-[60px] pr-2 justify-center">
                                                    <p><IoMdTime /></p>
                                                </div>
                                                <div className="bg-slate-400 border-r border-white h-[80px] flex items-center pl-2 font-bold w-[60px] pr-2 justify-center">
                                                    <p>Mon</p>
                                                </div>
                                                <div className=" bg-slate-400 border-r border-white h-[80px] flex items-center pl-2 font-bold w-[60px] pr-2 justify-center">
                                                    <p>Tue</p>
                                                </div>
                                                <div className="bg-slate-400 border-r border-white h-[80px] flex items-center pl-2 font-bold w-[60px] pr-2 justify-center">
                                                    <p>Wed</p>
                                                </div>
                                                <div className="bg-slate-400 border-r border-white h-[80px] flex items-center pl-2 font-bold w-[60px] pr-2 justify-center">
                                                    <p>Thu</p>
                                                </div>
                                                <div className="bg-slate-400 border-r border-white h-[80px] flex items-center pl-2 font-bold w-[60px] pr-2 justify-center">
                                                    <p>Fri</p>
                                                </div>
                                                <div className="bg-slate-400 border-r border-white h-[80px] flex items-center pl-2 font-bold w-[60px] pr-2 justify-center">
                                                    <p>Sat</p>
                                                </div>
                                            </div>
                                        )}



                                        {location !== '' ? (

                                            <div className="flex">
                                                {timeTableList && timeTableList.map((timeTable, index) => (

                                                    <div key={index}>
                                                        {!displayTable && (

                                                            <div className="grid text-[#134574] bg-slate-200 items-center border border-slate-100 gap-1 text-sm">
                                                                <div className="border border-white flex flex-col items-center pl-2 h-[80px] w-[300px] pr-2 justify-center">
                                                                    <p>{timeTable.startTime} - {timeTable.endTime}</p>
                                                                </div>
                                                                <div className="border border-white flex flex-col items-center pl-2 h-[80px] w-[300px] pr-2 justify-center">
                                                                    <p>{timeTable.monday}</p>
                                                                </div>
                                                                <div className="border border-white flex flex-col items-center pl-2 h-[80px] w-[300px] pr-2 justify-center">
                                                                    <p>{timeTable.tuesday}</p>
                                                                </div>
                                                                <div className="border border-white flex flex-col items-center pl-2 h-[80px] w-[300px] pr-2 justify-center">
                                                                    <p>{timeTable.wednesday}</p>
                                                                </div>
                                                                <div className="border border-white flex flex-col items-center pl-2 h-[80px] w-[300px] pr-2 justify-center">
                                                                    <p>{timeTable.thursday}</p>
                                                                </div>
                                                                <div className="border border-white flex flex-col items-center pl-2 h-[80px] w-[300px] pr-2 justify-center">
                                                                    <p>{timeTable.friday}</p>
                                                                </div>
                                                                <div className="border border-white flex flex-col items-center pl-2 h-[80px] w-[300px] pr-2 justify-center">
                                                                    <p>{timeTable.saturday}</p>
                                                                </div>
                                                            </div>
                                                        )}

                                                        {editMode && (

                                                            <Link to={`/edit-time-table/${timeTable._id}/${timeTable.location}`} className="grid text-[#134574] bg-slate-300 items-center border border-slate-100 gap-1 text-sm">
                                                                <div className=" flex flex-col items-center pl-2 h-[80px] w-[300px] pr-2 justify-center ">
                                                                    <p>{timeTable.startTime} - {timeTable.endTime}</p>
                                                                </div>
                                                                <div className=" flex flex-col items-center pl-2 h-[80px] w-[300px] pr-2 justify-center ">
                                                                    <p>{timeTable.monday}</p>
                                                                </div>
                                                                <div className="  flex flex-col items-center pl-2 h-[80px] w-[300px] pr-2 justify-center ">
                                                                    <p>{timeTable.tuesday}</p>
                                                                </div>
                                                                <div className="  flex flex-col items-center pl-2 h-[80px] w-[300px] pr-2 justify-center ">
                                                                    <p>{timeTable.wednesday}</p>
                                                                </div>
                                                                <div className=" flex flex-col items-center pl-2 h-[80px] w-[300px] pr-2 justify-center ">
                                                                    <p>{timeTable.thursday}</p>
                                                                </div>
                                                                <div className=" flex flex-col items-center pl-2 h-[80px] w-[300px] pr-2 justify-center ">
                                                                    <p>{timeTable.friday}</p>
                                                                </div>
                                                                <div className=" flex flex-col items-center pl-2 h-[80px] w-[300px] pr-2 justify-center ">
                                                                    <p>{timeTable.saturday}</p>
                                                                </div>
                                                            </Link>
                                                        )}
                                                        {deleteMode && (

                                                            <Link
                                                                onClick={() => handleClick(timeTable.startTime, timeTable.endTime, timeTable._id)}
                                                                className="grid text-[#134574] bg-slate-300 items-center border border-[#F13178] gap-1 text-sm">
                                                                <div className=" flex flex-col items-center pl-2 h-[80px] w-[300px] pr-2 justify-center ">
                                                                    <p>{timeTable.startTime} - {timeTable.endTime}</p>
                                                                </div>
                                                                <div className=" flex flex-col items-center pl-2 h-[80px] w-[300px] pr-2 justify-center ">
                                                                    <p>{timeTable.monday}</p>
                                                                </div>
                                                                <div className="  flex flex-col items-center pl-2 h-[80px] w-[300px] pr-2 justify-center ">
                                                                    <p>{timeTable.tuesday}</p>
                                                                </div>
                                                                <div className="  flex flex-col items-center pl-2 h-[80px] w-[300px] pr-2 justify-center ">
                                                                    <p>{timeTable.wednesday}</p>
                                                                </div>
                                                                <div className=" flex flex-col items-center pl-2 h-[80px] w-[300px] pr-2 justify-center ">
                                                                    <p>{timeTable.thursday}</p>
                                                                </div>
                                                                <div className=" flex flex-col items-center pl-2 h-[80px] w-[300px] pr-2 justify-center ">
                                                                    <p>{timeTable.friday}</p>
                                                                </div>
                                                                <div className=" flex flex-col items-center pl-2 h-[80px] w-[300px] pr-2 justify-center ">
                                                                    <p>{timeTable.saturday}</p>
                                                                </div>
                                                            </Link>
                                                        )}


                                                    </div>

                                                ))}

                                            </div>
                                        ) : (
                                            <div>
                                                <div className="flex justify-center mt-12 ">
                                                    <p className="font-bold text-[#F13178] ">No Location Selected</p>

                                                </div>
                                                <div className="flex justify-center mb-12 text-sm text-slate-500">
                                                    <p>Select a location to be able to view time table</p>
                                                </div>
                                            </div>
                                        )}

                                    </div>




                                </div>
                            ) : (
                                <div>
                                    <div className="flex justify-center mt-12 ">
                                        <p className="font-bold text-[#F13178] ">No Location Selected</p>

                                    </div>
                                    <div className="flex justify-center mb-12 text-sm text-slate-500">
                                        <p>Select a location to be able to view time table</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div>
                            {location !== '' ? (



                                <div className="overflow-x-auto mt-1">
                                    <div className="w-[1000px]">
                                        <div className="grid grid-cols-7 text-[#134574] bg-slate-400 h-[40px] items-center">
                                            <div className="border-r border-white h-[40px] flex items-center pl-2 font-bold">
                                                <p> Time</p>
                                            </div>
                                            <div className="border-r border-white h-[40px] flex items-center pl-2 font-bold">
                                                <p> Monday</p>
                                            </div>
                                            <div className="border-r border-white h-[40px] flex items-center pl-2 font-bold">
                                                <p> Tuesday</p>
                                            </div>
                                            <div className="border-r border-white h-[40px] flex items-center pl-2 font-bold">
                                                <p> Wednesday</p>
                                            </div>
                                            <div className="border-r border-white h-[40px] flex items-center pl-2 font-bold">
                                                <p> Thursday</p>
                                            </div>
                                            <div className="border-r border-white h-[40px] flex items-center pl-2 font-bold">
                                                <p> Friday</p>
                                            </div>
                                            <div className="border-r border-white h-[40px] flex items-center pl-2 font-bold">
                                                <p> Saturday</p>
                                            </div>
                                        </div>

                                        {editMode && (

                                            <div className="flex font-bold mt-4 text-slate-500">
                                                <p>Select a row to EDIT</p>
                                            </div>
                                        )}
                                        {deleteMode && (

                                            <div className="flex font-bold mt-4 text-slate-500">
                                                <p>Select a row to DELETE</p>
                                            </div>
                                        )}



                                    </div>
                                    {timeTableList && timeTableList.map((timeTable, index) => (

                                        <div key={index} className="w-[1000px]">
                                            {!displayTable && (

                                                <div className="grid grid-cols-7 text-[#134574] bg-slate-200 items-center border border-slate-100 text-sm">
                                                    <div className="border border-white flex flex-col items-center pl-2 h-full">
                                                        <p>{timeTable.startTime} - {timeTable.endTime}</p>
                                                    </div>
                                                    <div className="border border-white flex flex-col items-center pl-2 h-full">
                                                        <p>{timeTable.monday}</p>
                                                    </div>
                                                    <div className="border border-white flex flex-col items-center pl-2 h-full">
                                                        <p>{timeTable.tuesday}</p>
                                                    </div>
                                                    <div className="border border-white flex flex-col items-center pl-2 h-full">
                                                        <p>{timeTable.wednesday}</p>
                                                    </div>
                                                    <div className="border border-white flex flex-col items-center pl-2 h-full">
                                                        <p>{timeTable.thursday}</p>
                                                    </div>
                                                    <div className="border border-white flex flex-col items-center pl-2 h-full">
                                                        <p>{timeTable.friday}</p>
                                                    </div>
                                                    <div className="border border-white flex flex-col items-center pl-2 h-full">
                                                        <p>{timeTable.saturday}</p>
                                                    </div>
                                                </div>
                                            )}

                                            {editMode && (

                                                <Link to={`/edit-time-table/${timeTable._id}/${timeTable.location}`} className="grid grid-cols-7 text-[#134574] bg-slate-400 items-center border border-slate-100 mt-2 text-sm">
                                                    <div className=" flex items-center pl-2 ">
                                                        <p>{timeTable.startTime} - {timeTable.endTime}</p>
                                                    </div>
                                                    <div className="flex items-center pl-2">
                                                        <p>{timeTable.monday}</p>
                                                    </div>
                                                    <div className=" flex items-center pl-2">
                                                        <p>{timeTable.tuesday}</p>
                                                    </div>
                                                    <div className=" flex items-center pl-2">
                                                        <p>{timeTable.wednesday}</p>
                                                    </div>
                                                    <div className="flex items-center pl-2">
                                                        <p>{timeTable.thursday}</p>
                                                    </div>
                                                    <div className="flex items-center pl-2">
                                                        <p>{timeTable.friday}</p>
                                                    </div>
                                                    <div className="flex items-center pl-2">
                                                        <p>{timeTable.saturday}</p>
                                                    </div>
                                                </Link>
                                            )}
                                            {deleteMode && (

                                                <Link
                                                    onClick={() => handleClick(timeTable.startTime, timeTable.endTime, timeTable._id)}
                                                    className="grid grid-cols-7 text-[#134574] bg-slate-400 items-center border border-red-600 mt-2 text-sm">
                                                    <div className=" flex items-center pl-2 ">
                                                        <p>{timeTable.startTime} - {timeTable.endTime}</p>
                                                    </div>
                                                    <div className="flex items-center pl-2">
                                                        <p>{timeTable.monday}</p>
                                                    </div>
                                                    <div className=" flex items-center pl-2">
                                                        <p>{timeTable.tuesday}</p>
                                                    </div>
                                                    <div className=" flex items-center pl-2">
                                                        <p>{timeTable.wednesday}</p>
                                                    </div>
                                                    <div className="flex items-center pl-2">
                                                        <p>{timeTable.thursday}</p>
                                                    </div>
                                                    <div className="flex items-center pl-2">
                                                        <p>{timeTable.friday}</p>
                                                    </div>
                                                    <div className="flex items-center pl-2">
                                                        <p>{timeTable.saturday}</p>
                                                    </div>
                                                </Link>
                                            )}






                                        </div>

                                    ))}

                                </div>
                            ) : (
                                <div>
                                    <div className="flex justify-center mt-12 ">
                                        <p className="font-bold text-[#F13178] ">No Location Selected</p>

                                    </div>
                                    <div className="flex justify-center mb-12 text-sm text-slate-500">
                                        <p>Select a location to be able to view time table</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}


                    {(allHubCourses.length < 1 && location != '') && (

                        <div>
                            <div className="flex justify-center mt-12 ">
                                <p className="font-bold text-[#F13178] ">No Courses Created for {location}</p>

                            </div>
                            <div className="flex justify-center mb-12 text-sm text-slate-500">
                                <p>Go to the students course section and create courses for this location</p>
                            </div>
                        </div>
                    )}




                    {newRow && (
                        <form onSubmit={handleSubmit}>

                            <div className="flex justify-center text-xl text-slate-600 font-bold pt-4">
                                <p>Select TIme and Courses </p>
                            </div>

                            <div className="border border-slate-100 mt-4 px-2 text-xs sm:text-medium">
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

                                <div>
                                    <div className="border border-slate-500 mt-4">
                                        <p className="flex items-center text-center justify-center font-bold text-xl text-[#134574]">Monday</p>
                                        <div className='text-gray-600 mt-2'>
                                            <div className="grid grid-cols-4 border border-slate-200">
                                                {allHubCourses.map((course, index) => (
                                                    <div key={index} className="border-r border-slate-500 pl-2 sm:flex  text-center">

                                                        <input
                                                            type='checkbox'
                                                            id={`hubCourse-${index}`}
                                                            value={course.course}
                                                            checked={selectedMondayHubCourses.includes(course.course)}
                                                            onChange={() => handleMondayCourses(course.course)}
                                                            className="pr-4"
                                                        />
                                                        <p className="pl-1">{course.course}</p>

                                                    </div>
                                                ))}
                                                <div className="border-r border-slate-500 pl-2 sm:flex  text-center">
                                                    <input
                                                        type="checkbox"
                                                        value='Break'
                                                        onChange={() => handleMondayCourses("Break")}
                                                    />
                                                    <p className="pl-1">Break</p>


                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-slate-500 mt-4">
                                        <p className="flex items-center text-center justify-center font-bold text-xl text-[#134574]">Tuesday</p>
                                        <div className='text-gray-600 mt-2'>
                                            <div className="grid grid-cols-4 border border-slate-200">
                                                {allHubCourses.map((course, index) => (
                                                    <div key={index} className="border-r border-slate-500 pl-2  sm:flex  text-center">

                                                        <input
                                                            type='checkbox'
                                                            id={`hubCourse-${index}`}
                                                            value={course.course}
                                                            checked={selectedTuesdayHubCourses.includes(course.course)}
                                                            onChange={() => handleTuesdayCourses(course.course)}
                                                            className="pr-4"
                                                        />
                                                        <p className="pl-1">{course.course}</p>
                                                    </div>
                                                ))}
                                                <div className="border-r border-slate-500 pl-2 sm:flex  text-center">
                                                    <input
                                                        type="checkbox"
                                                        value='Break'
                                                        onChange={() => handleTuesdayCourses("Break")}
                                                    />
                                                    <p className="pl-1">Break</p>


                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-slate-500 mt-4">
                                        <p className="flex items-center text-center justify-center font-bold text-xl text-[#134574]">Wednesday</p>
                                        <div className='text-gray-600 mt-2'>
                                            <div className="grid grid-cols-4 border border-slate-200">
                                                {allHubCourses.map((course, index) => (
                                                    <div key={index} className="border-r border-slate-500 pl-2 sm:flex  text-center">

                                                        <input
                                                            type='checkbox'
                                                            id={`hubCourse-${index}`}
                                                            value={course.course}
                                                            checked={selectedWednesdayHubCourses.includes(course.course)}
                                                            onChange={() => handleWednesdayCourses(course.course)}
                                                            className="pr-4"
                                                        />
                                                        <p className="pl-1">{course.course}</p>
                                                    </div>
                                                ))}
                                                <div className="border-r border-slate-500 pl-2 sm:flex  text-center">
                                                    <input
                                                        type="checkbox"
                                                        value='Break'
                                                        onChange={() => handleWednesdayCourses("Break")}
                                                    />
                                                    <p className="pl-1">Break</p>


                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-slate-500 mt-4">
                                        <p className="flex items-center text-center justify-center font-bold text-xl text-[#134574]">Thursday</p>
                                        <div className='text-gray-600 mt-2'>
                                            <div className="grid grid-cols-4 border border-slate-200">
                                                {allHubCourses.map((course, index) => (
                                                    <div key={index} className="border-r border-slate-500 pl-2 sm:flex  text-center">

                                                        <input
                                                            type='checkbox'
                                                            id={`hubCourse-${index}`}
                                                            value={course.course}
                                                            checked={selectedThursdayHubCourses.includes(course.course)}
                                                            onChange={() => handleThursdayCourses(course.course)}
                                                            className="pr-4"
                                                        />
                                                        <p className="pl-1">{course.course}</p>
                                                    </div>
                                                ))}
                                                <div className="border-r border-slate-500 pl-2 sm:flex  text-center">
                                                    <input
                                                        type="checkbox"
                                                        value='Break'
                                                        onChange={() => handleThursdayCourses("Break")}
                                                    />
                                                    <p className="pl-1">Break</p>


                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-slate-500 mt-4">
                                        <p className="flex items-center text-center justify-center font-bold text-xl text-[#134574]">Friday</p>
                                        <div className='text-gray-600 mt-2'>
                                            <div className="grid grid-cols-4 border border-slate-200">
                                                {allHubCourses.map((course, index) => (
                                                    <div key={index} className="border-r border-slate-500 pl-2 sm:flex  text-center">

                                                        <input
                                                            type='checkbox'
                                                            id={`hubCourse-${index}`}
                                                            value={course.course}
                                                            checked={selectedFridayHubCourses.includes(course.course)}
                                                            onChange={() => handleFridayCourses(course.course)}
                                                            className="pr-4"
                                                        />
                                                        <p className="pl-1">{course.course}</p>
                                                    </div>
                                                ))}
                                                <div className="border-r border-slate-500 pl-2 sm:flex  text-center">
                                                    <input
                                                        type="checkbox"
                                                        value='Break'
                                                        onChange={() => handleFridayCourses("Break")}
                                                    />
                                                    <p className="pl-1">Break</p>


                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-slate-500 mt-4">
                                        <p className="flex items-center text-center justify-center font-bold text-xl text-[#134574]">Saturday</p>
                                        <div className='text-gray-600 mt-2'>
                                            <div className="grid grid-cols-4 border border-slate-200">
                                                {allHubCourses.map((course, index) => (
                                                    <div key={index} className="border-r border-slate-500 pl-2 sm:flex  text-center">

                                                        <input
                                                            type='checkbox'
                                                            id={`hubCourse-${index}`}
                                                            value={course.course}
                                                            checked={selectedSaturdayHubCourses.includes(course.course)}
                                                            onChange={() => handleSaturdayCourses(course.course)}
                                                            className="pr-4"
                                                        />
                                                        <p className="pl-1">{course.course}</p>
                                                    </div>
                                                ))}
                                                <div className="border-r border-slate-500 pl-2 sm:flex  text-center">
                                                    <input
                                                        type="checkbox"
                                                        value='Break'
                                                        onChange={() => handleSaturdayCourses("Break")}
                                                    />
                                                    <p className="pl-1">Break</p>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>



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



                            </div>
                        </form>
                    )}



                </div>


            )}


        </div>

    )

}

export default TimeTable