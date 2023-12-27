import webdev from "../../assets/webdev.png"
import robotics from "../../assets/robotics.png"
import { useState } from "react";
import StudentLogin from "./StudentLogin";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero from "../../assets/Group 2300.png";
import hero2 from "../../assets/Group 2309.png";
import hero3 from "../../assets/Group 2494.png";
import TopNav from "./TopNav";
import Footer from "./Footer";

const First = () => {
  return (
    <div className="flex items-center  justify-between w-full flex-col md:flex-row px-[10px] lg:px-[70px] py-3">
      <div className="flex flex-col gap-2 w-[50%]">
        <h1 className="font-bold lg:font-extrabold text-[20px] text-white">
          FULL STACK DEVELOPMENT
        </h1>
        <p className="primary">-40% OFF</p>
        <h3 className="text-white">Duration: 16 Weeks</h3>
        <h4 className="text-white">
          Description: 
          <span className="text-[12px]">
            A crash course on Front-end and Back-end to give you an egde in the
            Tech World A crash course on Front-end and Back-end to give
            you an egde in the Tech World
             A crash course on Front-end and Back-end to give you an egde
            in the Tech World
             A crash course on Front-end and Back-end to give you an egde
            in the Tech World{" "}
          </span>{" "}
        </h4>
        <button className="bg-[#F13178] max-w-[300px] py-2 px-3 text-white rounded-lg">Register</button>
      </div>

      <div class="w-full max-w-[500px]">
        <img src={hero} alt="img" className="w-full object-cover" />
      </div>
    </div>
  );
};

const Second = () => {
  return (
    <div className="flex gap-[20px] w-full items-center justify-between  flex-col md:flex-row px-[10px] lg:px-[70px] py-3">

   

      <div className="flex flex-col gap-2 w-[50%]">
        <h1 className="font-bold lg:font-extrabold text-[20px] text-white">
          FRONT-END 
          DEVELOPMENT
        </h1>
        <p className="primary">-38% OFF</p>
        <h3 className="text-white">Duration: 16 Weeks</h3>
        <h4 className="text-white">
          Description: 
          <span className="text-[12px]">
            A crash course on Front-end and Back-end to give you an egde in the
            Tech World A crash course on Front-end and Back-end to give
            you an egde in the Tech World
             A crash course on Front-end and Back-end to give you an egde
            in the Tech World
             A crash course on Front-end and Back-end to give you an egde
            in the Tech World
          </span>
        </h4>
        <button className="text-[#F13178] max-w-[300px] py-2 px-3 bg-white rounded-lg">Register</button>
      </div>

      <div className="w-full max-w-[600px]">
        <img src={hero2} alt="img" className="w-full object-cover" />
      </div>
    </div>
  );
};
const Third = ()=>{
    return(
          <div className="flex gap-[20px] items-center justify-between w-full flex-col md:flex-row px-[10px] lg:px-[70px]">
                <div className="flex flex-col gap-2 w-[50%]">
                  <h1 className="font-bold lg:font-extrabold text-[20px] text-white">
                    BACK-END 
                    DEVELOPMENT
                  </h1>
                  <p className="text-green-500">-50% OFF</p>
                  <h3 className="text-white">Duration: 16 Weeks</h3>
                  <h4 className="text-white">
                    Description: 
                    <span className="text-[12px]">
                      A crash course on Front-end and Back-end to give you an
                      egde in the Tech World A crash course on Front-end
                      and Back-end to give you an egde in the Tech World
                      A crash course on Front-end and Back-end to give
                      you an egde in the Tech World
                      A crash course on Front-end and Back-end to give
                      you an egde in the Tech World{" "}
                    </span>{" "}
                  </h4>
                  <button className="bg-[#F13178] max-w-[300px] py-2 px-3 text-white rounded-lg">Register</button>
                </div>

                <div className="w-full max-w-[600px]">
                  <img src={hero3} alt="img" className="object-cover w-full" />
                </div>
              </div>
    )
}
export default function StudentDashboard() {
  const [user, setUser] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="overflow-y-scroll w-full h-screen hide-bar">
      {user ? (
        <StudentLogin />
      ) : (
        <div className="relative z-0 w-full bg-[#C8D1DA] px-5 flex flex-col gap-3">

        <TopNav/>
          <div className="bg-[#23517C] w-full">
            <Slider {...settings}>
              <First />
             <Second/>
             <Third/>
            </Slider>
          </div>


          {/* my courses */}
          <div className="flex-col flex gap-3 py-20">
            <p className="text-white border-l border-[#f13178] pl-2">MY COURSES</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
              <div className="flex flex-col w-full ">
                 <div className="w-full rounded-t-xl">
                   <img src={webdev} alt=""  className="w-full object-cover rounded-t-xl" />
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
                   <img src={robotics} alt=""  className="w-full object-cover rounded-t-xl" />
                 </div>
                 <div className="flex gap-3 rounded-b-xl border-b bg-[#23517c] flex-col px-5 py-6 justify-center text-white text-[1rem] items-center">
                    <p>ROBOTICS</p>
                     <button className="bg-primary px-4 py-3 rounded-xl text-[0.6rem] lg:text-[1rem]">Get Started</button>
                 </div>
              </div>
            </div>

          </div>
          <Footer/>
        </div>
      )}
    </div>
  );
}
