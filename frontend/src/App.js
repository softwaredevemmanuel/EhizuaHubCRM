import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Preloader from "./components/preloader";


// ADMIN - SECTION
// import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './Pages/admin/AdminDashboard';
import OfficeLocations from './Pages/admin/offices/OfficeLocations';
import Sidebar from './Pages/admin/Sidebar';
import OfficeLocationDetails from './Pages/admin/offices/OfficeLocationDetails';
import CreateOfficeLocation from './Pages/admin/offices/CreateOffice';
import CreateStaff from './Pages/admin/offices/CreateStaff';
import CreatePosition from './Pages/admin/offices/CreatePosition';
import UpdateOfficeLocation from "./Pages/admin/offices/UpdateOfficeDetails";
import History from "./Pages/admin/History";
import HrStaffDetails from "./Pages/admin/offices/StaffDetails";
import HrUpdateStaffDetails from "./Pages/admin/offices/UpdateStaffDetails";


// ADMIN - STAFF SECTION
import HrStaffAttendence from './Pages/admin/staff/Attendance/Attendence';
import HrStaffAttendenceDetails from './Pages/admin/staff/Attendance/AttendanceDetails';
import HrStaffComplaints from './Pages/admin/staff/Complaints';
import HrIncomeExpenditure from './Pages/admin/staff/Expenses/IncomeExpenditure';
import HrStaffSalary from './Pages/admin/staff/Expenses/Salary';
import HrInventory from './Pages/admin/staff/Inventory';
import HrStaffLoan from './Pages/admin/staff/Loan/Loan';
import HrStaffLoanDetails from './Pages/admin/staff/Loan/Details';
import HrStaffMemo from './Pages/admin/staff/Memo/Memo';
import HrStaffLeaveManagement from './Pages/admin/staff/Leave/LeaveManagement';
import DeclinedLeave from './Pages/admin/staff/Leave/Declined';
import PendingLeave from './Pages/admin/staff/Leave/Pending';
import ApprovedLeave from './Pages/admin/staff/Leave/Approved';
import AllLeave from './Pages/admin/staff/Leave/Leaves';
import StaffLeaveDetails from './Pages/admin/staff/Leave/Details';
import MemoDetails from './Pages/admin/staff/Memo/MemoDetails';
import CreateMemo from './Pages/admin/staff/Memo/CreateMemo';
import HrAllStaffReports from './Pages/admin/staff/WeeklyReport/AllReports';
import HrStaffReport from './Pages/admin/staff/WeeklyReport/StaffReport';
import HrStaffReportDetails from './Pages/admin/staff/WeeklyReport/ReportDetails';
import TimeTable from "./Pages/admin/staff/TimeTable/TimeTable";
import EditTimeTable from "./Pages/admin/staff/TimeTable/EditTimeTable";




// ADMIN - STUDENT SECTION
import HrStudentfCourse from './Pages/admin/students/Courses/Course';
import HrStudentfMemo from './Pages/admin/students/Memo/Memo';
import HrStudentCenter from './Pages/admin/students/Details/StudentsCenter';
import HrStudentComplaints from './Pages/admin/students/Complaints/Complaints';
import HrAllStudentComplaints from './Pages/admin/students/Complaints/AllComplaints';
import HrHStuComplaintsDetails from './Pages/admin/students/Complaints/ComplaintsDetails';
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
import StaffSidebar from './Pages/staff/StaffSidebar';
import HrSchoolMemo from './Pages/admin/partnerSchools/memo/Memo';
import HrSchoolMemoDetails from './Pages/admin/partnerSchools/memo/MemoDetails';
import HrCreateSchoolMemo from './Pages/admin/partnerSchools/memo/CreateMemo';
import HrCreateSchool from './Pages/admin/partnerSchools/schools/CreateSchool';
import HrCreateSchoolStudent from './Pages/admin/partnerSchools/schools/CreateSchoolStudent';
import HrCreateSchoolCourse from './Pages/admin/partnerSchools/schools/CreateCourse';
import HrSchoolDetails from './Pages/admin/partnerSchools/schools/SchoolDetails';
import HrUpdateSchoolStudentDetails from './Pages/admin/partnerSchools/schools/UpdateStudent';
import HrSchoolStudentDetails from './Pages/admin/partnerSchools/schools/StudentDetails';
import HrSchoolNewComplaints from './Pages/admin/partnerSchools/complaints/AllComplaints';
import HrSchoolComplaintsDetails from './Pages/admin/partnerSchools/complaints/ComplaintsDetails';


// STAFF SECTION
import StaffDashboard from './Pages/staff/StaffDashboard';
import StaffDetails from './Pages/staff/StaffDetails';
import StaffComplaints from './Pages/staff/Complaints/StaffComplaints';
import StaffComplaintsList from './Pages/staff/Complaints/ComplaintList';
import StaffComplaintsDetails from './Pages/staff/Complaints/Details';
import StaffInventory from './Pages/staff/Inventory/StaffInventory';
import StaffInventoryRequest from './Pages/staff/Inventory/Request';
import StaffReport from './Pages/staff/StaffReport';
import StaffSalaryAdvance from './Pages/staff/Salary/StaffSalaryAdvance';
import StaffLeave from './Pages/staff/Leave/StaffLeave';
import StaffMemo from './Pages/staff/StaffMemo';
import StaffAttendance from './Pages/staff/Attendance/StaffAttendance';
import StaffBirthday from './Pages/staff/StaffBirthday';
import StaffMemoDetails from './Pages/staff/StaffMemoDetails';
import StaffLeaveApplication from './Pages/staff/Leave/StaffLeaveApplication';
import CameraCapture from './Pages/admin/students/Details/Camera';
import HubInstructor from './Pages/staff/HubInstructors/Courses';
import SchoolInstructor from './Pages/staff/SchoolInstructor/Courses';
import HICreateCurriculum from './Pages/staff/HubInstructors/CreateCurriculum';
import HICreateContent from './Pages/staff/HubInstructors/CreateContent';
import HICreateQuestion from './Pages/staff/HubInstructors/CreateQuestion';
import HICourseCurriculum from './Pages/staff/HubInstructors/CourseCurriculum';
import HICreatedContentList from './Pages/staff/HubInstructors/CreatedContentList';
import HICreatedQuestionList from './Pages/staff/HubInstructors/CreatedQuestionsList';
import HICourseContent from './Pages/staff/HubInstructors/CourseContent';
import HIEditCurriculum from './Pages/staff/HubInstructors/EditCurriculum';
import HIEditQuestion from './Pages/staff/HubInstructors/EditQuestion';
import HIEditContent from './Pages/staff/HubInstructors/EditContent';
import HIStudentList from './Pages/staff/HubInstructors/StudentsList';
import HIStudentDetails from './Pages/staff/HubInstructors/StudentDetails';
import StaffForgotId from './Pages/staff/ForgotId';
import StaffTimeTable from './Pages/staff/TimeTable/TimeTable';
import StaffNewReport from './Pages/staff/TimeTable/NewReport';
import StaffReportList from "./Pages/staff/TimeTable/ReportList";
import ClassReportDetails from "./Pages/staff/TimeTable/ReportDetails";

// School Instructor
import SICreateCurriculum from './Pages/staff/SchoolInstructor/CreateCurriculum';
import SICreateContent from './Pages/staff/SchoolInstructor/CreateContent';
import SICreateQuestion from './Pages/staff/SchoolInstructor/CreateQuestion';
import SICourseCurriculum from './Pages/staff/SchoolInstructor/CourseCurriculum';
import SIEditCurriculum from './Pages/staff/SchoolInstructor/EditCurriculum';
import SICourseContentList from './Pages/staff/SchoolInstructor/CreatedContentList';
import SICourseContent from './Pages/staff/SchoolInstructor/CourseContent';
import SICreatedQuestionList from './Pages/staff/SchoolInstructor/CreatedQuestionsList';
import SIEditQuestion from './Pages/staff/SchoolInstructor/EditQuestion';
import SIStudentDetails from './Pages/staff/SchoolInstructor/StudentDetails';
import SIStudents from './Pages/staff/SchoolInstructor/ViewStudents';




//STUDENTS SECTION
import StudentSidebar from './Pages/student/Sidebar';
import StudentDashboard from './Pages/student/StudentDashboard';
import Home from './Pages/Home';
import ForgotPassword from "./Pages/ForgotPassword";
import StudentCourseCurriculum from "./Pages/student/CourseCurriculum";
import TestSection from "./Pages/student/TestSection";
import StudentComplaints from "./Pages/student/Complaints/Complaints";
import StudentMemo from "./Pages/student/Memo/Memo";
import StudentMemoDetails from "./Pages/student/Memo/MemoDetails";
import StudentLogin from "./Pages/student/StudentLogin";
import CourseTopicList from "./Pages/student/Course/CourseTopicList";
import TopicDetails from "./Pages/student/Course/TopicDetails";
import Question from "./Pages/student/Course/Questions";
import TestDetails from "./Pages/student/Course/TestDetails";
import NewFeedComplain from "./Pages/student/Complaints/NewFeedComplain";
import ComplaintFeedbackDetails from "./Pages/student/Complaints/Details";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Set loading to false when your app is ready to load
    }, 2000); // Adjust the delay time as needed
  }, []);
  return (
    <div>
      {loading ? <Preloader /> : <AppContent />}
    </div>
  );
}

const AppContent = () => {
  const [user, setUser] = useState('false');


  useEffect(() => {
    let status = JSON.parse(localStorage.getItem('User'));
    if (status) {
      if ((status.user === 'Admin')) {
        setUser('Admin');
      } else if ((status.user === 'Staff')) {
        setUser('Staff');
      } else if ((status.user === 'Student')) {
        setUser('Student');
      } else {
        setUser('false');
      }

    }

  }, []);


  return (

    <Router>

      {(user === 'Admin') && (
        <div>
          <Sidebar />
          <Routes>
            <Route path="*" element={<Navigate to="/dashboard" />} />
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/office-locations/hr" element={<OfficeLocations />} />
            <Route path="/office-details/hr/:officeName" element={<OfficeLocationDetails />} />
            <Route path="/create-office/hr" element={<CreateOfficeLocation />} />
            <Route path="/create-staff/hr/:officeName" element={<CreateStaff />} />
            <Route path="/create-position/hr/:officeName" element={<CreatePosition />} />
            <Route path="/update-office-location/:officeName" element={<UpdateOfficeLocation />} />
            <Route path="/history" element={<History />} />
            <Route path="/staff-details/hr/:_id" element={<HrStaffDetails />} />
            <Route path="/update-staff-details/hr/:_id" element={<HrUpdateStaffDetails />} />


            {/* __________ADMIN - STAFF SECTION ______________ */}
            <Route path='staff-attendance/hr' element={<HrStaffAttendence />} />
            <Route path='staff-complaints/hr' element={<HrStaffComplaints />} />
            <Route path='income-expenditure/hr' element={<HrIncomeExpenditure />} />
            <Route path='staff-salary/hr' element={<HrStaffSalary />} />
            <Route path='inventory/hr' element={<HrInventory />} />
            <Route path='staff-loan/hr' element={<HrStaffLoan />} />
            <Route path='loan-details/hr' element={<HrStaffLoanDetails />} />
            <Route path='staff-memo/hr' element={<HrStaffMemo />} />
            <Route path='leave-management' element={<HrStaffLeaveManagement />} />
            <Route path='all-leave' element={<AllLeave />} />
            <Route path='pending-leave' element={<PendingLeave />} />
            <Route path='approved-leave' element={<ApprovedLeave />} />
            <Route path='declined-leave' element={<DeclinedLeave />} />
            <Route path='staff-leave-details/:_id' element={<StaffLeaveDetails />} />
            <Route path='memo-details' element={<MemoDetails />} />
            <Route path='create-memo' element={<CreateMemo />} />
            <Route path='staff-attendance-details/hr' element={<HrStaffAttendenceDetails />} />
            <Route path='staff-report-list/hr' element={<HrAllStaffReports />} />
            <Route path='staff-report/hr' element={<HrStaffReport />} />
            <Route path='staff-report-details/hr' element={<HrStaffReportDetails />} />
            <Route path='courses-time-table/hr' element={<TimeTable />} />
            <Route path='edit-time-table/:_id/:location' element={<EditTimeTable />} />


            {/* __________ADMIN - STUDENT SECTION ______________ */}
            <Route path='student-course/hr' element={<HrStudentfCourse />} />
            <Route path='student-memo/hr' element={<HrStudentfMemo />} />
            <Route path='student-center/hr' element={<HrStudentCenter />} />
            <Route path='student-complaints/hr' element={<HrStudentComplaints />} />
            <Route path='all-student-complaints/hr' element={<HrAllStudentComplaints />} />
            <Route path='hstu-complaints-details/hr' element={<HrHStuComplaintsDetails />} />
            <Route path='student-memo/hr' element={<HrStudentMemo />} />
            <Route path='create-student-memo/hr' element={<HrCreateStudentMemo />} />
            <Route path='student-memo-details/hr' element={<HrStudentMemoDetails />} />
            <Route path='student-section/:location' element={<HrStudentsSection />} />
            <Route path='student-details/hr' element={<HrStudentDetails />} />
            <Route path='register-student/hr/:location' element={<HrCreateStudent />} />
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
            <Route path='update-school-student/hr' element={<HrUpdateSchoolStudentDetails />} />
          </Routes>
        </div>
      )}



      {user === 'Student' && (

        <div className='flex w-full h-full'>
          <StudentSidebar />
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/login" element={<StudentLogin />} />
            <Route path="/dashboard" element={<StudentDashboard />} />
            <Route path="/:course/content-list" element={<CourseTopicList />} />
            <Route path="/:course/details/:id" element={<TopicDetails />} />
            <Route path="/questions/:course/:id" element={<Question />} />
            <Route path="/:test-details/:course/:id/:subTopic" element={<TestDetails />} />
            <Route path="/course-curriculum" element={<StudentCourseCurriculum />} />
            <Route path="/test-section" element={<TestSection />} />
            <Route path="/complaints" element={<StudentComplaints />} />
            <Route path="/student-memo" element={<StudentMemo />} />
            <Route path="/student-memo-details" element={<StudentMemoDetails />} />
            <Route path="/students/:reportType" element={<NewFeedComplain />} />
            <Route path="/student/:reportType/details/:id" element={<ComplaintFeedbackDetails />} />
          </Routes>

        </div>

      )}

      {user === 'Staff' && (
        <div>

          <StaffSidebar />
          <Routes>
            <Route path="*" element={<Navigate to="/dashboard" />} />
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<StaffDashboard />} />
            <Route path="/staff_memo_list" element={<StaffMemo />} />
            <Route path="/staff_attendance" element={<StaffAttendance />} />
            <Route path="/staff_details" element={<StaffDetails />} />
            <Route path="/staff/:reportType" element={<StaffComplaints />} />
            <Route path="/staff/:reportType/details/:id" element={<StaffComplaintsDetails />} />
            <Route path="/staff_complaints-list" element={<StaffComplaintsList />} />
            <Route path="/staff_inventory" element={<StaffInventory />} />
            <Route path="/staff_inventory-request" element={<StaffInventoryRequest />} />
            <Route path="/staff_report" element={<StaffReport />} />
            <Route path="/staff_salary_advance" element={<StaffSalaryAdvance />} />
            <Route path="/staff_leave" element={<StaffLeave />} />
            <Route path="/staff_birthday" element={<StaffBirthday />} />
            <Route path="/staff-memo-details" element={<StaffMemoDetails />} />
            <Route path="/staff-leave-form" element={<StaffLeaveApplication />} />
            <Route path="/hub-instructor" element={<HubInstructor />} />
            <Route path="/school-instructor" element={<SchoolInstructor />} />
            <Route path="/hi-create-curriculum/:course" element={<HICreateCurriculum />} />
            <Route path="/hi-create-content/:course" element={<HICreateContent />} />
            <Route path="/hi-create-question/:course" element={<HICreateQuestion />} />
            <Route path="/hi-course-curriculum/:course" element={<HICourseCurriculum />} />
            <Route path="/hi-content-list/:course" element={<HICreatedContentList />} />
            <Route path="/hi-course-content/:course/:id" element={<HICourseContent />} />
            <Route path="/hi-question-list/:course" element={<HICreatedQuestionList />} />
            <Route path="/edit-curriculum/:course/:topic" element={<HIEditCurriculum />} />
            <Route path="/edit-question/:question/:course/:topic" element={<HIEditQuestion />} />
            <Route path="/edit-content/:course/:id" element={<HIEditContent />} />
            <Route path="/hi-student-list" element={<HIStudentList />} />
            <Route path="/hi-student-details" element={<HIStudentDetails />} />
            <Route path='forgot-id' element={<StaffForgotId />} />
            <Route path='staff-time-table' element={<StaffTimeTable />} />
            <Route path='class-reports/:course' element={<StaffReportList />} />
            <Route path='new-report/:course/:start/:end' element={<StaffNewReport />} />
            <Route path='class-report-details/:_id/:course' element={<ClassReportDetails />} />

            {/* School Instructor */}
            <Route path='/si-create-curriculum/:course' element={<SICreateCurriculum />} />
            <Route path="/si-create-content/:course" element={<SICreateContent />} />
            <Route path="/si-create-question/:course" element={<SICreateQuestion />} />
            <Route path="/si-course-curriculum/:course" element={<SICourseCurriculum />} />
            <Route path="/edit-school-curriculum/:course/:topic" element={<SIEditCurriculum />} />
            <Route path="/si-course-content-list/:course" element={<SICourseContentList />} />
            <Route path="/si-course-content/:id" element={<SICourseContent />} />
            <Route path="/si-question-list/:course" element={<SICreatedQuestionList />} />
            <Route path="/edit-school-question/:question/:course/:topic" element={<SIEditQuestion />} />
            <Route path="/si-students/:course/:email" element={<SIStudents />} />
            <Route path='si-student-details' element={<SIStudentDetails />} />

          </Routes>

        </div>

      )}

      {user === "false" && (
        <div>
          <Routes>
            {/* <Route path="/" element={<Navigate to="/login" />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="*" element={<Navigate to="/login" />} />
            <Route path="/" element={<Home />} />

          </Routes>

        </div>


      )}
      {user === "camera" && (
        <CameraCapture />


      )}


    </Router>


  );
}

export default App;