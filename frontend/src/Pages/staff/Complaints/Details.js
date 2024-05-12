import { Fragment, useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import StaffLogin from "../StaffLogin";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'
import JoditEditor from 'jodit-react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import toastr from 'toastr';
import ReactLoading from "react-loading";

const ComplaintsDetails = () => {
  const [user, setUser] = useState(false)
  const [open, setOpen] = useState(false)
  const [content, setContent] = useState('')
  const [replyContent, setReplyContent] = useState('')
  const [email, setEmail] = useState('')
  const [title, setTitle] = useState('')
  const [starReview, setStarReview] = useState('')
  const editor = useRef(null);
  const cancelButtonRef = useRef(null)
  const { reportType: reportTypeParam } = useParams();
  const [loading, setLoading] = useState(false)
  const [complaintsResponse, setComplaintsResponse] = useState([])
  const [feedbackResponse, setFeedbackResponse] = useState([])

  const starsClicked = starReview.split(', ')

  const CloseTicket = () => {
    setOpen(true)
  }


  // Fetch Complaints
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem('User'));
    setEmail(user.email)
    setLoading(true)
    async function fetchContent() {
      try {
        const response = await axios.get('http://localhost:5000/api/staff/feedback_complaints-details', {
          headers: {
            id: idParam
          }
        });
        setFeedbackResponse(response.data.feedback);
        setComplaintsResponse(response.data.complaints);
        setLoading(false)
      } catch (error) {
        toastr.error('Error retrieving Courses');
        setLoading(false)

      }
    }

    fetchContent();
  }, []);

  // Get the content parameter from the URL using useParams
  const { id: idParam } = useParams();

  useEffect(() => {

    if (complaintsResponse.length > 0) {
      setTitle(complaintsResponse[0].title)
    }
  },[complaintsResponse])

  useEffect(() => {

    if (feedbackResponse.length > 0) {
      setStarReview(feedbackResponse[0].star)
    }
  },[feedbackResponse])

  const postContent = () => {
    let localEmail = JSON.parse(localStorage.getItem('User'));

    if (replyContent) {
      setLoading(true); // Start loading indicator

      axios.post("http://localhost:5000/api/staff/reply_complaints", {
        title: title,
        reportType: reportTypeParam,
        content: replyContent,
        email: localEmail.email,
        uniqueid: idParam
      })
        .then(response => {
          toastr.success(response.data.message);

          // Clear input fields after successful submission
          setReplyContent('');

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

  return (
    <div className="">
      {user ? (
        <StaffLogin />
      ) : (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full pb-12">
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
                      COMPLAINTS HISTORY
                    </div>
                  </div>

                </li>

              </ol>
            </nav>
            <Link to='/staff_complaints-list' className='mt-3'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

          </div>

          <div className='border-[#F13178] border-b '></div>



          <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                      <div className="sm:flex sm:items-start">
                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                          <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                        </div>
                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                          <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                            Close Complaints
                          </Dialog.Title>
                          <div className="mt-2">
                            <textarea placeholder='Enter a Text Here' className='w-full bg-slate-200 rounded-md p-2 focus:outline-none focus:border-none' />
                            <p className="text-sm text-gray-500">
                              Are you satisfied with how your complaints was resolved? Kindly drop a comment and leave us a review?
                            </p>
                            <div className="flex items-center mt-4">
                              <p className='pr-4'>Rating</p>

                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaRegStar />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                        <button
                          type="button"
                          className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                          onClick={() => setOpen(false)}
                        >
                          Close Complaint
                        </button>
                        <button
                          type="button"
                          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                          onClick={() => setOpen(false)}
                          ref={cancelButtonRef}
                        >
                          Cancel
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition.Root>

          <div className="grid sm:grid-cols-2 gap-4" >

            {reportTypeParam == 'complaints' && (

              <div className="sm:flex text-[#134574] items-center gap-2 mt-2">
                <p className=" text-xs font-bold">Subject</p>

                <input
                  type="text"
                  className='rounded-md pl-2  font-medium text-[#134574] focus:outline-none focus:border-none w-full'
                  value={title}
                  readOnly
                />

              </div>
            )}

            {reportTypeParam == 'feedback' && (
              <div className="sm:flex text-[#134574] items-center p-4 mt-2">
                <p className="text-xs font-bold pr-2">Review</p>
                {[1, 2, 3, 4, 5].map((starNumber) => (
                  <div key={starNumber} className="inline-block relative w-7 sm:w-10" >
                    <input
                      type="checkbox"
                      id={`star-checkbox-${starNumber}`}
                      className="absolute opacity-0"
                      checked={starsClicked.includes(`star ${starNumber}`)}
                      onChange={() => { }} // Empty onChange to prevent direct checkbox interaction
                    />
                    <label
                      htmlFor={`star-checkbox-${starNumber}`}
                      className={`block text-white cursor-pointer ${starsClicked.includes(`star ${starNumber}`) ? 'text-blue-500' : 'text-gray-400'}`}
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

            <div className="sm:flex text-[#134574] items-center pt-2 gap-4 ">
              <p className=" font-bold text-xs">Type</p>
              <input
                className='rounded-md pl-2 font-medium text-[#134574] focus:outline-none focus:border-none w-full'
                value={reportTypeParam}
                readOnly
              />

            </div>


          </div>

          <form onSubmit={handleSubmit}>


          {complaintsResponse.map((complain, index) => (
            <div key={index}>
              <div className='flex mt-4'>

                <div className=" rounded-md w-full">

                  {complain.email == email && (
                    <div className="sm:flex p-1 sm:p-1 sm:gap-4">

                      <p className="text-[#134574] font-bold">You</p>

                      <div
                        className='w-full rounded-md py-1 px-4 lg:pr-10 pr-4 bg-slate-200  text-slate-700'
                        dangerouslySetInnerHTML={{ __html: complain.content }} />

                    </div>

                  )}
                </div>
                <div className='w-3/12'>

                </div>
              </div>

              <div className='flex'>
                <div className='w-3/12'>

                </div>
                <div className="  rounded-md w-9/12">
                  {complain.email != email && (

                    <div className="sm:flex p-1 sm:p-1 gap-2 ">
                      <p className="text-[#134574] font-bold pr-2 sm:hidden">Admin</p>
                      <div
                        className='w-full rounded-md py-1 px-4 lg:pr-10 pr-4 bg-slate-200  text-slate-700'
                        dangerouslySetInnerHTML={{ __html: complain.content }} />
                      <p className="text-[#134574] font-bold pr-2 hidden sm:block">Admin</p>



                    </div>
                  )}
                </div>
              </div>
            </div>

          ))}
          {feedbackResponse.map((feedback, index) => (
            <div key={index}>
              <div className='flex mt-4'>

                <div className=" rounded-md w-full">

                  {feedback.email == email && (
                    <div className="sm:flex p-1 sm:p-1 sm:gap-4">

                      <p className="text-[#134574] font-bold">You</p>

                      <div
                        className='w-full rounded-md py-1 px-4 lg:pr-10 pr-4 bg-slate-200  text-slate-700'
                        dangerouslySetInnerHTML={{ __html: feedback.content }} />

                    </div>

                  )}
                </div>
                <div className='w-3/12'>

                </div>
              </div>

              <div className='flex'>
                <div className='w-3/12'>

                </div>
                <div className="  rounded-md w-9/12">
                  {feedback.email != email && (

                    <div className="sm:flex p-1 sm:p-1 gap-2 ">
                      <p className="text-[#134574] font-bold pr-2 sm:hidden">Admin</p>
                      <div
                        className='w-full rounded-md py-1 px-4 lg:pr-10 pr-4 bg-slate-200  text-slate-700'
                        dangerouslySetInnerHTML={{ __html: feedback.content }} />
                      <p className="text-[#134574] font-bold pr-2 hidden sm:block">Admin</p>

                    </div>
                  )}
                </div>
              </div>
            </div>

          ))}



          {reportTypeParam == 'complaints' && (
            <div>
              <div className=" flex text-[#134574] justify-between mt-8 mb-4">
                <p className=" font-bold ">Reply</p>
                <button onClick={CloseTicket} className="bg-[#F13178]  font-bold rounded-md px-2 text-white p-1 text-xs">
                  <div className="flex gap-2 items-center">
                    <p>Close Complaint</p>
                    <FaTimesCircle />
                  </div>

                </button>

              </div>

              <div className="border border-slate-400 w-full">

                <div className="flex p-1">

                  <JoditEditor
                    ref={editor}
                    value={replyContent}
                    tabIndex={1} // tabIndex of textarea
                    onBlur={newContent => setReplyContent(newContent)} // preferred to use only this option to update the content for performance reasons
                    onChange={newContent => { }}
                  />

                </div>



                <div className="flex justify-between p-8">
                  <input type="file" />

                  <button className='border-2 lg:py-1 py-2 lg:px-10 px-4 rounded-md border-[#F13178] text-[#ffffff] bg-[#F13178] font-semibold'>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          )}
          </form>


        </div>
      )
      }
      {/* right section  */}



    </div >

  )
}

export default ComplaintsDetails