import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom'
import profile from '../../../assets/adminlogin.png'
import { MdOutlineEdit } from "react-icons/md";
import { LuRefreshCcw } from "react-icons/lu";
import { FaTimes } from "react-icons/fa";
import React, { useEffect, useRef, useState } from 'react';
import Chart from "chart.js/auto"
import ReactLoading from "react-loading";
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react'


/**
 * TODO: 
 * FLOW PROCEDURE
 * 
 * ? 1.  First get the value of the _id sent from the URL using useParams() and store it as contentParam
 * ? 2. "Get all Staff UseEffect" runs and returns an array of objects "staff[]"
 * ? 3. Find the exact staff with the _id by comparing contentParam with staff array
 *     const contentItem = staff.find((item) => item._id == contentParam);
 * ? 4.  Another useEffect will run only when contentItem is true (available), this will get and store the value of the staff in useState
 * ? 5. 
 * ? The next useEffect will run when there is a change in email input, this will triger and setEmailChange to true and display a SAVE button.
 * ?
 * 
 */


const StaffDetails = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);
    const [staff, setStaff] = useState([]);
    const [loading, setLoading] = useState(false);



    const [selectedTitle, setSelectedTitle] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [office, setOffice] = useState('');
    const [position, setPosition] = useState('');
    const [selectedJobType, setSelectedJobType] = useState('');
    const [hubInstructor, setHubInstructor] = useState('');
    const [salary, setSalary] = useState('');
    const [schoolInstructor, setSchoolInstructor] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [bankName, setBankName] = useState('');
    const [sickLeave, setSickLeave] = useState('');
    const [dateEmployed, setDateEmployed] = useState('');
    const [homeAddress, setHomeAddress] = useState('');
    const [nextOfKinFullName, setNextOfKinFullName] = useState('');
    const [nextOfKinPhoneNumber, setNextOfKinPhoneNumber] = useState('');
    const [nextOfKinAddress, setNextOfKinAddress] = useState('');
    const [isVerified, setIsVerified] = useState();

    const [selectedHubCourses, setSelectedHubCourses] = useState([]);
    const [selectedSchoolCourses, setSelectedSchoolCourses] = useState([]);
    const [selectedSchools, setSelectedSchools] = useState([]);


    const [refresh, setRefresh] = useState('');



    const [displayEditTitle, setDisplayEditTitle] = useState(false);
    const [displayEditFirstName, setDisplayEditFirstName] = useState(false);
    const [displayEditMiddleName, setDisplayEditMiddleName] = useState(false);
    const [displayEditLastName, setDisplayEditLastName] = useState(false);
    const [displayEditEmail, setDisplayEditEmail] = useState(false);
    const [displayEditPhone, setDisplayEditPhone] = useState(false);
    const [displayEditPosition, setDisplayEditPosition] = useState(false);
    const [displayEditJobType, setDisplayEditJobType] = useState(false);
    const [displayEditSalary, setDisplayEditSalary] = useState(false);
    const [displayEditOffice, setDisplayEditOffice] = useState(false);
    const [displayEditHubInstructor, setDisplayEditHubInstructor] = useState(false);
    const [displayEditSchoolInstructor, setDisplayEditSchoolInstructor] = useState(false);
    const [displayEditDateOfBirth, setDisplayEditDateOfBirth] = useState(false);
    const [displayEditSickLeave, setDisplayEditSickLeave] = useState(false);
    const [displayEditDateEmployed, setDisplayEditDateEmployed] = useState(false);
    const [displayEditBankName, setDisplayEditBankName] = useState(false);
    const [displayEditAccountNumber, setDisplayEditAccountNumber] = useState(false);
    const [displayEditHomeAddress, setDisplayEditHomeAddress] = useState(false);
    const [displayEditNextOfKinFullName, setDisplayEditNextOfKinFullName] = useState(false);
    const [displayEditNextOfKinPhoneNumber, setDisplayEditNextOfKinPhoneNumber] = useState(false);
    const [displayEditNextOfKinAddress, setDisplayEditNextOfKinAddress] = useState(false);


    const [titleHovered, setTitleHovered] = useState(false);
    const [firstNameHovered, setFirstNameHovered] = useState(false);
    const [middleNameHovered, setMiddleNameHovered] = useState(false);
    const [lastNameHovered, setLastNameHovered] = useState(false);
    const [emailHovered, setEmailHovered] = useState(false);
    const [phoneHovered, setPhoneHovered] = useState(false);
    const [positionHovered, setPositionHovered] = useState(false);
    const [jobTypeHovered, setJobTypeHovered] = useState(false);
    const [salaryHovered, setSalaryHovered] = useState(false);
    const [officeHovered, setOfficeHovered] = useState(false);
    const [hubInstructorHovered, setHubInstructorHovered] = useState(false);
    const [schoolInstructorHovered, setSchoolInstructorHovered] = useState(false);
    const [dateOfBirthHovered, setDateOfBirthHovered] = useState(false);
    const [sickLeaveHovered, setSickLeaveHovered] = useState(false);
    const [dateEmployedHovered, setDateEmployedHovered] = useState(false);
    const [bankNameHovered, setBankNameHovered] = useState(false);
    const [accountNumberHovered, setAccountNumberHovered] = useState(false);
    const [homeAddressHovered, setHomeAddressHovered] = useState(false);
    const [nextOfKinFullNameHovered, setNextOfKinFullNameHovered] = useState(false);
    const [nextOfKinPhoneNumberHovered, setNextOfKinPhoneNumberHovered] = useState(false);
    const [nextOfKinAddressHovered, setNextOfKinAddressHovered] = useState(false);


    const [editTitle, setEditTitle] = useState(false);
    const [editFirstName, setEditFirstName] = useState(false);
    const [editMiddleName, setEditMiddleName] = useState(false);
    const [editLastName, setEditLastName] = useState(false);
    const [editEmail, setEditEmail] = useState(false);
    const [editPhone, setEditPhone] = useState(false);
    const [editPosition, setEditPosition] = useState(false);
    const [editJobType, setEditJobType] = useState(false);
    const [editSalary, setEditSalary] = useState(false);
    const [editOffice, setEditOffice] = useState(false);
    const [editHubInstructor, setEditHubInstructor] = useState(false);
    const [editSchoolInstructor, setEditSchoolInstructor] = useState(false);
    const [editDateOfBirth, setEditDateOfBirth] = useState(false);
    const [editSickLeave, setEditSickLeave] = useState(false);
    const [editDateEmployed, setEditDateEmployed] = useState(false);
    const [editBankName, setEditBankName] = useState(false);
    const [editAccountNumber, setEditAccountNumber] = useState(false);
    const [editHomeAddress, setEditHomeAddress] = useState(false);
    const [editNextOfKinFullName, setEditNextOfKinFullName] = useState(false);
    const [editNextOfKinPhoneNumber, setEditNextOfKinPhoneNumber] = useState(false);
    const [editNextOfKinAddress, setEditNextOfKinAddress] = useState(false);


    const [titleChanged, setTitleChanged] = useState(false);
    const [firstNameChanged, setFirstNameChanged] = useState(false);
    const [middleNameChanged, setMiddleNameChanged] = useState(false);
    const [lastNameChanged, setLastNameChanged] = useState(false);
    const [emailChanged, setEmailChanged] = useState(false);
    const [phoneChanged, setPhoneChanged] = useState(false);
    const [positionChanged, setPositionChanged] = useState(false);
    const [jobTypeChanged, setJobTypeChanged] = useState(false);
    const [salaryChanged, setSalaryChanged] = useState(false);
    const [officeChanged, setOfficeChanged] = useState(false);
    const [hubInstructorChanged, setHubInstructorChanged] = useState(false);
    const [schoolInstructorChanged, setSchoolInstructorChanged] = useState(false);
    const [dateOfBirthChanged, setDateOfBirthChanged] = useState(false);
    const [sickLeaveChanged, setSickLeaveChanged] = useState(false);
    const [dateEmployedChanged, setDateEmployedChanged] = useState(false);
    const [bankNameChanged, setBankNameChanged] = useState(false);
    const [accountNumberChanged, setAccountNumberChanged] = useState(false);
    const [homeAddressChanged, setHomeAddressChanged] = useState(false);
    const [nextOfKinFullNameChanged, setNextOfKinFullNameChanged] = useState(false);
    const [nextOfKinPhoneNumberChanged, setNextOfKinPhoneNumberChanged] = useState(false);
    const [nextOfKinAddressChanged, setNextOfKinAddressChanged] = useState(false);


    const [isChecked, setChecked] = useState(false);
    const [verify, setVerify] = useState(false);
    const [unVerify, setUnVerify] = useState(false);


    const [reload, setReload] = useState(false);



    // Get the content parameter from the URL using useParams
    const { _id: contentParam } = useParams();
    const contentItem = staff.find((item) => item._id == contentParam);



    const Refresh = () => {
        if (refresh === '') {
            setRefresh('Refreshed')

        } else {
            setRefresh('')

        }
    }

    // Get All Staff useEffect
    useEffect(() => {
        let user_token = JSON.parse(localStorage.getItem('User'));
        setLoading(true)

        async function fetchStaffDetails() {
            try {
                const response = await axios.get('http://localhost:5000/api/auth/staff', {
                    headers: {
                        token: user_token.Token
                    }
                });

                setStaff(response.data.staff);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        }
        fetchStaffDetails();

    }, [reload, refresh]);

    // Get state value details of the staff
    useEffect(() => {
        if (contentItem) {
            setSelectedTitle(contentItem.title)
            setFirstName(contentItem.firstName || '');
            setMiddleName(contentItem.middleName || '');
            setLastName(contentItem.lastName || '');
            setEmail(contentItem.email || '');
            setDateOfBirth(contentItem.dateOfBirth || '');
            setDateEmployed(contentItem.dateEmployed || '');
            setOffice(contentItem.office || '');
            setPosition(contentItem.position || '');
            setSelectedJobType(contentItem.selectedJobType || '');
            setSalary(contentItem.salary || '');
            setHubInstructor(contentItem.hubInstructor || '');
            setSchoolInstructor(contentItem.schoolInstructor || '');
            setPhone(contentItem.phone || '');
            setAccountNumber(contentItem.accountNumber || '');
            setBankName(contentItem.bankName || '');
            setSickLeave(contentItem.sickLeave || '');
            setHomeAddress(contentItem.homeAddress || '');
            setNextOfKinFullName(contentItem.nextOfKinFullName || '');
            setNextOfKinPhoneNumber(contentItem.nextOfKinPhoneNumber || '');
            setNextOfKinAddress(contentItem.nextOfKinAddress || '');
            setIsVerified(contentItem.isVerified || 0);
        }
    }, [contentItem, reload, refresh]);


    useEffect(() => {
        if (contentItem) {

            if (contentItem.title !== selectedTitle) {
                setTitleChanged(true);
            } else {
                setTitleChanged(false);
            }
        }

    }, [selectedTitle]);

    useEffect(() => {
        if (contentItem) {

            if (contentItem.firstName !== firstName) {
                setFirstNameChanged(true);
            } else {
                setFirstNameChanged(false);
            }
        }

    }, [firstName]);

    useEffect(() => {
        if (contentItem) {

            if (contentItem.middleName !== middleName) {
                setMiddleNameChanged(true);
            } else {
                setMiddleNameChanged(false);
            }
        }

    }, [middleName]);

    useEffect(() => {
        if (contentItem) {

            if (contentItem.lastName !== lastName) {
                setLastNameChanged(true);
            } else {
                setLastNameChanged(false);
            }
        }

    }, [lastName]);

    useEffect(() => {
        if (contentItem) {

            if (contentItem.email !== email) {
                setEmailChanged(true);
            } else {
                setEmailChanged(false);
            }
        }

    }, [email]);

    useEffect(() => {
        if (contentItem) {

            if (contentItem.phone !== phone) {
                setPhoneChanged(true);
            } else {
                setPhoneChanged(false);
            }
        }

    }, [phone]);

    useEffect(() => {
        if (contentItem) {

            if (contentItem.position !== position) {
                setPositionChanged(true);
            } else {
                setPositionChanged(false);
            }
        }

    }, [position]);

    useEffect(() => {
        if (contentItem) {

            if (contentItem.selectedJobType !== selectedJobType) {
                setJobTypeChanged(true);
            } else {
                setJobTypeChanged(false);
            }
        }

    }, [selectedJobType]);

    useEffect(() => {
        if (contentItem) {

            if (contentItem.salary !== salary) {
                setSalaryChanged(true);
            } else {
                setSalaryChanged(false);
            }
        }

    }, [salary]);

    useEffect(() => {
        if (contentItem) {
            if (contentItem.office !== office) {
                setOfficeChanged(true);

            } else {
                setOfficeChanged(false);
            }
        }

    }, [office]);

    useEffect(() => {
        if (contentItem) {
            if (contentItem.office !== office) {
                setOfficeChanged(true);

            } else {
                setOfficeChanged(false);
            }
        }

    }, [hubInstructor]);

    useEffect(() => {
        if (contentItem) {
            if (contentItem.office !== office) {
                setOfficeChanged(true);

            } else {
                setOfficeChanged(false);
            }
        }

    }, [schoolInstructor]);

    useEffect(() => {
        if (contentItem) {
            if (contentItem.dateOfBirth !== dateOfBirth) {
                setDateOfBirthChanged(true);

            } else {
                setDateOfBirthChanged(false);
            }
        }

    }, [dateOfBirth]);

    useEffect(() => {
        if (contentItem) {
            if (contentItem.sickLeave !== sickLeave) {
                setSickLeaveChanged(true);

            } else {
                setSickLeaveChanged(false);
            }
        }

    }, [sickLeave]);

    useEffect(() => {
        if (contentItem) {
            if (contentItem.dateEmployed !== dateEmployed) {
                setDateEmployedChanged(true);

            } else {
                setDateEmployedChanged(false);
            }
        }

    }, [dateEmployed]);

    useEffect(() => {
        if (contentItem) {
            if (contentItem.bankName !== bankName) {
                setBankNameChanged(true);

            } else {
                setBankNameChanged(false);
            }
        }

    }, [bankName]);

    useEffect(() => {
        if (contentItem) {
            if (contentItem.accountNumber !== accountNumber) {
                setAccountNumberChanged(true);

            } else {
                setAccountNumberChanged(false);
            }
        }

    }, [accountNumber]);

    useEffect(() => {
        if (contentItem) {
            if (contentItem.homeAddress !== homeAddress) {
                setHomeAddressChanged(true);

            } else {
                setHomeAddressChanged(false);
            }
        }

    }, [homeAddress]);

    useEffect(() => {
        if (contentItem) {
            if (contentItem.nextOfKinFullName !== nextOfKinFullName) {
                setNextOfKinFullNameChanged(true);

            } else {
                setNextOfKinFullNameChanged(false);
            }
        }

    }, [nextOfKinFullName]);

    useEffect(() => {
        if (contentItem) {
            if (contentItem.nextOfKinPhoneNumber !== nextOfKinPhoneNumber) {
                setNextOfKinPhoneNumberChanged(true);

            } else {
                setNextOfKinPhoneNumberChanged(false);
            }
        }

    }, [nextOfKinPhoneNumber]);

    useEffect(() => {
        if (contentItem) {
            if (contentItem.nextOfKinAddress !== nextOfKinAddress) {
                setNextOfKinAddressChanged(true);

            } else {
                setNextOfKinAddressChanged(false);
            }
        }

    }, [nextOfKinAddress]);




    const EditEmailButton = () => {
        setDisplayEditEmail(true)
        setDisplayEditTitle(false)
        setDisplayEditFirstName(false)
        setDisplayEditMiddleName(false)
        setDisplayEditLastName(false)
        setDisplayEditPhone(false)
        setDisplayEditPosition(false)
        setDisplayEditJobType(false)
        setDisplayEditSalary(false)
        setDisplayEditOffice(false)
        setDisplayEditHubInstructor(false)
        setDisplayEditSchoolInstructor(false)
        setDisplayEditDateOfBirth(false)
        setDisplayEditSickLeave(false)
        setDisplayEditDateEmployed(false)
        setDisplayEditBankName(false)
        setDisplayEditAccountNumber(false)
        setDisplayEditHomeAddress(false)
        setDisplayEditNextOfKinFullName(false)
        setDisplayEditNextOfKinPhoneNumber(false)
        setDisplayEditNextOfKinAddress(false)


        setEmailHovered(false)
        setTitleHovered(false)
        setFirstNameHovered(false)
        setMiddleNameHovered(false)
        setLastNameHovered(false)
        setPhoneHovered(false)
        setPositionHovered(false)
        setJobTypeHovered(false)
        setSalaryHovered(false)
        setOfficeHovered(false)
        setHubInstructorHovered(false)
        setSchoolInstructorHovered(false)
        setDateOfBirthHovered(false)
        setSickLeaveHovered(false)
        setDateEmployedHovered(false)
        setBankNameHovered(false)
        setAccountNumberHovered(false)
        setHomeAddressHovered(false)
        setNextOfKinFullNameHovered(false)
        setNextOfKinPhoneNumberHovered(false)
        setNextOfKinAddressHovered(false)



    }
    const EditFirstNameButton = () => {
        setDisplayEditEmail(false)
        setDisplayEditTitle(false)
        setDisplayEditFirstName(true)
        setDisplayEditMiddleName(false)
        setDisplayEditLastName(false)
        setDisplayEditPhone(false)
        setDisplayEditPosition(false)
        setDisplayEditJobType(false)
        setDisplayEditSalary(false)
        setDisplayEditOffice(false)
        setDisplayEditHubInstructor(false)
        setDisplayEditSchoolInstructor(false)
        setDisplayEditDateOfBirth(false)
        setDisplayEditSickLeave(false)
        setDisplayEditDateEmployed(false)
        setDisplayEditBankName(false)
        setDisplayEditAccountNumber(false)
        setDisplayEditHomeAddress(false)
        setDisplayEditNextOfKinFullName(false)
        setDisplayEditNextOfKinPhoneNumber(false)
        setDisplayEditNextOfKinAddress(false)

        setEmailHovered(false)
        setTitleHovered(false)
        setMiddleNameHovered(false)
        setLastNameHovered(false)
        setPhoneHovered(false)
        setPositionHovered(false)
        setJobTypeHovered(false)
        setSalaryHovered(false)
        setOfficeHovered(false)
        setHubInstructorHovered(false)
        setSchoolInstructorHovered(false)
        setDateOfBirthHovered(false)
        setSickLeaveHovered(false)
        setDateEmployedHovered(false)
        setBankNameHovered(false)
        setAccountNumberHovered(false)
        setHomeAddressHovered(false)
        setNextOfKinFullNameHovered(false)
        setNextOfKinPhoneNumberHovered(false)
        setNextOfKinAddressHovered(false)
    }
    const EditTitleButton = () => {
        setDisplayEditTitle(true)
        setDisplayEditEmail(false)
        setDisplayEditFirstName(false)
        setDisplayEditMiddleName(false)
        setDisplayEditLastName(false)
        setDisplayEditPhone(false)
        setDisplayEditPosition(false)
        setDisplayEditJobType(false)
        setDisplayEditSalary(false)
        setDisplayEditOffice(false)
        setDisplayEditHubInstructor(false)
        setDisplayEditSchoolInstructor(false)
        setDisplayEditDateOfBirth(false)
        setDisplayEditSickLeave(false)
        setDisplayEditDateEmployed(false)
        setDisplayEditBankName(false)
        setDisplayEditAccountNumber(false)
        setDisplayEditHomeAddress(false)
        setDisplayEditNextOfKinFullName(false)
        setDisplayEditNextOfKinPhoneNumber(false)
        setDisplayEditNextOfKinAddress(false)


        setEmailHovered(false)
        setFirstNameHovered(false)
        setMiddleNameHovered(false)
        setLastNameHovered(false)
        setPhoneHovered(false)
        setPositionHovered(false)
        setJobTypeHovered(false)
        setSalaryHovered(false)
        setOfficeHovered(false)
        setHubInstructorHovered(false)
        setSchoolInstructorHovered(false)
        setDateOfBirthHovered(false)
        setSickLeaveHovered(false)
        setDateEmployedHovered(false)
        setBankNameHovered(false)
        setAccountNumberHovered(false)
        setHomeAddressHovered(false)
        setNextOfKinFullNameHovered(false)
        setNextOfKinPhoneNumberHovered(false)
        setNextOfKinAddressHovered(false)

    }
    const EditMiddleNameButton = () => {
        setDisplayEditMiddleName(true)
        setDisplayEditEmail(false)
        setDisplayEditTitle(false)
        setDisplayEditFirstName(false)
        setDisplayEditLastName(false)
        setDisplayEditPhone(false)
        setDisplayEditPosition(false)
        setDisplayEditJobType(false)
        setDisplayEditSalary(false)
        setDisplayEditOffice(false)
        setDisplayEditHubInstructor(false)
        setDisplayEditSchoolInstructor(false)
        setDisplayEditDateOfBirth(false)
        setDisplayEditSickLeave(false)
        setDisplayEditDateEmployed(false)
        setDisplayEditBankName(false)
        setDisplayEditAccountNumber(false)
        setDisplayEditHomeAddress(false)
        setDisplayEditNextOfKinFullName(false)
        setDisplayEditNextOfKinPhoneNumber(false)
        setDisplayEditNextOfKinAddress(false)


        setEmailHovered(false)
        setTitleHovered(false)
        setFirstNameHovered(false)
        setLastNameHovered(false)
        setPhoneHovered(false)
        setPositionHovered(false)
        setJobTypeHovered(false)
        setSalaryHovered(false)
        setOfficeHovered(false)
        setHubInstructorHovered(false)
        setSchoolInstructorHovered(false)
        setDateOfBirthHovered(false)
        setSickLeaveHovered(false)
        setDateEmployedHovered(false)
        setBankNameHovered(false)
        setAccountNumberHovered(false)
        setHomeAddressHovered(false)
        setNextOfKinFullNameHovered(false)
        setNextOfKinPhoneNumberHovered(false)
        setNextOfKinAddressHovered(false)
    }
    const EditLastNameButton = () => {
        setDisplayEditLastName(true)
        setDisplayEditEmail(false)
        setDisplayEditTitle(false)
        setDisplayEditFirstName(false)
        setDisplayEditMiddleName(false)
        setDisplayEditPhone(false)
        setDisplayEditPosition(false)
        setDisplayEditJobType(false)
        setDisplayEditSalary(false)
        setDisplayEditOffice(false)
        setDisplayEditHubInstructor(false)
        setDisplayEditSchoolInstructor(false)
        setDisplayEditDateOfBirth(false)
        setDisplayEditSickLeave(false)
        setDisplayEditDateEmployed(false)
        setDisplayEditBankName(false)
        setDisplayEditAccountNumber(false)
        setDisplayEditHomeAddress(false)
        setDisplayEditNextOfKinFullName(false)
        setDisplayEditNextOfKinPhoneNumber(false)
        setDisplayEditNextOfKinAddress(false)


        setEmailHovered(false)
        setTitleHovered(false)
        setFirstNameHovered(false)
        setMiddleNameHovered(false)
        setPhoneHovered(false)
        setPositionHovered(false)
        setJobTypeHovered(false)
        setSalaryHovered(false)
        setOfficeHovered(false)
        setHubInstructorHovered(false)
        setSchoolInstructorHovered(false)
        setDateOfBirthHovered(false)
        setSickLeaveHovered(false)
        setDateEmployedHovered(false)
        setBankNameHovered(false)
        setAccountNumberHovered(false)
        setHomeAddressHovered(false)
        setNextOfKinFullNameHovered(false)
        setNextOfKinPhoneNumberHovered(false)
        setNextOfKinAddressHovered(false)
    }
    const EditPhoneButton = () => {
        setDisplayEditPhone(true)
        setDisplayEditEmail(false)
        setDisplayEditTitle(false)
        setDisplayEditFirstName(false)
        setDisplayEditMiddleName(false)
        setDisplayEditLastName(false)
        setDisplayEditPosition(false)
        setDisplayEditJobType(false)
        setDisplayEditSalary(false)
        setDisplayEditOffice(false)
        setDisplayEditHubInstructor(false)
        setDisplayEditSchoolInstructor(false)
        setDisplayEditDateOfBirth(false)
        setDisplayEditSickLeave(false)
        setDisplayEditDateEmployed(false)
        setDisplayEditBankName(false)
        setDisplayEditAccountNumber(false)
        setDisplayEditHomeAddress(false)
        setDisplayEditNextOfKinFullName(false)
        setDisplayEditNextOfKinPhoneNumber(false)
        setDisplayEditNextOfKinAddress(false)


        setEmailHovered(false)
        setTitleHovered(false)
        setFirstNameHovered(false)
        setMiddleNameHovered(false)
        setLastNameHovered(false)
        setPositionHovered(false)
        setJobTypeHovered(false)
        setSalaryHovered(false)
        setOfficeHovered(false)
        setHubInstructorHovered(false)
        setSchoolInstructorHovered(false)
        setDateOfBirthHovered(false)
        setSickLeaveHovered(false)
        setDateEmployedHovered(false)
        setBankNameHovered(false)
        setAccountNumberHovered(false)
        setHomeAddressHovered(false)
        setNextOfKinFullNameHovered(false)
        setNextOfKinPhoneNumberHovered(false)
        setNextOfKinAddressHovered(false)
    }

    const EditPositionButton = () => {
        setDisplayEditPosition(true)
        setDisplayEditEmail(false)
        setDisplayEditTitle(false)
        setDisplayEditFirstName(false)
        setDisplayEditMiddleName(false)
        setDisplayEditLastName(false)
        setDisplayEditPhone(false)
        setDisplayEditJobType(false)
        setDisplayEditSalary(false)
        setDisplayEditOffice(false)
        setDisplayEditHubInstructor(false)
        setDisplayEditSchoolInstructor(false)
        setDisplayEditDateOfBirth(false)
        setDisplayEditSickLeave(false)
        setDisplayEditDateEmployed(false)
        setDisplayEditBankName(false)
        setDisplayEditAccountNumber(false)
        setDisplayEditHomeAddress(false)
        setDisplayEditNextOfKinFullName(false)
        setDisplayEditNextOfKinPhoneNumber(false)
        setDisplayEditNextOfKinAddress(false)


        setEmailHovered(false)
        setTitleHovered(false)
        setFirstNameHovered(false)
        setMiddleNameHovered(false)
        setLastNameHovered(false)
        setPhoneHovered(false)
        setJobTypeHovered(false)
        setSalaryHovered(false)
        setOfficeHovered(false)
        setHubInstructorHovered(false)
        setSchoolInstructorHovered(false)
        setDateOfBirthHovered(false)
        setSickLeaveHovered(false)
        setDateEmployedHovered(false)
        setBankNameHovered(false)
        setAccountNumberHovered(false)
        setHomeAddressHovered(false)
        setNextOfKinFullNameHovered(false)
        setNextOfKinPhoneNumberHovered(false)
        setNextOfKinAddressHovered(false)
    }

    const EditJobTypeButton = () => {
        setDisplayEditJobType(true)
        setDisplayEditEmail(false)
        setDisplayEditTitle(false)
        setDisplayEditFirstName(false)
        setDisplayEditMiddleName(false)
        setDisplayEditLastName(false)
        setDisplayEditPhone(false)
        setDisplayEditPosition(false)
        setDisplayEditSalary(false)
        setDisplayEditOffice(false)
        setDisplayEditHubInstructor(false)
        setDisplayEditSchoolInstructor(false)
        setDisplayEditDateOfBirth(false)
        setDisplayEditSickLeave(false)
        setDisplayEditDateEmployed(false)
        setDisplayEditBankName(false)
        setDisplayEditAccountNumber(false)
        setDisplayEditHomeAddress(false)
        setDisplayEditNextOfKinFullName(false)
        setDisplayEditNextOfKinPhoneNumber(false)
        setDisplayEditNextOfKinAddress(false)


        setEmailHovered(false)
        setTitleHovered(false)
        setFirstNameHovered(false)
        setMiddleNameHovered(false)
        setLastNameHovered(false)
        setPhoneHovered(false)
        setPositionHovered(false)
        setSalaryHovered(false)
        setOfficeHovered(false)
        setHubInstructorHovered(false)
        setSchoolInstructorHovered(false)
        setDateOfBirthHovered(false)
        setSickLeaveHovered(false)
        setDateEmployedHovered(false)
        setBankNameHovered(false)
        setAccountNumberHovered(false)
        setHomeAddressHovered(false)
        setNextOfKinFullNameHovered(false)
        setNextOfKinPhoneNumberHovered(false)
        setNextOfKinAddressHovered(false)
    }


    const EditSalaryButton = () => {
        setDisplayEditSalary(true)
        setDisplayEditEmail(false)
        setDisplayEditTitle(false)
        setDisplayEditFirstName(false)
        setDisplayEditMiddleName(false)
        setDisplayEditLastName(false)
        setDisplayEditPhone(false)
        setDisplayEditPosition(false)
        setDisplayEditJobType(false)
        setDisplayEditOffice(false)
        setDisplayEditHubInstructor(false)
        setDisplayEditSchoolInstructor(false)
        setDisplayEditDateOfBirth(false)
        setDisplayEditSickLeave(false)
        setDisplayEditDateEmployed(false)
        setDisplayEditBankName(false)
        setDisplayEditAccountNumber(false)
        setDisplayEditHomeAddress(false)
        setDisplayEditNextOfKinFullName(false)
        setDisplayEditNextOfKinPhoneNumber(false)
        setDisplayEditNextOfKinAddress(false)


        setEmailHovered(false)
        setTitleHovered(false)
        setFirstNameHovered(false)
        setMiddleNameHovered(false)
        setLastNameHovered(false)
        setPhoneHovered(false)
        setPositionHovered(false)
        setJobTypeHovered(false)
        setOfficeHovered(false)
        setHubInstructorHovered(false)
        setSchoolInstructorHovered(false)
        setDateOfBirthHovered(false)
        setSickLeaveHovered(false)
        setDateEmployedHovered(false)
        setBankNameHovered(false)
        setAccountNumberHovered(false)
        setHomeAddressHovered(false)
        setNextOfKinFullNameHovered(false)
        setNextOfKinPhoneNumberHovered(false)
        setNextOfKinAddressHovered(false)
    }


    const EditOfficeButton = () => {
        setDisplayEditOffice(true)
        setDisplayEditEmail(false)
        setDisplayEditTitle(false)
        setDisplayEditFirstName(false)
        setDisplayEditMiddleName(false)
        setDisplayEditLastName(false)
        setDisplayEditPhone(false)
        setDisplayEditPosition(false)
        setDisplayEditJobType(false)
        setDisplayEditSalary(false)
        setDisplayEditHubInstructor(false)
        setDisplayEditSchoolInstructor(false)
        setDisplayEditDateOfBirth(false)
        setDisplayEditSickLeave(false)
        setDisplayEditDateEmployed(false)
        setDisplayEditBankName(false)
        setDisplayEditAccountNumber(false)
        setDisplayEditHomeAddress(false)
        setDisplayEditNextOfKinFullName(false)
        setDisplayEditNextOfKinPhoneNumber(false)
        setDisplayEditNextOfKinAddress(false)


        setEmailHovered(false)
        setTitleHovered(false)
        setFirstNameHovered(false)
        setMiddleNameHovered(false)
        setLastNameHovered(false)
        setPhoneHovered(false)
        setPositionHovered(false)
        setJobTypeHovered(false)
        setSalaryHovered(false)
        setHubInstructorHovered(false)
        setSchoolInstructorHovered(false)
        setDateOfBirthHovered(false)
        setSickLeaveHovered(false)
        setDateEmployedHovered(false)
        setBankNameHovered(false)
        setAccountNumberHovered(false)
        setHomeAddressHovered(false)
        setNextOfKinFullNameHovered(false)
        setNextOfKinPhoneNumberHovered(false)
        setNextOfKinAddressHovered(false)
    }

    const EditHubInstructorButton = () => {
        setDisplayEditHubInstructor(true)
        setDisplayEditEmail(false)
        setDisplayEditTitle(false)
        setDisplayEditFirstName(false)
        setDisplayEditMiddleName(false)
        setDisplayEditLastName(false)
        setDisplayEditPhone(false)
        setDisplayEditPosition(false)
        setDisplayEditJobType(false)
        setDisplayEditSalary(false)
        setDisplayEditOffice(false)
        setDisplayEditSchoolInstructor(false)
        setDisplayEditDateOfBirth(false)
        setDisplayEditSickLeave(false)
        setDisplayEditDateEmployed(false)
        setDisplayEditBankName(false)
        setDisplayEditAccountNumber(false)
        setDisplayEditHomeAddress(false)
        setDisplayEditNextOfKinFullName(false)
        setDisplayEditNextOfKinPhoneNumber(false)
        setDisplayEditNextOfKinAddress(false)


        setEmailHovered(false)
        setTitleHovered(false)
        setFirstNameHovered(false)
        setMiddleNameHovered(false)
        setLastNameHovered(false)
        setPhoneHovered(false)
        setPositionHovered(false)
        setJobTypeHovered(false)
        setSalaryHovered(false)
        setOfficeHovered(false)
        setSchoolInstructorHovered(false)
        setDateOfBirthHovered(false)
        setSickLeaveHovered(false)
        setDateEmployedHovered(false)
        setBankNameHovered(false)
        setAccountNumberHovered(false)
        setHomeAddressHovered(false)
        setNextOfKinFullNameHovered(false)
        setNextOfKinPhoneNumberHovered(false)
        setNextOfKinAddressHovered(false)
    }

    const EditSchoolInstructorButton = () => {
        setDisplayEditSchoolInstructor(true)
        setDisplayEditEmail(false)
        setDisplayEditTitle(false)
        setDisplayEditFirstName(false)
        setDisplayEditMiddleName(false)
        setDisplayEditLastName(false)
        setDisplayEditPhone(false)
        setDisplayEditPosition(false)
        setDisplayEditJobType(false)
        setDisplayEditSalary(false)
        setDisplayEditOffice(false)
        setDisplayEditHubInstructor(false)
        setDisplayEditDateOfBirth(false)
        setDisplayEditSickLeave(false)
        setDisplayEditDateEmployed(false)
        setDisplayEditBankName(false)
        setDisplayEditAccountNumber(false)
        setDisplayEditHomeAddress(false)
        setDisplayEditNextOfKinFullName(false)
        setDisplayEditNextOfKinPhoneNumber(false)
        setDisplayEditNextOfKinAddress(false)


        setEmailHovered(false)
        setTitleHovered(false)
        setFirstNameHovered(false)
        setMiddleNameHovered(false)
        setLastNameHovered(false)
        setPhoneHovered(false)
        setPositionHovered(false)
        setJobTypeHovered(false)
        setSalaryHovered(false)
        setOfficeHovered(false)
        setHubInstructorHovered(false)
        setDateOfBirthHovered(false)
        setSickLeaveHovered(false)
        setDateEmployedHovered(false)
        setBankNameHovered(false)
        setAccountNumberHovered(false)
        setHomeAddressHovered(false)
        setNextOfKinFullNameHovered(false)
        setNextOfKinPhoneNumberHovered(false)
        setNextOfKinAddressHovered(false)
    }


    const EditDateOfBirthButton = () => {
        setDisplayEditDateOfBirth(true)
        setDisplayEditEmail(false)
        setDisplayEditTitle(false)
        setDisplayEditFirstName(false)
        setDisplayEditMiddleName(false)
        setDisplayEditLastName(false)
        setDisplayEditPhone(false)
        setDisplayEditPosition(false)
        setDisplayEditJobType(false)
        setDisplayEditSalary(false)
        setDisplayEditOffice(false)
        setDisplayEditHubInstructor(false)
        setDisplayEditSchoolInstructor(false)
        setDisplayEditSickLeave(false)
        setDisplayEditDateEmployed(false)
        setDisplayEditBankName(false)
        setDisplayEditAccountNumber(false)
        setDisplayEditHomeAddress(false)
        setDisplayEditNextOfKinFullName(false)
        setDisplayEditNextOfKinPhoneNumber(false)
        setDisplayEditNextOfKinAddress(false)


        setEmailHovered(false)
        setTitleHovered(false)
        setFirstNameHovered(false)
        setMiddleNameHovered(false)
        setLastNameHovered(false)
        setPhoneHovered(false)
        setPositionHovered(false)
        setJobTypeHovered(false)
        setSalaryHovered(false)
        setOfficeHovered(false)
        setHubInstructorHovered(false)
        setSchoolInstructorHovered(false)
        setSickLeaveHovered(false)
        setDateEmployedHovered(false)
        setBankNameHovered(false)
        setAccountNumberHovered(false)
        setHomeAddressHovered(false)
        setNextOfKinFullNameHovered(false)
        setNextOfKinPhoneNumberHovered(false)
        setNextOfKinAddressHovered(false)
    }


    const EditSickLeaveButton = () => {
        setDisplayEditSickLeave(true)
        setDisplayEditEmail(false)
        setDisplayEditTitle(false)
        setDisplayEditFirstName(false)
        setDisplayEditMiddleName(false)
        setDisplayEditLastName(false)
        setDisplayEditPhone(false)
        setDisplayEditPosition(false)
        setDisplayEditJobType(false)
        setDisplayEditSalary(false)
        setDisplayEditOffice(false)
        setDisplayEditHubInstructor(false)
        setDisplayEditSchoolInstructor(false)
        setDisplayEditDateOfBirth(false)
        setDisplayEditDateEmployed(false)
        setDisplayEditBankName(false)
        setDisplayEditAccountNumber(false)
        setDisplayEditHomeAddress(false)
        setDisplayEditNextOfKinFullName(false)
        setDisplayEditNextOfKinPhoneNumber(false)
        setDisplayEditNextOfKinAddress(false)


        setEmailHovered(false)
        setTitleHovered(false)
        setFirstNameHovered(false)
        setMiddleNameHovered(false)
        setLastNameHovered(false)
        setPhoneHovered(false)
        setPositionHovered(false)
        setJobTypeHovered(false)
        setSalaryHovered(false)
        setOfficeHovered(false)
        setHubInstructorHovered(false)
        setSchoolInstructorHovered(false)
        setDateOfBirthHovered(false)
        setDateEmployedHovered(false)
        setBankNameHovered(false)
        setAccountNumberHovered(false)
        setHomeAddressHovered(false)
        setNextOfKinFullNameHovered(false)
        setNextOfKinPhoneNumberHovered(false)
        setNextOfKinAddressHovered(false)
    }


    const EditDateEmployedButton = () => {
        setDisplayEditDateEmployed(true)
        setDisplayEditEmail(false)
        setDisplayEditTitle(false)
        setDisplayEditFirstName(false)
        setDisplayEditMiddleName(false)
        setDisplayEditLastName(false)
        setDisplayEditPhone(false)
        setDisplayEditPosition(false)
        setDisplayEditJobType(false)
        setDisplayEditSalary(false)
        setDisplayEditOffice(false)
        setDisplayEditHubInstructor(false)
        setDisplayEditSchoolInstructor(false)
        setDisplayEditDateOfBirth(false)
        setDisplayEditSickLeave(false)
        setDisplayEditBankName(false)
        setDisplayEditAccountNumber(false)
        setDisplayEditHomeAddress(false)
        setDisplayEditNextOfKinFullName(false)
        setDisplayEditNextOfKinPhoneNumber(false)
        setDisplayEditNextOfKinAddress(false)


        setEmailHovered(false)
        setTitleHovered(false)
        setFirstNameHovered(false)
        setMiddleNameHovered(false)
        setLastNameHovered(false)
        setPhoneHovered(false)
        setPositionHovered(false)
        setJobTypeHovered(false)
        setSalaryHovered(false)
        setOfficeHovered(false)
        setHubInstructorHovered(false)
        setSchoolInstructorHovered(false)
        setDateOfBirthHovered(false)
        setSickLeaveHovered(false)
        setBankNameHovered(false)
        setAccountNumberHovered(false)
        setHomeAddressHovered(false)
        setNextOfKinFullNameHovered(false)
        setNextOfKinPhoneNumberHovered(false)
        setNextOfKinAddressHovered(false)
    }


    const EditBankNameButton = () => {
        setDisplayEditBankName(true)
        setDisplayEditEmail(false)
        setDisplayEditTitle(false)
        setDisplayEditFirstName(false)
        setDisplayEditMiddleName(false)
        setDisplayEditLastName(false)
        setDisplayEditPhone(false)
        setDisplayEditPosition(false)
        setDisplayEditJobType(false)
        setDisplayEditSalary(false)
        setDisplayEditOffice(false)
        setDisplayEditHubInstructor(false)
        setDisplayEditSchoolInstructor(false)
        setDisplayEditDateOfBirth(false)
        setDisplayEditSickLeave(false)
        setDisplayEditDateEmployed(false)
        setDisplayEditAccountNumber(false)
        setDisplayEditHomeAddress(false)
        setDisplayEditNextOfKinFullName(false)
        setDisplayEditNextOfKinPhoneNumber(false)
        setDisplayEditNextOfKinAddress(false)


        setEmailHovered(false)
        setTitleHovered(false)
        setFirstNameHovered(false)
        setMiddleNameHovered(false)
        setLastNameHovered(false)
        setPhoneHovered(false)
        setPositionHovered(false)
        setJobTypeHovered(false)
        setSalaryHovered(false)
        setOfficeHovered(false)
        setHubInstructorHovered(false)
        setSchoolInstructorHovered(false)
        setDateOfBirthHovered(false)
        setSickLeaveHovered(false)
        setDateEmployedHovered(false)
        setAccountNumberHovered(false)
        setHomeAddressHovered(false)
        setNextOfKinFullNameHovered(false)
        setNextOfKinPhoneNumberHovered(false)
        setNextOfKinAddressHovered(false)
    }

    const EditAccountNumberButton = () => {
        setDisplayEditAccountNumber(true)
        setDisplayEditEmail(false)
        setDisplayEditTitle(false)
        setDisplayEditFirstName(false)
        setDisplayEditMiddleName(false)
        setDisplayEditLastName(false)
        setDisplayEditPhone(false)
        setDisplayEditPosition(false)
        setDisplayEditJobType(false)
        setDisplayEditSalary(false)
        setDisplayEditOffice(false)
        setDisplayEditHubInstructor(false)
        setDisplayEditSchoolInstructor(false)
        setDisplayEditDateOfBirth(false)
        setDisplayEditSickLeave(false)
        setDisplayEditDateEmployed(false)
        setDisplayEditBankName(false)
        setDisplayEditHomeAddress(false)
        setDisplayEditNextOfKinFullName(false)
        setDisplayEditNextOfKinPhoneNumber(false)
        setDisplayEditNextOfKinAddress(false)


        setEmailHovered(false)
        setTitleHovered(false)
        setFirstNameHovered(false)
        setMiddleNameHovered(false)
        setLastNameHovered(false)
        setPhoneHovered(false)
        setPositionHovered(false)
        setJobTypeHovered(false)
        setSalaryHovered(false)
        setOfficeHovered(false)
        setHubInstructorHovered(false)
        setSchoolInstructorHovered(false)
        setDateOfBirthHovered(false)
        setSickLeaveHovered(false)
        setDateEmployedHovered(false)
        setBankNameHovered(false)
        setHomeAddressHovered(false)
        setNextOfKinFullNameHovered(false)
        setNextOfKinPhoneNumberHovered(false)
        setNextOfKinAddressHovered(false)
    }
    const EditHomeAddressButton = () => {
        setDisplayEditHomeAddress(true)
        setDisplayEditEmail(false)
        setDisplayEditTitle(false)
        setDisplayEditFirstName(false)
        setDisplayEditMiddleName(false)
        setDisplayEditLastName(false)
        setDisplayEditPhone(false)
        setDisplayEditPosition(false)
        setDisplayEditJobType(false)
        setDisplayEditSalary(false)
        setDisplayEditOffice(false)
        setDisplayEditHubInstructor(false)
        setDisplayEditSchoolInstructor(false)
        setDisplayEditDateOfBirth(false)
        setDisplayEditSickLeave(false)
        setDisplayEditDateEmployed(false)
        setDisplayEditBankName(false)
        setDisplayEditAccountNumber(false)
        setDisplayEditNextOfKinFullName(false)
        setDisplayEditNextOfKinPhoneNumber(false)
        setDisplayEditNextOfKinAddress(false)


        setEmailHovered(false)
        setTitleHovered(false)
        setFirstNameHovered(false)
        setMiddleNameHovered(false)
        setLastNameHovered(false)
        setPhoneHovered(false)
        setPositionHovered(false)
        setJobTypeHovered(false)
        setSalaryHovered(false)
        setOfficeHovered(false)
        setHubInstructorHovered(false)
        setSchoolInstructorHovered(false)
        setDateOfBirthHovered(false)
        setSickLeaveHovered(false)
        setDateEmployedHovered(false)
        setBankNameHovered(false)
        setAccountNumberHovered(false)
        setNextOfKinFullNameHovered(false)
        setNextOfKinPhoneNumberHovered(false)
        setNextOfKinAddressHovered(false)
    }

    const EditNextOfKinFullNameButton = () => {
        setDisplayEditNextOfKinFullName(true)
        setDisplayEditEmail(false)
        setDisplayEditTitle(false)
        setDisplayEditFirstName(false)
        setDisplayEditMiddleName(false)
        setDisplayEditLastName(false)
        setDisplayEditPhone(false)
        setDisplayEditPosition(false)
        setDisplayEditJobType(false)
        setDisplayEditSalary(false)
        setDisplayEditOffice(false)
        setDisplayEditHubInstructor(false)
        setDisplayEditSchoolInstructor(false)
        setDisplayEditDateOfBirth(false)
        setDisplayEditSickLeave(false)
        setDisplayEditDateEmployed(false)
        setDisplayEditBankName(false)
        setDisplayEditAccountNumber(false)
        setDisplayEditHomeAddress(false)
        setDisplayEditNextOfKinPhoneNumber(false)
        setDisplayEditNextOfKinAddress(false)



        setEmailHovered(false)
        setTitleHovered(false)
        setFirstNameHovered(false)
        setMiddleNameHovered(false)
        setLastNameHovered(false)
        setPhoneHovered(false)
        setPositionHovered(false)
        setJobTypeHovered(false)
        setSalaryHovered(false)
        setOfficeHovered(false)
        setHubInstructorHovered(false)
        setSchoolInstructorHovered(false)
        setDateOfBirthHovered(false)
        setSickLeaveHovered(false)
        setDateEmployedHovered(false)
        setBankNameHovered(false)
        setAccountNumberHovered(false)
        setHomeAddressHovered(false)
        setNextOfKinPhoneNumberHovered(false)
        setNextOfKinAddressHovered(false)
    }

    const EditNextOfKinPhoneNumberButton = () => {
        setDisplayEditNextOfKinPhoneNumber(true)
        setDisplayEditEmail(false)
        setDisplayEditTitle(false)
        setDisplayEditFirstName(false)
        setDisplayEditMiddleName(false)
        setDisplayEditLastName(false)
        setDisplayEditPhone(false)
        setDisplayEditPosition(false)
        setDisplayEditJobType(false)
        setDisplayEditSalary(false)
        setDisplayEditOffice(false)
        setDisplayEditHubInstructor(false)
        setDisplayEditSchoolInstructor(false)
        setDisplayEditDateOfBirth(false)
        setDisplayEditSickLeave(false)
        setDisplayEditDateEmployed(false)
        setDisplayEditBankName(false)
        setDisplayEditAccountNumber(false)
        setDisplayEditHomeAddress(false)
        setDisplayEditNextOfKinFullName(false)
        setDisplayEditNextOfKinAddress(false)


        setEmailHovered(false)
        setTitleHovered(false)
        setFirstNameHovered(false)
        setMiddleNameHovered(false)
        setLastNameHovered(false)
        setPhoneHovered(false)
        setPositionHovered(false)
        setJobTypeHovered(false)
        setSalaryHovered(false)
        setOfficeHovered(false)
        setHubInstructorHovered(false)
        setSchoolInstructorHovered(false)
        setDateOfBirthHovered(false)
        setSickLeaveHovered(false)
        setDateEmployedHovered(false)
        setBankNameHovered(false)
        setAccountNumberHovered(false)
        setHomeAddressHovered(false)
        setNextOfKinFullNameHovered(false)
        setNextOfKinAddressHovered(false)
    }
    const EditNextOfKinAddressButton = () => {
        setDisplayEditNextOfKinAddress(true)
        setDisplayEditEmail(false)
        setDisplayEditTitle(false)
        setDisplayEditFirstName(false)
        setDisplayEditMiddleName(false)
        setDisplayEditLastName(false)
        setDisplayEditPhone(false)
        setDisplayEditPosition(false)
        setDisplayEditJobType(false)
        setDisplayEditSalary(false)
        setDisplayEditOffice(false)
        setDisplayEditHubInstructor(false)
        setDisplayEditSchoolInstructor(false)
        setDisplayEditDateOfBirth(false)
        setDisplayEditSickLeave(false)
        setDisplayEditDateEmployed(false)
        setDisplayEditBankName(false)
        setDisplayEditAccountNumber(false)
        setDisplayEditHomeAddress(false)
        setDisplayEditNextOfKinFullName(false)
        setDisplayEditNextOfKinPhoneNumber(false)


        setEmailHovered(false)
        setTitleHovered(false)
        setFirstNameHovered(false)
        setMiddleNameHovered(false)
        setLastNameHovered(false)
        setPhoneHovered(false)
        setPositionHovered(false)
        setJobTypeHovered(false)
        setSalaryHovered(false)
        setOfficeHovered(false)
        setHubInstructorHovered(false)
        setSchoolInstructorHovered(false)
        setDateOfBirthHovered(false)
        setSickLeaveHovered(false)
        setDateEmployedHovered(false)
        setBankNameHovered(false)
        setAccountNumberHovered(false)
        setHomeAddressHovered(false)
        setNextOfKinFullNameHovered(false)
        setNextOfKinPhoneNumberHovered(false)
    }


    const CancelEditTitle = () => {
        setDisplayEditTitle(false)
    }
    const CancelEditEmail = () => {
        setDisplayEditEmail(false)
    }
    const CancelEditPhone = () => {
        setDisplayEditPhone(false)
    }
    const CancelEditPosition = () => {
        setDisplayEditPosition(false)
    }
    const CancelEditJobType = () => {
        setDisplayEditJobType(false)
    }
    const CancelEditSalary = () => {
        setDisplayEditSalary(false)
    }
    const CancelEditOffice = () => {
        setDisplayEditOffice(false)
    }
    const CancelEditHubInstructor = () => {
        setDisplayEditHubInstructor(false)
    }
    const CancelEditSchoolInstructor = () => {
        setDisplayEditSchoolInstructor(false)
    }
    const CancelEditDateOfBirth = () => {
        setDisplayEditDateOfBirth(false)
    }
    const CancelEditSickLeave = () => {
        setDisplayEditSickLeave(false)
    }
    const CancelEditDateEmployed = () => {
        setDisplayEditDateEmployed(false)
    }
    const CancelEditBankName = () => {
        setDisplayEditBankName(false)
    }
    const CancelEditAccountNumber = () => {
        setDisplayEditAccountNumber(false)
    }
    const CancelEditHomeAddress = () => {
        setDisplayEditHomeAddress(false)
    }
    const CancelEditNextOfKinFullName = () => {
        setDisplayEditNextOfKinFullName(false)
    }
    const CancelEditNextOfKinPhoneNumber = () => {
        setDisplayEditNextOfKinPhoneNumber(false)
    }
    const CancelEditNextOfKinAddress = () => {
        setDisplayEditNextOfKinAddress(false)
    }
    const CancelEditFirstName = () => {
        setDisplayEditFirstName(false)
    }
    const CancelEditMiddleName = () => {
        setDisplayEditMiddleName(false)
    }
    const CancelEditLastName = () => {
        setDisplayEditLastName(false)
    }

    const SubmitEditedField = () => {
        setLoading(true)
        setReload(false)
        let adminEmail = JSON.parse(localStorage.getItem('User'));

        axios
            .put(`http://localhost:5000/api/auth/update-staff/${contentParam}`,
                {
                    adminEmail: adminEmail.email,
                    title: selectedTitle,
                    firstName: firstName,
                    middleName: middleName,
                    lastName: lastName,
                    email: email,
                    selectedJobType: selectedJobType,
                    dateOfBirth: dateOfBirth,
                    dateEmployed: dateEmployed,
                    position: position,
                    office: office,
                    hubInstructor: hubInstructor,
                    schoolInstructor: schoolInstructor,
                    hubCourse: selectedHubCourses,
                    schoolCourse: selectedSchoolCourses,
                    school: selectedSchools,
                    phone: phone,
                    salary: salary,
                    office: office,
                    sickLeave: sickLeave,
                    homeAddress: homeAddress,
                    bankName: bankName,
                    accountNumber: accountNumber,
                    nextOfKinFullName: nextOfKinFullName,
                    nextOfKinPhoneNumber: nextOfKinPhoneNumber,
                    nextOfKinAddress: nextOfKinAddress,
                    isVerified: a

                })
            .then((response) => {
                toastr.success(response.data.message);
                setReload(true)
            })
            .catch((error) => {
                toastr.error(error.response.data.message);
            })
            .finally(() => {
                setLoading(false);
                setEmailChanged(false);


            });
    };


    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }
        const myChartRef = chartRef.current.getContext('2d')
        const barColours = [

            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.5)'
        ];
        chartInstance.current = new Chart(myChartRef, {
            type: 'bar',
            data: {
                labels: ['Accessment', 'Punctuality', 'Attitude To Work', 'label 4', 'label 5'],
                datasets: [
                    {
                        label: "Data",
                        barThickness: 20,
                        data: [12, 50, 19, 80, 90],
                        backgroundColor: barColours
                    }
                ]
            },
            options: {
                indexAxis: 'y',
            }
        })
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy()
            }
        };
    }, [])




    useEffect(() => {
        if (contentItem) {

            if (isVerified == 0) {
                setChecked(false)
            } else {
                setChecked(true)
            }
        }

    }, [isVerified, refresh])




    const handleToggle = () => {
        if (isChecked === false) {
            setChecked(true);
            setVerify(true)

        } else {
            setChecked(false)
            setUnVerify(true)
        }
    };

    let a = isVerified
    const VerifyButton = () => {
        setVerify(false)
        SubmitEditedField(a = 1)

    }
    const UnVerifyButton = () => {
        setUnVerify(false)
        SubmitEditedField(a = 0)

    }



    const CancelSuspendDialog = () => {
        setUnVerify(false)
        setChecked(true)
    }
    const CancelVerifyDialog = () => {
        setVerify(false)
        setChecked(false)

    }

    return (
        <div className={unVerify ? "lg:ml-72 bg-[#C8D1DA] px-5 flex flex-col gap-3 fixed" : verify ? "lg:ml-72 bg-[#C8D1DA] px-5 flex flex-col gap-3 fixed" : "lg:ml-72 bg-[#C8D1DA] px-5 flex flex-col gap-3"}>

            {unVerify && (

                <div className=" z-50 fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">

                    <div className="bg-gray-100 w-[380px] h-[330px] rounded-lg px-4 ">

                        <div className="flex justify-end pt-2">
                            <button onClick={CancelSuspendDialog}>
                                <FaTimes size={18} />

                            </button>

                        </div>

                        <div className=" text-center text-[#134574] pt-4">
                            <div as="h3" className="text-base font-bold leading-6 text-red-600">
                                SUSPEND STAFF ACCOUNT?
                            </div>

                            <div className="mt-2 gap-2">
                                <p className='text-left underline'>Note</p>
                                <p className='text-left text-xs text-slate-500 pl-4'>1. Staff will not be able to log into his account or access any information from the system until he/she is re-verified by the admin</p>
                                <p className='text-left text-xs text-slate-500 pl-4'>2. All information and data of the staff will still be preserved</p>
                                {contentItem && (

                                    <p className="text-sm mt-4">Are you sure you want to suspend {contentItem.firstName} {contentItem.lastName}?</p>

                                )}


                            </div>
                            <div className="mt-2 grid gap-2 pt-2">


                                <button
                                    type='submit'
                                    className='py-1 text-center bg-red-600 px-1 rounded-lg text-white text-sm mt-4'
                                    onClick={UnVerifyButton}
                                >
                                    Suspend
                                </button>



                            </div>


                        </div>
                    </div>
                </div>
            )}

            {verify && (

                <div className=" z-50 fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">

                    <div className="bg-gray-100 w-[380px] h-[330px] rounded-lg px-4 ">

                        <div className="flex justify-end pt-2">
                            <button onClick={CancelVerifyDialog}>
                                <FaTimes size={18} />

                            </button>

                        </div>

                        <div className=" text-center text-[#134574] pt-4">
                            <div as="h3" className="text-base font-bold leading-6 text-green-600">
                                VERIFY STAFF ACCOUNT?
                            </div>

                            <div className="mt-2 gap-2">
                                <p className='text-left underline'>Note</p>
                                <p className='text-left text-xs text-slate-500 pl-4'>1. Staff will be able to log into his account or access information from the system</p>
                                <p className='text-left text-xs text-slate-500 pl-4'>2. All information and data of the staff will still be preserved</p>
                                {contentItem && (

                                    <p className="text-sm mt-4">Are you sure you want to verify {contentItem.firstName} {contentItem.lastName}?</p>

                                )}


                            </div>
                            <div className="mt-2 grid gap-2 pt-2">


                                <button
                                    type='submit'
                                    className='py-1 text-center bg-green-600 px-1 rounded-lg text-white text-sm mt-4'
                                    onClick={VerifyButton}
                                >
                                    Verify
                                </button>



                            </div>


                        </div>
                    </div>
                </div>
            )}



            {loading && (
                <div className=" z-50 absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <ReactLoading type={"bars"} color={"#ffffff"} height={100} width={100} />
                </div>
            )}

            <div className="w-full  bg-[#C8D1DA] px-6 flex flex-col gap-3">
                <div className='flex justify-between '>
                </div>
            </div>


            <div className='flex justify-between'>
                <p className='text-[#F13178] text-[20px] mt-2 font-extrabold' >Staff Details</p>
                {contentItem && (

                    <Link to={`/office-details/hr/${office}`} className='mt-2'><IoIosArrowRoundBack size={38} className="text-[#F13178]" /></Link>
                )}
            </div>

            <div className='border-[#F13178] border-b '></div>

            <div className='flex justify-end'>


                <button onClick={Refresh}>
                    <div className='flex gap-2 text-gray-500'>

                        <LuRefreshCcw size={24} />
                        <p className='hidden sm:block'>Refresh</p>
                    </div>
                </button>


            </div>


            <div className='grid md:grid-cols-2 gap-1'>

                <div className='bg-slate-100 w-full h-full pb-8 text-gray-600'>

                    {/* {contentItem && (

                        <div className='flex items-end justify-end px-2 text-white md:h-[52px] h-[45px] rounded-lg'>


                            <Link to={`/update-staff-details/hr/${contentItem._id}`} className='bg-[#F13178] md:text-[15px]  text-[11px] flex items-center gap-2 font-bold p-1 rounded-md'>
                                Edit
                                <MdOutlineEdit className=" text-white text-[15px] md:text-[20px] " />
                            </Link>
                        </div>
                    )} */}

                    {contentItem && (
                        <div>

                            <div className='flex flex-col items-center justify-center mt-4'>
                                <img src={profile} className='max-w-full max-h-full rounded-full' alt="Profile" />

                                <div className="gap-4">

                                    <p
                                        className='text-center text-xl pt-4 text-[#2b4053] font-extrabold'>
                                        {contentItem.title} {contentItem.firstName}  {contentItem.middleName}  {contentItem.lastName}
                                    </p>

                                </div>

                            </div>


                            <div className='pl-2'>

                                <div className="pt-8 flex">
                                    <p className="text-slate-600 font-extrabold px-2">Verified</p>
                                    <label className="flex items-center cursor-pointer">
                                        <div className="relative">
                                            <input
                                                type="checkbox"
                                                className="hidden"
                                                checked={isChecked}
                                                onChange={handleToggle}
                                            />
                                            <div
                                                className={`toggle-switch w-14 h-8 rounded-full shadow-inner transition duration-300 ease-in-out ${isChecked ? 'bg-green-500' : 'bg-gray-400'
                                                    }`}
                                            ></div>
                                            <div
                                                className={`toggle-knob bg-white w-6 h-6 rounded-full shadow-md absolute top-1 left-1 transition duration-300 ease-in-out transform ${isChecked ? 'translate-x-full' : ''
                                                    }`}
                                            ></div>
                                        </div>
                                    </label>
                                </div>

                                {!displayEditTitle ? (
                                    <div className="flex justify-between" onMouseEnter={() => setTitleHovered(true)} onMouseLeave={() => setTitleHovered(false)}>
                                        <div className='flex gap-1 px-2 pt-2' >
                                            <p className='font-extrabold'>Title: </p>
                                            {!editTitle ? (
                                                <p className=''>{contentItem.title}</p>

                                            ) : (
                                                <input value={contentItem.title} className="border border-slate-300 outline-none px-2" />

                                            )}
                                        </div>
                                        {titleHovered && (
                                            <div className="pr-4 pt-2">
                                                <button className="bg-slate-300 px-2 rounded-md" onClick={EditTitleButton}>
                                                    Edit
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="flex justify-between">
                                        <div className='flex gap-1 px-2 pt-2'>
                                            <p className='font-extrabold'>Title: </p>
                                            <select
                                                value={selectedTitle}
                                                onChange={(event) => setSelectedTitle(event.target.value)}
                                                className="border border-slate-300 outline-none px-2 rounded-md"
                                            >
                                                <option value="Mr">Mr</option>
                                                <option value="Mrs">Mrs</option>
                                                <option value="Miss">Miss</option>
                                                <option value="Master">Master</option>
                                            </select>
                                        </div>
                                        <div className="pr-4 pt-2">
                                            {!titleChanged ? (

                                                <div className="flex gap-1">
                                                    <div className="flex justify-center items-center text-red-600">
                                                        <button onClick={CancelEditTitle}>
                                                            <FaTimes size={18} />

                                                        </button>
                                                    </div>
                                                    <button className="bg-slate-300 px-2 rounded-md text-slate-400" onClick={SubmitEditedField} disabled={!titleChanged}> Save</button>
                                                </div>
                                            ) : (

                                                <button className="bg-slate-300 px-2 rounded-md text-slate-600" onClick={SubmitEditedField} disabled={!titleChanged}>
                                                    Save
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {!displayEditFirstName ? (
                                    <div className="flex justify-between" onMouseEnter={() => setFirstNameHovered(true)} onMouseLeave={() => setFirstNameHovered(false)}>
                                        <div className='flex gap-1 px-2 pt-2' >
                                            <p className='font-extrabold'>First Name: </p>
                                            {!editFirstName ? (
                                                <p className=''>{contentItem.firstName}</p>

                                            ) : (
                                                <input value={contentItem.firstName} className="border border-slate-300 outline-none px-2" />

                                            )}
                                        </div>
                                        {firstNameHovered && (
                                            <div className="pr-4 pt-2">
                                                <button className="bg-slate-300 px-2 rounded-md" onClick={EditFirstNameButton}>
                                                    Edit
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="flex justify-between">
                                        <div className='flex gap-1 px-2 pt-2'>
                                            <p className='font-extrabold'>First Name: </p>
                                            <input
                                                value={firstName}
                                                onChange={(event) => setFirstName(event.target.value)}
                                                className="border border-slate-300 outline-none px-2 rounded-md"
                                            />
                                        </div>
                                        <div className="pr-4 pt-2">
                                            {!firstNameChanged ? (

                                                <div className="flex gap-1">
                                                    <div className="flex justify-center items-center text-red-600">
                                                        <button onClick={CancelEditFirstName}>
                                                            <FaTimes size={18} />

                                                        </button>
                                                    </div>
                                                    <button className="bg-slate-300 px-2 rounded-md text-slate-400" onClick={SubmitEditedField} disabled={!firstNameChanged}> Save</button>
                                                </div>
                                            ) : (

                                                <button className="bg-slate-300 px-2 rounded-md text-slate-600" onClick={SubmitEditedField} disabled={!firstNameChanged}>
                                                    Save
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {!displayEditMiddleName ? (
                                    <div className="flex justify-between" onMouseEnter={() => setMiddleNameHovered(true)} onMouseLeave={() => setMiddleNameHovered(false)}>
                                        <div className='flex gap-1 px-2 pt-2' >
                                            <p className='font-extrabold'>Middle Name: </p>
                                            {!editMiddleName ? (
                                                <p className=''>{contentItem.middleName}</p>

                                            ) : (
                                                <input value={contentItem.middleName} className="border border-slate-300 outline-none px-2" />

                                            )}
                                        </div>
                                        {middleNameHovered && (
                                            <div className="pr-4 pt-2">
                                                <button className="bg-slate-300 px-2 rounded-md" onClick={EditMiddleNameButton}>
                                                    Edit
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="flex justify-between">
                                        <div className='flex gap-1 px-2 pt-2'>
                                            <p className='font-extrabold'>Middle Name: </p>
                                            <input
                                                value={middleName}
                                                onChange={(event) => setMiddleName(event.target.value)}
                                                className="border border-slate-300 outline-none px-2 rounded-md"
                                            />
                                        </div>
                                        <div className="pr-4 pt-2">
                                            {!middleNameChanged ? (

                                                <div className="flex gap-1">
                                                    <div className="flex justify-center items-center text-red-600">
                                                        <button onClick={CancelEditMiddleName}>
                                                            <FaTimes size={18} />

                                                        </button>
                                                    </div>
                                                    <button className="bg-slate-300 px-2 rounded-md text-slate-400" onClick={SubmitEditedField} disabled={!middleNameChanged}> Save</button>
                                                </div>
                                            ) : (

                                                <button className="bg-slate-300 px-2 rounded-md text-slate-600" onClick={SubmitEditedField} disabled={!middleNameChanged}>
                                                    Save
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                )}


                                {!displayEditLastName ? (
                                    <div className="flex justify-between" onMouseEnter={() => setLastNameHovered(true)} onMouseLeave={() => setLastNameHovered(false)}>
                                        <div className='flex gap-1 px-2 pt-2' >
                                            <p className='font-extrabold'>Last Name: </p>
                                            {!editLastName ? (
                                                <p className=''>{contentItem.lastName}</p>

                                            ) : (
                                                <input value={contentItem.lastName} className="border border-slate-300 outline-none px-2" />

                                            )}
                                        </div>
                                        {lastNameHovered && (
                                            <div className="pr-4 pt-2">
                                                <button className="bg-slate-300 px-2 rounded-md" onClick={EditLastNameButton}>
                                                    Edit
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="flex justify-between">
                                        <div className='flex gap-1 px-2 pt-2'>
                                            <p className='font-extrabold'>Last Name: </p>
                                            <input
                                                value={lastName}
                                                onChange={(event) => setLastName(event.target.value)}
                                                className="border border-slate-300 outline-none px-2 rounded-md"
                                            />
                                        </div>
                                        <div className="pr-4 pt-2">
                                            {!lastNameChanged ? (

                                                <div className="flex gap-1">
                                                    <div className="flex justify-center items-center text-red-600">
                                                        <button onClick={CancelEditLastName}>
                                                            <FaTimes size={18} />

                                                        </button>
                                                    </div>
                                                    <button className="bg-slate-300 px-2 rounded-md text-slate-400" onClick={SubmitEditedField} disabled={!lastNameChanged}> Save</button>
                                                </div>
                                            ) : (

                                                <button className="bg-slate-300 px-2 rounded-md text-slate-600" onClick={SubmitEditedField} disabled={!lastNameChanged}>
                                                    Save
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {!displayEditEmail ? (
                                    <div className="flex justify-between" onMouseEnter={() => setEmailHovered(true)} onMouseLeave={() => setEmailHovered(false)}>
                                        <div className='flex gap-1 px-2 pt-2' >
                                            <p className='font-extrabold'>Email: </p>
                                            {!editEmail ? (
                                                <p className=''>{contentItem.email}</p>

                                            ) : (
                                                <input value={contentItem.email} className="border border-slate-300 outline-none px-2" />

                                            )}
                                        </div>
                                        {emailHovered && (
                                            <div className="pr-4 pt-2">
                                                <button className="bg-slate-300 px-2 rounded-md" onClick={EditEmailButton}>
                                                    Edit
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="flex justify-between">
                                        <div className='flex gap-1 px-2 pt-2'>
                                            <p className='font-extrabold'>Email: </p>
                                            <input
                                                value={email}
                                                onChange={(event) => setEmail(event.target.value)}
                                                className="border border-slate-300 outline-none px-2 rounded-md"
                                            />
                                        </div>
                                        <div className="pr-4 pt-2">
                                            {!emailChanged ? (

                                                <div className="flex gap-1">
                                                    <div className="flex justify-center items-center text-red-600">
                                                        <button onClick={CancelEditEmail}>
                                                            <FaTimes size={18} />

                                                        </button>
                                                    </div>
                                                    <button className="bg-slate-300 px-2 rounded-md text-slate-400" onClick={SubmitEditedField} disabled={!emailChanged}> Save</button>
                                                </div>
                                            ) : (

                                                <button className="bg-slate-300 px-2 rounded-md text-slate-600" onClick={SubmitEditedField} disabled={!emailChanged}>
                                                    Save
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                )}


                                {!displayEditPhone ? (

                                    <div className="flex justify-between" onMouseEnter={() => setPhoneHovered(true)} onMouseLeave={() => setPhoneHovered(false)}>
                                        <div className='flex gap-1 px-2 pt-2' >
                                            <p className='font-extrabold'>Phone: </p>
                                            {!editPhone ? (
                                                <p className=''>{contentItem.phone}</p>

                                            ) : (
                                                <input value={contentItem.phone} className="border border-slate-300 outline-none px-2" />

                                            )}
                                        </div>
                                        {phoneHovered && (
                                            <div className="pr-4 pt-2">
                                                <button className="bg-slate-300 px-2 rounded-md" onClick={EditPhoneButton}>
                                                    Edit
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="flex justify-between">
                                        <div className='flex gap-1 px-2 pt-2'>
                                            <p className='font-extrabold'>Phone: </p>
                                            <input
                                                value={phone}
                                                onChange={(event) => setPhone(event.target.value)}
                                                className="border border-slate-300 outline-none px-2 rounded-md"
                                            />
                                        </div>
                                        <div className="pr-4 pt-2">
                                            {!phoneChanged ? (

                                                <div className="flex gap-1">
                                                    <div className="flex justify-center items-center text-red-600">
                                                        <button onClick={CancelEditPhone}>
                                                            <FaTimes size={18} />

                                                        </button>
                                                    </div>
                                                    <button className="bg-slate-300 px-2 rounded-md text-slate-400" onClick={SubmitEditedField} disabled={!phoneChanged}> Save</button>
                                                </div>) : (

                                                <button className="bg-slate-300 px-2 rounded-md text-slate-600" onClick={SubmitEditedField} disabled={!phoneChanged}>
                                                    Save
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                )}


                                {!displayEditPosition ? (

                                    <div className="flex justify-between" onMouseEnter={() => setPositionHovered(true)} onMouseLeave={() => setPositionHovered(false)}>
                                        <div className='flex gap-1 px-2 pt-2' >
                                            <p className='font-extrabold'>Position: </p>
                                            {!editPosition ? (
                                                <p className=''>{contentItem.position}</p>

                                            ) : (
                                                <input value={contentItem.position} className="border border-slate-300 outline-none px-2" />

                                            )}
                                        </div>
                                        {positionHovered && (
                                            <div className="pr-4 pt-2">
                                                <button className="bg-slate-300 px-2 rounded-md" onClick={EditPositionButton}>
                                                    Edit
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="flex justify-between">
                                        <div className='flex gap-1 px-2 pt-2'>
                                            <p className='font-extrabold'>Position: </p>
                                            <input
                                                value={position}
                                                onChange={(event) => setPosition(event.target.value)}
                                                className="border border-slate-300 outline-none px-2 rounded-md"
                                            />
                                        </div>
                                        <div className="pr-4 pt-2">
                                            {!positionChanged ? (

                                                <div className="flex gap-1">
                                                    <div className="flex justify-center items-center text-red-600">
                                                        <button onClick={CancelEditPosition}>
                                                            <FaTimes size={18} />

                                                        </button>
                                                    </div>
                                                    <button className="bg-slate-300 px-2 rounded-md text-slate-400" onClick={SubmitEditedField} disabled={!positionChanged}> Save</button>
                                                </div>) : (

                                                <button className="bg-slate-300 px-2 rounded-md text-slate-600" onClick={SubmitEditedField} disabled={!positionChanged}>
                                                    Save
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                )}

                                {!displayEditJobType ? (
                                    <div className="flex justify-between" onMouseEnter={() => setJobTypeHovered(true)} onMouseLeave={() => setJobTypeHovered(false)}>
                                        <div className='flex gap-1 px-2 pt-2' >
                                            <p className='font-extrabold'>Job Type: </p>
                                            {!editJobType ? (
                                                <p className=''>{contentItem.selectedJobType}</p>

                                            ) : (
                                                <input value={contentItem.selectedJobType} className="border border-slate-300 outline-none px-2" />

                                            )}
                                        </div>
                                        {jobTypeHovered && (
                                            <div className="pr-4 pt-2">
                                                <button className="bg-slate-300 px-2 rounded-md" onClick={EditJobTypeButton}>
                                                    Edit
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="flex justify-between">
                                        <div className='flex gap-1 px-2 pt-2'>
                                            <p className='font-extrabold'>Job Type: </p>
                                            <input
                                                value={selectedJobType}
                                                onChange={(event) => setSelectedJobType(event.target.value)}
                                                className="border border-slate-300 outline-none px-2 rounded-md"
                                            />
                                        </div>
                                        <div className="pr-4 pt-2">
                                            {!jobTypeChanged ? (

                                                <div className="flex gap-1">
                                                    <div className="flex justify-center items-center text-red-600">
                                                        <button onClick={CancelEditJobType}>
                                                            <FaTimes size={18} />

                                                        </button>
                                                    </div>
                                                    <button className="bg-slate-300 px-2 rounded-md text-slate-400" onClick={SubmitEditedField} disabled={!jobTypeChanged}> Save</button>
                                                </div>) : (

                                                <button className="bg-slate-300 px-2 rounded-md text-slate-600" onClick={SubmitEditedField} disabled={!jobTypeChanged}>
                                                    Save
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                )}

                                {!displayEditSalary ? (
                                    <div className="flex justify-between" onMouseEnter={() => setSalaryHovered(true)} onMouseLeave={() => setSalaryHovered(false)}>
                                        <div className='flex gap-1 px-2 pt-2' >
                                            <p className='font-extrabold'>Salary: </p>
                                            {!editSalary ? (
                                                <p className=''>{contentItem.salary}</p>

                                            ) : (
                                                <input value={contentItem.salary} className="border border-slate-300 outline-none px-2" />

                                            )}
                                        </div>
                                        {salaryHovered && (
                                            <div className="pr-4 pt-2">
                                                <button className="bg-slate-300 px-2 rounded-md" onClick={EditSalaryButton}>
                                                    Edit
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="flex justify-between">
                                        <div className='flex gap-1 px-2 pt-2'>
                                            <p className='font-extrabold'>Salary: </p>
                                            <input
                                                type="number"
                                                value={salary}
                                                onChange={(event) => setSalary(event.target.value)}
                                                className="border border-slate-300 outline-none px-2 rounded-md"
                                            />
                                        </div>
                                        <div className="pr-4 pt-2">
                                            {!salaryChanged ? (

                                                <div className="flex gap-1">
                                                    <div className="flex justify-center items-center text-red-600">
                                                        <button onClick={CancelEditSalary}>
                                                            <FaTimes size={18} />

                                                        </button>
                                                    </div>
                                                    <button className="bg-slate-300 px-2 rounded-md text-slate-400" onClick={SubmitEditedField} disabled={!salaryChanged}> Save</button>
                                                </div>) : (

                                                <button className="bg-slate-300 px-2 rounded-md text-slate-600" onClick={SubmitEditedField} disabled={!salaryChanged}>
                                                    Save
                                                </button>
                                            )}
                                        </div>
                                    </div>

                                )}

                                {!displayEditOffice ? (

                                    <div className="flex justify-between" onMouseEnter={() => setOfficeHovered(true)} onMouseLeave={() => setOfficeHovered(false)}>
                                        <div className='flex gap-1 px-2 pt-2' >
                                            <p className='font-extrabold'>Branch Office: </p>
                                            {!editOffice ? (
                                                <p className=''>{contentItem.office}</p>

                                            ) : (
                                                <input value={contentItem.office} className="border border-slate-300 outline-none px-2" />

                                            )}
                                        </div>
                                        {officeHovered && (
                                            <div className="pr-4 pt-2">
                                                <button className="bg-slate-300 px-2 rounded-md" onClick={EditOfficeButton}>
                                                    Edit
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="flex justify-between">
                                        <div className='flex gap-1 px-2 pt-2'>
                                            <p className='font-extrabold'>Branch Office: </p>
                                            <input
                                                value={office}
                                                onChange={(event) => setOffice(event.target.value)}
                                                className="border border-slate-300 outline-none px-2 rounded-md"
                                            />
                                        </div>
                                        <div className="pr-4 pt-2">
                                            {!officeChanged ? (
                                                <div className="flex gap-1">
                                                    <div className="flex justify-center items-center text-red-600">
                                                        <button onClick={CancelEditOffice}>
                                                            <FaTimes size={18} />

                                                        </button>
                                                    </div>
                                                    <button className="bg-slate-300 px-2 rounded-md text-slate-400" onClick={SubmitEditedField} disabled={!officeChanged}> Save</button>
                                                </div>
                                            ) : (

                                                <button className="bg-slate-300 px-2 rounded-md text-slate-600" onClick={SubmitEditedField} disabled={!officeChanged}>
                                                    Save
                                                </button>

                                            )}
                                        </div>
                                    </div>

                                )}


                                {!displayEditHubInstructor ? (

                                    <div className="flex justify-between" onMouseEnter={() => setHubInstructorHovered(true)} onMouseLeave={() => setHubInstructorHovered(false)}>
                                        <div className='flex gap-1 px-2 pt-2' >
                                            <p className='font-extrabold'>{contentItem.hubInstructor === '1' ? 'Hub Instructor' : ''}</p>
                                            {!editHubInstructor ? (
                                                <p className=''>{contentItem.hubInstructor}</p>

                                            ) : (
                                                <input value={contentItem.hubInstructor} className="border border-slate-300 outline-none px-2" />

                                            )}
                                        </div>
                                        {hubInstructorHovered && (
                                            <div className="pr-4 pt-2">
                                                <button className="bg-slate-300 px-2 rounded-md" onClick={EditHubInstructorButton}>
                                                    Edit
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="flex justify-between">
                                        <div className='flex gap-1 px-2 pt-2'>
                                            <p className='font-extrabold'>Branch Office: </p>
                                            <input
                                                value={hubInstructor}
                                                onChange={(event) => setHubInstructor(event.target.value)}
                                                className="border border-slate-300 outline-none px-2 rounded-md"
                                            />
                                        </div>
                                        <div className="pr-4 pt-2">
                                            {!hubInstructorChanged ? (
                                                <div className="flex gap-1">
                                                    <div className="flex justify-center items-center text-red-600">
                                                        <button onClick={CancelEditHubInstructor}>
                                                            <FaTimes size={18} />

                                                        </button>
                                                    </div>
                                                    <button className="bg-slate-300 px-2 rounded-md text-slate-400" onClick={SubmitEditedField} disabled={!hubInstructorChanged}> Save</button>
                                                </div>
                                            ) : (

                                                <button className="bg-slate-300 px-2 rounded-md text-slate-600" onClick={SubmitEditedField} disabled={!hubInstructorChanged}>
                                                    Save
                                                </button>

                                            )}
                                        </div>
                                    </div>

                                )}

                                {!displayEditSchoolInstructor ? (

                                    <div className="flex justify-between" onMouseEnter={() => setSchoolInstructorHovered(true)} onMouseLeave={() => setSchoolInstructorHovered(false)}>
                                        <div className='flex gap-1 px-2 pt-2' >
                                            <p className='font-extrabold'>{contentItem.schoolInstructor === '1' ? 'School Instructor' : ''}</p>
                                            {!editSchoolInstructor ? (
                                                <p className=''>{contentItem.schoolInstructor}</p>

                                            ) : (
                                                <input value={contentItem.hubInstructor} className="border border-slate-300 outline-none px-2" />

                                            )}
                                        </div>
                                        {schoolInstructorHovered && (
                                            <div className="pr-4 pt-2">
                                                <button className="bg-slate-300 px-2 rounded-md" onClick={EditSchoolInstructorButton}>
                                                    Edit
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="flex justify-between">
                                        <div className='flex gap-1 px-2 pt-2'>
                                            <p className='font-extrabold'>School Instructor: </p>
                                            <input
                                                value={schoolInstructor}
                                                onChange={(event) => setSchoolInstructor(event.target.value)}
                                                className="border border-slate-300 outline-none px-2 rounded-md"
                                            />
                                        </div>
                                        <div className="pr-4 pt-2">
                                            {!schoolInstructorChanged ? (
                                                <div className="flex gap-1">
                                                    <div className="flex justify-center items-center text-red-600">
                                                        <button onClick={CancelEditSchoolInstructor}>
                                                            <FaTimes size={18} />

                                                        </button>
                                                    </div>
                                                    <button className="bg-slate-300 px-2 rounded-md text-slate-400" onClick={SubmitEditedField} disabled={!schoolInstructorChanged}> Save</button>
                                                </div>
                                            ) : (

                                                <button className="bg-slate-300 px-2 rounded-md text-slate-600" onClick={SubmitEditedField} disabled={!schoolInstructorChanged}>
                                                    Save
                                                </button>

                                            )}
                                        </div>
                                    </div>

                                )}



                                {!displayEditDateOfBirth ? (

                                    <div className="flex justify-between" onMouseEnter={() => setDateOfBirthHovered(true)} onMouseLeave={() => setDateOfBirthHovered(false)}>
                                        <div className='flex gap-1 px-2 pt-2' >
                                            <p className='font-extrabold'>Date Of Birth: </p>
                                            {!editDateOfBirth ? (
                                                <p className=''>{contentItem.dateOfBirth}</p>

                                            ) : (
                                                <input value={contentItem.dateOfBirth} className="border border-slate-300 outline-none px-2" />

                                            )}
                                        </div>
                                        {dateOfBirthHovered && (
                                            <div className="pr-4 pt-2">
                                                <button className="bg-slate-300 px-2 rounded-md" onClick={EditDateOfBirthButton}>
                                                    Edit
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="flex justify-between">
                                        <div className='flex gap-1 px-2 pt-2'>
                                            <p className='font-extrabold'>Date Of Birth: </p>
                                            <input
                                                value={dateOfBirth}
                                                onChange={(event) => setDateOfBirth(event.target.value)}
                                                className="border border-slate-300 outline-none px-2 rounded-md"
                                            />
                                        </div>
                                        <div className="pr-4 pt-2">
                                            {!dateOfBirthChanged ? (
                                                <div className="flex gap-1">
                                                    <div className="flex justify-center items-center text-red-600">
                                                        <button onClick={CancelEditDateOfBirth}>
                                                            <FaTimes size={18} />

                                                        </button>
                                                    </div>
                                                    <button className="bg-slate-300 px-2 rounded-md text-slate-400" onClick={SubmitEditedField} disabled={!dateOfBirthChanged}> Save</button>
                                                </div>
                                            ) : (

                                                <button className="bg-slate-300 px-2 rounded-md text-slate-600" onClick={SubmitEditedField} disabled={!dateOfBirthChanged}>
                                                    Save
                                                </button>

                                            )}
                                        </div>
                                    </div>

                                )}


                                {!displayEditSickLeave ? (

                                    <div className="flex justify-between" onMouseEnter={() => setSickLeaveHovered(true)} onMouseLeave={() => setSickLeaveHovered(false)}>
                                        <div className='flex gap-1 px-2 pt-2' >
                                            <p className='font-extrabold'>Casual Leave: </p>
                                            {!editSickLeave ? (
                                                <p className=''>{contentItem.sickLeave}</p>

                                            ) : (
                                                <input value={contentItem.sickLeave} className="border border-slate-300 outline-none px-2" />

                                            )}
                                        </div>
                                        {sickLeaveHovered && (
                                            <div className="pr-4 pt-2">
                                                <button className="bg-slate-300 px-2 rounded-md" onClick={EditSickLeaveButton}>
                                                    Edit
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="flex justify-between">
                                        <div className='flex gap-1 px-2 pt-2'>
                                            <p className='font-extrabold'>Casual Leave: </p>
                                            <input
                                                value={sickLeave}
                                                onChange={(event) => setSickLeave(event.target.value)}
                                                className="border border-slate-300 outline-none px-2 rounded-md"
                                            />
                                        </div>
                                        <div className="pr-4 pt-2">
                                            {!sickLeaveChanged ? (
                                                <div className="flex gap-1">
                                                    <div className="flex justify-center items-center text-red-600">
                                                        <button onClick={CancelEditSickLeave}>
                                                            <FaTimes size={18} />

                                                        </button>
                                                    </div>
                                                    <button className="bg-slate-300 px-2 rounded-md text-slate-400" onClick={SubmitEditedField} disabled={!sickLeaveChanged}> Save</button>
                                                </div>
                                            ) : (

                                                <button className="bg-slate-300 px-2 rounded-md text-slate-600" onClick={SubmitEditedField} disabled={!sickLeaveChanged}>
                                                    Save
                                                </button>

                                            )}
                                        </div>
                                    </div>

                                )}


                                {!displayEditDateEmployed ? (

                                    <div className="flex justify-between" onMouseEnter={() => setDateEmployedHovered(true)} onMouseLeave={() => setDateEmployedHovered(false)}>
                                        <div className='flex gap-1 px-2 pt-2' >
                                            <p className='font-extrabold'>Date Employed: </p>
                                            {!editDateEmployed ? (
                                                <p className=''>{contentItem.dateEmployed}</p>

                                            ) : (
                                                <input value={contentItem.dateEmployed} className="border border-slate-300 outline-none px-2" />

                                            )}
                                        </div>
                                        {dateEmployedHovered && (
                                            <div className="pr-4 pt-2">
                                                <button className="bg-slate-300 px-2 rounded-md" onClick={EditDateEmployedButton}>
                                                    Edit
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="flex justify-between">
                                        <div className='flex gap-1 px-2 pt-2'>
                                            <p className='font-extrabold'>Date Employed: </p>
                                            <input
                                                value={dateEmployed}
                                                onChange={(event) => setDateEmployed(event.target.value)}
                                                className="border border-slate-300 outline-none px-2 rounded-md"
                                            />
                                        </div>
                                        <div className="pr-4 pt-2">
                                            {!dateEmployedChanged ? (
                                                <div className="flex gap-1">
                                                    <div className="flex justify-center items-center text-red-600">
                                                        <button onClick={CancelEditDateEmployed}>
                                                            <FaTimes size={18} />

                                                        </button>
                                                    </div>
                                                    <button className="bg-slate-300 px-2 rounded-md text-slate-400" onClick={SubmitEditedField} disabled={!dateEmployedChanged}> Save</button>
                                                </div>
                                            ) : (

                                                <button className="bg-slate-300 px-2 rounded-md text-slate-600" onClick={SubmitEditedField} disabled={!dateEmployedChanged}>
                                                    Save
                                                </button>

                                            )}
                                        </div>
                                    </div>

                                )}

                                {!displayEditBankName ? (

                                    <div className="flex justify-between" onMouseEnter={() => setBankNameHovered(true)} onMouseLeave={() => setBankNameHovered(false)}>
                                        <div className='flex gap-1 px-2 pt-2' >
                                            <p className='font-extrabold'>Bank Name: </p>
                                            {!editBankName ? (
                                                <p className=''>{contentItem.bankName}</p>

                                            ) : (
                                                <input value={contentItem.bankName} className="border border-slate-300 outline-none px-2" />

                                            )}
                                        </div>
                                        {bankNameHovered && (
                                            <div className="pr-4 pt-2">
                                                <button className="bg-slate-300 px-2 rounded-md" onClick={EditBankNameButton}>
                                                    Edit
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="flex justify-between">
                                        <div className='flex gap-1 px-2 pt-2'>
                                            <p className='font-extrabold'>Bank Name: </p>
                                            <input
                                                value={bankName}
                                                onChange={(event) => setBankName(event.target.value)}
                                                className="border border-slate-300 outline-none px-2 rounded-md"
                                            />
                                        </div>
                                        <div className="pr-4 pt-2">
                                            {!bankNameChanged ? (
                                                <div className="flex gap-1">
                                                    <div className="flex justify-center items-center text-red-600">
                                                        <button onClick={CancelEditBankName}>
                                                            <FaTimes size={18} />

                                                        </button>
                                                    </div>
                                                    <button className="bg-slate-300 px-2 rounded-md text-slate-400" onClick={SubmitEditedField} disabled={!bankNameChanged}> Save</button>
                                                </div>
                                            ) : (

                                                <button className="bg-slate-300 px-2 rounded-md text-slate-600" onClick={SubmitEditedField} disabled={!bankNameChanged}>
                                                    Save
                                                </button>

                                            )}
                                        </div>
                                    </div>

                                )}


                                {!displayEditAccountNumber ? (

                                    <div className="flex justify-between" onMouseEnter={() => setAccountNumberHovered(true)} onMouseLeave={() => setAccountNumberHovered(false)}>
                                        <div className='flex gap-1 px-2 pt-2' >
                                            <p className='font-extrabold'>Account Number: </p>
                                            {!editAccountNumber ? (
                                                <p className=''>{contentItem.accountNumber}</p>

                                            ) : (
                                                <input value={contentItem.accountNumber} className="border border-slate-300 outline-none px-2" />

                                            )}
                                        </div>
                                        {accountNumberHovered && (
                                            <div className="pr-4 pt-2">
                                                <button className="bg-slate-300 px-2 rounded-md" onClick={EditAccountNumberButton}>
                                                    Edit
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="flex justify-between">
                                        <div className='flex gap-1 px-2 pt-2'>
                                            <p className='font-extrabold'>Account Number: </p>
                                            <input
                                                type="number"
                                                value={accountNumber}
                                                onChange={(event) => setAccountNumber(event.target.value)}
                                                className="border border-slate-300 outline-none px-2 rounded-md"
                                            />
                                        </div>
                                        <div className="pr-4 pt-2">
                                            {!accountNumberChanged ? (
                                                <div className="flex gap-1">
                                                    <div className="flex justify-center items-center text-red-600">
                                                        <button onClick={CancelEditAccountNumber}>
                                                            <FaTimes size={18} />

                                                        </button>
                                                    </div>
                                                    <button className="bg-slate-300 px-2 rounded-md text-slate-400" onClick={SubmitEditedField} disabled={!accountNumberChanged}> Save</button>
                                                </div>
                                            ) : (

                                                <button className="bg-slate-300 px-2 rounded-md text-slate-600" onClick={SubmitEditedField} disabled={!accountNumberChanged}>
                                                    Save
                                                </button>

                                            )}
                                        </div>
                                    </div>

                                )}

                                {!displayEditHomeAddress ? (

                                    <div className="flex justify-between" onMouseEnter={() => setHomeAddressHovered(true)} onMouseLeave={() => setHomeAddressHovered(false)}>
                                        <div className='flex gap-1 px-2 pt-2' >
                                            <p className='font-extrabold'>Home Address: </p>
                                            {!editHomeAddress ? (
                                                <p className=''>{contentItem.homeAddress}</p>

                                            ) : (
                                                <input value={contentItem.homeAddress} className="border border-slate-300 outline-none px-2" />

                                            )}
                                        </div>
                                        {homeAddressHovered && (
                                            <div className="pr-4 pt-2">
                                                <button className="bg-slate-300 px-2 rounded-md" onClick={EditHomeAddressButton}>
                                                    Edit
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="flex justify-between">
                                        <div className='flex gap-1 px-2 pt-2'>
                                            <p className='font-extrabold'>Home Address: </p>
                                            <textarea

                                                value={homeAddress}
                                                onChange={(event) => setHomeAddress(event.target.value)}
                                                className="border border-slate-300 outline-none px-2 rounded-md"
                                            />
                                        </div>
                                        <div className="pr-4 pt-2">
                                            {!homeAddressChanged ? (
                                                <div className="flex gap-1">
                                                    <div className="flex justify-center items-center text-red-600">
                                                        <button onClick={CancelEditHomeAddress}>
                                                            <FaTimes size={18} />

                                                        </button>
                                                    </div>
                                                    <button className="bg-slate-300 px-2 rounded-md text-slate-400" onClick={SubmitEditedField} disabled={!homeAddressChanged}> Save</button>
                                                </div>
                                            ) : (

                                                <button className="bg-slate-300 px-2 rounded-md text-slate-600" onClick={SubmitEditedField} disabled={!homeAddressChanged}>
                                                    Save
                                                </button>

                                            )}
                                        </div>
                                    </div>

                                )}






                                <div className='flex  gap-4 px-2 pt-1 justify-center mt-4'>
                                    <p className='font-extrabold'>Next Of Kin Details</p>
                                </div>



                                {!displayEditNextOfKinFullName ? (

                                    <div className="flex justify-between" onMouseEnter={() => setNextOfKinFullNameHovered(true)} onMouseLeave={() => setNextOfKinFullNameHovered(false)}>
                                        <div className='flex gap-1 px-2 pt-2' >
                                            <p className='font-extrabold'>Full Name: </p>
                                            {!editNextOfKinFullName ? (
                                                <p className=''>{contentItem.nextOfKinFullName}</p>

                                            ) : (
                                                <input value={contentItem.nextOfKinFullName} className="border border-slate-300 outline-none px-2" />

                                            )}
                                        </div>
                                        {nextOfKinFullNameHovered && (
                                            <div className="pr-4 pt-2">
                                                <button className="bg-slate-300 px-2 rounded-md" onClick={EditNextOfKinFullNameButton}>
                                                    Edit
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="flex justify-between">
                                        <div className='flex gap-1 px-2 pt-2'>
                                            <p className='font-extrabold'>Full Name: </p>
                                            <input

                                                value={nextOfKinFullName}
                                                onChange={(event) => setNextOfKinFullName(event.target.value)}
                                                className="border border-slate-300 outline-none px-2 rounded-md"
                                            />
                                        </div>
                                        <div className="pr-4 pt-2">
                                            {!nextOfKinFullNameChanged ? (
                                                <div className="flex gap-1">
                                                    <div className="flex justify-center items-center text-red-600">
                                                        <button onClick={CancelEditNextOfKinFullName}>
                                                            <FaTimes size={18} />

                                                        </button>
                                                    </div>
                                                    <button className="bg-slate-300 px-2 rounded-md text-slate-400" onClick={SubmitEditedField} disabled={!nextOfKinFullNameChanged}> Save</button>
                                                </div>
                                            ) : (

                                                <button className="bg-slate-300 px-2 rounded-md text-slate-600" onClick={SubmitEditedField} disabled={!nextOfKinFullNameChanged}>
                                                    Save
                                                </button>

                                            )}
                                        </div>
                                    </div>

                                )}


                                {!displayEditNextOfKinPhoneNumber ? (

                                    <div className="flex justify-between" onMouseEnter={() => setNextOfKinPhoneNumberHovered(true)} onMouseLeave={() => setNextOfKinPhoneNumberHovered(false)}>
                                        <div className='flex gap-1 px-2 pt-2' >
                                            <p className='font-extrabold'>Phone Number: </p>
                                            {!editNextOfKinPhoneNumber ? (
                                                <p className=''>{contentItem.nextOfKinPhoneNumber}</p>

                                            ) : (
                                                <input value={contentItem.nextOfKinPhoneNumber} className="border border-slate-300 outline-none px-2" />

                                            )}
                                        </div>
                                        {nextOfKinPhoneNumberHovered && (
                                            <div className="pr-4 pt-2">
                                                <button className="bg-slate-300 px-2 rounded-md" onClick={EditNextOfKinPhoneNumberButton}>
                                                    Edit
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="flex justify-between">
                                        <div className='flex gap-1 px-2 pt-2'>
                                            <p className='font-extrabold'>Phone Number: </p>
                                            <input
                                                type="number"
                                                value={nextOfKinPhoneNumber}
                                                onChange={(event) => setNextOfKinPhoneNumber(event.target.value)}
                                                className="border border-slate-300 outline-none px-2 rounded-md"
                                            />
                                        </div>
                                        <div className="pr-4 pt-2">
                                            {!nextOfKinPhoneNumberChanged ? (
                                                <div className="flex gap-1">
                                                    <div className="flex justify-center items-center text-red-600">
                                                        <button onClick={CancelEditNextOfKinPhoneNumber}>
                                                            <FaTimes size={18} />

                                                        </button>
                                                    </div>
                                                    <button className="bg-slate-300 px-2 rounded-md text-slate-400" onClick={SubmitEditedField} disabled={!nextOfKinPhoneNumberChanged}> Save</button>
                                                </div>
                                            ) : (

                                                <button className="bg-slate-300 px-2 rounded-md text-slate-600" onClick={SubmitEditedField} disabled={!nextOfKinPhoneNumberChanged}>
                                                    Save
                                                </button>

                                            )}
                                        </div>
                                    </div>

                                )}


                                {!displayEditNextOfKinAddress ? (

                                    <div className="flex justify-between" onMouseEnter={() => setNextOfKinAddressHovered(true)} onMouseLeave={() => setNextOfKinAddressHovered(false)}>
                                        <div className='flex gap-1 px-2 pt-2' >
                                            <p className='font-extrabold'>Address: </p>
                                            {!editNextOfKinAddress ? (
                                                <p className=''>{contentItem.nextOfKinAddress}</p>

                                            ) : (
                                                <input value={contentItem.nextOfKinAddress} className="border border-slate-300 outline-none px-2" />

                                            )}
                                        </div>
                                        {nextOfKinAddressHovered && (
                                            <div className="pr-4 pt-2">
                                                <button className="bg-slate-300 px-2 rounded-md" onClick={EditNextOfKinAddressButton}>
                                                    Edit
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div className="flex justify-between">
                                        <div className='flex gap-1 px-2 pt-2'>
                                            <p className='font-extrabold'> Address: </p>
                                            <textarea
                                                value={nextOfKinAddress}
                                                onChange={(event) => setNextOfKinAddress(event.target.value)}
                                                className="border border-slate-300 outline-none px-2 rounded-md"
                                            />
                                        </div>
                                        <div className="pr-4 pt-2">
                                            {!nextOfKinAddressChanged ? (
                                                <div className="flex gap-1">
                                                    <div className="flex justify-center items-center text-red-600">
                                                        <button onClick={CancelEditNextOfKinAddress}>
                                                            <FaTimes size={18} />

                                                        </button>
                                                    </div>
                                                    <button className="bg-slate-300 px-2 rounded-md text-slate-400" onClick={SubmitEditedField} disabled={!nextOfKinAddressChanged}> Save</button>
                                                </div>
                                            ) : (

                                                <button className="bg-slate-300 px-2 rounded-md text-slate-600" onClick={SubmitEditedField} disabled={!nextOfKinAddressChanged}>
                                                    Save
                                                </button>

                                            )}
                                        </div>
                                    </div>

                                )}


                            </div>

                        </div>
                    )}

                </div>

                <div className='bg-[#ffffff] w-full pb-8 px-2'>
                    <p className="justify-center text-center pt-8 text-[#2b4053]">Staff Performance</p>

                    <>
                        <canvas ref={chartRef} />
                    </>

                </div>
            </div>





            <div className="grid grid-cols-2 lg:grid-cols-3  rounded-[10px] gap-3 lg:gap-[60px] text-white max-w-[980px] w-fit pb-44">


            </div>



        </div>
    )
}

export default StaffDetails