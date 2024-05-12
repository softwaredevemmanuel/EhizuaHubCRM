import React, { useState, useEffect } from 'react';
import user1 from "../../assets/adminlogin.png"
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import ReactLoading from "react-loading";



const AdminLogin = () => {
  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();




  useEffect(() => {
    let user = JSON.parse(localStorage.getItem('User'));
    if ((user)) {
      setFirstName(user.FirstName);
      setLastName(user.LastName);
    }
  }, []);



  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  function login() {
    let user_token = JSON.parse(localStorage.getItem('User'));

    if (id) {
      setLoading(true)
      axios.post('http://localhost:5000/api/auth/authorization', {
        id: id,
      }, {
        headers: {
          token: user_token.Token,
          localEmail: user_token.email
        }
      })
        .then(response => {
          localStorage.setItem('StaffToken', JSON.stringify({
            token: response.data.token

          }));
          toastr.success(response.data.message);
          navigate('/');



        })
        .catch(error => {

          if (error.response.data.error === "Token expired") {

            toastr.error("Session expired. Please login again");
            setTimeout(() => {
              localStorage.clear();
              window.location.reload();
            }, 2000);
          } else {
            toastr.error(error.response.data.error);
            setLoading(false)
          }

        });
    } else {
      toastr.error('Please fill in all required fields.');
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    login()
  }

  return (
    <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3">
         {loading && (
        <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
        </div>
      )}
      <div className="flex justify-between  text-white py-3 items-start border-b  border-[#DD137B]">

        <div className="pt-[20px]">
          <p className="text-[2rem] font-bold">Welcome {FirstName} {LastName}</p>
          <p className='text-[#DD137B] scrolling-text'>Please Login with your admin Id to continue</p>
        </div>
      </div>
      <form action="" className="bg-[#134574] mt-20  px-3 gap-4 py-[80px] relative rounded-[8px] w-full flex flex-col text-white justify-center items-center">
        <img className="absolute rounded-full top-[-50px]" src={user1} alt="" />
        <div className="flex flex-col justify-center w-full max-w-[348px]">
          <label className="text-[0.9rem] font-light" htmlFor="">Admin Id</label>
          <div className="relative">
            <input
              onChange={(event) => setId(event.target.value)}
              className="w-full max-w-[348px] px-3 rounded-[4px] py-2 text-gray-600 outline-none"
              type={showPassword ? 'text' : 'password'}
              placeholder="G78-Eh-03"
              name="staffId"
              id="staffId"
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
            >
              {showPassword ?
                <div className='flex text-slate-600 gap-1'>
                  <p>Hide</p>
                  <FaEyeSlash size={24} className=' text-slate-600' />
                </div> :
                <div className='flex text-slate-600 gap-1'>
                  <p>Show</p>
                  <IoEyeSharp size={24} className=' text-slate-600' />


                </div>
              }
            </span>
          </div>
        </div>

        <div className="w-full max-w-[348px] flex justify-end">
          <a className="text-[0.9rem]" href="/forgotpassword">Forgot Id?</a>
        </div>
        <button
          onClick={handleSubmit}
          className="px-3 bg-[#DD137B] max-w-[143px] w-full text-center rounded-[4px] py-2 font-bold">Login
        </button>      </form>
    </div>
  )
}

export default AdminLogin