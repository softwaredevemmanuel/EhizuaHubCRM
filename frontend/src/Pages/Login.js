import React, { useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom'
import user1 from "../assets/adminlogin.png"
import logo from "../assets/ehizuahublogo.png";
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import ReactLoading from "react-loading";



const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);



  function login() {
    if (email && password) {
      setLoading(true)
      axios.post('http://localhost:5000/api/auth/login', {
        email: email,
        password: password,
      })
        .then(response => {
          localStorage.setItem('User', JSON.stringify({
            user: response.data.user,
            FirstName: response.data.firstName,
            LastName: response.data.lastName,
            Title: response.data.title,
            Token: response.data.token,
            email: response.data.email
          }));
          window.location.reload();

        })
        .catch(error => {
          toastr.error(error.response.data.error);
          setLoading(false)

        });
    } else {
      toastr.error('Please fill in all required fields.');
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    login()
  }
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <nav className="flex w-full justify-between items-center px-[20px] md:px-[70px] mt-4">
        <div className="w-full max-w-[200px]">
          <Link to="/home">
            <img className="object-cover w-full" src={logo} alt="" />

          </Link>
        </div>
        <div>
          <ul className="lg:flex justify-between hidden font-extrabold text-[1rem] gap-4 text-[#134574]">
            <li>
              <Link to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link>
                Features
              </Link>
            </li>
            <li>
              <Link>
                Courses
              </Link>
            </li>
            <li>
              <Link>
                About Us
              </Link>
            </li>

          </ul>
        </div>
      </nav>
      {loading && (
        <div className="z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
        </div>
      )}



      <div className="bg-[#134574] relative z-20 mt-10 mx-auto lg:px-0 px-6 w-full flex flex-col gap-12 h-screen sm:h-full   max-w-[728px]">

        <form action="" className="bg-[#134574] mt-20  px-3 gap-4 py-[80px] relative rounded-[8px] w-full flex flex-col text-white justify-center items-center">
          <img className="absolute rounded-full top-[-50px]" src={user1} alt="" />
          <div className="flex flex-col justify-center w-full max-w-[348px]">
            <label className="text-[0.9rem] font-light" htmlFor="">Email</label>
            <input
              onChange={(event) => setEmail(event.target.value)}
              className="w-full max-w-[348px] px-3 rounded-[4px] py-2 text-gray-600 outline-none" 
              type="email" 
              placeholder="example@gmail.com" name="" id="email" />
          </div>
          <div className="flex flex-col justify-center w-full max-w-[348px] mx-auto">
            <label className="text-[0.9rem] font-light" htmlFor="">Password</label>
            <div className="relative">
              <input
                onChange={(event) => setPassword(event.target.value)}
                className="w-full max-w-[348px] px-3 rounded-[4px] py-2 text-gray-600 outline-none"
                type={showPassword ? 'text' : 'password'}
                placeholder="*******"
                
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
          <div className="w-full max-w-[348px] flex justify-between">
            <div></div>
            <Link to="/forgotpassword" className="text-[0.9rem]" >
              Forgot Email or Password?
            </Link>
          </div>
          <button
            onClick={handleSubmit}
            className="px-3 bg-[#DD137B] max-w-[143px] w-full text-center rounded-[4px] py-2 font-bold">Login
          </button>
        </form>
      </div>




    </div>
  )
}

export default Login