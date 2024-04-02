import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Navbar from './components/navbar'; // Import your Navbar component
import EnrollButton from './components/enrollNow'; // Import your "Enroll Now" button component
import Footer from './components/footer'; // Import your Footer component
import axios from 'axios';

const Login = () => {

//form data sending
const [submit, setSubmit] = useState("SUBMIT")
  const [formData, setFormData] = useState({
    registrationId: '',
    userType: 'student', // Set a default value
    phoneNumber: '',
  });
const [wrongCliteriya, getWrongCliteriya] = useState("");
  const navigate = useNavigate(); // Use useNavigate instead of useHistory


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSubmit("PLEASE WAIT")
      const response = await axios.post('https://smartserver-ip6l.onrender.com/login', formData);
      console.log(response.data); // Log the response data
       // Save data to cookies for a session
// Save data to localStorage
localStorage.setItem('userData', JSON.stringify(response.data));
if (formData.userType==='admin' && response.data==='welcomeToAdminPanel') {
  navigate('/admindashboard');
}else if (formData.userType==="student") {
  navigate('/stdashboard');
}
else if (response.data === "invalid") {
  getWrongCliteriya("Invalid LogIn Information Please Check Your UserType");
}else if (formData.userType==='teacher') {
  navigate('/teacherPanel')
  
}
else{
  //somthing went wrong
}
      setFormData({
        registrationId: '',
        userType: 'student', // Set a default value
        phoneNumber: '',
      });
      // Handle success, e.g., redirect or show a success message
    } catch (error) {
  getWrongCliteriya("Unable To Connect With Server");
      console.error('Error sending form data:', error);
      // Handle error, e.g., show an error message
    }
  };
  let msgBx;
if (wrongCliteriya==="") {
  msgBx={
    display:"none"
  }
  }else{
    msgBx={
      display:"block"
    }
  }


  return (
    <div>
      <Navbar />
      <div className="container full-Body" style={{paddingTop:'15vh'}}>
        {/* Your main content goes here */}
        <h1>Log-In to Smart Educational Society</h1><form
          className="p-4 border bg-primary"
          style={{ borderRadius: '10px' }}
          onSubmit={handleSubmit}
        >
<div className="form-floating mb-3">
        <input
         value={formData.registrationId}
         onChange={handleInputChange}
         required
            type="text"
            className="form-control" name="registrationId" id="registrationId" placeholder=""/>
          <label for="registrationId"><i className="fa fa-user" aria-hidden="true"></i>Enter Your Reg. No</label>
        </div>
        <div className="form-floating mb-3">
       <div className="mb-3">
        <select required className="form-select p-3" name="userType" id="userType"
         value={formData.userType}
         onChange={handleInputChange}
        >
          <option disabled><i className="fa fa-user-circle-o" aria-hidden="true"></i>Select User Type</option>
          <option value="student"><i className="fa fa-user" aria-hidden="true"></i>student</option>
          <option value="teacher"><i className="fa fa-user" aria-hidden="true"></i>teacher</option>
          <option value="admin"><i className="fa fa-user-circle" aria-hidden="true"></i> admin</option>
        </select>
       </div>
        </div>
        <div className="form-floating mb-3">
        <input
        required
         value={formData.phoneNumber}
         onChange={handleInputChange}
            type="number"
            className="form-control" name="phoneNumber" id="phoneNumber" placeholder="10 Digit Phone Number"/>
          <label for="phoneNumber"><i className="fa fa-key" aria-hidden="true"></i>Enter Your Phone Number</label>
        </div>
        <div className='d-flex bg-light p-2' style={{'borderRadius':'5px', 'justifyContent':'center'}}>
          <button type="reset" className='my-btn mx-1 p-2'>RESET</button>
          <button type="submit" className='my-btn mx-1 p-2' >{submit}</button>
        </div>
        <div className='p-2 btn my-3 border btn-danger' style={msgBx}>{wrongCliteriya}</div>
</form>
<br /><br /><br /><br /><br /><br />
        <EnrollButton />
      </div>
      <Footer />
    </div>
  );
};

export default Login;
