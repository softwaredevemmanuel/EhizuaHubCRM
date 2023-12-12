
import { Link } from 'react-router-dom'
import user1 from "../../assets/adminlogin.png"

const AdminLogin = () => {
  return (
    <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3">
    <p className="text-[2rem] font-bold text-center pb-14">Admin Login</p>
         <form action="" className="bg-[#134574] px-3 gap-4 py-[80px] relative rounded-[8px] w-full flex flex-col text-white justify-center items-center">
          <img className="absolute rounded-full top-[-50px]" src={user1} alt="" />
            <div className="flex flex-col justify-center w-full max-w-[348px]">
              <label className="text-[0.9rem] font-light" htmlFor="">Email</label>
              <input className="w-full max-w-[348px] px-3 max-h-[2px] rounded-[4px] py-4 text-gray-600" type="email" placeholder="ehizua@gmail.com" name="" id="" />
            </div>
            <div className="flex flex-col justify-center w-full max-w-[348px] mx-auto">
              <label className="text-[0.9rem] font-light" htmlFor="">Password</label>
              <input className="w-full max-w-[348px] px-3 max-h-[2px] rounded-[4px] py-4 text-gray-600" type="password" placeholder="......." name="" id="" />
            </div>
            <div className="w-full max-w-[348px] flex justify-between">
              <div></div>
              <a className="text-[0.9rem]" href="/forgotpassword">Forgot password?</a>
            </div>
            <Link className="px-3 bg-[#DD137B] max-w-[143px]  w-full text-center rounded-[8px] py-2 font-bold">Login</Link>
          </form>
       </div>
  )
}

export default AdminLogin