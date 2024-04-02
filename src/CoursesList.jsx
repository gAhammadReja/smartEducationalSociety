import React, { useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { ContactMail } from './contact';
const CoursesList = () => {
  const courses = [
    
    { id: 1, title: 'Smart Academy নার্সারি বিভাগ LKG-IV',Admission: '300', Fee:'250'},
    { id: 2, title: 'Smart Academy কোচিং বিভাগ V-VI', Admission: '200', Fee:'300'  },
    { id: 3, title: 'Smart Academy কোচিং বিভাগ VII-VIII', Admission: '200', Fee:'350'  },
    { id: 4, title: 'Smart Academy কোচিং বিভাগ IX-X', Admission: '200', Fee:'500'  },
    { id: 5, title: 'Kalukhali Unique Academy কোচিং বিভাগ V-VI', Admission: '200', Fee:'300'},
    { id: 6, title: 'Kalukhali Unique Academy কোচিং বিভাগ VII-VIII', Admission: '200', Fee:'350'},
    { id: 6, title: 'Kalukhali Unique Academy কোচিং বিভাগ IX-X', Admission: '200', Fee:'500'}
  ];


  const [display,setDisplay] = useState("none");
  return (
    <>
    <Navbar></Navbar>
    
    <div className="container mt-4" style={{minHeight:"60vh"}}>
    <h4 className="my-4 p-4 bg-success" style={{borderRadius:"10px",color:"aliceblue",boxShadow:"-2px 2px 3px blue"}}> Click On Apply Now Button Respected To Your Course Details And Submit Your Details For Admission : </h4>
      <h2 className="mb-4">Available Courses : </h2>
      <ul className="list-group" style={{fontSize:"1.5rem"}}>
        {courses.map(course => (
          <>
          <li key={course.id} className=" list-group-item p-4" style={{
            minHeight:"150px",
            borderTop:"10px solid rgb(136, 0, 255)",
            borderRadius:"10px",
            boxShadow:"2PX 2PX 5px rgb(126, 0, 255)"

          }}>
          <h4>{course.title}</h4>
          <h4>Adnission Fees: {course.Admission}</h4>
          <h4>Monthly Fees: {course.Fee}</h4> 
          <div className="btn-primary btn py-2 p-4" style={{
            float:"right"
          }} 
          onClick={()=>{
            if (display==="none") {
              setDisplay("block")
            }else{
              setDisplay("none")
            }
          }}
          >Apply</div>
          <div style={{
            display:display
          }}>
          <ContactMail
          heading={course.title}
          type2="Phone"
          label3="Last Qualified Class"
          ></ContactMail></div>
          </li>
          <br />
          </>
        ))}
      </ul>
    </div>

    <Footer></Footer>
    </>
  );
};

export default CoursesList;
