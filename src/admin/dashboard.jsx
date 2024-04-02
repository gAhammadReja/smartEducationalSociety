import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import Navbar from '../components/navbar';
import axios from 'axios';
import './AdminDashboard.css'; // Import your custom styles
import AddStudentForm from './studetns/addStudents' 
import { AddTeacher } from './addTeacher';
const AdminDashboard = () => {
  return (
    <div className="container-fluid adminBody">
      <Navbar></Navbar>
      <div className="row">
        {/* Sidebar */}
        <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
                <h1 className='p-2' style={{color:'white'}}>Smart Educational Society</h1>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link adminNav-link" to="#">
                  Add Student
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link adminNav-link" to="#">
                  Add Teacher
                </NavLink> 
              </li>
              <li className="nav-item">
                <a className="nav-link adminNav-link" href="#notice">
                  Add Notices
                </a> 
              </li>
              <li className="nav-item">
                <a className="nav-link adminNav-link" href="#downloads">
                  Add Downloads
                </a> 
              </li>
              <li className="nav-item">
                <NavLink className="nav-link adminNav-link" to="/adminDashboard/StudentList">
                  View All Students
                </NavLink> 
              </li>
              <li className="nav-item">
                <NavLink className="nav-link adminNav-link" to="/adminDashboard/ViewTeachersList">
                  View All Teachers
                </NavLink> 
              </li>
              {/* Add more menu items as needed */}
            </ul>
          </div>
        </nav>

        {/* Content */}
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2 text-white">Dashboard</h1>
          </div>

          {/* Content for Add Student */}
          <div className="container content-container saffron-bg">
            <h2 className="text-white">Add Student</h2>
            <AddStudentForm/>
          </div>

          {/* Content for Add Teacher */}
          <div className="container content-container white-bg">
            <h2>Add Teacher</h2>
            <AddTeacher/>
          </div>

          {/* Content for Add Notice */}
          <div className="container content-container green-bg">
            <h2 className="text-white" id='notice'>Add Notice</h2>
            {/* Add Notice form */}
            <AddNotice></AddNotice>
          </div>

          {/* Content for Add Notes */}
          <div id='downloads' className="container content-container white-bg">
            <h2>Add Downloads</h2>
            {/* Add Notes form */}
            <ADDDownloads/>
          </div>          
          <br /><br /><br />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;

export const AddNotice=()=>{


  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = {
      title: event.target.title.value,
      disc: event.target.disc.value,
      url: event.target.url.value,
    };
  
    try {
      // Make a POST request to your server with Axios
      const response = await axios.post('https://smartserver-ip6l.onrender.com/notice', formData);
      
      alert(response.data.title+" Notice Added Successfully")
      
      // reset the form after successful submission
      event.target.reset();
    } catch (error) {
      // Handle errors
      console.error('Error submitting form:', error);
    }
  };
const maxDisc= 200;
const [textChar,setTextChar] = useState(0);
  return(
  <>
  <div>
   
  <form method='post' onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Title</label>
      <input
        type="text"
        maxLength={30}
        className="form-control"
        name="title"
        id="title"
        aria-describedby="helpId"
        placeholder="Enter Notice Title"
        required
      />
      <br /> 
      <label htmlFor="disc" className="form-label">Little Description</label>
      <textarea
      placeholder="Discription"
      required
      onChange={(e)=>{
let len = e.target.value.length;
setTextChar(len);
      }}
      maxLength={maxDisc}
        className="form-control"
        name="disc"
        id="disc"
        aria-describedby="helpId"
      /> <span style={{float:"right"}}>Used: {textChar}/{maxDisc} Words</span>
      <br />
      <label htmlFor="url">Drive Link</label>
      <input
        type="text"
        className="form-control"
        name="url"
        id="url"
        aria-describedby="helpId"
        placeholder="https://drv.example.pdf?share=1.com"
      />
      <small id="helpId" className="form-text">Use Google Drive URL? Before using URL, make sure that the URL is accessible to everyone.</small>
    </div>
    <div style={{ textAlign: "center" }}>
      <button type="reset" className='btn btn-warning'>RESET</button>
      <button type='submit' className='mx-2 btn btn-danger'>PUBLISH</button>
    </div>
  </form>
  </div>
  </>
  );
}

export const ADDDownloads=()=>{
  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = {
      title: event.target.title.value,
      url: event.target.url.value,
    };
  
    try {
      // Make a POST request to your server with Axios
      const response = await axios.post('https://smartserver-ip6l.onrender.com/download', formData);
      
      alert(response.data.title+" Note Added Successfully")
      
      // reset the form after successful submission
      event.target.reset();
    } catch (error) {
      // Handle errors
      console.error('Error submitting form:', error);
    }
  };
  return(
  <>
  <div>
   
  <form method='post' onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="title" className="form-label">Title</label>
      <input
        type="text"
        maxLength={30}
        className="form-control"
        name="title"
        id="title"
        aria-describedby="helpId"
        placeholder="Enter Notes Heading"
        required
      />
      <br />
      <label htmlFor="url">Drive Link</label>
      <input
        type="text"
        className="form-control"
        name="url"
        id="url"
        aria-describedby="helpId"
        placeholder="https.drv.download.linl.com/"
      />
      <small id="helpId" className="form-text">Use Google Drive URL? Before using URL, make sure that the URL is accessible to everyone.</small>
    </div>
    <div style={{ textAlign: "center" }}>
      <button type="reset" className='btn btn-warning'>RESET</button>
      <button type='submit' className='mx-2 btn btn-danger'>PUBLISH</button>
    </div>
  </form>
  </div>
  </>
  );
}


