import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import Navbar from "./navbar";
import Footer from "./footer";
const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [paymentData, setPaymentData] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [selectedClass, setSelectedClass] = useState("LKG"); // Default class
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const formRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://smartserver-ip6l.onrender.com/students"
        );

        if (response.status >= 200 && response.status < 300) {
          const fetchedStudents = response.data;
          setStudents(fetchedStudents);
        } else {
          console.error("Error:", response.status, response.statusText);
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  useEffect(() => {
    // Filter students based on the selected class
    const filtered = students.filter(
      (student) => student.class === selectedClass
    );
    setFilteredStudents(filtered);
  }, [students, selectedClass]);

  const update = (registrationId, phoneNumber) => {
    localStorage.setItem(
      "userData",
      JSON.stringify(
        `students?registrationId=${registrationId}&phoneNumber=${phoneNumber}`
      )
    );

    navigate("/stdashboard");


  };
  
  const handleSubmitPayment = async (event) => {
    event.preventDefault();
  
    // Get the form data
    const formData = new FormData(event.target);
    const paymentDetails = {
      // ID: teacherID,
      month: formData.get("month"),
      amount: formData.get("amount"),
      paymentDate: new Date().toISOString(),
      // Add other fields as needed
    };
  
    try {
      const response = await fetch("https://smartserver-ip6l.onrender.com/payments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentDetails),
      });
  
      if (response.ok) {
        // Refresh payment data after successful submission
        const updatedResponse = await fetch(
          `https://smartserver-ip6l.onrender.com/payments`
        );
        const updatedPaymentData = await updatedResponse.json();
        setPaymentData(updatedPaymentData);
  
        // Reset the form
        formRef.current.reset();
      } else {
        alert("Failed to submit payment details");
      }
    } catch (error) {
      alert("Error submitting payment details:", error);
    }
  };


  return (
    <div>
      <div
        style={{
          minHeight: "60vh",
        }}
      >
        <Navbar></Navbar>
        <label className="px-4 py-2">
          <h2>Select A Class To View Student Details</h2>
          <select
            style={{
              width: "200px",
              padding: "3px",
              fontSize: "1.5rem",
              fontWeight: "700",
              backgroundColor: "whitesmoke",
              textAlign: "center",
              margin: "5px 15px",
            }}
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            <option value="LKG">LKG</option>
            <option value="UKG">UKG</option>
            <option value="I">I</option>
            <option value="II">II</option>
            <option value="III">III</option>
            <option value="IV">IV</option>
            <option value="V">V</option>
            <option value="VI">VI</option>
            <option value="VII">VII</option>
            <option value="VIII">VIII</option>
            <option value="IX">IX</option>
            <option value="X">X</option>
            <option value="XI">XI</option>
            <option value="XII">XII</option>
            {/* Add more class options as needed */}
          </select>
        </label>

        <h2 className="p-4 bg-primary"> STUDENT OF CLASS : {selectedClass}</h2>
        <ul>
          {filteredStudents.map((student) => (
            <li className=" p-4 my-1" style={{listStyle:'none',boxShadow:'-3px 3px 5px'}} key={student._id}>
              <h3>{student.studentName}</h3><h5>C/O: {student.fathersName}</h5>Class: {student.class} &nbsp;&nbsp;{" "} 
              &nbsp;&nbsp;
              &nbsp;&nbsp;

              <i class="fa fa-phone" aria-hidden="true"></i>{" "}
              <a href={"tel:" + student.phoneNumber}>{student.phoneNumber}</a>
              &nbsp;&nbsp;
              &nbsp;&nbsp;
              <span className="btn">
                <img src="../wa.png" alt="" />{" "}
                <a
                  target="/" 
                  href={
                    "https://wa.me/91" +
                    student.whatsappNumber +
                    "?text=Assalamuwalaykum " +
                    student.studentName +
                    " This Is Smart Academy -"
                  }
                >
                  {student.whatsappNumber}
                </a>
              </span>
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                Registration Id : {student.registrationId} &nbsp;&nbsp;
                <div>
                

<div
                  className="btn btn-success"
                  onClick={(e) =>
                    update(student.registrationId, student.phoneNumber)
                  }
                >VIEW </div>

                </div>
              </div>
            </li>
          ))}
        </ul>

        
      </div>
      <Footer></Footer>
    </div>
  );
};

export default StudentList;
