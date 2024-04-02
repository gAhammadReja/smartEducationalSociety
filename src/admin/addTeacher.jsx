import axios from "axios";
import { useState } from "react";


export const AddTeacher = ()=>{

    let [submit, setSubmit] = useState("Submit");
    const [formData, setFormData] = useState({
        teacherOf: "",
        name: "",
        address: "",
        phoneNumber: "",
        whatsappNumber: "",
        qualification: "",
        experience:"",
        isAgree: false,
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
  
      // Apply toUpperCase() only for specific fields
      const updatedValue =
        name === "qualification" || name === "name" ? value.toUpperCase() : value;
  
      setFormData({
        ...formData,
        [name]: name === "isAgree" ? e.target.checked : updatedValue,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        setSubmit("Sending Data");
        console.log("Form Data:", formData); // Add this line for debugging
  
        // Make an API request using Axios
        const response = await axios.post("https://smartserver-ip6l.onrender.com/teacher",formData);
        console.log("Server response:", response.data);
        alert("Teaching Staf Added Successfully! :)");
        setSubmit("Submit");
  
        // Reset the form after successful submission (optional)
        setFormData({
          teacherOf: "",
          name: "",
          address: "",
          phoneNumber: "",
          whatsappNumber: "",
          qualification: "",
          experience:"",
          isAgree: false,
        });
      } catch (error) {
        // Handle errors
        console.error("Error submitting form:", error);
        alert("Error submitting form:", error);
        setSubmit("Submit");
      }
    };

    return(
        <>
          <form onSubmit={handleSubmit} id="addTeacher">

      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlhtmlFor="teacherOf">Choose Teacher Of</label>
          <select
            type="text"
            className="form-control"
            id="teacherOf"
            name="teacherOf"
            value={formData.teacherOf}
            onChange={handleChange}
            required
          >
            <option value="">
              Teacher Of :
            </option>
            <option value="smart nursury">Smart Academy Nursury</option>
            <option value="smart coaching">Smart Academy Coaching</option>
            <option value="kalukhali coaching">
              Kalukhali Unique Academy Coaching
            </option>
          </select>
        </div>
      </div>

      <br />
      {/*       studentName: '', */}
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlhtmlFor="name">Teacher's Name</label>
          <input
            placeholder="Enter Teacher's Full Name"
            type="text"
            maxLength={30}
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        {/* Add more form fields based on your requirements */}
      </div>
      <br />
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlhtmlFor="address">Address</label>
          <textarea
            placeholder="Enter Full Address"
            maxLength={300}
            className="form-control"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <br />
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlhtmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            placeholder="Enter 10 Digit Phone Number"
            maxLength={10}
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <br />
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlhtmlFor="whatsappNumber">WhatsApp Number</label>
          <input
            type="tel"
            placeholder="Enter 10 Digit WhatsApp Number"
            maxLength={10}
            className="form-control"
            id="whatsappNumber"
            name="whatsappNumber"
            value={formData.whatsappNumber}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <br />

 <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlhtmlFor="qualification">Qualificaton</label>
          <textarea
            placeholder="Enter Qualification"
            maxLength={50}
            className="form-control"
            id="qualification"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <br />     

      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlhtmlFor="experience">Teaching Experience</label>
          <textarea
            placeholder="Enter Experience"
            maxLength={100}
            className="form-control"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <br />     
      <br />
      
      <div className="form-group">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            id="isAgree"
            name="isAgree"
            checked={formData.isAgree}
            onChange={handleChange}
            required
          />
          <label className="form-check-label" htmlhtmlFor="isAgree">
            I agree to the terms and conditions
          </label>
        </div>
      </div>
      <br />

      <button type="submit" className="btn btn-primary">
        {submit}
      </button>
    </form>
        </>
    )
}