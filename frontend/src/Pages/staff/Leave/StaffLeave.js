import React, { useState, useEffect } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import { Link } from 'react-router-dom'
import StaffLogin from "../StaffLogin";
import axios from 'axios';
import toastr from 'toastr';

const StaffLeave = () => {
  const [user, setUser] = useState(false)


  const [loginData, setLoginData] = useState(false);
  const [daysRemaining, setDaysRemaining] = useState('');
  const [office, setOffice] = useState('');
  const [success, setSuccess] = useState('');
  const [oneDay, setOneDay] = useState(false);
  const [twoDays, setTwoDays] = useState(false);
  const [threeDays, setThreeDays] = useState(false);
  const [dateShow, setDateShow] = useState(false);
  const [leaveRequest, setLeaveRequest] = useState([]);
  const [error, setError] = useState('');
  const [staffAllocatedLeave, setStaffAllocatedLeave] = useState('');
  const [pendingLeave, setPendingLeave] = useState(1);
  const [email, setEmail] = useState('')




  // ..................useEffect for checking localStorage and Verifying Login ..............
  useEffect(() => {
    let staffToken = JSON.parse(localStorage.getItem('StaffToken'));
    let localEmail = JSON.parse(localStorage.getItem('User'));
    if (staffToken && staffToken.token) {
      setUser(true);
      setEmail(localEmail.email)

    }
  }, []);


  const minSelectableDate = new Date(); // Get the current date

  // Create a state variable to store form data
  const [formData, setFormData] = useState({
    selectedDays: '',
    leaveStartDate: '',
    leaveEndDate: '',
    purposeOfLeave: '',
    uploadedDocument: null,
  });



  useEffect(() => {
    async function fetchLeave() {
      let localEmail = JSON.parse(localStorage.getItem('User'));

      try {
        const response = await axios.get('http://localhost:5000/api/staff/leave-request', {
          headers: {
            email: localEmail.email

          },
        });

        const leaveData = response.data.leave;
        setDaysRemaining(response.data.daysRemaining)

        if (leaveData.length > 0) {
          // Access the latest leave request
          const latestLeave = leaveData[leaveData.length - 1];

          // Update state with the latest leave data
          setLeaveRequest(leaveData);
          setPendingLeave(latestLeave.isApproved);
        } else {
          // Handle the case when there are no leave requests

          setLeaveRequest([]);
          setPendingLeave(1); // or setPendingLeave(false) depending on your logic
        }

      } catch (error) {
        setError('Error retrieving leave requests');
      }
    }

    fetchLeave();
  }, []);

  const pLeave = leaveRequest.filter((item)=> item.isApproved == 0)
  const ALeave = leaveRequest.filter((item)=> item.isApproved == 1)
  const RLeave = leaveRequest.filter((item)=> item.isApproved == 2)
  const numPLeave = pLeave.length
  const numALeave = ALeave.length
  const numRLeave = RLeave.length



  // Fetch staff allocated leave
  useEffect(() => {
    async function fetchStaffDetails() {
      try {
        let storedData = JSON.parse(localStorage.getItem('User'));

        const response = await axios.get('http://localhost:5000/api/staff/details', {
          headers: {
            email: storedData.email

          },

        });

        setStaffAllocatedLeave(response.data.allocatedLeave);
      } catch (error) {
        setError('Error retrieving tutors');
      }
    }

    fetchStaffDetails();
  }, []);


  minSelectableDate.setDate(minSelectableDate.getDate() + 2);

  const handleClick = () => {
    setDateShow(true);
  };

  const handleCancel = () => {
    setDateShow(false);
  };

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setOneDay(selectedValue === '1');
    setTwoDays(selectedValue === '2');
    setThreeDays(selectedValue === '3');
    setFormData({ ...formData, selectedDays: selectedValue });
  };

  const handleStartDateChange = (event) => {
    const startDate = event.target.value;
    setFormData({ ...formData, leaveStartDate: startDate });
  };

  const handleEndDateChange = (event) => {
    const endDate = event.target.value;
    setFormData({ ...formData, leaveEndDate: endDate });
  };

  const handlePurposeChange = (event) => {
    const purpose = event.target.value;
    setFormData({ ...formData, purposeOfLeave: purpose });
  };

  const handleDocumentUpload = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, uploadedDocument: file });
  };



  const myLeaveRequests = leaveRequest.filter(item => item.email === email);


  // Add this function to determine the color class based on cell value
  const getColorClass = (cellValue) => {
    switch (cellValue) {
      case 'Pending':
        return 'bg-yellow-400'; // Adjust the color as needed
      case 'Approved':
        return 'bg-green-400'; // Adjust the color as needed
      case 'Rejected':
        return 'bg-red-400'; // Adjust the color as needed
      default:
        return ''; // No background color for other cases
    }
  };
  return (
    <div className="">
      {!user ? (
        <StaffLogin />
      ) : (
        <div className="lg:ml-72  bg-[#C8D1DA] px-5 flex flex-col gap-3 h-full pb-12">
          <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
            <div className='flex justify-between '>
              <p className='text-[#F13178] text-[20px] mt-8 font-extrabold' >Leave</p>
            </div>
          </div>
          <div className='border-[#F13178] border-b '></div>

          <div className="flex justify-end text-white">
            {pendingLeave == 1 || pendingLeave == 2 ? (

              <Link to='/staff-leave-form' className=" bg-slate-500 px-2 w-fit  text-center items-center rounded-lg py-1 font-bold flex gap-4 justify-center">
                <div className="flex items-center justify-center">
                  <p className="pl-2">Apply for Leave</p>
                  <FaCirclePlus size={28} className="pl-2 mr-2" />
                </div>
              </Link>
            ) : (
              <p className="text-[#134574] font-bold">Waiting For Leave Approval....</p>
            )}
          </div>


          <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-3  lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[10px] text-white max-w-[980px] w-full pb-2 bg-slate-500 p-2" >
            <div className="bg-slate-400 max-w-[195px] px-2 lg:max-w-[263px] w-full  rounded-[6px] py-1 flex flex-col justify-center">
              <div className="">
                <p className="font-bold text-[#134574] text-center ">Annual Leave 2024</p>
                <p className="text-sm text-[#134574] text-center">19 Dec 2023 - 12 Jan 2024</p>
              </div>
            </div>
            <Link className="bg-slate-400 max-w-[195px] px-2 lg:max-w-[263px] w-full  rounded-[6px] py-1 font-bold flex flex-col justify-center">
              <div className="flex items-center">
                <p className="text-3xl text-[#134574] w-1/3 text-center">{staffAllocatedLeave}</p>
                <div className="w-2/3">
                  <p className="p-2 text-[#134574]">Allocated Leave</p>
                </div>
              </div>
            </Link>


            <Link className="bg-slate-400 max-w-[195px] px-2 lg:max-w-[263px] w-full  rounded-[6px] py-1 font-bold flex flex-col justify-center">
              <div className="flex items-center">
                <p className="text-3xl  w-1/3 text-center text-red-500">{numRLeave}</p>
                <div className="w-2/3">
                  <p className="p-2 text-red-500">Declined Leave</p>
                </div>  </div>
            </Link>


            <Link className="bg-slate-400 max-w-[195px] px-2 lg:max-w-[263px] w-full  rounded-[6px] py-1 font-bold flex flex-col justify-center">
              <div className="flex items-center">
                <p className="text-3xl  w-1/3 text-center text-yellow-300">{numPLeave}</p>
                <div className="w-2/3">
                  <p className="p-2  text-yellow-300">Pending Leave</p>
                </div>
              </div>
            </Link>

            <Link className="bg-slate-400 max-w-[195px] px-2 lg:max-w-[263px] w-full  rounded-[6px] py-1 font-bold flex flex-col justify-center">
              <div className="flex items-center">
                <p className="text-3xl  w-1/3 text-center text-green-400">{numALeave}</p>
                <div className="w-2/3">
                  <p className="p-2 text-green-400">Approved Leave</p>
                </div>
              </div>
            </Link>
            <Link className="bg-slate-400 max-w-[195px] px-2 lg:max-w-[263px] w-full  rounded-[6px] py-1 font-bold flex flex-col justify-center">
              <div className="flex items-center">
                <p className="text-3xl  w-1/3 text-center">{daysRemaining}</p>
                <div className="w-2/3">
                  <p className="p-2 ">Days Remaining</p>
                </div>
              </div>
            </Link>


          </div>


          <div className='bg-slate-200  h-[520px]  sm:px-1'>
            <div className='overflow-x-auto mt-1'>
              <div className='p-1 h-[500px]'>

                <table className="w-[1000px] bg-white border border-gray-500 mb-8">
                  <thead>
                    <tr className='text-[#134574] bg-slate-400'>
                      <th className="border p-2">No of Days</th>
                      <th className="border p-2">FROM</th>
                      <th className="border p-2">TO</th>
                      <th className="border p-2">PURPOSE OF LEAVE</th>
                      <th className="border p-2">ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leaveRequest.map((leave, index) => (
                      <tr key={index} className='hover:bg-gray-200'>
                          <td className={`border p-3`}> {leave.requestedLeave} </td>
                          <td className={`border p-3`}> {leave.leaveStartDate} </td>
                          <td className={`border p-3`}> {leave.leaveEndDate} </td>
                          <td className={`border p-3`}> {leave.purposeOfLeave} </td>
                          {leave.isApproved == 0 &&(
                            <td className={`border p-3 bg-yellow-500`}> Pending </td>

                          )}
                          {leave.isApproved == 1 &&(
                            <td className={`border p-3 bg-green-500`}> Approved </td>

                          )}
                          {leave.isApproved == 2 &&(
                            <td className={`border p-3 bg-red-500`}> Rejected </td>

                          )}
                      </tr>
                    ))}
                  </tbody>

                </table>


              </div>
            </div>


          </div>




        </div>
      )}



    </div>

  )
}

export default StaffLeave
