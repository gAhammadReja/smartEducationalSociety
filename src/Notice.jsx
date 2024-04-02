import React, { useState } from 'react';
import Navbar from './components/navbar'; // Import your Navbar component
import Footer from './components/footer'; // Import your Footer component
import { useEffect } from 'react';
import axios from 'axios';

const Notice = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        {/* Your main content goes here */}
        <h2 className='p-3'>Welcome to Smart Educational Society Notice Board</h2> 
        <NoticeBoard/>
      </div>
  <div className='p-3'>
    </div>   
      <Footer />
    </div>
  );
};

export default Notice;


export const NoticeBoard = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    // Fetch notice data 
    const fetchNotices = async () => {
      try {
        const response = await axios.get('https://smartserver-ip6l.onrender.com/notice'); 
        setNotices(response.data); 
      } catch (error) {
        console.error('Error fetching notices:', error);
      }
    };

    fetchNotices();
  }, []); 

  return (
    <>
      <h1 style={{ textAlign: "center", backgroundColor: "#008bff" }}>Notice Board</h1>
      <section title='notice board' className='notice' style={{ maxHeight: "100%", overflowY: "scroll" }}>
        {notices.map((notice, index) => (
          <div className='noticeItem' key={index}>
            <h3>{notice.title}</h3>
            <div>{notice.disc}</div>
            <div><a href={notice.url} target='/'>View Full Notice<i className="fa fa-download" aria-hidden="true"></i></a></div>
          </div>
        ))}
      </section>
    </>
  );
};

