import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import user1 from "../assets/adminlogin.png"
import logo from "../assets/ehizuahublogo.png";
import ReactLoading from "react-loading";
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import { useNavigate } from 'react-router-dom';


const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();



  const verifyEmail = () => {
    if (email) {
      setLoading(true);

      axios.post("http://localhost:5000/api/auth/forgot_password", {
        email: email,

      })
        .then(response => {
          toastr.success(response.data)
          navigate('/login')

        })
        .catch(error => {
          toastr.error(error.response.data.error);
        })
        .finally(() => {
          setLoading(false); 
        });
    } else {
      toastr.warning('Please enter your email.');
    }
  };


  const handleSubmit = event => {
    event.preventDefault();
    verifyEmail();
  };
  return (
    <div>
      <nav className="flex w-full justify-between items-center px-[20px] md:px-[70px] mt-4">
        <div className="w-full max-w-[200px]">
          <img className="object-cover w-full" src={logo} alt="" />
        </div>
        <div>
          <ul className="lg:flex justify-between hidden font-extrabold text-[1rem] gap-4 text-[#134574]">
            <li> <Link> Home </Link>
            </li>
            <li> <Link> Features </Link>
            </li>
            <li> <Link> Courses </Link>
            </li>
            <li> <Link> About Us </Link>
            </li>

          </ul>
        </div>
      </nav>

      <div className="bg-[#134574] relative z-20 mt-10 mx-auto lg:px-0 px-6 w-full flex flex-col gap-12 h-full justify-center items-center max-w-[728px]">

        {loading && (
          <div className="z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
          </div>
        )}

        <form onSubmit={handleSubmit} action="" className="bg-[#134574] mt-20  px-3 gap-4 py-[80px] relative rounded-[8px] w-full flex flex-col text-white justify-center items-center">
          <p className="text-xs font-light" htmlFor="">Your Login Credentials Will Be Sent to Your Registered Email Address</p>

          <img className="absolute rounded-full top-[-50px]" src={user1} alt="" />
          <div className="flex flex-col justify-center w-full max-w-[348px]">
            <label className="text-[0.9rem] font-light" htmlFor="">Email </label>
            <input
              className="w-full max-w-[348px] px-3 rounded-[4px] py-2 text-gray-600 outline-none"
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="w-full max-w-[348px] flex justify-end">
            <Link to="/dashboard" className="text-[0.9rem]">Login Here</Link>
          </div>

          <button
            className="px-3 bg-[#DD137B] max-w-[143px] w-full text-center rounded-[4px] py-2 font-bold mt-2"
            type='submit'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword