import { useState, useEffect, useRef } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
// import { useNavigate } from 'react-router-dom';

const TeacherList = () => {
    const [data, setData] = useState([]);
    const [PaymentData, setPaymentData] = useState([]);
    const [teacherID, setTeacher] = useState([]);
    const [paymentBox, userPayment] = useState([]);
    const formRef = useRef(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            "https://smartserver-ip6l.onrender.com/teacher"
          );
          const result = await response.json();
          setData(result);
        } catch (error) {
          console.error("Error fetching teacher data:", error);
        }
      };

  
      fetchData();
    }, []);
  
    const handlePaymentClick = (ID) => {
     setTeacher(ID);

  
     const fetchPaymentData = async () => {
      try {
        const response = await fetch(`https://smartserver-ip6l.onrender.com/payments?ID=${teacherID}`);
        
        const paymentData = await response.json();
        setPaymentData(paymentData);
      } catch (error) {
        console.error("Error fetching payment data:", error);
      }
    };
     fetchPaymentData();


      userPayment({
        display: "block",
        color: "white",
        position: "absolute",
        maxWidth: "70%",
        top: "25%",
        left: "15%",
      });
    };
  
    const handleSubmitPayment = async (event) => {
      event.preventDefault();
    
      // Get the form data
      const formData = new FormData(event.target);
      const paymentDetails = {
        ID: teacherID,
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
            `https://smartserver-ip6l.onrender.com/payments?ID=${teacherID}`
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
    

    
    useEffect(() => {
      userPayment({
        display: "none",
        color: "white",
        position: "absolute",
        maxWidth: "70%",
        top: "25%",
        left: "15%",
      });
    }, []);
    

      return (
        <>
          <Navbar />
          <div style={{ backgroundColor: "#a0a" }} className="container border p-2">
            <ul className="faculty-list">
              {data.map((teacher) => (
                <li key={teacher._id} className="faculty-item">
                  <h3>{teacher.name}</h3>
                  <p>
                    Works In: <span>{teacher.teacherOf}</span>
                  </p>
                  <p>
                    Phone Number:{" "}
                    <span>
                      <i
                        className="fa fa-phone"
                        style={{ color: "blue" }}
                        aria-hidden="true"
                      ></i>{" "}
                      <a href={"tel:" + teacher.phoneNumber} target="_">
                        {teacher.phoneNumber}
                      </a>{" "}
                    </span>
                  </p>
                  <p>
                    WhatsApp Number:{" "}
                    <span>
                      <i
                        className="fa fa-phone bg-success p-1"
                        style={{ color: "white", borderRadius: "50%" }}
                        aria-hidden="true"
                      ></i>{" "}
                      <a
                        target="/"
                        href={
                          "https://wa.me/91" +
                          teacher.whatsappNumber +
                          "?text=AssalamuWaAlaykum"
                        }
                      >
                        {teacher.whatsappNumber}
                      </a>{" "}
                    </span>
                  </p>
                  <div
                    className="btn btn-danger border mx-1"
                    style={{ float: "right", marginTop: "5px" }}
                    onClick={() => handlePaymentClick(teacher._id)}
                  >
                    Payment
                  </div>
                </li>
              ))}
            </ul>
            <div  style={paymentBox} className="payment p-3 border bg-danger">
              <span
                className="btn-dark btn"
                style={{ float: "right" }}
                onClick={() => {
                  userPayment({
                    display: "none",
                  });
                }}
              >
                x
              </span>{" "}
    
              <form ref={formRef} onSubmit={handleSubmitPayment}>
  {/* ... (form fields) */}
                <label htmlFor="">{teacherID}</label><br />
                <label htmlFor="month" >Month:</label><br />
                <select className="btn border btn-dark" id="month" name="month" required>
  <option value="" disabled selected>Select a month</option>
  <option value="January">January</option>
  <option value="February">February</option>
  <option value="March">March</option>
  <option value="April">April</option>
  <option value="May">May</option>
  <option value="June">June</option>
  <option value="July">July</option>
  <option value="August">August</option>
  <option value="September">September</option>
  <option value="October">October</option>
  <option value="November">November</option>
  <option value="December">December</option>
</select>

                <br />
                <label htmlFor="amount">Amount:</label><br />
                <input type="text" id="amount" className="btn border btn-dark" name="amount" required />
                <br />
                {/* Add other form fields as needed */}
                
  <button type="submit" className="btn btn-primary my-2 ">
    Submit Payment
  </button>
</form>

              {}
              <div>
  <ul className="faculty-list">
    {Array.isArray(PaymentData) ? (
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
          </div>
          <Footer />
        </>
      );
    }; 


export default TeacherList;
