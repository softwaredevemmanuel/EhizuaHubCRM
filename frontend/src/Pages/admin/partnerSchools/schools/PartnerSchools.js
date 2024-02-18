import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development'
import { FaCirclePlus } from "react-icons/fa6";
import AdminLogin from "../../AdminLogin"
import axios from 'axios';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import ReactLoading from "react-loading";
import { CiLocationOn } from "react-icons/ci";
import { RiSchoolFill } from "react-icons/ri";


const PartnerSchools = () => {
  const [user, setUser] = useState(false);
  const [schools, setSchools] = useState([]);


  useEffect(() => {
    // Fetch tutors when the component mounts
    async function fetchTutors() {
      try {
        const response = await axios.get('http://localhost:5000/api/auth/partner-schools');
        setSchools(response.data.message);
      } catch (error) {
        toastr.error('Error retrieving Partner schools');
      }
    }

    fetchTutors();
  }, []);

  return (
    <div className="">
      {user ? (
        <AdminLogin />

      ) : (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-screen">
          <div className="w-full  bg-[#C8D1DA] flex flex-col gap-3">

            <div className='flex justify-between '>
              <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Partner Schools Section</p>



            </div>
          </div>
          <div className='border-[#F13178] border-b '></div>


          <div className='flex justify-end gap-2'>
            <Link to='/create-school-course/hr' className=" bg-slate-500 px-1 mt-4 text-center items-center rounded-md w-fit py-1">
              <div className="flex items-center justify-center">
                <p className="text-white pl-2"> Course</p>
                <FaCirclePlus size={22} className="pl-2 mr-2 text-white" />

              </div>
            </Link>

            <Link to='/create-school/hr' className=" bg-slate-500 px-1 mt-4 text-center items-center rounded-md font-bold  w-fit py-1">
              <div className="flex items-center justify-center">
                <p className="text-white pl-2"> School</p>
                <FaCirclePlus size={22} className="pl-2 mr-2 text-white" />

              </div>
            </Link>
            <Link to='/create-school-student/hr' className=" bg-slate-500 px-1 mt-4 text-center items-center rounded-md w-fit py-1">
              <div className="flex items-center justify-center">
                <p className="text-white pl-2"> Student</p>
                <FaCirclePlus size={22} className="pl-2 mr-2 text-white" />

              </div>
            </Link>

          </div>

          <div className=' bg-slate-200 h-fit px-2 pb-4 rounded-md'>
            {schools.map((school, index) => (

              <Link to="/school-details/hr" className='pl-5 rounded-md "w-[412px] h-[50px] bg-slate-300 text-[#134574] flex items-center justify-between mt-2 pr-5'>
                <div className='flex gap-1 justify-center items-center'>
                  <RiSchoolFill />
                  <p className='ml-2 text-md'>{school.schoolName}</p>
                </div>

                <div className='flex gap-1 justify-center items-center'>

                  <CiLocationOn className='hidden sm:block' />
                  <p className='hidden sm:block'>{school.schoolAddress}</p>

                </div>

              </Link>
            ))}

          </div>



        </div>
      )}
      {/* right section  */}



    </div>
  )
}

export default PartnerSchools