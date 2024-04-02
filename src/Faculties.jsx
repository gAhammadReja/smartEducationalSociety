import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar'; // Import your Navbar component
import Footer from './components/footer'; // Import your Footer component
import './Faculties.css'

const Faculties = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        {/* Your main content goes here */}
        <h1>Welcome to Smart Educational Society</h1>
        <p>Providing quality education to empower the next generation of learners.</p>
        <AllTeachers></AllTeachers>
      </div>
      <Footer />
    </div>
  );
};

export default Faculties;


const AllTeachers = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://smartserver-ip6l.onrender.com/teacher");
        const data = await response.json();
        setTeachers(data);
      } catch (error) {
        console.error("Error fetching teacher data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="header">
        <h1>Our Faculties</h1>
      </div>
      <ul className="faculty-list">
        {teachers.map((teacher) => (
          <li className="faculty-item" key={teacher._id}>
            <h3>{teacher.name}</h3>
            <p>Experience: <span>{teacher.experience}</span></p>
            <p>Qualification: <span>{teacher.qualification}</span></p>
          </li>
        ))}
      </ul>
    </>
  );
};

