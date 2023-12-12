import { Link } from 'react-router-dom'
import user1 from "../assets/adminlogin.png"

const Login = () => {
  return (
    <div className="bg-[#134574] relative z-20 mt-10 mx-auto lg:px-0 px-6 w-full flex flex-col gap-12 h-full justify-center items-center max-w-[728px]">
         <form action="" className="bg-[#134574] mt-20  px-3 gap-4 py-[80px] relative rounded-[8px] w-full flex flex-col text-white justify-center items-center">
          <img className="absolute rounded-full top-[-50px]" src={user1} alt="" />
            <div className="flex flex-col justify-center w-full max-w-[348px]">
              <label className="text-[0.9rem] font-light" htmlFor="">Id</label>
              <input className="w-full max-w-[348px] px-3 rounded-[4px] py-2 text-gray-600" type="email" placeholder="G78-Eh-03" name="" id="" />
            </div>
            <div className="flex flex-col justify-center w-full max-w-[348px] mx-auto">
              <label className="text-[0.9rem] font-light" htmlFor="">Password</label>
              <input className="w-full max-w-[348px] px-3 rounded-[4px] py-2 text-gray-600" type="password" placeholder="......." name="" id="" />
            </div>
            <div className="w-full max-w-[348px] flex justify-between">
              <div></div>
              <a className="text-[0.9rem]" href="/forgotpassword">Forgot Id or Password?</a>
            </div>
            <Link className="px-3 bg-[#DD137B] max-w-[143px] w-full text-center rounded-[4px] py-2 font-bold">Login</Link>
          </form>
       </div>
  )
}

export default Login