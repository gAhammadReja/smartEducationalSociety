import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { ADDDownloads } from "../admin/dashboard";
import axios from 'axios';

const TDashboard = () => {

  let dataStyle = {
    color: "black",
    fontWeight: "bolder",
    margin: "2%",
    minHeight: "70vh",
  };


  const [fulldata, setfulldata] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const storedUserData = JSON.parse(localStorage.getItem('userData'));

        if (storedUserData) {
          setUserData(storedUserData);

          const response = await axios.get(`https://smartserver-ip6l.onrender.com/${storedUserData}`);
          console.log(response.data);  
          if (response.data && response.data[0].name) {
            // Access the specific property you need
            let teacher = response.data[0];
            console.log(teacher.name);
            setfulldata(
              <div>
                <div className="studentPprofile border p-2">
                  <h2 className="stdname" style={{
                    textTransform: "uppercase"
                  }}>
                    {teacher.name} 
                  </h2>
                   <div title="Personal details">
                    <div class="bg-info row-11 border p-2 my-1">
                      <h2>Personal Information</h2>
                    </div>
                      <div className="m-2 border p-2">
                        Address :{teacher.address}
                        <span>
                          {" "}
                          Dist-Murshidabad , PIN-742135 W.B{/* fetch data */}
                        </span>{" "}
                      </div>
                    </div>
                  </div>
                  <section className="m-2" style={{textAlign:"center"}}>
                    <NavLink to="/adminDashboard/StudentList">
<div className="btn btn-primary"><h2>All Our Students</h2></div>
                    </NavLink>
                  </section>
<section className="container p-4 border" ><ADDDownloads></ADDDownloads></section>
              </div>
            );
          }

          setLoading(false);
        } else {
          setLoading(false);
          setUserData("nothing")
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
                If You forget Your Log In Information So Please Contct Ramjan Sir
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
        )
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  console.log(userData, loading, error)

  return (
    <>
      <Navbar></Navbar>
      <div className="data" style={dataStyle}>
        {fulldata}
      </div>
      <Footer></Footer>
    </>
  );
};

export default TDashboard;
