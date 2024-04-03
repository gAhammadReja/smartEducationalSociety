
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Notice from './Notice';
import Downloads from './Downloads';
import Faculties from './Faculties';
import Login from './Login';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import AdminDashboard from './admin/dashboard'
import StDashboard from './student/stdashboard'
import Contact from './contact';
import CoursesList from './CoursesList';
import StudentList from './components/StudentList';
import { PageNotFound } from './components/error';
import TDashboard from './teacher/teacherDashboard.';
import TeacherList from './admin/teacherList';
import MyTube from './mytube/youTubeClone';

const App = () => {
  return (
    <>
    
    <Router>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route path="/about" element={<About/>} />
          <Route path="/notice" element={<Notice/>} />
          <Route path="/downloads" element={<Downloads/>} />
          <Route path="/faculties" element={<Faculties/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/stdashboard" element={<StDashboard/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/coursesList" element={<CoursesList/>} />
          
          <Route path="/adminDashboard" element={<AdminDashboard/>} />
          <Route path="/adminDashboard/ViewTeachersList" element={<TeacherList/>} />
          <Route path="/adminDashboard/StudentList" element={<StudentList/>} />
          <Route path="/teacherPanel" element={<TDashboard/>} />
          <Route path="*" element={<PageNotFound/>} />
          <Route path='/myTube' element={<MyTube/>}/>
        </Routes>    
    </Router>
    </>
  );
};

export default App;
