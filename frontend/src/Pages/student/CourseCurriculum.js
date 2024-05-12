import React, { useState, useEffect } from 'react';
import StudentLogin from "./StudentLogin";
import TopNav from "./TopNav";
import axios from 'axios';
import toastr from 'toastr';
import ReactLoading from "react-loading";
import Curricullum from '../../components/curricullum';


const CourseCurriculum = () => {
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [courses, setCourses] = useState([]);


  useEffect(() => {
    let studentToken = JSON.parse(localStorage.getItem('StudentToken'));

    // Check if staffToken exists and has the 'token' property
    if (studentToken && studentToken.token) {
      setUser(true);
    }
  }, []);


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
  }, []);

  // Get the value of the first course available
  useEffect(() => {
    if (courses.length > 0) {
      const firstCourse = courses[0];
      setSelectedCourse(firstCourse.course);

    }
  }, [courses]);



  return (
    <div className="overflow-y-scroll w-full h-screen hide-bar">
      {!user ? (
        <StudentLogin />
      ) : (
        <div className="relative z-0 w-full bg-[#C8D1DA] px-5 flex flex-col gap-3 pb-12">

          <TopNav />
            <div className='flex gap-4'>
              <p className='text-[#134574] font-bold'>Course</p>

              <select
                className='rounded-lg h-[30px] w-[200px] text-slate-500 outline-none bg-slate-200 px-4'
                value={selectedCourse}
                onChange={(event) => setSelectedCourse(event.target.value)}

              >
                {courses.map((courses, index) => (
                  <option key={index} value={courses.course}>
                    {courses.course}
                  </option>

                ))}
              </select>

            </div>

            {loading && (
                <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
                </div>
            )}

      


          <Curricullum course={selectedCourse} />

        </div>
      )}
    </div>
  );
}

export default CourseCurriculum