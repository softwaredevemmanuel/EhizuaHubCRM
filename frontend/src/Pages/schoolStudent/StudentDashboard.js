import webdev from "../../assets/webdev.png"
import { useState } from "react";
import StudentLogin from "./StudentLogin";
import { Link } from 'react-router-dom'
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

      <div className="w-full hidden md:block">
  <img src={frontend} alt="img" style={{ width: '70%', height: 'auto', margin: '0 auto' }} />
</div>




    </div>
  );
};
// const Second = () => {
//   return (
//     <div className="flex items-center  justify-between w-full flex-col md:flex-row px-4 p-4">
//       <div className="flex flex-col gap-2 w-full  mr-2">
//         <h1 className="font-bold lg:font-extrabold text-[20px] text-white border border-slate-400 w-fit px-1">
//           FULL STACK DEVELOPMENT
//         </h1>
//         <div className="px-3 pb-3">

//           <p className="text-red-700 font-bold">-40% OFF</p>
//           <h3 className="text-white">Duration: 16 Weeks</h3>
//           <h4 className="text-white">
//             Description:
//             <span className="text-[12px]">
//               A crash course on Front-end and Back-end to give you an egde in the
//               Tech World
//             </span>
//           </h4>
//           <button className="bg-slate-200 w-fit py-1 px-3 text-red-700 rounded-lg mt-4 font-bold">Register</button>
//         </div>
//       </div>

//       <div className="w-full justify-center hidden md:block">
//   <img src={frontend} alt="img" style={{ width: '70%', height: 'auto' }} className="" />
// </div>


//     </div>
//   );
// };
// const Third = () => {
//   return (
//     <div className="flex items-center  justify-between w-full flex-col md:flex-row px-4 p-4">
//       <div className="flex flex-col gap-2 w-full mr-2">
//         <h1 className="font-bold lg:font-extrabold text-[20px] text-white border border-slate-400 w-fit px-1">
//           FULL STACK DEVELOPMENT
//         </h1>
//         <div className="px-3 pb-3">

//           <p className="text-red-700 font-bold">-40% OFF</p>
//           <h3 className="text-white">Duration: 16 Weeks</h3>
//           <h4 className="text-white">
//             Description:
//             <span className="text-[12px]">
//               A crash course on Front-end and Back-end to give you an egde in the
//               Tech World
//             </span>
//           </h4>
//           <button className="bg-slate-200 w-fit py-1 px-3 text-red-700 rounded-lg mt-4 font-bold">Register</button>
//         </div>
//       </div>

//      <div className="w-full justify-center hidden md:block">
//   <img src={frontend} alt="img" style={{ width: '70%', height: 'auto' }} className="" />
// </div>


//     </div>
//   )
// }

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
        <div className="relative z-0 w-full bg-white px-5 flex flex-col gap-3">

          <TopNav />

          <div className="flex flex-col gap-1 text-slate-700 text-[1.2rem] font-extrabold py-2 bg-slate-200 px-2">
            <p> Welcome Emmanuel</p>
            <p className='text-[0.87rem] font-light'>Elevate your learning with one click</p>
          </div>
          <div className="bg-[#134574] w-full h-fit p-4">
            <Slider {...settings} className="mx-4 bg-[#134574]">
              <First />
              {/* <Second />
              <Third /> */}
            </Slider>
          </div>

          <div className="mt-4 text-4xl font-bold text-slate-700">
            <p>Lets Start Learning Emmanuel</p>
          </div>

          {/* my courses */}
          <div className="flex-col flex gap-3 py-8">
            <p className="text-slate-700 border-l border-[#f13178] pl-2">MY COURSES</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
              <Link>
                <div className="flex flex-col w-[280px]">
                  <div className="w-full rounded-t-xl">
                    <img src={webdev} alt="" className="w-full object-cover " />
                  </div>
                  <div className="flex gap-3 rounded-b-md border-b bg-white flex-col px-2 py-2  text-white text-[1rem] ">
                    <p className="text-lg font-bold text-slate-700">Front End Web Development</p>
                    <p className="text-xs text-slate-700">Emmanuel Okereke</p>
                  </div>
                </div>
              </Link>

            </div>

          </div>

        </div>
      )}
    </div>
  );
}
