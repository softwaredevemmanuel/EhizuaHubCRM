import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// ADMIN - SECTION
// import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './Pages/admin/AdminDashboard';
import OfficeLocations from './Pages/admin/offices/OfficeLocations';
import Sidebar from './Pages/admin/Sidebar';
import OfficeLocationDetails from './Pages/admin/offices/OfficeLocationDetails';
import CreateOfficeLocation from './Pages/admin/offices/CreateOffice';
import CreateEnterpriseLocation from './Pages/admin/offices/CreateEnterprise';


// ADMIN - STAFF SECTION
import HrStaffAttendence from './Pages/admin/staff/Attendance/Attendence';
import HrStaffAttendenceDetails from './Pages/admin/staff/Attendance/AttendanceDetails';
import HrStaffComplaints from './Pages/admin/staff/Complaints';
import HrStaffSection from './Pages/admin/staff/EhizuaStaff';
import HrInventory from './Pages/admin/staff/Inventory';
import HrStaffLoan from './Pages/admin/staff/Loan';
import HrStaffMemo from './Pages/admin/staff/Memo/Memo';
import HrRegisterStaff from './Pages/admin/staff/RegisterStaff';
import HrStaffLeaveManagement from './Pages/admin/staff/Leave/LeaveManagement';
import DeclinedLeave from './Pages/admin/staff/Leave/Declined';
import PendingLeave from './Pages/admin/staff/Leave/Pending';
import ApprovedLeave from './Pages/admin/staff/Leave/Approved';
import AllLeave from './Pages/admin/staff/Leave/Leaves';
import StaffLeaveDetails from './Pages/admin/staff/Leave/Details';
import MemoDetails from './Pages/admin/staff/Memo/MemoDetails';
import CreateMemo from './Pages/admin/staff/Memo/CreateMemo';




// ADMIN - STUDENT SECTION
import HrStudentfCourse from './Pages/admin/students/Courses/Course';
import HrStudentfMemo from './Pages/admin/students/Memo/Memo';
import HrStudentCenter from './Pages/admin/students/Details/StudentsCenter';
import HrStudentAttendance from './Pages/admin/students/Attendance';
import HrStudentComplaints from './Pages/admin/students/Complaints/Complaints';
import HrStudentMemo from './Pages/admin/students/Memo/Memo';
import HrCreateStudentMemo from './Pages/admin/students/Memo/CreateMemo';
import HrStudentMemoDetails from './Pages/admin/students/Memo/MemoDetails';
import HrStudentsSection from './Pages/admin/students/Details/StudentsSection';
import HrStudentDetails from './Pages/admin/students/Details/StudentDetails';
import HrCreateStudent from './Pages/admin/students/Details/CreateStudent';
import HrUpdateStudent from './Pages/admin/students/Details/UpdateStudent';
import HrCreateStudentCourse from './Pages/admin/students/Courses/CreateCourse';
import HrCourseDetails from './Pages/admin/students/Courses/Details';
import HrCourseDiscount from './Pages/admin/students/Discount/CourseDiscount';
import HrCreateCourseDiscount from './Pages/admin/students/Discount/CreateDiscount';
import HrUpdateCourseDiscount from './Pages/admin/students/Discount/UpdateDiscount';





// ADMIN - SCHOOL SECTION
import HrPartnerSchool from './Pages/admin/partnerSchools/schools/PartnerSchools';
import HrSchoolComplaints from './Pages/admin/partnerSchools/complaints/Complaints';
import Login from './Pages/Login';
import Navbar from './Pages/admin/Navbar';
import StaffSidebar from './Pages/staff/StaffSidebar';
import HrSchoolMemo from './Pages/admin/partnerSchools/memo/Memo';
import HrSchoolMemoDetails from './Pages/admin/partnerSchools/memo/MemoDetails';
import HrCreateSchoolMemo from './Pages/admin/partnerSchools/memo/CreateMemo';
import HrCreateSchool from './Pages/admin/partnerSchools/schools/CreateSchool';
import HrCreateSchoolStudent from './Pages/admin/partnerSchools/schools/CreateSchoolStudent';
import HrCreateSchoolCourse from './Pages/admin/partnerSchools/schools/CreateCourse';
import HrSchoolDetails from './Pages/admin/partnerSchools/schools/SchoolDetails';
import HrSchoolStudentDetails from './Pages/admin/partnerSchools/schools/StudentDetails';
import HrSchoolNewComplaints from './Pages/admin/partnerSchools/complaints/NewComplaints';
import HrSchoolComplaintsDetails from './Pages/admin/partnerSchools/complaints/ComplaintsDetails';

// STAFF SECTION
import StaffDashboard from './Pages/staff/StaffDashboard';
import StaffDetails from './Pages/staff/StaffDetails';
import StaffComplaints from './Pages/staff/StaffComplaints';
import StaffInventory from './Pages/staff/StaffInventory';
import StaffLoan from './Pages/staff/StaffLoan';
import StaffReport from './Pages/staff/StaffReport';
import StaffSalaryAdvance from './Pages/staff/StaffSalaryAdvance';
import StaffLeave from './Pages/staff/StaffLeave';
import StaffMemo from './Pages/staff/StaffMemo';
import StaffAttendance from './Pages/staff/StaffAttendance';
import StaffBirthday from './Pages/staff/StaffBirthday';
import StaffMemoDetails from './Pages/staff/StaffMemoDetails';
import StaffLeaveApplication from './Pages/staff/StaffLeaveApplication';
import Example from './Pages/admin/staff/Leave/Example';
import CameraCapture from './Pages/admin/students/Details/Camera';


//STUDENTS SECTION
import StudentSidebar from './Pages/student/Sidebar';
import StudentDashboard from './Pages/student/StudentDashboard';





const App = () => {
  const user = 'Admin'

  return (

    <Router>


      {(user === 'Admin') && (
        <div>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/office-locations/hr" element={<OfficeLocations />} />
            <Route path="/office-staff/hr" element={<OfficeLocationDetails />} />
            <Route path="/create-office/hr" element={<CreateOfficeLocation />} />
            <Route path="/create-enterprise/hr" element={<CreateEnterpriseLocation />} />

            {/* __________ADMIN - STAFF SECTION ______________ */}
            <Route path='staff-attendance/hr' element={<HrStaffAttendence />} />
            <Route path='staff-complaints/hr' element={<HrStaffComplaints />} />
            <Route path='ehizua-staff/hr' element={<HrStaffSection />} />
            <Route path='inventory/hr' element={<HrInventory />} />
            <Route path='staff-loan/hr' element={<HrStaffLoan />} />
            <Route path='staff-memo/hr' element={<HrStaffMemo />} />
            <Route path='register-staff/hr' element={<HrRegisterStaff />} />
            <Route path='leave-management' element={<HrStaffLeaveManagement />} />
            <Route path='all-leave' element={<AllLeave />} />
            <Route path='pending-leave' element={<PendingLeave />} />
            <Route path='approved-leave' element={<ApprovedLeave />} />
            <Route path='declined-leave' element={<DeclinedLeave />} />
            <Route path='staff-leave-details' element={<StaffLeaveDetails />} />
            <Route path='example' element={<Example />} />
            <Route path='memo-details' element={<MemoDetails />} />
            <Route path='create-memo' element={<CreateMemo />} />
            <Route path='staff-attendance-details/hr' element={<HrStaffAttendenceDetails/>} />


            {/* __________ADMIN - STUDENT SECTION ______________ */}
            <Route path='student-course/hr' element={<HrStudentfCourse />} />
            <Route path='student-memo/hr' element={<HrStudentfMemo />} />
            <Route path='student-center/hr' element={<HrStudentCenter />} />
            <Route path='student-attendance/hr' element={<HrStudentAttendance />} />
            <Route path='student-complaints/hr' element={<HrStudentComplaints />} />
            <Route path='student-memo/hr' element={<HrStudentMemo />} />
            <Route path='create-student-memo/hr' element={<HrCreateStudentMemo />} />
            <Route path='student-memo-details/hr' element={<HrStudentMemoDetails />} />
            <Route path='student-section/hr' element={<HrStudentsSection />} />
            <Route path='student-details/hr' element={<HrStudentDetails />} />
            <Route path='register-student/hr' element={<HrCreateStudent />} />
            <Route path='update-student/hr' element={<HrUpdateStudent />} />
            <Route path='create-student-course/hr' element={<HrCreateStudentCourse />} />
            <Route path='course-details/hr' element={<HrCourseDetails />} />
            <Route path='course-discount/hr' element={<HrCourseDiscount />} />
            <Route path='create-course-discount/hr' element={<HrCreateCourseDiscount />} />
            <Route path='update-course-discount/hr' element={<HrUpdateCourseDiscount />} />


            {/* __________ADMIN - SCHOOL SECTION ______________ */}
            <Route path='school-memo/hr' element={<HrSchoolMemo />} />
            <Route path='partner-schools/hr' element={<HrPartnerSchool />} />
            <Route path='school-complaints/hr' element={<HrSchoolComplaints />} />
            <Route path='school-memo/hr' element={<HrSchoolMemo />} />
            <Route path='school-memo-details/hr' element={<HrSchoolMemoDetails />} />
            <Route path='create-school-memo/hr' element={<HrCreateSchoolMemo />} />
            <Route path='create-school/hr' element={<HrCreateSchool />} />
            <Route path='create-school-student/hr' element={<HrCreateSchoolStudent />} />
            <Route path='create-school-course/hr' element={<HrCreateSchoolCourse />} />
            <Route path='school-details/hr' element={<HrSchoolDetails />} />
            <Route path='school-student-details/hr' element={<HrSchoolStudentDetails />} />
            <Route path='school-new-complaints/hr' element={<HrSchoolNewComplaints />} />
            <Route path='school-complaints-details/hr' element={<HrSchoolComplaintsDetails />} />
          </Routes>
        </div>
      )}



      {user === 'Student' && (
        <div className='flex w-full h-full'>
          {/* <StaffSidebar/> */}
          <StudentSidebar/>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<StudentDashboard />} />


          </Routes>

        </div>

      )}

      {user === 'Staff' && (
        <div>

          <StaffSidebar />
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<StaffDashboard />} />
            <Route path="/staff_memo_list" element={<StaffMemo />} />
            <Route path="/staff_attendance" element={<StaffAttendance />} />
            <Route path="/staff_details" element={<StaffDetails />} />
            <Route path="/staff_complaints" element={<StaffComplaints />} />
            <Route path="/staff_inventory" element={<StaffInventory />} />
            <Route path="/staff_loan" element={<StaffLoan />} />
            <Route path="/staff_report" element={<StaffReport />} />
            <Route path="/staff_salary_advance" element={<StaffSalaryAdvance />} />
            <Route path="/staff_leave" element={<StaffLeave />} />
            <Route path="/staff_birthday" element={<StaffBirthday />} />
            <Route path="/staff-memo-details" element={<StaffMemoDetails />} />
            <Route path="/staff-leave-form" element={<StaffLeaveApplication />} />

          </Routes>
        </div>


      )}

      {user == "false" && (
        <Login />


      )}
      {user == "camera" && (
        <CameraCapture />


      )}










    </Router>


  );
}

export default App;