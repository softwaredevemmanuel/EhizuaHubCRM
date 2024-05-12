import React, { useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom'
import StudentLogin from "../StudentLogin";
import TopNav from "../TopNav";
import { IoIosArrowRoundBack } from "react-icons/io";
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'
import JoditEditor from 'jodit-react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import toastr from 'toastr';
import ReactLoading from "react-loading";


const NewFeedComplain = () => {
    const [user, setUser] = useState(false);
    const [loading, setLoading] = useState(false)
    const [content, setContent] = useState('')
    const [title, setTitle] = useState('')
    const { reportType: reportTypeParam } = useParams();
    const editor = useRef(null);
  
    useEffect(() => {
        let studentToken = JSON.parse(localStorage.getItem('StudentToken'));

        // Check if staffToken exists and has the 'token' property
        if (studentToken && studentToken.token) {
            setUser(true);
        }
    }, []);
  
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
        <div className="overflow-y-scroll w-full h-screen hide-bar">
            {!user ? (
                <StudentLogin />
            ) : (
                <div className="relative z-0 w-full bg-[#C8D1DA] px-5 flex flex-col gap-3">

                    <TopNav />

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
            )}
        </div>
    );
}

export default NewFeedComplain

