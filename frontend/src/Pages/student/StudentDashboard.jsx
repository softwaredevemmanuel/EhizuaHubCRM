import { MdCelebration } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { PiStudent } from "react-icons/pi";
import { FaUserMinus } from "react-icons/fa6";
import { BsPatchQuestionFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import StudentLogin from "./StudentLogin";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero from "../../assets/Group 2300.png";
import hero2 from "../../assets/Group 2309.png";
import hero3 from "../../assets/Group 2494.png";

const First = () => {
  return (
    <div className="flex items-center  justify-between w-full flex-col md:flex-row px-[10px] lg:px-[70px]">
      <div className="flex flex-col gap-2 ">
        <h1 className="font-bold lg:font-extrabold text-[20px] text-white">
          FULL STACK DEVELOPMENT
        </h1>
        <h3 className="text-white">Duration: 16 Weeks</h3>
        <h4 className="text-white">
          Description: <br />
          <span className="text-[12px]">
            A crash course on Front-end and Back-end to give you an egde in the
            Tech World
 
          </span>{" "}
        </h4>
        <button className="bg-[#F13178] max-w-[300px] py-2 px-3 text-white rounded-lg">Register</button>
      </div>

      <div class="">
        <img src={hero} alt="img" className="" />
      </div>
    </div>
  );
};

const Second = () => {
  return (
    <div className="flex gap-[20px] w-full items-center justify-between  flex-col md:flex-row px-[10px] lg:px-[70px]">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold lg:font-extrabold text-[20px] text-white">
          FRONT-END <br />
          DEVELOPMENT
        </h1>
        <h3 className="text-white">Duration: 16 Weeks</h3>
        <h4 className="text-white">
          Description: <br />
          <span className="text-[12px]">
            A crash course on Front-end and Back-end to give you an egde in the
            Tech World 
         
          </span>
        </h4>
        <button className="bg-[#F13178] max-w-[300px] py-2 px-3 text-white rounded-lg">Register</button>
      </div>
      <div>
        <img src={hero2} alt="img" className="" />
      </div>
    </div>
  );
};
const Third = ()=>{
    return(
          <div className="flex gap-[20px] items-center justify-between w-full flex-col md:flex-row px-[10px] lg:px-[70px]">
                <div className="flex flex-col gap-2">
                  <h1 className="font-bold lg:font-extrabold text-[20px] text-white">
                    BACK-END <br />
                    DEVELOPMENT
                  </h1>
                  <h3 className="text-white">Duration: 16 Weeks</h3>
                  <h4 className="text-white">
                    Description: <br />
                    <span className="text-[12px]">
                      A crash course on Front-end and Back-end to give you an
                      egde in the Tech World 
                     
                    </span>{" "}
                  </h4>
                  <button className="bg-[#F13178] max-w-[300px] py-2 px-3 text-white rounded-lg">Register</button>
                </div>

                <div>
                  <img src={hero3} alt="img" className="" />
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
        <div className="relative z-0 w-full bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full">
          <div className="bg-[#23517C] w-full p-7 ">
            <Slider {...settings}>
              <First />
             <Second/>
             <Third/>
            </Slider>
          </div>
        </div>
      )}
    </div>
  );
}
