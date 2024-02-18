import webdev from "../../assets/webdev.png"
import React, { useState, useEffect } from 'react';
import StudentLogin from "./StudentLogin";
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import frontend from "../../assets/frontend.png";
import TopNav from "./TopNav";
import axios from 'axios';
import toastr from 'toastr';
import ReactLoading from "react-loading";
import Footer from "./Footer";


const First = () => {
  return (
    <div className="flex items-center  justify-between w-full flex-col md:flex-row px-4 p-4">
      <div className="flex flex-col gap-2 w-full  mr-2">
        <h1 className="font-bold lg:font-extrabold text-[20px] text-white border border-slate-400 w-fit px-1">
          FULL STACK DEVELOPMENT
        </h1>
        <div className="px-3 pb-3">

          <p className="text-red-700 font-bold">-40% OFF</p>
          <h3 className="text-white">Duration: 16 Weeks</h3>
          <h4 className="text-white">
            Description:
            <span className="text-[12px]">
              A crash course on Front-end and Back-end to give you an egde in the
              Tech World
            </span>
          </h4>
          <button className="bg-slate-200 w-fit py-1 px-3 text-red-700 rounded-lg mt-4 font-bold">Register</button>
        </div>
      </div>

      <div className="w-full hidden md:block">
        <img src={frontend} alt="img" style={{ width: '70%', height: 'auto', margin: '0 auto' }} />
      </div>




    </div>
  );
};
const Second = () => {
  return (
    <div className="flex items-center  justify-between w-full flex-col md:flex-row px-4 p-4">
      <div className="flex flex-col gap-2 w-full  mr-2">
        <h1 className="font-bold lg:font-extrabold text-[20px] text-white border border-slate-400 w-fit px-1">
          FULL STACK DEVELOPMENT
        </h1>
        <div className="px-3 pb-3">

          <p className="text-red-700 font-bold">-40% OFF</p>
          <h3 className="text-white">Duration: 16 Weeks</h3>
          <h4 className="text-white">
            Description:
            <span className="text-[12px]">
              A crash course on Front-end and Back-end to give you an egde in the
              Tech World
            </span>
          </h4>
          <button className="bg-slate-200 w-fit py-1 px-3 text-red-700 rounded-lg mt-4 font-bold">Register</button>
        </div>
      </div>

      <div className="w-full justify-center hidden md:block">
        <img src={frontend} alt="img" style={{ width: '70%', height: 'auto' }} className="" />
      </div>


    </div>
  );
};
const Third = () => {
  return (
    <div className="flex items-center  justify-between w-full flex-col md:flex-row px-4 p-4">
      <div className="flex flex-col gap-2 w-full mr-2">
        <h1 className="font-bold lg:font-extrabold text-[20px] text-white border border-slate-400 w-fit px-1">
          FULL STACK DEVELOPMENT
        </h1>
        <div className="px-3 pb-3">

          <p className="text-red-700 font-bold">-40% OFF</p>
          <h3 className="text-white">Duration: 16 Weeks</h3>
          <h4 className="text-white">
            Description:
            <span className="text-[12px]">
              A crash course on Front-end and Back-end to give you an egde in the
              Tech World
            </span>
          </h4>
          <button className="bg-slate-200 w-fit py-1 px-3 text-red-700 rounded-lg mt-4 font-bold">Register</button>
        </div>
      </div>

      <div className="w-full justify-center hidden md:block">
        <img src={frontend} alt="img" style={{ width: '70%', height: 'auto' }} className="" />
      </div>


    </div>
  )
}

export default function StudentDashboard() {
  const [user, setUser] = useState(false);
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [instructor, setInstructor] = useState([])
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState('');
  const [location, setLocation] = useState('');
  const [courses, setCourses] = useState([]);





  useEffect(() => {
    let studentToken = JSON.parse(localStorage.getItem('StudentToken'));

    // Check if staffToken exists and has the 'token' property
    if (studentToken && studentToken.token) {
      setUser(true);
    }
  }, []);



  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  const logoff = () => {
    const localStorageData = JSON.parse(localStorage.getItem('StudentToken')) || {};
    delete localStorageData.token;
    localStorage.setItem('StudentToken', JSON.stringify(localStorageData));
    setUser(false);

  };

  // Students Courses
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem('User'));
    setLoading(true)
    async function fetchInstructorDetails() {
      try {
        const response = await axios.get('http://localhost:5000/api/students/enrolled-course', {
          headers: {
            email: user.email
          }
        });

        setCourses(response.data.courses);
        setLoading(false)
      } catch (error) {
        toastr.error('Error retrieving Courses');
        setLoading(false)

      }
    }

    fetchInstructorDetails();
  }, [reload]);


  // Students Instructor
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem('User'));
    setLoading(true)
    async function fetchInstructorDetails() {
      try {
        const response = await axios.get('http://localhost:5000/api/students/course-instructor/location', {
          headers: {
            email: user.email,
            location: location
          }
        });

        setInstructor(response.data.instructor);
        setLoading(false)
      } catch (error) {
        toastr.error('Error retrieving Courses');
        setLoading(false)

      }
    }

    fetchInstructorDetails();
  }, [reload, location]);

  // Students Details
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem('User'));
    setLoading(true)
    async function fetchStudentDetails() {
      try {
        const response = await axios.get('http://localhost:5000/api/students/student-details', {
          headers: {
            email: user.email,
          }
        });

        setLocation(response.data.location);
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setLoading(false)
      } catch (error) {
        toastr.error('Error retrieving Courses');
        setLoading(false)

      }
    }

    fetchStudentDetails();
  }, [reload]);




  return (
    <div className="overflow-y-scroll w-full h-screen hide-bar">
      {!user ? (
        <StudentLogin />
      ) : (
        <div className="relative z-0 w-full bg-white px-5 flex flex-col gap-3">

          <TopNav />

          <div className="flex flex-col gap-1 text-slate-700 text-[1.2rem] font-extrabold py-2 bg-slate-200 px-2">
            <div className="flex justify-between">
              <p> Welcome {firstName}</p>
              <div className="bg-slate-500 px-4 py-1 rounded-md text-sm text-white font-bold">
                <button onClick={logoff} className=""> Log off</button>
              </div>
            </div>
            <p className='text-[0.87rem] font-light'>Elevate your learning with one click</p>

          </div>
          <div className="bg-[#134574] w-full h-fit p-4">
            <Slider {...settings} className="mx-4 bg-[#134574]">
              <First />
              <Second />
              <Third />
            </Slider>
          </div>

          <div className="mt-4 text-4xl font-bold text-slate-700">
            <p>Lets Start Learning {firstName}</p>
          </div>

          {loading && (
            <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
              <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
            </div>
          )}

          {/* my courses */}
          <div className="flex-col flex gap-3 py-8">
            <p className="text-slate-700 border-l border-[#f13178] pl-2">MY COURSES</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4">

              {courses.map((course, index) => (
                <Link to={`/${course.course}/content-list`} key={index} className="flex items-center justify-center">
                  <div className="flex flex-col w-[280px]">
                    <div className="w-full rounded-t-xl">
                      <img src={webdev} alt="" className="w-full object-cover" />
                    </div>
                    <div className="flex gap-3 rounded-b-md border-b bg-white flex-col px-2 py-2 text-white text-[1rem]">
                      <p className="text-lg font-bold text-slate-700">{course.course}</p>
                      {instructor.some(instr => instr.courses === course.course) ? (
                        instructor.map((instr, idx) => (
                          instr.courses === course.course && (
                            <p key={idx} className="text-xs text-slate-700">{instr.first_name} {instr.last_name} </p>
                          )
                        ))
                      ) : (
                        <p className="text-xs text-slate-700">Online</p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}



            </div>

          </div>

          {/* <Footer/> */}

        </div>
      )}
    </div>
  );
}
