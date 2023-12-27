import React from "react";
import logo from "../assets/ehizuahublogo.png";
import rect from "../assets/homerect.png"
import html from "../assets/html.png"
import  home2 from "../assets/home2.png"
import  vscode from "../assets/visualstudio.png"
import bluerect from "../assets/bluerect.png"
import bluerect2 from "../assets/bluerect2.png"
import i1 from "../assets/1.png"
import about from "../assets/about.png"
import elipse from "../assets/elipse.svg"
import i2 from "../assets/2.png"
import i3 from "../assets/3.png"
import i4 from "../assets/4.png"
import  robotics from "../assets/robotics.png"
import boy from "../assets/boy.png"
import { IoDesktopOutline } from "react-icons/io5";
import { IoLibrary } from "react-icons/io5";
import { FaUserGear } from "react-icons/fa6";
import webdev from "../assets/webdev.png"
import animation from "../assets/animation.png"
import pdesign from "../assets/pdesign.png"
import gdesign from "../assets/gdesign.png"
import cyber from "../assets/cyber.png"
import fullstack from "../assets/fullstack.png"
import dpub from "../assets/dpub.png"
import dcinema from "../assets/dcinema.png"
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
const Home = () => {
  return (
    <div className="flex flex-col  py-12 gap-10">
      <nav className="flex w-full justify-between items-center px-[20px] md:px-[70px]">
        <div className="w-full max-w-[200px]">
          <img className="object-cover w-full" src={logo} alt="" />
        </div>
        <div>
          <ul className="lg:flex justify-between hidden font-extrabold text-[1rem] gap-4">
            <li>Home</li>
            <li>Feature</li>
            <li>Courses</li>
            <li>About Us</li>
          </ul>
        </div>
        <Link className="hidden lg:block bg-[#DE1D80] text-white px-6 rounded-lg py-2">
          Login
        </Link>
        <button className="primary flex lg:hidden"><CiMenuFries size={24} /></button>
      </nav>

      <div className="flex lg:flex-row flex-col gap-[15px] justify-between items-center bg-[#134574] text-white lg:text-black lg:bg-white">
        <div className="flex-col flex px-6 lg:w-[50%] lg:pl-[70px] gap-[20px]">
          <p className="max-w-[450px] font-bold text-[3.2rem]">Igniting Tech <span className="text-pink-400">Brilliance</span> in Young Innovators</p>
          <p>Discover a fun and interactive way for children to explore the wonders of education. Our online learning system is designed to inspire, engage, and empower kids to succeed in school and beyond.</p>
          <Link className="hidden lg:block w-fit bg-[#DE1D80] text-white font-bold  px-10 rounded-lg py-2">
          Get Started
        </Link>
        </div>

          <div className="relative">
            <img className="w-full max-w-[570px]" src={rect} alt="" />
            <img className="absolute top-0 w-full max-w-[570px]" src={boy} alt="" />
            <img className="absolute top-[90px] left-0 w-full max-w-[100px]" src={html} alt="" />
            <img className="absolute bottom-[-30px] left-[30%] w-full max-w-[100px]" src={home2} alt="" />
            <img className="absolute top-[30px] right-[10px] w-full max-w-[100px]" src={vscode} alt="" />

          </div>
      </div>

      <div className="bg-[#134574] px-[70px] flex flex-col lg:flex-row justify-center items-center lg:justify-between py-[80px]">
         <div className="flex flex-col items-center text-white text-[1rem] w-full max-w-[300px] gap-6">
            <IoDesktopOutline color="#DE1D80" size={64} />
            <p>Personalized Learning</p>
            <p className="text-center">Our system tailors learning pathways to each child's strengths, weaknesses, and interests</p>
         </div>
         <div className="flex flex-col items-center text-white text-[1rem] w-full max-w-[300px] gap-6">
            <FaUserGear color="#DE1D80" size={64} />
            <p>Certified Educators</p>
            <p className="text-center">We provide access to certified instructors who guide and support young learners.</p>
         </div>
         <div className="flex flex-col items-center text-white text-[1rem] w-full max-w-[300px] gap-6">
           <IoLibrary color="#DE1D80" size={64} />
            <p>Rich Content Libraries</p>
            <p className="text-center">Beyond core subjects, our extensive content library offers a wealth of knowledge.</p>
         </div>
      </div>

      <div className="w-full py-[70px] flex flex-col gap-[150px]">
        <p className="text-center mx-auto w-full text-[3rem] font-extrabold py-[60px]">
          Fe<span className="border-b-2  border-[#DE1D80]">atur</span>es
        </p>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-[80px]">
          <div className="relative w-[50%]">
            <img src={i1} alt="" className="relative top-[-20px] lg:top-[50px] lg:left-[50px] z-20" />
            <img src={bluerect} alt="" className="absolute top-0 left-0 z-10" />
          </div>
          <div className="flex flex-col text-[#134574F5] lg:pr-[70px] gap-5">
            <p className="text-[40px] border-l-4 border-[#de1d80] pl-3">Interactive Lessons</p>
            <p className="w-full max-w-[600px] pl-3">Engaging and interactive lessons that use multimedia, animations, and gamified content to make learning fun and effective. Kids can explore subjects like Coding , Robotics and Animation arts in a dynamic and hands-on way, enhancing their understanding and retention of concepts.</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-[80px]">
          <div className="flex flex-col text-[#134574F5] lg:pl-[70px] gap-5">
            <p className="text-[40px] border-l-4 border-[#de1d80] pl-3">Progress Tracking</p>
            <p className="w-full max-w-[600px] pl-3">Robust progress tracking and reporting tools for parents and caregivers. Detailed insights into a child's learning journey, including strengths and areas for improvement, allowing for personalized guidance and support.</p>
          </div>
          <div className="relative w-[50%]">
             <img src={i2} alt="" className="relative top-[-30px] z-20 right-[30px]" />
             <img src={bluerect} alt="" className="absolute top-0 z-10 right-0" />
           </div>
        </div>
       
       <div>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-[80px] bg-[#2F2E41] lg:bg-white text-white lg:text-black">
          <div className="relative w-[50%]">
          <img src={i3} alt="" className="relative top-[-40px] left-[40px] z-20" />
          <img src={bluerect2} alt="" className="absolute top-0 left-0 z-100" />
          </div>
          <div className="flex flex-col text-[#134574F5] lg:pr-[70px] gap-5">
            <p className="text-[40px] border-l-4 border-[#de1d80] pl-3 text-white lg:text-black">Certified Instructors</p>
            <p className="w-full max-w-[600px] pl-3 text-white lg:text-black">Highly qualified and certified instructors who provide guidance and support. Kids have access to expert educators who can answer questions, offer additional assistance, and ensure a high-quality learning experience</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-[80px] bg-[#2F2E41] lg:bg-white text-white lg:text-black">
          <div className="flex flex-col text-[#134574F5] lg:pl-[70px] gap-5">
            <p className="text-[40px] border-l-4 border-[#de1d80] pl-3 text-white lg:text-black">Accessibility and Mobility</p>
            <p className="w-full max-w-[600px] pl-3 text-white lg:text-black">Accessibility across various devices, including computers, tablets, and smartphones. Kids can learn anytime, anywhere, making it convenient for busy families and allowing for learning on the go..</p>
          </div>
          <div className="relative w-[50%]">
            <img src={i4} alt="" className="relative top-[-40px] right-[40px] z-20" />
            <img src={bluerect} alt="" className="absolute top-0 right-0 z-10" />
           </div>
        </div>
        </div>

      </div>
      
      <div className="w-full px-[20px] lg:px-[70px]">
        <p className="text-center mx-auto w-full text-[3rem] font-extrabold py-[60px]">
          Co<span className="border-b-2  border-[#DE1D80]">urs</span>es
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[80px]">
          <div className="relative w-full">
            <img className="object-cover w-full" src={webdev} alt="" />
            <p className="absolute text-white font-bold text-[1rem] bottom-[10px] left-[30%]">WEB DEVELOPMENT</p>
          </div>
          <div className="relative w-full">
            <img className="object-cover w-full" src={robotics} alt="" />
            <p className="absolute text-white font-bold text-[1rem] bottom-[10px] left-[40%] primary">ROBOTICS</p>
          </div>
          <div className="relative w-full">
            <img className="object-cover w-full" src={animation} alt="" />
            <p className="absolute text-white font-bold text-[1rem] bottom-[10px] left-[40%]">ANIMATION</p>
          </div>
          <div className="relative w-full">
            <img className="object-cover w-full" src={pdesign} alt="" />
            <p className="absolute text-white font-bold text-[1rem] bottom-[10px] left-[30%]">PRODUCT DESIGN</p>
          </div>
          <div className="relative w-full">
            <img className="object-cover w-full" src={gdesign} alt="" />
            <p className="absolute text-white font-bold text-[1rem] bottom-[10px] left-[30%]">GRAPHIC DESIGN</p>
          </div>
          <div className="relative w-full">
            <img className="object-cover w-full" src={cyber} alt="" />
            <p className="absolute text-white font-bold text-[1rem] bottom-[10px] left-[30%]">CYBER SECURITY</p>
          </div>
          <div className="relative w-full">
            <img className="object-cover w-full" src={fullstack} alt="" />
            <p className="absolute text-white font-bold text-[1rem] bottom-[10px] left-[15%]">FULL STACK WEB DEVELOPMENT</p>
          </div>
          <div className="relative w-full">
            <img className="object-cover w-full" src={dpub} alt="" />
            <p className="absolute text-white font-bold text-[1rem] bottom-[10px] left-[30%] primary">DESKTOP PUBLISHING</p>
          </div>
          <div className="relative w-full">
            <img className="object-cover w-full" src={dcinema} alt="" />
            <p className="absolute text-white font-bold text-[1rem] bottom-[10px] left-[20%]">DIGITAL CINEMATOGRAPHY</p>
          </div>

        </div>

          <button className="text-center mx-auto flex justify-center hover:text-[#de1d80]  text-[1rem] font-extrabold my-[40px]">
            see more
         </button>
      </div>

      <div className="flex lg:flex-row flex-col-reverse gap-[15px] justify-between items-center py-[40px] px-[20px] lg:px-[30px]">

         <div className="relative  ">
            <img className="w-full max-w-[570px] relative z-30" src={about} alt="" />
            <img className="w-full max-w-[100px] absolute bottom-0 left-0 z-10" src={elipse} alt="" />
            <img className="w-full max-w-[100px] absolute top-0 left-[90px] z-10" src={elipse} alt="" />
            <img className="w-full max-w-[100px] absolute top-0 right-[40px] z-10" src={elipse} alt="" />
            <img className="w-full max-w-[100px] absolute bottom-0 right-[40px] z-10" src={elipse} alt="" />
          </div>

        <div className="flex-col flex w-full lg:w-[50%] lg:pl-[70px] gap-[20px] ">
          <p className="w-full lg:max-w-[450px] font-bold text-[3.2rem]">About Us</p>
          <p>Ehizua is a social enterprise providing equal access to affordable and quality education as well as fostering innovation and entrepreneurship by bridging Financial and Digital Divides to ensure equal access to information and knowledge. We provide equal access through the establishment of Education and Creative Technology Hub, Education Financing, and creating access to jobs in Australia, Asia, and Africa.</p>
          <Link className="block w-fit bg-[#DE1D80] text-white font-bold  px-10 rounded-lg py-2">
          Visit us
        </Link>
        </div>

      </div>
      
      <div className="bg-[#134574F5] gap-5 w-full flex flex-col justify-center items-center py-20 text-white font-bold text-[1.2rem] px-[20px] lg:px-0">
         <p>JOIN US TODAY</p>
         <div className="flex rounded-xl flex-col md:flex-row">
          <input className="px-9 py-3 md:py-0" type="text" />
          <button className="bg-[#DE1D80] px-3 py-4 ">Subscribe</button>
         </div>
      </div>

      <div className="flex flex-col  md:flex-row  justify-between px-[40px] lg:px-[70px] gap-10">
        <img className="w-full max-w-[200px]" src={logo} alt="" />
        <div className="flex flex-col font-bold">
        <p>6, Hon Fatai Eletu Street, Container Bus Stop, Awoyaya,</p>
        <p>Lekki Phone: +234 8073 693 973</p>
        </div>      
      </div>
    </div>
  );
};

export default Home;
