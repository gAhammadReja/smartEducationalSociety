import React, { useState } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
function Contact() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container border my-2">
        <div
          className="m-2 p-2 light d-flex"
          style={{
            textShadow: "0 1px 2px gold",
            maxHeight: "400px",
            height: "70vw",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            // backgroundImage: 'url(contact.jpg)',
            backgroundImage:
              'url("https://source.unsplash.com/random/600x200/?contact")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <h1>"Get In Touch With Us"</h1>
          <h2 className="p-2 m-2" style={{ color: "black" }}>
            "Connect with Us: Reach Out, Share Feedback, or Inquire – We're Here
            to Listen!"
          </h2>
        </div>
        <ContactMail 
        heading="Contact Us" 
        type2="Email"
        label3="Message"
        ></ContactMail>
      <br />
      <br />
      <Map />
      </div>
      <Footer></Footer>
    </>
  );
}

export default Contact;
export const ContactMail = (props) => {
  const [status, setStatus] = useState("Submit");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { cname, cemail, cmsg } = e.target.elements;
    let details = {
      cname: cname.value,
      cemail: cemail.value,
      cmsg: cmsg.value,
    };

    let response = await fetch("https://mcetsm.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <>
      <h2>{props.heading}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cname">Name:</label>
          <input
            type="text"
            className="form-control"
            id="cname"
            name="cname"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cemail">{props.type2}:</label>
          <input
            type={props.type2}
            className="form-control"
            id="cemail"
            name="cemail"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cmsg">{props.label3}:</label>
          <textarea
            className="form-control"
            id="cmsg"
            name="cmsg"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn my-4 btn-primary">
          {status}
        </button>
      </form>
      <h6>
        Call Us On:{" "}
        <a href="tel:8942871448">
          <i className="fa fa-phone-square" aria-hidden="true"></i>8942871448
        </a>{" "}
        or{" "}
        <a href="tel:8642009874">
          <i className="fa fa-phone-square" aria-hidden="true"></i>8642009874
        </a>{" "}
      </h6><br />
      <a href="https://www.facebook.com/profile.php?id=100088898303751&__cft__[0]=AZVwtbPnzbhU8grSahaKb0bOlBE20NujhiP6PVGIar-C6wXEHkBBBoCeaTHTburSXKNCZWr9pqRAcZd-6mW12WT78alLvrro_15suGjwiO7ucfr_BYx2wBFkFiD40NTBzGnJvDiUMEIdmQ0gnmSO9iwC&__tn__=-]C%2CP-R"><img width={20} src="fb.png" alt="" />
      Facebook
      </a>{" "}
      &nbsp;&nbsp;&nbsp; <a href="https://www.youtube.com/@studywithramjansir1963"><img src="yt.png" alt="" />YouTube</a>
      &nbsp;&nbsp;&nbsp;{" "}
      <a href="https://wa.me/918642009874?text=Assalamuwalaykum_Smart_Academy_">
        <img src="wa.png" alt="" />
        WhatsApp
      </a>
    </>
  );
};


export const Map = ()=>{
return(
  <>
  <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d383.15153086008775!2d88.26324461523568!3d24.3038293819254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbd18d9713b591%3A0x23e34153a947e226!2sSMART%20ACADEMY!5e0!3m2!1sbn!2sin!4v1702832407721!5m2!1sbn!2sin"
        width="100%"
        height="250"
        style={{ border: "0" }}
        allowfullscreen="true"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
  </>
);
}