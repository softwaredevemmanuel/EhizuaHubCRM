import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";
import AdminLogin from '../AdminLogin';
import axios from 'axios';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import ReactLoading from "react-loading";



const CreateOfficeLocation = () => {
    const [admin, setAdmin] = useState(false)
    const [officeName, setOfficeName] = useState('');
    const [state, setState] = useState('');
    const [officePhoneNumber, setOfficePhoneNumber] = useState('');
    const [officeEmail, setOfficeEmail] = useState('');
    const [officeAddress, setOfficeAddress] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let staffToken = JSON.parse(localStorage.getItem('StaffToken'));
        if (staffToken && staffToken.token) {
            setAdmin(true);

        }
    }, []);


    const createOffice = () => {
        let userEmail = JSON.parse(localStorage.getItem('User'));

        if (officeName) {
            setLoading(true);

            axios
                .post('http://localhost:5000/api/auth/register-office', {
                    
                    email: userEmail.email,
                    officeName,
                    officePhoneNumber,
                    officeEmail,
                    state,
                    officeAddress
                })
                .then((response) => {
                    toastr.success(response.data.message);
                    clearForm();
                })
                .catch((error) => {
                    toastr.error(error.response.data.message);
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            toastr.error('Please fill in all required fields.');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createOffice();
    };

    const clearForm = () => {
        setOfficeName('');
        setOfficeEmail('');
        setOfficePhoneNumber('');
        setOfficeAddress('');
        setState('');
    };

    return (
        <div>
            {!admin ? (
                <AdminLogin/>
            ) : (
                <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-screen">
                    <div className="w-full  bg-[#C8D1DA] flex flex-col gap-3">
                        <div className='flex justify-between '>
                            <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Create New Office Location</p>
                            <Link to='/office-locations/hr' className='mt-8'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>

                        </div>
                    </div>
                    <div className='border-[#F13178] border-b '></div>

                    {loading && (
                        <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                            <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>

                            <div className='sm:col-span-2'>
                                <label className='text-[#134574] '>Office Location Name</label>
                                <input
                                    type='text'
                                    placeholder='E.g Ehizua Hub Awoyaya'
                                    className='pl-4 h-[40px] w-full rounded-md outline-none mt-1'
                                    value={officeName}
                                    onChange={(event) => setOfficeName(event.target.value)}
                                />
                            </div>
                            <div>
                                <label className='text-[#134574] '>State</label>
                                <input
                                    type='text'
                                    className='pl-4 h-[40px] w-full rounded-md outline-none mt-1'
                                    placeholder='Lagos'
                                    value={state}
                                    onChange={(event) => setState(event.target.value)}
                                />
                            </div>
                        </div>


                        <div className='grid grid-cols-2 mt-2 gap-2'>
                            <div className=''>
                                <p className='text-[#134574] '>Office Phone Number</p>
                                <input
                                    type='number'
                                    placeholder='E.g 08012323456'
                                    className='pl-4 h-[40px] w-full  rounded-md outline-none mt-1'
                                    value={officePhoneNumber}
                                    onChange={(event) => setOfficePhoneNumber(event.target.value)}
                                />

                            </div>
                            <div>
                                <p className='text-[#134574] '>Office Email</p>
                                <input
                                    type='email'
                                    placeholder='example@gmail.com'
                                    className='pl-4 h-[40px] w-full rounded-md outline-none mt-1'
                                    value={officeEmail}
                                    onChange={(event) => setOfficeEmail(event.target.value)}
                                />

                            </div>

                        </div>

                        <div>
                            <label className='text-[#134574] '>Office Address</label>
                            <textarea
                                placeholder='Message'
                                className='pl-4 h-[100px] w-full rounded-md outline-none mt-1 pt-4'
                                value={officeAddress}
                                onChange={(event) => setOfficeAddress(event.target.value)}
                            />
                        </div>

                        <div className="flex justify-start">
                            <button className="bg-[#F13178] px-2 mt-4 text-center items-center rounded-[6px] font-bold flex justify-center h-[40px] w-fit">
                                <div className="flex">
                                    <p className="text-white px-2">Create</p>
                                </div>
                            </button>
                        </div>
                    </form>





                    <div className="grid grid-cols-2 lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-fit pb-44">

                    </div>



                </div>
            )}

        </div>
    )
}


export default CreateOfficeLocation