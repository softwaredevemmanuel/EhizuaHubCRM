import { MdCelebration } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { PiStudent } from "react-icons/pi";
import { FaUserMinus } from "react-icons/fa6";
import { BsPatchQuestionFill } from "react-icons/bs";
import { FaLaptopHouse } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect} from "react";
import AdminLogin from "./AdminLogin"
import axios from 'axios';
import ReactLoading from "react-loading";
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';


export default function AdminDashboard() {
    const [admin, setAdmin] = useState(false)
    const [FirstName, setLastName] = useState('')
    const [loading, setLoading] = useState(false);
    const [totalStaff, setTotalStaff] = useState(false);

// Check Token Session of Admin
    useEffect(() => {
        let user_token = JSON.parse(localStorage.getItem('User'));
        // Fetch tutors when the component mounts
        async function fetchOffices() {
          try {
            setLoading(true);
            const response = await axios.get('http://localhost:5000/api/auth/staff', {
              headers: {
                token: user_token.Token,
              }
            });
            setTotalStaff(response.data.totalStaff);
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

// Admin Authorization
    useEffect(() => {
        let staffToken = JSON.parse(localStorage.getItem('StaffToken'));
        if (staffToken && staffToken.token) {
            setAdmin(true);

        }
    }, []);


    useEffect(() => {
        let user = JSON.parse(localStorage.getItem('User'));
        if ((user)) {
            setLastName(user.FirstName);
        }
    }, []);

    const logoff = () => {
        const localStorageData = JSON.parse(localStorage.getItem('StaffToken')) || {};
        delete localStorageData.token;
        localStorage.setItem('StaffToken', JSON.stringify(localStorageData));
        setAdmin(false);


    };

    return (
        <div className="">
            {!admin ? (
                <AdminLogin/>

            ) : (
                <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3">
                      <div className="pt-[20px]">
                        <p className="text-[2rem] font-bold text-[#134574]">Welcome {FirstName}</p>
                        <div className="sm:flex justify-between">
                            <p className="text-[#DD137B]">Streamlining Management, One Click At A Time</p>
                            <div className="bg-slate-500 px-4 py-1 rounded-md text-sm text-white font-bold w-[90px] text-center">
                                <button onClick={logoff} className=""> Log off</button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 rounded-[10px] bg-[#134574] text-white max-w-[980px] w-full px-8 py-20">
                        <div className="flex flex-col gap-4">
                            <p className="text-[2.5rem] font-extrabold">Elevate Your Learning
                                with Every Click</p>
                            <Link className="px-3 bg-[#DD137B] max-w-[243px] w-full text-center rounded-[4px] py-4 font-bold">Create a Memo</Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-full pb-44">

                        <Link className=" bg-[#134574] max-w-[195px] px-2 lg:max-w-[263px] w-full text-center items-center rounded-[6px] py-4 font-bold flex gap-4 justify-center">
                            <FaLaptopHouse size={38} />
                            <div className="flex flex-col items-center lg:items-start">
                                <p>3</p>
                                <p>Ehizua Hub Centers</p>
                            </div>
                        </Link>

                        <Link className=" bg-[#134574] max-w-[195px] px-2 lg:max-w-[263px] w-full text-center items-center rounded-[6px] py-4 font-bold flex gap-4 justify-center">
                            <IoMdPerson size={38} />
                            <div className="flex flex-col items-center lg:items-start">
                                <p>Number of staff</p>
                                <p>{totalStaff}</p>
                            </div>
                        </Link>

                        <Link className=" bg-[#134574] max-w-[195px] px-2 lg:max-w-[263px] w-full text-center items-center rounded-[6px] py-4 font-bold flex gap-4 justify-center">
                            <PiStudent size={38} />
                            <div className="flex flex-col items-center lg:items-start">
                                <p>Number of students</p>
                                <p>4</p>
                            </div>
                        </Link>

                        <Link className=" bg-[#134574] max-w-[195px] px-2 lg:max-w-[263px] w-full text-center items-center rounded-[6px] py-4 font-bold flex gap-4 justify-center">
                            <MdCelebration size={38} />
                            <div className="flex flex-col items-center lg:items-start">
                                <p>Birthday Celebration</p>
                                <p>4</p>
                            </div>
                        </Link>

                        <Link className=" bg-[#134574] max-w-[195px] px-2 lg:max-w-[263px] w-full text-center items-center rounded-[6px] py-4 font-bold flex gap-4 justify-center">
                            <BsPatchQuestionFill size={38} />
                            <div className="flex flex-col items-center lg:items-start">
                                <p>Complaints</p>
                                <p>4</p>
                            </div>
                        </Link>
                        <Link className=" bg-[#134574] max-w-[195px] px-2 lg:max-w-[263px] w-full text-center items-center rounded-[6px] py-4 font-bold flex gap-4 justify-center">
                            <FaUserMinus size={38} />
                            <div className="flex flex-col items-center lg:items-start">
                                <p>Leave Request</p>
                                <p>4</p>
                            </div>
                        </Link>
                       


                    </div>


                </div>
            )}
            {/* right section  */}



        </div>
    )
}
