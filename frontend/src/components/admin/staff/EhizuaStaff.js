import React from 'react'
import Sidebar from '../Sidebar'


const EhizuaStaff = () => {
  return (
    <section className="flex-col flex md:flex-row justify-between w-full h-full">
    <Sidebar/>
    <div className="w-full  md:bg-[#C8D1DA] bg-[#134574]  flex flex-col gap-3 md:pl-5">
    <div className='pl-6'>
            <h4 className='w-full pt-12 font-bold text-[#f13178]  mb:pb-3 text-[22px] '>REGISTER STAFF FORM</h4>
            <div className='border-b-2 border-[#f13178] '></div>
           
          </div>
          <div className=" bg-[#134574] text-white md:w-[1119px] md:rounded-lg mx-auto p-4">
      <form  className="max-w-md mx-auto">
        {/* Personal Information */}
        <div className="md:mb-2 mb-4 md:flex md:flex-row md:items-center md:text-center md:w-[800px] md:gap-14">
          <label htmlFor="firstname" className='md:ml-[-300px]'>First Name:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            //value={formData.firstname}
           // onChange={handleInputChange}
            className="md:w-[600px] rounded-md p-3 w-full border "
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            //value={formData.lastname}
           // onChange={handleInputChange}
            className="w-full border p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder='email'
            //value={formData.lastname}
           // onChange={handleInputChange}
            className="w-full border p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone number">Phone Number:</label>
          <input
            type="number"
            id="phone number"
            name="phone number"
            //value={formData.lastname}
           // onChange={handleInputChange}
            className="w-full border p-2"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastname">Job Description:</label>
          <input
            type="text"
            id="job description"
            name="job description"
            //value={formData.lastname}
           // onChange={handleInputChange}
            className="w-full border p-2"
            required
          />
        </div>

        {/* Other fields... */}

        <div className="mb-4 flex flex-row items-center gap-2">
        <input
            type="checkbox"
            id="hubInstructor"
            name="hubInstructor"
            //checked={formData.hubInstructor}
           // onChange={handleInputChange}
           className='w-[20px] h-[20px]'
          />
          <label htmlFor="hubInstructor">Hub Instructor</label>

          <input
            type="checkbox"
            id="schoolInstructor"
            name="schoolInstructor"
            //checked={formData.hubInstructor}
           // onChange={handleInputChange}
           className='w-[20px] h-[20px]'
          />
          <label htmlFor="SchoolInstructor">School Instructor</label>
        
        </div>

        {/* Other checkboxes and select fields... */}

        <div className="mb-4">
          <label htmlFor="salary">Salary:</label>
          <input
            type="text"
            id="salary"
            name="salary"
            //value={formData.salary}
           // onChange={handleInputChange}
            className="w-full border p-2"
            required
          />
        </div>

        {/* Other input fields... */}

        <div className="mb-4">
          <label htmlFor="nextOfKinAddress">Next of Kin Address:</label>
          <textarea
            id="nextOfKinAddress"
            name="nextOfKinAddress"
            //value={formData.nextOfKinAddress}
            //onChange={handleInputChange}
            rows="4"
            className="w-full border p-2"
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-[#f13178] text-white p-6 rounded-md">
          Submit
        </button>
      </form>
    </div>
    </div>
  
</section>
  )
}

export default EhizuaStaff