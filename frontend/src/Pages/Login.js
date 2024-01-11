import { Link } from 'react-router-dom'
import user1 from "../assets/adminlogin.png"
import logo from "../assets/ehizuahublogo.png";


const Login = () => {
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

      <div className="bg-[#134574] relative z-20 mt-10 mx-auto lg:px-0 px-6 w-full flex flex-col gap-12 h-full justify-center items-center max-w-[728px]">

        <form action="" className="bg-[#134574] mt-20  px-3 gap-4 py-[80px] relative rounded-[8px] w-full flex flex-col text-white justify-center items-center">
          <img className="absolute rounded-full top-[-50px]" src={user1} alt="" />
          <div className="flex flex-col justify-center w-full max-w-[348px]">
            <label className="text-[0.9rem] font-light" htmlFor="">Email</label>
            <input className="w-full max-w-[348px] px-3 rounded-[4px] py-2 text-gray-600 outline-none" type="email" placeholder="example@gmail.com" name="" id="" />
          </div>
          <div className="flex flex-col justify-center w-full max-w-[348px] mx-auto">
            <label className="text-[0.9rem] font-light" htmlFor="">Password</label>
            <input className="w-full max-w-[348px] px-3 rounded-[4px] py-2 text-gray-600 outline-none" type="password" placeholder="......." name="" id="" />
          </div>
          <div className="w-full max-w-[348px] flex justify-between">
            <div></div>
            <Link to="/forgotpassword" className="text-[0.9rem]" >
              Forgot Email or Password?
            </Link>
          </div>
          <button className="px-3 bg-[#DD137B] max-w-[143px] w-full text-center rounded-[4px] py-2 font-bold">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login