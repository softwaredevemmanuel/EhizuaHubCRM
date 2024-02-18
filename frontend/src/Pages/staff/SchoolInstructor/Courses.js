import React from 'react'
import { Link } from 'react-router-dom'
import { FaCirclePlus } from "react-icons/fa6";
import { CiViewList } from "react-icons/ci";
import { FaChalkboardUser } from "react-icons/fa6";
import axios from 'axios';
import toastr from 'toastr';
import ReactLoading from "react-loading";
import { useState, useEffect } from "react"
import StaffLogin from '../StaffLogin';
import { LuRefreshCcw } from "react-icons/lu";


const SchoolInstructorCourse = () => {
  const [user, setUser] = useState(false)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false);
  const [coursesAray, setCoursesAray] = useState([]);
  const [staffTitle, setStaffTitle] = useState('');
  const [staffName, setStaffName] = useState('');
  const [reload, setReload] = useState('')

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem('User'));
    setStaffTitle(user.Title)
    setStaffName(user.FirstName)
    setEmail(user.email)

    let staffToken = JSON.parse(localStorage.getItem('StaffToken'));
    if (staffToken && staffToken.token) {
      setUser(true);

    }
  }, []);


  // Check Instructor Status
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem('User'));
    setLoading(true)
    async function fetchInstructorDetails() {
      try {
        const response = await axios.get('http://localhost:5000/api/school-tutor/instructor-course', {
          headers: {
            email: user.email
          }
        });
        setCoursesAray(response.data.courses);
        setLoading(false)
      } catch (error) {
        toastr.error('Error retrieving Courses');
      }
    }


    fetchInstructorDetails();
  }, [reload]);

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
        <StaffLogin />
      ) : (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-screen">
          <div className='flex justify-between '>
            <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >School Courses</p>

          </div>

          <div className='border-[#F13178] border-b '></div>

          <div className="flex gap-2 mt-1 justify-end">
            <button onClick={Refresh}>
              <div className='flex gap-2 text-gray-500'>
                <p className='text-xs'>Refresh</p>

                <LuRefreshCcw size={18} />
              </div>
            </button>

          </div>

          {loading && (
            <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
              <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
            </div>
          )}


          {coursesAray && coursesAray.map((courses, index) => (

            <div key={index} className='bg-slate-400 w-full md:w-full sm:flex gap-2 p-2  rounded-lg  mt-2'>

              <div className='w-full sm:w-1/3 text-[#134574] sm:py-8 mb-2 sm:mb-0 flex justify-center  items-center'>
                <div className='items-center justify-center'>
                  <p className='font-extrabold  text-xl'>{courses}</p>
                  <p className='text-xs text-center '>{staffTitle} {staffName}</p>
                </div>
              </div>

              <div className='w-full sm:w-2/3 text-[#134574]'>

                <div className='grid grid-cols-3 gap-2'>

                  <Link to={`/si-create-curriculum/${courses}`} className=" bg-slate-500 px-2 w-full text-center items-center rounded-[6px]  flex justify-center">
                    <div className="flex items-center justify-center">
                      <p className="text-white pl-2 text-xs">Curriculum</p>
                      <FaCirclePlus size={28} className="pl-2 text-white" />

                    </div>
                  </Link>


                  <Link to={`/si-create-content/${courses}`} className=" bg-slate-500 px-2 w-full text-center items-center rounded-[6px]  flex justify-center">
                    <div className="flex items-center justify-center">
                      <p className="text-white pl-2 text-xs">Content</p>
                      <FaCirclePlus size={28} className="pl-2 text-white" />

                    </div>
                  </Link>


                  <Link to={`/si-create-question/${courses}`} className=" bg-slate-500 px-2 w-full text-center items-center rounded-[6px]  flex justify-center">
                    <div className="flex items-center justify-center">
                      <p className="text-white pl-2 text-xs">Question</p>
                      <FaCirclePlus size={28} className="pl-2 text-white" />

                    </div>
                  </Link>

                  <Link to={`/si-course-curriculum/${courses}`} className=" bg-slate-500 px-2 w-full text-center items-center rounded-[6px]  flex justify-center">
                    <div className="flex items-center justify-center">
                      <p className="text-white pl-2 text-xs">Curriculum</p>
                      <CiViewList size={28} className="pl-2  text-white" />

                    </div>
                  </Link>

                  <Link to={`/si-course-content-list/${courses}`} className=" bg-slate-500 px-2 w-full text-center items-center rounded-[6px]  flex justify-center">
                    <div className="flex items-center justify-center">
                      <p className="text-white pl-2 text-xs">Content</p>
                      <CiViewList size={28} className="pl-2 text-white" />

                    </div>
                  </Link>

                  <Link to={`/si-question-list/${courses}`} className=" bg-slate-500 px-2 w-full text-center items-center rounded-[6px]  flex justify-center">
                    <div className="flex items-center justify-center">
                      <p className="text-white pl-2 text-xs">Question</p>
                      <CiViewList size={28} className="pl-2 text-white" />

                    </div>
                  </Link>
                  <Link to={`/si-students/${courses}/${email}`} className=" bg-slate-500 px-2 w-full text-center items-center rounded-[6px]  flex justify-center">
                    <div className="flex items-center justify-center">
                      <p className="text-white pl-2 text-xs">View Student</p>
                      <FaChalkboardUser size={28} className="pl-2 text-white" />

                    </div>
                  </Link>

                </div>


              </div>



            </div>
          ))}






        </div>


      )}
    </div>

  )
}

export default SchoolInstructorCourse
