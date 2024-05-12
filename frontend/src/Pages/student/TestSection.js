import React, { useState, useEffect, useRef } from 'react';
import StudentLogin from "./StudentLogin";
import TopNav from "./TopNav";
import { Link } from "react-router-dom";
import axios from 'axios';
import toastr from 'toastr';
import ChartSection from '../../components/ChatSection'



const TestSection = () => {
  const [user, setUser] = useState(false);
  const [totalScore, setTotalScore] = useState('');
  const [location, setLocation] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [courses, setCourses] = useState([]);
  const [attendance, setAttendance] = useState('');
  const [reload, setReload] = useState('reload');

  const labels = [
    'Attendance', 'Test', 'Exams', 'Projects', 'Workshops'
  ]

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


   // Calculate Total Number of correct answers
   useEffect(() => {
    let user = JSON.parse(localStorage.getItem('User'));
    setLoading(true)
    async function fetchPecentageTest() {
      try {
        const response = await axios.get('http://localhost:5000/api/students/total-passed-score', {
          headers: {
            email: user.email,
            course : selectedCourse
          }
        });

        setTotalScore(response.data.score);
        setLoading(false)
      } catch (error) {
        toastr.error('Error retrieving Courses');
        setLoading(false)

      }
    }

    fetchPecentageTest();
  }, [selectedCourse]);

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
          setLoading(false)
        } catch (error) {
          toastr.error('Error retrieving Courses');
          setLoading(false)
  
        }
      }
  
      fetchStudentDetails();
    }, [reload]);
  

   // Calculate Attendance Percentage
   useEffect(() => {
    let user = JSON.parse(localStorage.getItem('User'));
    setLoading(true)
    async function fetchPecentageTest() {
      try {
        const response = await axios.get('http://localhost:5000/api/students/attendance', {
          headers: {
            email: user.email,
            course : selectedCourse,
            location : location
          }
        });

        setAttendance(response.data.attendance);
        setLoading(false)
      } catch (error) {
        toastr.error('Error retrieving Courses');
        setLoading(false)

      }
    }

    fetchPecentageTest();
  }, [selectedCourse, location]);

  // Get the value of the first course available
  useEffect(() => {
    if (courses.length > 0) {
      const firstCourse = courses[0];
      setSelectedCourse(firstCourse.course);

    }
  }, [courses]);

 



  return (
    <div className="overflow-y-scroll w-full h-screen hide-bar">
      {user ? (
        <StudentLogin />
      ) : (
        <div className="relative z-0 w-full bg-[#C8D1DA] px-5 flex flex-col gap-3">

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




         <ChartSection course={selectedCourse} attendance={attendance} labels={labels} testScore ={totalScore}/>

         

          <div className='bg-slate-200  h-[520px] rounded-lg sm:px-8 mb-12'>
            <div className='overflow-x-auto mt-4'>
              <div className='p-4 h-[500px]'>

                <p className='text-[#F13178] font-bold pt-4'> HTML 101: BEGINERS GUIDE TO CODING</p>
                <ul className='px-4 list-disc mt-2 text-[#134574]'>

                  <li>
                    <div className="flex items-center justify-between hover:bg-gray-300 rounded-md">
                      <p>WHAT IS HTML</p>
                      <div className="bg-slate-400 rounded-md px-1 text-white text-xs">
                        <Link>Take Test</Link>
                      </div>
                    </div>

                  </li>
                  <li>
                    <div className="flex items-center justify-between hover:bg-gray-300 rounded-md">
                      <p>GETTING SET UP</p>
                      <div className="bg-slate-400 rounded-md px-1 text-white text-xs">
                        <Link>Take Test</Link>
                      </div>
                    </div>

                  </li>
                  <li>
                    <div className="flex items-center justify-between hover:bg-gray-300 rounded-md">
                      <p>HTML SYNTAX</p>
                      <div className="bg-slate-400 rounded-md px-1 text-white text-xs">
                        <Link>Take Test</Link>
                      </div>
                    </div>

                  </li>
                  <li>
                    <div className="flex items-center justify-between hover:bg-gray-300 rounded-md">
                      <p>PAGE TITLES</p>
                      <div className="bg-slate-400 rounded-md px-1 text-white text-xs">
                        <Link>Take Test</Link>
                      </div>
                    </div>

                  </li>
                  <li>
                    <div className="flex items-center justify-between hover:bg-gray-300 rounded-md">
                      <p>PARAGRAPHS AND HEADINGS</p>
                      <div className="bg-slate-400 rounded-md px-1 text-white text-xs">
                        <Link>Take Test</Link>
                      </div>
                    </div>

                  </li>
                  <li>
                    <div className="flex items-center justify-between hover:bg-gray-300 rounded-md">
                      <p>NESTING HTML ELEMENTS</p>
                      <div className="bg-slate-400 rounded-md px-1 text-white text-xs">
                        <Link>Take Test</Link>
                      </div>
                    </div>

                  </li>

                  <li>BOLD, ITALICS AND UNDERLINES</li>
                  <li>THE DIV ELEMENT</li>
                  <li>BLOCK VS INLINE ELEMENTS</li>
                  <li>LINKING TO OTHER PAGES</li>
                  <li>OPENING LINKS IN NEW WINDOWS</li>
                  <li>ADDING IMAGES</li>
                  <li>LINKING AN IMAGE TO OTHER WEB PAGE</li>
                  <li>HTML COMMENTS</li>
                </ul>
                <p className='text-[#F13178] font-bold pt-4'> HTML 101: BEGINERS GUIDE TO CODING</p>
                <ul className='px-4 list-disc mt-2 text-[#134574]'>
                  <li className='custom-list-item'>WHAT IS HTML</li>
                  <li>GETTING SET UP</li>
                  <li>HTML SYNTAX</li>
                  <li>PAGE TITLES</li>
                  <li>PARAGRAPHS AND HEADINGS</li>
                  <li>NESTING HTML ELEMENTS</li>
                  <li>BOLD, ITALICS AND UNDERLINES</li>
                  <li>THE DIV ELEMENT</li>
                  <li>BLOCK VS INLINE ELEMENTS</li>
                  <li>LINKING TO OTHER PAGES</li>
                  <li>OPENING LINKS IN NEW WINDOWS</li>
                  <li>ADDING IMAGES</li>
                  <li>LINKING AN IMAGE TO OTHER WEB PAGE</li>
                  <li>HTML COMMENTS</li>
                </ul>

                <p className='text-[#F13178] font-bold pt-4'> HTML 101: BEGINERS GUIDE TO CODING</p>
                <ul className='px-4 list-disc mt-2 text-[#134574]'>
                  <li className='custom-list-item'>WHAT IS HTML</li>
                  <li>GETTING SET UP</li>
                  <li>HTML SYNTAX</li>
                  <li>PAGE TITLES</li>
                  <li>PARAGRAPHS AND HEADINGS</li>
                  <li>NESTING HTML ELEMENTS</li>
                  <li>BOLD, ITALICS AND UNDERLINES</li>
                  <li>THE DIV ELEMENT</li>
                  <li>BLOCK VS INLINE ELEMENTS</li>
                  <li>LINKING TO OTHER PAGES</li>
                  <li>OPENING LINKS IN NEW WINDOWS</li>
                  <li>ADDING IMAGES</li>
                  <li>LINKING AN IMAGE TO OTHER WEB PAGE</li>
                  <li>HTML COMMENTS</li>
                </ul>


              </div>
            </div>


          </div>





        </div>
      )}
    </div>
  );
}

export default TestSection