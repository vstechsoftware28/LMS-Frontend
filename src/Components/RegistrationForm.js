import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './RegistrationForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegistrationForm = () => {
  const [showDistDropdown, setShowDistDropdown] = useState(false);
  const [showTehsilDropdown, setShowTehsilDropdown] = useState(false);
  const [showVillageDropdown, setShowVillageDropdown] = useState(false);
  const [showSchoolOrCollegeDropdown, setShowSchoolOrCollegeDropdown] = useState(false);
  const [showSpecificSchoolDropdown, setShowSpecificSchoolDropdown] = useState(false);
  const [showSpecificCollegeDropdown, setShowSpecificCollegeDropdown] = useState(false);
  const [showUserTypeDropdown, setShowUserTypeDropdown] = useState(false);

  const [district, setDistrict] = useState('');
  const [tehsil, setTehsil] = useState('');
  const [village, setVillage] = useState('');
  const [schoolOrCollege, setSchoolOrCollege] = useState('');
  const [selectedSchool, setSelectedSchool] = useState('');
  const [selectedCollege, setSelectedCollege] = useState('');

  const [selectedStandard, setSelectedStandard] = useState('');
  const [selectedTeacherType, setSelectedTeacherType] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
    reset,
    getValues,
    watch
  } = useForm({
    mode: 'onBlur',
  });


  const districtsData = {
    Ahmadnagar: ['Newasa', 'Rahuri', 'Nagar', 'Rahata', 'Shevgaon'],
    Pune: ['Junnar', 'Bhor', 'Purandar', 'Baramati', 'Rajgad'],
    Mumbai: [],
    Nashik: ['Dindori', 'Yewla', 'NashikCity'],
    Satara: ['Karad', 'Jawali', 'Wai'],
  };
  const villagesData = {
    Newasa: ['Devgad', 'Shinganapur', 'Kharwandi', 'Madaki', 'Pimpri'],
    Rahuri: ['Umbare', 'Bramhani', 'Valan', 'Manjari'],
  };
  const schoolsData = {
    Devgad: ['Gurudatta Vidyalay', 'Z.P. School', 'Modern School'],
    Shinganapur: ['Shani School', 'MPS School', 'Sujata School'],
  };

  const collegesData = {
    Devgad: ['ACS College', 'Devgad College'],
    Shinganapur: ['Shinganapur College', 'Gadakh College'],
  };

  const standardsData = ['5', '6', '7', '8', '9', '10'];

  const divisionsData = {
    '5': ['A', 'B', 'C'],
    '6': ['A', 'B'],
    '7': ['A', 'B', 'C'],
    '8': ['A', 'B'],
    '9': ['A', 'B', 'C'],
    '10': ['A', 'B']
  };
  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setShowDistDropdown(selectedState === 'Maharashtra');
    reset({
      state: selectedState,
    });
  };

  const handleDistrictChange = (e) => {
    const selectedDistrict = e.target.value;
    setDistrict(selectedDistrict);
    setTehsil('');
    setVillage('');
    setSchoolOrCollege('');
    setSelectedSchool('');
    setSelectedCollege('');
    setShowTehsilDropdown(true);
    setShowVillageDropdown(false);
    setShowSchoolOrCollegeDropdown(false);
    setShowSpecificSchoolDropdown(false);
    setShowSpecificCollegeDropdown(false);
  };
  const handleTehsilChange = (e) => {
    const selectedTehsil = e.target.value;
    setTehsil(selectedTehsil);
    setVillage('');
    setSchoolOrCollege('');
    setSelectedSchool('');
    setSelectedCollege('');
    setShowVillageDropdown(true);
    setShowSchoolOrCollegeDropdown(false);
    setShowSpecificSchoolDropdown(false);
    setShowSpecificCollegeDropdown(false);
  };

  const handleVillageChange = (e) => {
    const selectedVillage = e.target.value;
    setVillage(selectedVillage);
    setSchoolOrCollege('');
    setSelectedSchool('');
    setSelectedCollege('');
    setShowSchoolOrCollegeDropdown(true);
    setShowSpecificSchoolDropdown(false);
    setShowSpecificCollegeDropdown(false);
  };

  const handleSchoolOrCollegeChange = (e) => {
    const selectedOption = e.target.value;
    setSchoolOrCollege(selectedOption);
    setSelectedSchool('');
    setSelectedCollege('');

 
    reset({ userType: '', year: '', division: '' });

    setShowSpecificSchoolDropdown(selectedOption === 'schoolName');
    setShowSpecificCollegeDropdown(selectedOption === 'college');
    setShowUserTypeDropdown(selectedOption === 'schoolName' || selectedOption === 'college');
  }




  const handleStandardChange = (e) => {
    const selectedStandard = e.target.value;
    setSelectedStandard(selectedStandard);
  };

  const handleTeacherTypeChange = (e) => {
    const selectedTeacherType = e.target.value;
    setSelectedTeacherType(selectedTeacherType);
  };
  const validateDOB = (value) => {
    const selectedDate = new Date(value);
    const maxDate = new Date('2015-12-31');
    return selectedDate <= maxDate || 'Date must be before 2015';
  };

  const onSubmit = (data) => {
    console.log(data);
    alert('Form submitted successfully');
    // reset();
  };



  // const onSubmit = async (data) => {
  //   try {
  //     console.log(data);
  //     let apiUrl = 'http://localhost:8080';
  //     console.log(data.user);
  //     console.log(data.schoolOrCollege);
  //     console.log(data.schoolOrCollege === 'schoolName' && data.user === 'Student');

  //     // Modify apiUrl based on selected school
  //     if (data.schoolOrCollege === 'schoolName' && data.user === 'Student') {
  //       console.log(apiUrl);
  //       apiUrl += '/student';
  //       console.log(apiUrl);
  //     } else if (data.schoolOrCollege === 'schoolName' && data.user === 'Teacher') {


  //       if (data.teacherType === 'principal') {
  //         apiUrl += '/principal';
  //       } else if (data.teacherType === 'classTeacher') {
  //         apiUrl += '/classTeacher';
  //       } else if (data.teacherType === 'subjectTeacher') {
  //         apiUrl += '/subjectTeacher';
  //       }
  //     } else if (data.schoolOrCollege === 'schoolName' && data.user === 'Parent') {
  //       apiUrl += '/parent';
  //     } else if (data.schoolOrCollege === 'college' && data.user === 'Student') {
  //       apiUrl += '/college/student';
  //     } else if (data.schoolOrCollege === 'college' && data.user === 'Teacher') {
  //       apiUrl += '/college/teacher';
  //     } else if (data.schoolOrCollege === 'college' && data.user === 'Parent') {
  //       apiUrl += '/college/parent';
  //     }

  //     console.log(apiUrl);

  //     const response = await axios.post(apiUrl, data, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });

  //     console.log('Registration successful:', response.data);
  //     alert('Registration successful!');
  //     // reset();
  //   } catch (error) {
  //     console.error('Error:', error);
  //     alert('Registration failed. Please try again.');
  //   }
  // };

  const userType = watch('userType');
  return (
    <div className='registration-form'>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='registration-form-group'>
          <label htmlFor='firstName'>First Name:</label>
          <input id='firstName' type='text' {...register('firstName', {
            required: 'First name is required',
            pattern: { value: /^[a-zA-Z\s]*$/, message: 'First name can only contain letters and spaces' }
          })} onBlur={() => trigger('firstName')} />
          {errors.firstName && <p className="error">{errors.firstName.message}</p>}
        </div>
        <div className='registration-form-group'>
          <label htmlFor='middleName'>Middle Name:</label>
          <input id='middleName' type='text' {...register('middleName', {
            required: 'Middle name is required',
            pattern: { value: /^[a-zA-Z\s]*$/, message: 'Middle name can only contain letters and spaces' }
          })} onBlur={() => trigger('middleName')} />
          {errors.middleName && <p className="error">{errors.middleName.message}</p>}
        </div>
        <div className='registration-form-group'>
          <label htmlFor='lastName'>Last Name:</label>
          <input id='lastName' type='text' {...register('lastName', {
            required: 'Last name is required',
            pattern: {
              value: /^[a-zA-Z\s]*$/,
              message: 'Last name can only contain letters and spaces'
            }
          })} onBlur={() => trigger('lastName')} />
          {errors.lastName && <p className="error">{errors.lastName.message}</p>}
        </div>
        <div className='registration-form-group'>

        </div>
        <div className='registration-form-group' >
        <label htmlFor='mobileNumber'>Mobile Number:</label>
          <div className='country'>
            
            <div>
              {/* <label htmlFor='countryCode'>Country Code:</label> */}
              <select id='countryCode' {...register('countryCode', { required: 'Country code is required' })}>
                <option value='+91'>India +91</option>
                <option value='+91'>USA +1</option>
              </select>
              {errors.countryCode && <p className="error">{errors.countryCode.message}</p>}
            </div>
            
          <input id='mobileNumber' type='text' {...register('mobileNumber', {
            required: 'Mobile Number is required',
            pattern: {
              value: /^[0-9]{10}$/,
              message: 'Mobile number must be exactly 10 digits'
            }
          })} onBlur={() => trigger('mobileNumber')} />
         
          </div>
          {errors.mobileNumber && <p className="error">{errors.mobileNumber.message}</p>}
          
        </div>
        <div className='registration-form-group'>
          <label htmlFor='email'>Email:</label>
          <input id='email' type='email' {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid Email'
            }
          })} onBlur={() => trigger('email')} />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>
        <div className='registration-form-group'>
          <label htmlFor='password'>Password:</label>
          <input id='password' type='password' {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters long'
            }
          })} onBlur={() => trigger('password')} />
          {errors.password && <p className="error">{errors.password.message}</p>}
        </div>
        <div className='registration-form-group'>
          <label htmlFor='confirmPassword'>Confirm Password:</label>
          <input id='confirmPassword' type='password' {...register('confirmPassword', {
            required: 'Confirm Password is required',
            validate: value => value === getValues('password') || 'Password must match'
          })} onBlur={() => trigger('confirmPassword')} />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}
        </div>
        <div className='registration-form-group radio-group'>
          <label htmlFor='gender'>Gender:</label>
          <div className='gen'>
            <label htmlFor='male'>Male</label>
            <input type='radio' id='male' value='male' {...register('gender', { required: 'Gender selection is required' })} onBlur={() => trigger('gender')} />
            <label htmlFor='female'>Female</label>
            <input type='radio' id='female' value='female' {...register('gender', { required: 'Gender selection is required' })} onBlur={() => trigger('gender')} />
            <label htmlFor='other'>Other</label>
            <input type='radio' id='other' value='other' {...register('gender', { required: 'Gender selection is required' })} onBlur={() => trigger('gender')} />

          </div>
          {errors.gender && <p className="error">{errors.gender.message}</p>}
        </div>
        <div className='registration-form-group'>
          <label htmlFor='dob'>DOB:</label>
          <input id='dob' type='date' {...register('dob', { required: 'DOB is required', validate: validateDOB })} onBlur={() => trigger('dob')} />
          {errors.dob && <p className="error">{errors.dob.message}</p>}
        </div>
        <div className='registration-form-group'>
          <label htmlFor='state'>State:</label>
          <select id='state' {...register('state', { required: 'State is required' })} onChange={handleStateChange}>
            <option value=''>Select State</option>
            <option value='Maharashtra'>Maharashtra</option>
            {/* Add other states if needed */}
          </select>
          {errors.state && <p className='error'>{errors.state.message}</p>}
        </div>

        {/* District dropdown */}
        {showDistDropdown && (
          <div className='registration-form-group'>
            <label htmlFor='district'>District:</label>
            <select id='district' {...register('district', { required: 'District is required' })} onChange={handleDistrictChange}>
              <option value=''>Select District</option>
              {Object.keys(districtsData).map((district) => (
                <option key={district} value={district}>{district}</option>
              ))}
            </select>
            {errors.district && <p className='error'>{errors.district.message}</p>}
          </div>
        )}

        {/* Tehsil dropdown */}
        {showTehsilDropdown && (
          <div className='registration-form-group'>
            <label htmlFor='subDistrict'>Taluka:</label>
            <select id='subDistrict' {...register('subDistrict', { required: 'Taluka is required' })} onChange={handleTehsilChange}>
              <option value=''>Select Taluka</option>
              {districtsData[district].map((tehsilOption) => (
                <option key={tehsilOption} value={tehsilOption}>
                  {tehsilOption}
                </option>
              ))}
            </select>
            {errors.subDistrict && <p className='error'>{errors.subDistrict.message}</p>}
          </div>
        )}

        {/* Village dropdown */}
        {showVillageDropdown && (
          <div className='registration-form-group'>
            <label htmlFor='city'>City:</label>
            <select id='city' {...register('city', { required: 'city is required' })} onChange={handleVillageChange}>
              <option value=''>Select city</option>
              {villagesData[tehsil].map((villageOption) => (
                <option key={villageOption} value={villageOption}>
                  {villageOption}
                </option>
              ))}
            </select>
            {errors.city && <p className='error'>{errors.city.message}</p>}
          </div>
        )}


        {showSchoolOrCollegeDropdown && (
          <div className='registration-form-group'>
            <label htmlFor='institutionType'>Institution Type:</label>
            <select id='institutionType' {...register('institutionType', { required: 'This field is required' })} onChange={handleSchoolOrCollegeChange} >
              <option value=''>Select</option>
              <option value='schoolName'>School</option>
              <option value='college'>College</option>
            </select>
            {errors.institutionType && <p className="error">{errors.institutionType.message}</p>}
          </div>
        )}

        {showSpecificSchoolDropdown && (
          <div className='registration-form-group'>
            <label htmlFor='schoolName'>School Name:</label>
            <select id='schoolName' {...register('schoolName', { required: 'School is required' })} >
              <option value=''>Select School</option>
              {village && schoolsData[village].map((schoolName) => (
                <option key={schoolName} value={schoolName}>{schoolName}</option>
              ))}
            </select>
            {errors.schoolName && <p className="error">{errors.schoolName.message}</p>}
          </div>
        )}

        {showSpecificCollegeDropdown && (
          <div className='registration-form-group'>
            <label htmlFor='college'>College Name:</label>
            <select id='college' {...register('college', { required: 'College is required' })} >
              <option value=''>Select College</option>
              {village && collegesData[village].map((college) => (
                <option key={college} value={college}>{college}</option>
              ))}
            </select>
            {errors.college && <p className="error">{errors.college.message}</p>}
          </div>
        )}


        {/* User Type dropdown */}

        {showUserTypeDropdown && (
          <div className='registration-form-group'>
            <label htmlFor='userType'>User Type:</label>
            <select id='userType' {...register('userType', { required: 'User type is required' })}>
              <option value=''>Select Type</option>
              {schoolOrCollege === 'schoolName' && (
                <>
                  <option value='Student'>Student</option>
                  <option value='Teacher'>Teacher</option>
                  <option value='Parent'>Parent</option>
                </>
              )}
              {schoolOrCollege === 'college' && (
                <>
                  <option value='Student'>Student</option>
                  <option value='Teacher'>Teacher</option>
                  <option value='Parent'>Parent</option>
                </>
              )}
            </select>
            {errors.userType && <p className='error'>{errors.userType.message}</p>}
          </div>
        )}

        {userType === 'Student' && schoolOrCollege === 'college' && (
          <>
            <div className='registration-form-group'>
              <label htmlFor='year'>Select Year:</label>
              <select id='year' {...register('year', { required: 'Year is required' })}>
                <option value=''>Select Year</option>
                <option value='1'>1st Year</option>
                <option value='2'>2nd Year</option>
                <option value='3'>3rd Year</option>
                <option value='4'>4th Year</option>
                {/* Add year options as needed */}
              </select>
              {errors.year && <p className='error'>{errors.year.message}</p>}
            </div>
            <div className='registration-form-group'>
              <label htmlFor='division'>Select Division:</label>
              <select id='division' {...register('division', { required: 'Division is required' })}>
                <option value=''>Select Division</option>
                <option value='A'>A</option>
                <option value='B'>B</option>
                <option value='C'>C</option>
                <option value='D'>D</option>
                {/* Add division options as needed */}
              </select>
              {errors.division && <p className='error'>{errors.division.message}</p>}
            </div>
          </>
        )}

        {userType === 'Teacher' && schoolOrCollege === 'college' && (
          <div className='registration-form-group'>
            <label htmlFor='teacherType'>Teacher Type:</label>
            <select id='teacherType' {...register('teacherType', { required: 'Teacher type is required' })} onChange={handleTeacherTypeChange}>
              <option value=''>Select teacher type</option>
              <option value='principal'>Principal</option>
              <option value='HOD'>HOD</option>
              <option value='professor'>Professor</option>
            </select>
            {errors.teacherType && <p className='error'>{errors.teacherType.message}</p>}
          </div>
        )}


        {userType === 'Teacher' && schoolOrCollege === 'college' && selectedTeacherType === 'HOD' && (
          <>
            <div className='registration-form-group'>
              <label htmlFor='year'>Select Year:</label>
              <select id='year' {...register('year', { required: 'Year is required' })}>
                <option value=''>Select Year</option>
                <option value='1'>1st Year</option>
                <option value='2'>2nd Year</option>
                <option value='3'>3rd Year</option>
                <option value='4'>4th Year</option>
                {/* Add year options as needed */}
              </select>
              {errors.year && <p className='error'>{errors.year.message}</p>}
            </div>
            <div className='registration-form-group'>
              <label htmlFor='division'>Select Division:</label>
              <select id='division' {...register('division', { required: 'Division is required' })}>
                <option value=''>Select Division</option>
                <option value='A'>A</option>
                <option value='B'>B</option>
                <option value='C'>C</option>
                <option value='D'>D</option>
                {/* Add division options as needed */}
              </select>
              {errors.division && <p className='error'>{errors.division.message}</p>}
            </div>
          </>
        )}

        {userType === 'Parent' && schoolOrCollege === 'college' && (
          <>
            <div className='registration-form-group'>
              <label htmlFor='id'>Student Id:</label>
              <input id='id' type='text' {...register('id', {
                required: 'Student Id is required',
                pattern: { value: /^[a-zA-Z0-9\s]*$/, message: 'Student Id can only contain letters and spaces' }
              })} onBlur={() => trigger('id')} />
              {errors.id && <p className="error">{errors.id.message}</p>}
              <label htmlFor='studname'>Student Name:</label>
              <input id='studname' type='text' {...register('studname', {
                required: 'Student name is required',
                pattern: { value: /^[a-zA-Z\s]*$/, message: 'Student name can only contain letters and spaces' }
              })} onBlur={() => trigger('studname')} />
              {errors.studname && <p className="error">{errors.studname.message}</p>}
            </div>
          </>
        )}
        {userType === 'Parent' && schoolOrCollege === 'college' && (
          <>
            <div className='registration-form-group'>
              <label htmlFor='year'>Select Year:</label>
              <select id='year' {...register('year', { required: 'Year is required' })}>
                <option value=''>Select Year</option>
                <option value='1'>1st Year</option>
                <option value='2'>2nd Year</option>
                <option value='3'>3rd Year</option>
                <option value='4'>4th Year</option>
                {/* Add year options as needed */}
              </select>
              {errors.year && <p className='error'>{errors.year.message}</p>}
            </div>
            <div className='registration-form-group'>
              <label htmlFor='division'>Select Division:</label>
              <select id='division' {...register('division', { required: 'Division is required' })}>
                <option value=''>Select Division</option>
                <option value='A'>A</option>
                <option value='B'>B</option>
                <option value='C'>C</option>
                <option value='D'>D</option>
                {/* Add division options as needed */}
              </select>
              {errors.division && <p className='error'>{errors.division.message}</p>}
            </div>
          </>
        )}
        {/* Standard and Division dropdowns for Students */}
        {userType === 'Student' && schoolOrCollege === 'schoolName' && (
          <>
            <div className='registration-form-group'>
              <label htmlFor='standard'>Standard:</label>
              <select id='standard' {...register('standard', { required: 'Standard is required' })} onChange={handleStandardChange}>
                <option value=''>Select Standard</option>
                {standardsData.map((standard) => (
                  <option key={standard} value={standard}>
                    {standard}
                  </option>
                ))}
              </select>
              {errors.standard && <p className='error'>{errors.standard.message}</p>}
            </div>

            {selectedStandard && (
              <div className='registration-form-group'>
                <label htmlFor='division'>Division:</label>
                <select id='division' {...register('division', { required: 'Division is required' })}>
                  <option value=''>Select Division</option>
                  {divisionsData[selectedStandard].map((division) => (
                    <option key={division} value={division}>
                      {division}
                    </option>
                  ))}
                </select>
                {errors.division && <p className='error'>{errors.division.message}</p>}
              </div>
            )}
          </>
        )}

        {/* Standard and Division dropdowns for Teachers (Class Teacher) */}
        {userType === 'Teacher' && schoolOrCollege === 'schoolName' && (
          <>
            <div className='registration-form-group'>
              <label htmlFor='teacherType'>Teacher Type:</label>
              <select id='teacherType' {...register('teacherType', { required: 'Teacher type is required' })} onChange={handleTeacherTypeChange}>
                <option value=''>Select teacher type</option>
                <option value='principal'>Principal</option>
                <option value='classTeacher'>Class Teacher</option>
                <option value='subjectTeacher'>Subject Teacher</option>
              </select>
              {errors.teacherType && <p className="error">{errors.teacherType.message}</p>}
            </div>

            {/* Show Standard and Division dropdowns when Class Teacher is selected */}
            {selectedTeacherType === 'classTeacher' && (
              <>
                <div className='registration-form-group'>
                  <label htmlFor='standard'>Standard:</label>
                  <select id='standard' {...register('standard', { required: 'Standard is required' })} onChange={handleStandardChange}>
                    <option value=''>Select Standard</option>
                    {standardsData.map((standard) => (
                      <option key={standard} value={standard}>
                        {standard}
                      </option>
                    ))}
                  </select>
                  {errors.standard && <p className='error'>{errors.standard.message}</p>}
                </div>

                {selectedStandard && (
                  <div className='registration-form-group'>
                    <label htmlFor='division'>Division:</label>
                    <select id='division' {...register('division', { required: 'Division is required' })}>
                      <option value=''>Select Division</option>
                      {divisionsData[selectedStandard].map((division) => (
                        <option key={division} value={division}>
                          {division}
                        </option>
                      ))}
                    </select>
                    {errors.division && <p className='error'>{errors.division.message}</p>}
                  </div>
                )}
              </>
            )}
          </>
        )}

        {/* Standard and Division dropdowns for parents */}
        {userType === 'Parent' && schoolOrCollege === 'schoolName' && (
          <>
            <div className='registration-form-group'>
              <label htmlFor='childId'>Student Id:</label>
              <input id='childId' type='text' {...register('childId', {
                required: 'Student Id is required',
                pattern: { value: /^[a-zA-Z0-9\s]*$/, message: 'Student Id can only contain letters and spaces' }
              })} onBlur={() => trigger('childId')} />
              {errors.childId && <p className="error">{errors.childId.message}</p>}
              <label htmlFor='childName'>Student Name:</label>
              <input id='childName' type='text' {...register('childName', {
                required: 'Student name is required',
                pattern: { value: /^[a-zA-Z\s]*$/, message: 'Student name can only contain letters and spaces' }
              })} onBlur={() => trigger('childName')} />
              {errors.childName && <p className="error">{errors.childName.message}</p>}

              <label htmlFor='childStandard'>Standard:</label>
              <select id='childStandard' {...register('childStandard', { required: 'Standard is required' })} onChange={handleStandardChange}>
                <option value=''>Select Standard</option>
                {standardsData.map((standard) => (
                  <option key={standard} value={standard}>
                    {standard}
                  </option>
                ))}
              </select>
              {errors.childStandard && <p className='error'>{errors.childStandard.message}</p>}
            </div>

            {selectedStandard && (
              <div className='registration-form-group'>
                <label htmlFor='childDivision'>Division:</label>
                <select id='childDivision' {...register('childDivision', { required: 'Division is required' })}>
                  <option value=''>Select Division</option>
                  {divisionsData[selectedStandard].map((division) => (
                    <option key={division} value={division}>
                      {division}
                    </option>
                  ))}
                </select>
                {errors.childDivision && <p className='error'>{errors.childDivision.message}</p>}
              </div>
            )}
          </>
        )}
        <button type='submit' className='btn-register btn-primary' disabled={!isValid}>Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;