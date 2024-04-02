 

import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { NavLink } from "react-router-dom";
import axios from 'axios';

const StDashboard = () => {
  const [PaymentData, setPaymentData] = useState([]);
  const [ID, setID] = useState([]);
  const [fulldata, setfulldata] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

// Declare variables 
let FullDate = new Date();
let nowMonth = FullDate.getMonth();

let dataStyle = {
  color: "black",
  fontWeight: "bolder",
  margin: "2%",
  minHeight: "70vh",
};

let feesStyle = {
  color: 'blue',
  fontFamily: "arial",
  fontWeight: "800"
}

let flexing = {
  flexWrap: "nowrap",
  overflowX: "scroll",
  justifyContent: "space-evenly",
};


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedUserData = JSON.parse(localStorage.getItem('userData'));
  
        if (storedUserData) {
          setUserData(storedUserData);
  
          const response = await axios.get(`https://smartserver-ip6l.onrender.com/${storedUserData}`);
          console.log(response.data);
          setID(response.data[0]._id);
  
          if (response.data && response.data[0].studentName) {
            let student = response.data[0];
            setID(student._id);
            let stclass = student.class;
            let fees;
            let stType;
  
            //   fee calculation logic here...
            if (stclass === 'V' || stclass === 'VI') {
              fees = 300;
              stType = "Coaching Student"
            } else if (stclass === "VII" || stclass === 'VIII') {
              fees = 350;
              stType = "Coaching Student"
            } else if (stclass === 'I' || stclass === 'I' || stclass === 'II' || stclass === 'III' || stclass === 'IV' || stclass === "LKG" || stclass === "UKG") {
              fees = 250;
              stType = "Nursery Student"
            } else if (stclass === 'IX' || stclass === 'X') {
              fees = 500;
              stType = "Coaching Student"
            } else {
              stType = "HS or Others"
              fees = 'Please Contact To Office'
              feesStyle.color = "red";
              feesStyle.fontSize = "10px";
              feesStyle.fontWeight = "500"
            }
  
            setfulldata(
              <div>
              <div className="studentPprofile border p-2">
                <h2 className="stdname" style={{
                  textTransform: "uppercase"
                }}>
                  {student.studentName}
                  <span className="px-2" style={{ fontSize: "1rem" }}>
                    ({stType})
                  </span>
                </h2>
                <div title="academic details">
                  <div className="bg-info row-11 border p-2 my-1">
                    <h2>Academic Information</h2>
                  </div>
                  <div className="row-11 border p-2 my-1 d-flex" style={flexing}>
                    <div className="mx-3">Class : {stclass}</div>
                    <div className="mx-3">Reg.No: {student.registrationId}</div>
                    <div className="mx-3">Session : 2024</div>
                  </div>
                </div>
                <div className="px-4 py-2">Registration date:&nbsp;&nbsp; {student.registrationDate}</div>
                <div title="Personal details">
                  <div className="bg-info row-11 border p-2 my-1">
                    <h2>Personal Information</h2>
                  </div>
                  <div className="row-11 border p-2 my-1">
                    <div className="m-2 border p-2">
                      Father's Name : <span>{student.fathersName}</span>
                    </div>
                    <div className="m-2 border p-2">
                      Mother's Name : <span> {student.mothersName}</span>{" "}
                    </div>
                    {/* <div className="m-2 border p-2">
                          Village Name :{" "}
                          <span> Sundarpur Diyarapara</span>{" "}
                        </div> */}
                    <div className="m-2 border p-2">
                      Full Address :{student.address}
                      <span>
                        {" "}
                        Dist-Murshidabad , PIN-742135 W.B{/* fetch data */}
                      </span>{" "}
                    </div>
                  </div>
                </div>
                <div title="Fees Details">
                  <div className="bg-info row-11 border p-2 my-1">
                    <h2>Fees And Payment</h2>
                  </div>
                  <div className="row-11 border p-2 my-1">
                    <h5>Your Tuition Fee is : <span style={feesStyle}>{fees} <i className="fa fa-rupee" aria-hidden="true"></i>/month</span>&nbsp;&nbsp;&nbsp;<i className="fa fa-calendar" style={{ color: "purple" }} aria-hidden="true"></i>{FullDate.getDate()}/{nowMonth + 1}/{FullDate.getFullYear()}</h5>
                    <div>
  <ul className="faculty-list">
  {PaymentData && PaymentData.length > 0 ? (
  PaymentData.map((payment) => (
    <li key={payment._id} className="faculty-item">
      <h3 style={{ color: 'red' }}>{payment.month}</h3>
      <p>
        Amount: <span>{payment.amount}</span>
      </p>
      <p>
        Date: <span>{payment.paymentDate}</span>
      </p>
    </li>
  ))
  ) : (
  <p>No payment data available</p>
  )}
  
  </ul>
  </div>
  
  
  
                  </div>
                 
  
                  <div className="row-11 p-2 my-3 bg-success" style={{ boxShadow: "-5px -5px 10px grey", color: "whitesmoke", textShadow: "1px -1px 1px black" }}>
                    {/* <h4>You Have Paied Fees Of {} 6 Months Out Of {nowMonth+1} <br></br>
            You Have Total Due Of {(nowMonth+1)-6} Months
                  </h4> */}
                  </div>
                </div>
              </div>
            </div>
            );
  
            setLoading(false);
          } else {
            setLoading(false);
            setUserData("nothing");
          }
        }
      } catch (error) {
        setError(error);
        setfulldata(
          <>
          <div className="container" style={{
            margin: "auto"
          }}>
            <h4 className="p-4 bg-danger">
              Sorry No Data Found !<br />
              Please Enter Valid User Data !
            </h4>
            <br />
            <br />
            <div>
              <h5 className="bg-info p-2" style={{ width: "fit-content", }}>Help ? Manual !</h5>
              If You forget Your Log In Information So Please Contct Your <i className="fa fa-institution" aria-hidden="true"></i>Institution / Coaching Center
              <br />
            </div><br />
            <div style={{
              display: "flex",
              justifyContent: "center"
            }}>    <div className="btn btn-primary" style={{
            }}>
                <NavLink to='/login' style={{
                  color: "whitesmoke",
                  fontWeight: "700",
                  fontSize: "1.4rem"
                }}>Back To LoginPage</NavLink>
              </div>
            </div>
          </div>
        </>
        );
        setLoading(false);
      }
    };
    fetchUserData();
  
    let fetchPaymentData = async () => {
      try {
        const response = await fetch(`http://localhost:3001/payments?ID=${ID}`);
  
        const paymentData = await response.json();
        setPaymentData(paymentData);
      } catch (error) {
        console.error("Error fetching payment data:", error);
      }
    };
    fetchPaymentData();
  
  },[]); // Empty dependency array to run only once when the component mounts
  
  console.log(userData, loading, error);

  return (
    <>
      <Navbar />
      <div className="data" style={dataStyle}>
        {fulldata}
      </div>
      <Footer />
    </>
  );
};

export default StDashboard;
