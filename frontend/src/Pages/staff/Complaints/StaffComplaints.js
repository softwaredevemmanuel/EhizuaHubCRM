import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom'
import StaffLogin from "../StaffLogin";
import { IoIosArrowRoundBack } from "react-icons/io";
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'
import JoditEditor from 'jodit-react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import toastr from 'toastr';
import ReactLoading from "react-loading";

const NewComplaints = () => {
  const [user, setUser] = useState(false)
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')
  const { reportType: reportTypeParam } = useParams();
  const [loading, setLoading] = useState(false); // New state for loading indicator
  const editor = useRef(null);


  const postContent = () => {
    let localEmail = JSON.parse(localStorage.getItem('User'));

    if ((title || starsClicked) && content) {
      setLoading(true); // Start loading indicator

      axios.post("http://localhost:5000/api/staff/feedback_complaints", {
        title: title,
        reportType: reportTypeParam,
        content: content,
        email: localEmail.email,
        starsArray: starsClicked
      })
        .then(response => {
          toastr.success(response.data.message);

          // Clear input fields after successful submission
          setTitle('');
          setContent('');
          setStarsClicked([]);

        })
        .catch(error => {
          toastr.error(error.response.data.error);

        })
        .finally(() => {
          setLoading(false); // Stop loading indicator
        });
    } else {
      toastr.error('Please fill in all required fields.');
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    postContent();
  };

  const [starsClicked, setStarsClicked] = useState([]);

  const handleStarClick = (starNumber) => {
    const clickedStars = Array.from({ length: starNumber }, (_, index) => `star ${index + 1}`);
    setStarsClicked(clickedStars);
  };


  return (
    <div className="">
      {user ? (
        <StaffLogin />
      ) : (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-screen">
          <div className='flex justify-between'>
            <nav className="flex mt-3" aria-label="Breadcrumb">
              <ol role="list" className="flex items-center space-x-4">
                <li>
                  <div>
                    <Link to="/dashboard" className="text-[#F13178] hover:text-[#134574]">
                      <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                      <span className="sr-only">Home</span>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-[#F13178]" aria-hidden="true" />
                    <Link to='/staff_complaints-list' className="ml-4 text-xs font-bold text-[#F13178] hover:text-[#134574]">
                      COMPLAINTS
                    </Link>
                    <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-[#F13178]" aria-hidden="true" />
                    <div className="ml-4 text-xs font-bold text-[#F13178]">
                      NEW {reportTypeParam.toUpperCase()}
                    </div>
                  </div>

                </li>

              </ol>
            </nav>
            <Link to='/staff_complaints-list' className='mt-3'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

          </div>

          <div className='border-[#F13178] border-b '></div>

          {loading && (
            <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
              <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
            </div>
          )}

          <div className=" bg-slate-400 w-full">
            <form onSubmit={handleSubmit}>


              <div className="grid grid-cols-2" >
                {reportTypeParam == 'complaints' && (

                  <div className="sm:flex text-[#134574] items-center p-4 gap-4 mt-2">
                    <p className=" text-xs font-bold">Subject</p>
                    <input
                      type="text"
                      placeholder="Title"
                      className='rounded-md pl-2  font-medium text-[#134574] focus:outline-none focus:border-none w-full'
                      value={title}
                      onChange={(event) => setTitle(event.target.value)}
                    />
                  </div>
                )}

                {reportTypeParam == 'feedback' && (

                  <div className="sm:flex text-[#134574] items-center p-4 mt-2">
                    <p className="text-xs font-bold pr-2">Review</p>
                    {[1, 2, 3, 4, 5].map((starNumber) => (
                      <div key={starNumber} className="inline-block relative w-7 sm:w-10" onClick={() => handleStarClick(starNumber)}>
                        <input
                          type="checkbox"
                          id={`star-checkbox-${starNumber}`}
                          className="absolute opacity-0"
                          checked={starsClicked.includes(`star ${starNumber}`)}
                          onChange={() => { }} // Empty onChange to prevent direct checkbox interaction
                        />
                        <label
                          htmlFor={`star-checkbox-${starNumber}`}
                          className={`block text-white cursor-pointer ${starsClicked.includes(`star ${starNumber}`) ? 'text-yellow-400' : 'text-gray-400'}`}
                        >
                          <svg
                            className={`w-6 sm:w-8 h-6 sm:h-8 fill-current`}
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 2L15.09 8.5H22L17 13.4L19.91 21.05L12 17.15L4.09 21.05L7 13.4L2 8.5H8.91L12 2Z"
                            />
                          </svg>
                        </label>
                      </div>
                    ))}
                  </div>
                )}


                <div className="sm:flex text-[#134574] items-center p-4 gap-4 mt-2">
                  <p className="text-xs font-bold">Type</p>
                  <input
                    className='rounded-md pl-2  font-medium text-[#134574] focus:outline-none focus:border-none w-[120px]'
                    value={reportTypeParam}
                    readOnly
                  />

                </div>


              </div>



              <div className='px-4 mt-6'>

                <JoditEditor
                  ref={editor}
                  value={content}
                  tabIndex={1} // tabIndex of textarea
                  onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                  onChange={newContent => { }}
                />

              </div>



              <div className="flex justify-between p-8">
                <input type="file" />

                <button className='py-1  px-4 rounded-md border-[#F13178] text-white bg-[#F13178] font-semibold'>
                  Submit
                </button>
              </div>
            </form>
          </div>


        </div>
      )
      }
      {/* right section  */}



    </div >

  )
}

export default NewComplaints