import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development'
import { FaCirclePlus } from "react-icons/fa6";
import { RiHomeOfficeLine } from "react-icons/ri";
import { IoLocationOutline } from "react-icons/io5";
import AdminLogin from "../AdminLogin";
import axios from 'axios';
import ReactLoading from "react-loading";
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';



const OfficeLocations = () => {
  const [admin, setAdmin] = useState(false)
  const [offices, setOffices] = useState([]);
  const [loading, setLoading] = useState(false);


  let user_token = JSON.parse(localStorage.getItem('User'));


  useEffect(() => {
    let staffToken = JSON.parse(localStorage.getItem('StaffToken'));
    if (staffToken && staffToken.token) {
      setAdmin(true);

    }
  }, []);

  useEffect(() => {
    // Fetch tutors when the component mounts
    async function fetchOffices() {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5000/api/auth/all_offices', {
          headers: {
            token: user_token.Token,
          }
        });
        setOffices(response.data.message);
      } catch (error) {
        if (error.response.data.error === "Token expired") {

          toastr.error("Session expired. Please login again");
          setTimeout(() => {
            localStorage.clear();
            window.location.reload();
          }, 2000);
        } else {
          toastr.error('Error retrieving Offices');
          setLoading(false)
        }
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    }

    fetchOffices();
  }, []);


  return (
    <div>
      {!admin ? (
        <AdminLogin />
      ) : (

        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-screen">
          <div className="w-full  bg-[#C8D1DA] flex flex-col gap-3">
            <div className='flex justify-between '>
              <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Office Locations</p>
              <div className='flex'>
                <Link to='/create-office/hr' className=" bg-[#F13178] mt-8 px-2 text-center items-center rounded-lg font-bold flex justify-center h-[30px]">
                  <div className="flex items-center justify-center">
                    <p className="text-white pl-2">New</p>
                    <FaCirclePlus size={28} className="pl-2 mr-2 text-white" />

                  </div>
                </Link>

              </div>

            </div>
          </div>
          <div className='border-[#F13178] border-b '></div>





          {loading && (
            <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
              <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
            </div>
          )}


          <div className="grid grid-cols-2 gap-1 sm:gap-4">
            {offices && offices.map((office, index) => (
              <div key={index}>
                <Link to={`/office-details/hr/${office.officeName}`}>
                  <div className='pl-2 sm:pl-5 rounded-md "w-full  bg-slate-400  items-center justify-between mt-1 pr-1'>

                    <div className="sm:flex gap-8 ">
                      <div className="flex justify-center items-center">
                        <RiHomeOfficeLine size={70} className="text-slate-700" />

                      </div>
                      <div className="flex justify-center items-center">
                        <p className='text-[#134574] ml-2  pt-2 sm:pt-0 md:text-2xl  sm:text-xl font-bold'>{office.officeName}</p>

                      </div>


                    </div>

                    <div className="flex gap-2 pt-2 sm:pt-0 pb-2">
                      <IoLocationOutline size={24} className="text-slate-700" />
                      <p className='text-[#134574]'>Address: {office.officeAddress} </p>


                    </div>
                  </div>

                </Link>
              </div>

            ))}

          </div>


          <div className="grid grid-cols-2 lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-fit pb-44">


          </div>

        </div>

      )}

    </div>


  )
}

export default OfficeLocations