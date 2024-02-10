import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom'
import StaffLogin from "../StaffLogin";
import toastr from 'toastr';
import ReactLoading from "react-loading";
import { FaMinusCircle } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";


const CreateCurriculum = () => {
  const [user, setUser] = useState(false)
  const [mainTopic, setMainTopic] = useState('');
  const [subTopic, setSubTopic] = useState('');
  const [loading, setLoading] = useState(false); // New state for loading indicator
  const { course: contentParam } = useParams();
  const tutorCourse = contentParam.trim()

  const [inputs, setInputs] = useState(['']); // Initial input field

  const handleAddInput = () => {
    setInputs([...inputs, '']); // Add a new empty input field to the inputs array
  };

  const handleRemoveInput = (index) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1); // Remove the input field at the specified index
    setInputs(newInputs);
  };

  const handleChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };


  useEffect(() => {
    let staffToken = JSON.parse(localStorage.getItem('StaffToken'));
    if (staffToken && staffToken.token) {
      setUser(true);

    }
  }, []);


  // ....................... Create Question API ...................

  const CreateCurriculum = () => {
    if (mainTopic && inputs) {
      setLoading(true); // Start loading indicator

      axios.post("http://localhost:5000/api/hub-tutor/create-curriculum", {
        course: tutorCourse,
        mainTopic: mainTopic,
        subTopicArray: inputs,

      })
        .then(response => {
          toastr.success(response.data.message);

          // Clear input fields after successful submission
          setMainTopic('');
          setInputs(['']);
        })
        .catch(error => {
          toastr.error(error.response.data.message);
          if (error.response.data.error == "Your account has been suspended. Please contact Ehizua Hub Admin.") {
            localStorage.setItem('Stafflogin', JSON.stringify({
              login: false,
            }));
          }
        })
        .finally(() => {
          setLoading(false); // Stop loading indicator
        });
    } else {
      toastr.warning('Please fill in all required fields.');
    }
  };


  const handleSubmit = event => {
    event.preventDefault();
    CreateCurriculum();
  };
  return (
    <div className="">
      {!user ? (
        <StaffLogin />
      ) : (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full">
          <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
            <div className='flex justify-between '>
            </div>
          </div>

          <div className='flex justify-between '>
            <p className='text-[#F13178] text-[20px] mt-2 font-extrabold' >Create Curriculum</p>
            <Link to='/hub-instructor' className='mt-2'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

          </div>

          <div className='border-[#F13178] border-b '></div>

          {loading && (
            <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
              <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
            </div>
          )}

          <form className='bg-slate-200 sm:h-fit rounded-md pb-8' onSubmit={handleSubmit}>
            <div className='sm:flex gap-4 mt-6 px-8 text-[#134574]'>
              <div className='w-full'>

                <p className='text-sm w-[180px] pt-2 font-bold'>Course</p>
                <input
                  type='text'
                  readOnly value={tutorCourse}
                  className='rounded-md w-full h-[40px] outline-none pl-4'
                />
              </div>

              <div className='w-full'>

                <p className='text-sm font-bold w-[210px] pt-4 sm:pt-2'> Main-Topic</p>
                <input
                  type='text'
                  placeholder='e.g Introduction to HTML'
                  className='rounded-md w-full h-[40px] outline-none pl-4'
                  value={mainTopic}
                  onChange={(event) => setMainTopic(event.target.value)}
                />
              </div>
            </div>


            <div className='gap-4 sm:mt-2 px-8 text-[#134574]'>
              <div className='flex gap-8 justify-between mt-4'>

                <p className='text-sm font-bold w-[80px] pt-4 sm:pt-2'>Sub-Topic</p>

                  <Link onClick={handleAddInput} className='flex gap-2 justify-center items-center'>
                  <p className='text-xs'>New Sub Topic</p>
                    <FaPlusCircle className='text-green-600' /> 
                  </Link>
              </div>

            </div>
            <div className='gap-4 px-8 text-[#134574]'>
              {inputs.map((input, index) => (
                <div key={index} className=" flex input-container gap-4">
                  <input
                    type='text'
                    className='outline-none w-full rounded-md h-[40px] pl-4 pt-1 mt-2'
                    value={input}
                    onChange={(e) => handleChange(index, e.target.value)}
                    placeholder={`Sub-Topic ${index + 1}`} // Placeholder text for input field
                  />

                  {index > 0 && (
                    <div className='flex justify-center items-center'>
                      <Link onClick={() => handleRemoveInput(index)}>
                        <FaMinusCircle className='text-red-600' /> {/* Minus icon for removing input field */}
                      </Link>
                    </div>
                  )}
                </div>
              ))}

            </div>



            <div className='flex gap-8 justify-center px-8'>

              <button className=' bg-[#F13178] px-2 w-full sm:w-[120px] text-white md:text-[15px]  rounded-lg  mt-6 text-[11px] flex items-center text-center justify-center gap-4 font-bold h-[40px]'>
                Create
              </button>
            </div>





          </form>





          <div className="grid grid-cols-2 lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-fit pb-44">


          </div>



        </div>
      )}


    </div>
  )
}

export default CreateCurriculum