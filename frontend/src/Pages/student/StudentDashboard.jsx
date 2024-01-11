import webdev from "../../assets/webdev.png"
import robotics from "../../assets/robotics.png"
import { useState } from "react";
import StudentLogin from "./StudentLogin";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import frontend from "../../assets/frontend.png";

import TopNav from "./TopNav";

const First = () => {
  return (
    <div className="flex items-center  justify-between w-full flex-col md:flex-row px-4 p-4">
      <div className="flex flex-col gap-2 w-full  mr-2">
        <h1 className="font-bold lg:font-extrabold text-[20px] text-white border border-slate-400 w-fit px-1">
          FULL STACK DEVELOPMENT
        </h1>
        <div className="px-3 pb-3">

          <p className="text-red-700 font-bold">-40% OFF</p>
          <h3 className="text-white">Duration: 16 Weeks</h3>
          <h4 className="text-white">
            Description:
            <span className="text-[12px]">
              A crash course on Front-end and Back-end to give you an egde in the
              Tech World
            </span>
          </h4>
          <button className="bg-slate-200 w-fit py-1 px-3 text-red-700 rounded-lg mt-4 font-bold">Register</button>
        </div>
      </div>

      <div class="w-full flex justify-center bg-slate-600 rounded-full ">
        <img src={frontend} alt="img" style={{ width: '70%', height: 'auto' }} className=" rounded-full" />
      </div>

    </div>
  );
};
const Second = () => {
  return (
    <div className="flex items-center  justify-between w-full flex-col md:flex-row px-4 p-4">
      <div className="flex flex-col gap-2 w-full  mr-2">
        <h1 className="font-bold lg:font-extrabold text-[20px] text-white border border-slate-400 w-fit px-1">
          FULL STACK DEVELOPMENT
        </h1>
        <div className="px-3 pb-3">

          <p className="text-red-700 font-bold">-40% OFF</p>
          <h3 className="text-white">Duration: 16 Weeks</h3>
          <h4 className="text-white">
            Description:
            <span className="text-[12px]">
              A crash course on Front-end and Back-end to give you an egde in the
              Tech World
            </span>
          </h4>
          <button className="bg-slate-200 w-fit py-1 px-3 text-red-700 rounded-lg mt-4 font-bold">Register</button>
        </div>
      </div>

      <div class="w-full flex justify-center bg-slate-600 rounded-full">
        <img src={frontend} alt="img" style={{ width: '70%', height: 'auto' }} className=" rounded-full" />
      </div>

    </div>
  );
};
const Third = () => {
  return (
    <div className="flex items-center  justify-between w-full flex-col md:flex-row px-4 p-4">
      <div className="flex flex-col gap-2 w-full mr-2">
        <h1 className="font-bold lg:font-extrabold text-[20px] text-white border border-slate-400 w-fit px-1">
          FULL STACK DEVELOPMENT
        </h1>
        <div className="px-3 pb-3">

          <p className="text-red-700 font-bold">-40% OFF</p>
          <h3 className="text-white">Duration: 16 Weeks</h3>
          <h4 className="text-white">
            Description:
            <span className="text-[12px]">
              A crash course on Front-end and Back-end to give you an egde in the
              Tech World
            </span>
          </h4>
          <button className="bg-slate-200 w-fit py-1 px-3 text-red-700 rounded-lg mt-4 font-bold">Register</button>
        </div>
      </div>

      <div class="w-full flex justify-center bg-slate-600 rounded-full">
        <img src={frontend} alt="img" style={{ width: '70%', height: 'auto' }} className=" rounded-full" />
      </div>

    </div>
  )
}

export default function StudentDashboard() {
  const [user, setUser] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };

  return (
    <div className="overflow-y-scroll w-full h-screen hide-bar">
      {user ? (
        <StudentLogin />
      ) : (
        <div className="relative z-0 w-full bg-[#C8D1DA] px-5 flex flex-col gap-3">

          <TopNav />
          <div className="flex flex-col gap-1 text-white text-[1.2rem] font-extrabold py-2">
            <p> Welcome Emmanuel</p>
            <p className='text-[0.87rem] font-light'>Elevate your learning with one click</p>
          </div>
          <div className="bg-slate-400 w-full h-fit">
            <Slider {...settings} className="mx-4 bg-slate-500">
              <First />
              <Second />
              <Third />
            </Slider>
          </div>


          {/* my courses */}
          <div className="flex-col flex gap-3 py-20">
            <p className="text-white border-l border-[#f13178] pl-2">MY COURSES</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
              <div className="flex flex-col w-full ">
                <div className="w-full rounded-t-xl">
                  <img src={webdev} alt="" className="w-full object-cover rounded-t-xl" />
                </div>
                <div className="flex gap-3 rounded-b-xl border-b bg-[#23517c] flex-col px-5 py-6 justify-center text-white text-[1rem] items-center">
                  <p>Front End Development</p>
                  <button className="bg-primary px-4 py-3 rounded-xl text-[0.7rem] lg:text-[1rem]">Continue</button>
                </div>
              </div>
            </div>

          </div>
          {/* other  courses */}
          <div className="flex-col flex gap-3 py-10">
            <p className="text-white border-l border-[#f13178] pl-2">OTHER COURSES</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
              <div className="flex flex-col w-full ">
                <div className="w-full rounded-t-xl">
                  <img src={robotics} alt="" className="w-full object-cover rounded-t-xl" />
                </div>
                <div className="flex gap-3 rounded-b-xl border-b bg-[#23517c] flex-col px-5 py-6 justify-center text-white text-[1rem] items-center">
                  <p>ROBOTICS</p>
                  <button className="bg-primary px-4 py-3 rounded-xl text-[0.6rem] lg:text-[1rem]">Get Started</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
