import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// ADMIN - SECTION
import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard';
import OfficeLocations from './components/admin/OfficeLocations';


// ADMIN - STAFF SECTION
import HrStaffAttendence from './components/admin/staff/Attendence';
import HrStaffComplaints from './components/admin/staff/Complaints';
import HrStaffSection from './components/admin/staff/EhizuaStaff';
import HrInventory from './components/admin/staff/Inventory';
import HrStaffLeave from './components/admin/staff/Leave';
import HrStaffLoan from './components/admin/staff/Loan';
import HrStaffMemo from './components/admin/staff/Memo';
import HrRegisterStaff from './components/admin/staff/RegisterStaff';

// ADMIN - STUDENT SECTION
import HrStudentfCourse from './components/admin/students/Course';
import HrStudentfMemo from './components/admin/students/Memo';
import HrStudentSection from './components/admin/students/EhizuaStudents';
import HrAllStudent from './components/admin/students/AllEhizuaStudents';
import HrStudentAttendance from './components/admin/students/Attendance';
import HrStudentComplaints from './components/admin/students/Complaints';

// ADMIN - SCHOOL SECTION
import HrSchoolMemo from './components/admin/partnerSchools/Memo';
import HrPartnerSchool from './components/admin/partnerSchools/PartnerSchools';
import HrSchoolCourseDiscount from './components/admin/partnerSchools/CourseDiscount';
import HrSchoolComplaints from './components/admin/partnerSchools/Complaints';



function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
          {/* __________ADMIN SECTION______________ */}
          <Route path='/' element={<AdminLogin/>} />
          <Route path='dashboard/hr' element={<AdminDashboard/>} />
          <Route path='office-locations/hr' element={<OfficeLocations/>} />

          {/* __________ADMIN - STAFF SECTION ______________ */}
          <Route path='staff-attendance/hr' element={<HrStaffAttendence/>} />
          <Route path='staff-complaints/hr' element={<HrStaffComplaints/>} />
          <Route path='ehizua-staff/hr' element={<HrStaffSection/>} />
          <Route path='inventory/hr' element={<HrInventory/>} />
          <Route path='staff-leave/hr' element={<HrStaffLeave/>} />
          <Route path='staff-loan/hr' element={<HrStaffLoan/>} />
          <Route path='staff-memo/hr' element={<HrStaffMemo/>} />
          <Route path='register-staff/hr' element={<HrRegisterStaff/>} />

          {/* __________ADMIN - STUDENT SECTION ______________ */}
          <Route path='student-course/hr' element={<HrStudentfCourse/>} />
          <Route path='student-memo/hr' element={<HrStudentfMemo/>} />
          <Route path='ehizua-students/hr' element={<HrStudentSection/>} />
          <Route path='all-students/hr' element={<HrAllStudent/>} />
          <Route path='student-attendance/hr' element={<HrStudentAttendance/>} />
          <Route path='student-complaints/hr' element={<HrStudentComplaints/>} />

          {/* __________ADMIN - SCHOOL SECTION ______________ */}
          <Route path='school-memo/hr' element={<HrSchoolMemo/>} />
          <Route path='partner-schools/hr' element={<HrPartnerSchool/>} />
          <Route path='school-course-discount/hr' element={<HrSchoolCourseDiscount/>} />
          <Route path='school-complaints/hr' element={<HrSchoolComplaints/>} />




      </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;