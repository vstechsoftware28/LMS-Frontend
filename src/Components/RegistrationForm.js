import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
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
    // Add more districts as necessary
  };
  const villagesData = {
    Newasa: ['Devgad', 'Shinganapur', 'Kharwandi', 'Madaki', 'Pimpri'],
    Rahuri: ['Umbare', 'Bramhani', 'Valan', 'Manjari'],
    // Add more tehsils and villages as needed
  };
  const schoolsData = {
    Devgad: ['Gurudatta Vidyalay', 'Z.P. School', 'Modern School'],
    Shinganapur: ['Shani School', 'MPS School', 'Sujata School'],
    // Add more schools as needed
  };

  const collegesData = {
    Devgad: ['ACS College', 'Devgad College'],
    Shinganapur: ['Shinganapur College', 'Gadakh College'],
    // Add more colleges as needed
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

    // Reset form state based on selected option
    reset({ user: '', year: '', division: '' });

    setShowSpecificSchoolDropdown(selectedOption === 'school');
    setShowSpecificCollegeDropdown(selectedOption === 'college');
    setShowUserTypeDropdown(selectedOption === 'school' || selectedOption === 'college');
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
  const userType = watch('user');
  return (
    <div className='registration-form'>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group'>
          <label htmlFor='firstname'>First Name:</label>
          <input id='firstname' type='text' {...register('firstname', {
            required: 'First name is required',
            pattern: { value: /^[a-zA-Z\s]*$/, message: 'First name can only contain letters and spaces' }
          })} onBlur={() => trigger('firstname')} />
          {errors.firstname && <p className="error">{errors.firstname.message}</p>}
        </div>
        <div className='form-group'>
          <label htmlFor='mname'>Middle Name:</label>
          <input id='mname' type='text' {...register('mname', {
            required: 'Middle name is required',
            pattern: { value: /^[a-zA-Z\s]*$/, message: 'Middle name can only contain letters and spaces' }
          })} onBlur={() => trigger('mname')} />
          {errors.mname && <p className="error">{errors.mname.message}</p>}
        </div>
        <div className='form-group'>
          <label htmlFor='lname'>Last Name:</label>
          <input id='lname' type='text' {...register('lname', {
            required: 'Last name is required',
            pattern: {
              value: /^[a-zA-Z\s]*$/,
              message: 'Last name can only contain letters and spaces'
            }
          })} onBlur={() => trigger('lname')} />
          {errors.lname && <p className="error">{errors.lname.message}</p>}
        </div>
        <div className='form-group'>
          <label htmlFor='mob'>Mobile Number:</label>
          <input id='mob' type='text' {...register('mob', {
            required: 'Mobile Number is required',
            pattern: {
              value: /^[0-9]{10}$/,
              message: 'Mobile number must be exactly 10 digits'
            }
          })} onBlur={() => trigger('mob')} />
          {errors.mob && <p className="error">{errors.mob.message}</p>}
        </div>
        <div className='form-group'>
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
        <div className='form-group'>
          <label htmlFor='pass'>Password:</label>
          <input id='pass' type='password' {...register('pass', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters long'
            }
          })} onBlur={() => trigger('pass')} />
          {errors.pass && <p className="error">{errors.pass.message}</p>}
        </div>
        <div className='form-group'>
          <label htmlFor='confirm'>Confirm Password:</label>
          <input id='confirm' type='password' {...register('confirm', {
            required: 'Confirm Password is required',
            validate: value => value === getValues('pass') || 'Password must match'
          })} onBlur={() => trigger('confirm')} />
          {errors.confirm && <p className="error">{errors.confirm.message}</p>}
        </div>
        <div className='form-group radio-group'>
          <label>Gender:</label>
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
        <div className='form-group'>
          <label htmlFor='dob'>DOB:</label>
          <input id='dob' type='date' {...register('dob', { required: 'DOB is required',   validate: validateDOB })} onBlur={() => trigger('dob')} />
          {errors.dob && <p className="error">{errors.dob.message}</p>}
        </div>
        <div className='form-group'>
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
          <div className='form-group'>
            <label htmlFor='dist'>District:</label>
            <select id='dist' {...register('dist', { required: 'District is required' })} onChange={handleDistrictChange}>
              <option value=''>Select District</option>
              {Object.keys(districtsData).map((dist) => (
                <option key={dist} value={dist}>{dist}</option>
              ))}
            </select>
            {errors.dist && <p className='error'>{errors.dist.message}</p>}
          </div>
        )}

        {/* Tehsil dropdown */}
        {showTehsilDropdown && (
          <div className='form-group'>
            <label htmlFor='tehsil'>Taluka:</label>
            <select id='tehsil' {...register('tehsil', { required: 'Taluka is required' })} onChange={handleTehsilChange}>
              <option value=''>Select Taluka</option>
              {districtsData[district].map((tehsilOption) => (
                <option key={tehsilOption} value={tehsilOption}>
                  {tehsilOption}
                </option>
              ))}
            </select>
            {errors.tehsil && <p className='error'>{errors.tehsil.message}</p>}
          </div>
        )}

        {/* Village dropdown */}
        {showVillageDropdown && (
          <div className='form-group'>
            <label htmlFor='village'>Village:</label>
            <select id='village' {...register('village', { required: 'Village is required' })} onChange={handleVillageChange}>
              <option value=''>Select Village</option>
              {villagesData[tehsil].map((villageOption) => (
                <option key={villageOption} value={villageOption}>
                  {villageOption}
                </option>
              ))}
            </select>
            {errors.village && <p className='error'>{errors.village.message}</p>}
          </div>
        )}


        {showSchoolOrCollegeDropdown && (
          <div className='form-group'>
            <label htmlFor='schoolOrCollege'>School or College:</label>
            <select id='schoolOrCollege' {...register('schoolOrCollege', { required: 'This field is required' })} onChange={handleSchoolOrCollegeChange} >
              <option value=''>Select</option>
              <option value='school'>School</option>
              <option value='college'>College</option>
            </select>
            {errors.schoolOrCollege && <p className="error">{errors.schoolOrCollege.message}</p>}
          </div>
        )}

        {showSpecificSchoolDropdown && (
          <div className='form-group'>
            <label htmlFor='school'>School Name:</label>
            <select id='school' {...register('school', { required: 'School is required' })} >
              <option value=''>Select School</option>
              {village && schoolsData[village].map((school) => (
                <option key={school} value={school}>{school}</option>
              ))}
            </select>
            {errors.school && <p className="error">{errors.school.message}</p>}
          </div>
        )}

        {showSpecificCollegeDropdown && (
          <div className='form-group'>
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
          <div className='form-group'>
            <label htmlFor='user'>User Type:</label>
            <select id='user' {...register('user', { required: 'User type is required' })}>
              <option value=''>Select Type</option>
              {schoolOrCollege === 'school' && (
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
            {errors.user && <p className='error'>{errors.user.message}</p>}
          </div>
        )}

        {userType === 'Student' && schoolOrCollege === 'college' && (
          <>
            <div className='form-group'>
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
            <div className='form-group'>
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
          <div className='form-group'>
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
            <div className='form-group'>
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
            <div className='form-group'>
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
            <div className='form-group'>
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
         {userType === 'Parent' && schoolOrCollege === 'college' &&  (
          <>
            <div className='form-group'>
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
            <div className='form-group'>
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
        {userType === 'Student' && schoolOrCollege === 'school' && (
          <>
            <div className='form-group'>
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
              <div className='form-group'>
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
        {userType === 'Teacher' && schoolOrCollege === 'school' && (
          <>
            <div className='form-group'>
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
                <div className='form-group'>
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
                  <div className='form-group'>
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
        {userType === 'Parent' && schoolOrCollege === 'school' && (
          <>
            <div className='form-group'>
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
              <div className='form-group'>
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
        <button type='submit' className='btn btn-primary' disabled={!isValid}>Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;