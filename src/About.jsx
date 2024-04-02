import React from 'react';
import Navbar from './components/navbar'; // Import your Navbar component
import Footer from './components/footer'; // Import your Footer component

const About = () => {

// style
let divStyle={
  position: "relative", 
  width: "100%",
  height: "0",
  paddingTop: "141.4286%",
  paddingBottom: "0", 
  boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)", 
  marginTop: "1.6em",
  marginBottom: "0.9em", 
  overflow: "hidden",
  borderRadius: "8px", 
  willChange: "transform"
}
let frameStyle = {
  position:"absolute",
  width:"100%",
  height:"100%",
  top:"0",
  letft:"0",
  border:"none",
  padding:"0",
  margin:"0"
}
  return (
    <div>
      <Navbar></Navbar>
      <div className="container p-4" style={{minHeight:"50vh"}}>
        {/* Your main content goes here */}
        <div style={divStyle}>
  <iframe loading="lazy" style={frameStyle}
    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFxhxra2p0&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>
<hr />
<div style={{
      position: 'relative',
      width: '100%',
      height: 0,
      paddingTop: '141.4286%',
      paddingBottom: 0,
      boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
      marginTop: '1.6em',
      marginBottom: '0.9em',
      overflow: 'hidden',
      borderRadius: '8px',
      willChange: 'transform'
    }}>
      <iframe
        loading="lazy"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          border: 'none',
          padding: 0,
          margin: 0
        }}
        src="https://www.canva.com/design/DAFxtjt1UyA/view?embed"
        allowFullScreen
        allow="fullscreen"
      />
    </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
