import { MdCelebration } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { PiStudent } from "react-icons/pi";
import { FaUserMinus } from "react-icons/fa6";
import { BsPatchQuestionFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import StudentLogin from "./StudentLogin";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import hero from '../../assets/Group 2300.png';
import hero2 from '../../assets/Group 2309.png';
import hero3 from '../../assets/Group 2494.png';


export default function StudentDashboard() {
    const [user, setUser] = useState(false)
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
        <div className="overflow-y-scroll w-full h-full">

            {user ? (

                <StudentLogin />

            ) : (
                <div className="relative z-0 w-full bg-[#C8D1DA] px-5 flex flex-col gap-3 overflow-y-scroll h-screen">
                    <div className="bg-[#23517C] w-full p-7 ">
                        <Slider {...settings}>

                            <div className='flex p-2 lg:px-20'>
                                <div className='lg:mt-20 w-1/2'>
                                    <h1 className='font-bold lg:font-extrabold text-[20px] text-white'>
                                        FULL STACK <br />DEVELOPMENT
                                    </h1>
                                    <h3 className='text-white'>Duration: 16 Weeks</h3>
                                    <h4 className='text-white'>Description: <br />
                                        <span className='line-clamp-3 text-[12px]'>A crash course on Front-end and Back-end to give you an egde in the Tech World <br />A crash course on Front-end and Back-end to give you an egde in the Tech World<br /> A crash course on Front-end and Back-end to give you an egde in the Tech World<br /> A crash course on Front-end and Back-end to give you an egde in the Tech World </span> </h4>
                                    <button className='mt-2 bg-[#F13178] py-1 px-3 text-white font-bold rounded-md mb-6 lg:py-3 lg:px-9'>Register</button>
                                </div>
                                <img src={hero} alt="img" className='mt-[-200px] ml-[170px]  w-[150px] h-[130px] lg:w-[550px] lg:h-[530px] lg:mt-[-300px] lg:ml-[600px]' />
                            </div>


                            <div className='flex p-2 lg:px-20'>
                                <div className='lg:mt-20 w-1/2'>
                                    <h1 className='font-bold lg:font-extrabold text-[20px] text-white'>
                                        FRONT-END <br />DEVELOPMENT
                                    </h1>
                                    <h3 className='text-white'>Duration: 16 Weeks</h3>
                                    <h4 className='text-white'>Description: <br />
                                        <span className='line-clamp-3 text-[12px]'>A crash course on Front-end and Back-end to give you an egde in the Tech World <br />A crash course on Front-end and Back-end to give you an egde in the Tech World<br /> A crash course on Front-end and Back-end to give you an egde in the Tech World<br /> A crash course on Front-end and Back-end to give you an egde in the Tech World </span> </h4>
                                    <button className='mt-2 bg-[#F13178] py-1 px-3 text-white font-bold rounded-md mb-6 lg:py-3 lg:px-9'>Register</button>
                                </div>
                                <img src={hero2} alt="img" className='mt-[-200px] ml-[170px] w-[140px] h-[130px] lg:w-[550px] lg:h-[480px] lg:mt-[-300px] lg:ml-[600px]' />
                            </div>

                            <div className='flex p-2 lg:px-20'>
                                <div className='lg:mt-20 w-1/2'>
                                    <h1 className='font-bold lg:font-extrabold text-[20px] text-white'>
                                        BACK-END <br />DEVELOPMENT
                                    </h1>
                                    <h3 className='text-white'>Duration: 16 Weeks</h3>
                                    <h4 className='text-white'>Description: <br />
                                        <span className='line-clamp-3 text-[12px]'>A crash course on Front-end and Back-end to give you an egde in the Tech World <br />A crash course on Front-end and Back-end to give you an egde in the Tech World<br /> A crash course on Front-end and Back-end to give you an egde in the Tech World<br /> A crash course on Front-end and Back-end to give you an egde in the Tech World </span> </h4>
                                    <button className='mt-2 bg-[#F13178] py-1 px-3 text-white font-bold rounded-md mb-6 lg:py-3 lg:px-9'>Register</button>
                                </div>
                                <img src={hero3} alt="img" className='mt-[-200px] ml-[170px] object-cover w-[150px] h-[150px] lg:w-[550px] lg:h-[530px] lg:mt-[-300px] lg:ml-[600px]' />
                            </div>

                        </Slider>
                    </div>


                </div>
            )}



        </div>
    )
}
