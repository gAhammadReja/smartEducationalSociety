import React from 'react';
import Navbar from './components/navbar'; // Import your Navbar component
import EnrollButton from './components/enrollNow'; // Import your "Enroll Now" button component
import Footer from './components/footer'; // Import your Footer component
import {ContactMail} from './contact';
import {Map} from './contact';
import './home.css'
const Home = () => {

  let aStyle={
    textDecoration:"none",
    color:"white"
  }

  return (
    <div className='homePage container border pt-4 px-0 ' >
      <Navbar />
      <div className="container p-4 main" style={{width:"96%",margin:"auto",maxWidth:"90vw"}}>
        <h1>Welcome to Smart Educational Society</h1>
        <p style={{
          padding:"2vw",
          lineHeight:"2.3rem",
          background:"linear-gradient(rgba(255, 1, 44, 0.3),rgba(4, 1, 125, 0.3))",
          border:"2px solid rgba(2, 1, 4, 0.48)"
        }}> LKG থেকে চতুর্থ শ্রেণী পর্যন্ত নার্সারি বিদ্যালয় ও কোচিং বিভাগ এবং পঞ্চম থেকে দশম শ্রেণী পর্যন্ত কোচিং বিভাগে সমস্ত বিষয় যত্নসহকারে বিষয় ভিত্তিক অভিজ্ঞ শিক্ষক-শিক্ষিকা দ্বারা পড়ানো হয় ।</p>
        
        <EnrollButton />
        <br />
      </div>

      <div className='row bg-dark d-flex' style={{
        margin:"2rem auto",
        maxWidth:"100%",
        textAlign:"center",
        fontWeight:"700",
        fontSize:"1.2em",
        alignItems:"center"}}> 
    <div className="col-4  py-2 "><a style={aStyle} href="#smartc">কোচিং বিভাগ (স্কুল বোর্ড)</a></div>
      <div className="col-4 py-2"><a href="#smartn" style={aStyle}>নার্সারি বিভাগ</a></div>
      <div className="col-4 py-2"><a href="#unique" style={aStyle}>কোচিং বিভাগ (মাদ্রাসা বোর্ড)</a></div></div>



      <div className="container">
      <Coaching></Coaching><br />
      <Nursury></Nursury><br />
      <Unique></Unique><br /><br /></div>
      <div className='row' style={{margin:"auto"}}>

<div className="col-lg-8 col-12" style={{margin:"auto",maxHeight:"69vh",minHeight:"30vh"}}>
<Courses />
</div>
<div className="col-lg-4 col-12 bg-dark p-4" style={{margin:"",height:"75vh",color:"aliceblue"}}>
<ContactMail 
        heading="Contact Us" 
        type2="Email"
        label3="Message"
        ></ContactMail>
        <Map></Map>
</div>
      </div>
      <div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;


//home info section
const Coaching=()=>{
  return(
    <>
    <div className='coaching'>
    <div className='left'  id='smartc'><img loading='lazy' src="smart.jpg" alt="hello" /></div>
    <div className='right'><h3>Smart Academy Coaching Center</h3>
    <p>
       {/* Content of coaching center */}
<h3 className='bg-primary' style={{
  color:"azure"
}}>
<i class="fa fa-magic p-2" aria-hidden="true"></i>
  <strong>কোচিং বিভাগ LKG-XII</strong>
  </h3>
  <ul style={{
    listStyle:"square",
    fontSize:"1.2rem"
  }}>
    <li>পঞ্চম থেকে দশম শ্রেণী পর্যন্ত সকল বিষয় পড়ানো হয় (সকাল ৬ঃ৩০ থেকে ৯ঃ১০) </li>
    <li>LKG থেকে Class IV (চতুর্থ) শ্রেণী পর্যন্ত বিষয় পড়ানো হয় (বৈকাল ৩ঃ০০ থেকে সন্ধ্যা ৫ঃ৩০)</li>
    <li>একাদশ ও দ্বাদশ শ্রেণীর কলা বিভাগ (ARTS) </li>
    <li>অভিজ্ঞ ও বিষয়ভিত্তিক শিক্ষক-শিক্ষিকামণ্ডলীর দ্বারা শিক্ষাদান</li>
    <li>প্রতি সপ্তাহে ৫ দিন class  </li>
    <li>প্রতি সপ্তাহে পরীক্ষার ব্যাবস্থা</li>
    <li>আরবি ও ইসলামিক শিক্ষা , computer শিক্ষা , এবং স্বাস্থ্য ও শারীরশিক্ষার ওপর বিশেষ নজর</li>
    <li>অতিস্বল্প খরচে উন্নত্মানের শিক্ষাদানই আমাদের প্রধান উদ্দেশ্য</li>
    </ul>
    <h5 className='bg-dark py-1' style={{textAlign:"center",color:"white"}}>Gobindapur*Sundarpur*Bhagwangola</h5>
      </p>
      </div>
    </div>
    </>
  )
}

const Nursury=()=>{
  return(
    <>
    <div className='nursury'>
    <div className='left' id='smartn'><img src="nursury.jpg" alt="hello" loading='lazy' /></div>
    <div className='right'><h2>Smart Academy Nursury Center</h2><p>
      {/* Content of nursury center */}
<h3 className='bg-primary' style={{
  color:"azure"
}}>
<i class="fa fa-magic p-2" aria-hidden="true"></i>
  <strong>নার্সারি বিভাগ LKG-IV</strong>
  </h3>
  <ul style={{
    listStyle:"square",
    fontSize:"1.2rem"
  }}>
    <li>LKG থেকে Class IV (চতুর্থ) শ্রেণী পর্যন্ত নার্সারি শিক্ষালয় (সকাল ৬ঃ৪৫ থেকে ৯ঃ২৫) </li>
    <li>সপ্তাহে ৬ দিন class  </li>
    <li>প্রতি সপ্তাহে পরীক্ষার ব্যাবস্থা</li>
    <li>আরবি ও ইসলামিক শিক্ষা , computer শিক্ষা , অঙ্কন শিক্ষা এবং স্বাস্থ্য ও শারীরশিক্ষার ওপর বিশেষ নজর</li>
    <li>অতিস্বল্প খরচে উন্নত্মানের শিক্ষাদানই আমাদের প্রধান উদ্দেশ্য</li>
    </ul>
      </p>
      
    <h5 className='bg-dark py-1' style={{textAlign:"center",color:"white"}}>Gobindapur*Sundarpur*Bhagwangola</h5>
      </div>
    </div>
    </>
  )
}

const Unique=()=>{
  return(
    <>
    <div className='Unique coaching'>
    <div className='left' id='unique'><img src="logo3.jpg" loading='lazy' alt="hello" /></div>
    <div className='right'><h3>Kalukhali Unique Academy Coaching Center</h3>
    <p>
       {/* Content of coaching center */}
<h3 className='bg-primary' style={{
  color:"azure"
}}>
<i class="fa fa-magic p-2" aria-hidden="true"></i>
  <strong>কোচিং বিভাগ V-X</strong>
  </h3>
  <ul style={{
    listStyle:"square",
    fontSize:"1.2rem"
  }}>
    <li>পঞ্চম থেকে দশম শ্রেণী পর্যন্ত সকল বিষয় পড়ানো হয় (সকাল ৬ঃ৩০ থেকে ৯ঃ১০) </li>
    {/* <li>একাদশ ও দ্বাদশ শ্রেণীর কলা বিভাগ (ARTS) </li> */}
    <li><span style={{fontSize:"1.2em",color:"red",fontWeight:"700"}}>সম্পূর্ণ মাদ্রাসা বোর্ডের Syllabus অনুযায়ী শিক্ষাদান ।।</span></li>
    <li>অভিজ্ঞ ও বিষয়ভিত্তিক শিক্ষক-শিক্ষিকামণ্ডলীর দ্বারা শিক্ষাদান</li>
    <li>প্রতি সপ্তাহে ৫ দিন class  </li>
    <li>প্রতি সপ্তাহে পরীক্ষার ব্যাবস্থা</li>
    <li>আরবি ও ইসলামিক শিক্ষা , computer শিক্ষা , এবং স্বাস্থ্য ও শারীরশিক্ষার ওপর বিশেষ নজর</li>
    <li>অতিস্বল্প খরচে উন্নত্মানের শিক্ষাদানই আমাদের প্রধান উদ্দেশ্য</li>
    </ul>
    <h5 className='bg-dark py-1' style={{textAlign:"center",color:"white"}}>কালুখালি * ভগবানগোলা * মুর্শিদাবাদ <br />সুবর্ণমৃগী রেল স্টেশনের নিকট
    </h5>
      </p>

    </div>
    </div>
    </>
  )
}


const Courses=()=>{
  return(
    <>
    <div id="carouselExampleCaptions" style={{height:"100%",overflow:"hidden"}} className="carousel slide " data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="kalukhali.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="smart.jpg" className="d-block w-100"   alt="..." />
      
    </div>
    <div className="carousel-item">
      <img src="nursury.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}