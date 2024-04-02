import React, { useState } from "react";
import axios from "axios";

const AddStudentForm = () => {
  let [submit, setSubmit] = useState("Submit");
  const [formData, setFormData] = useState({
    class: "",
    division: "",
    studentName: "",
    fathersName: "",
    mothersName: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    phoneNumber: "",
    whatsappNumber: "",
    schoolName: "",
    isAgree: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Apply toUpperCase() only for specific fields
    const updatedValue =
      name === "class" || name === "schoolName" ? value.toUpperCase() : value;

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
      const response = await axios.post(
        "https://smartserver-ip6l.onrender.com/students/",
        formData
      );
      console.log("Server response:", response.data);
      alert("Student Added Successfully! :)");
      setSubmit("Submit");

      // Reset the form after successful submission (optional)
      setFormData({
        class: "",
        division: "",
        studentName: "",
        fathersName: "",
        mothersName: "",
        dateOfBirth: "",
        gender: "",
        address: "",
        phoneNumber: "",
        whatsappNumber: "",
        schoolName: "",
        isAgree: false,
      });
    } catch (error) {
      // Handle errors
      console.error("Error submitting form:", error);
      alert("Error submitting form:", error);
      setSubmit("Submit");
    }
  };

  return (
    <form onSubmit={handleSubmit} id="addStudents">
      {/* class */}
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlhtmlFor="class">Class</label>
          <select
            className="form-control"
            type="text"
            id="class"
            name="class"
            value={formData.class}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Class For Admission
            </option>
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
        </div>
      </div>
      <br />
      {/* division */}
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlhtmlFor="division">Division</label>
          <select
            type="text"
            className="form-control"
            id="division"
            name="division"
            value={formData.division}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Choose A Division
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
          <label htmlhtmlFor="studentName">Student Name</label>
          <input
            placeholder="Enter Students Full Name"
            type="text"
            maxLength={30}
            className="form-control"
            id="studentName"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            required
          />
        </div>
        {/* Add more form fields based on your requirements */}
      </div>
      <br />
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlhtmlFor="fathersName">Father's Name</label>
          <input
            type="text"
            placeholder="Enter Students Father's Name"
            maxLength={30}
            className="form-control"
            id="fathersName"
            name="fathersName"
            value={formData.fathersName}
            onChange={handleChange}
            required
          />
        </div>
        {/* Add more form fields based on your requirements */}
      </div>
      <br />
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlhtmlFor="mothersName">Mother's Name</label>
          <input
            placeholder="Enter Students Mother's Name"
            type="text"
            maxLength={30}
            className="form-control"
            id="mothersName"
            name="mothersName"
            value={formData.mothersName}
            onChange={handleChange}
            required
          />
        </div>
        {/* Add more form fields based on your requirements */}
      </div>
      <br />
      <br />
      <div className="form-row">
        <div
          className="form-group col-md-6 d-flex"
          style={{ justifyContent: "space-between" }}
        >
          <label htmlhtmlFor="dateOfBirth">Date Of Birth</label>
          <input
            type="date"
            className="form-control"
            style={{ width: "70%" }}
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>
        {/* Add more form fields based on your requirements */}
      </div>
      <br />
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlhtmlFor="gender">Gender</label>
          <select
            type="text"
            className="form-control"
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Choose Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <br />
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlhtmlFor="address">Full Address</label>
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
          <label htmlhtmlFor="schoolName">Present School Name</label>
          <input
            type="text"
            placeholder="xxxxxx xxxxxx School"
            maxLength={30}
            className="form-control"
            id="schoolName"
            name="schoolName"
            value={formData.schoolName}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <br />
      {/* Add Student Agreement Checkbox */}
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
  );
};
export default AddStudentForm;
