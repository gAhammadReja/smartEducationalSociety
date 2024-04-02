import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import './download.css';

const Downloads = () => {
  return (
    <div>
      <Navbar />
      <div className="container" style={{ minHeight: '60vh' }}>
        <h1>Welcome to Smart Educational Society</h1>
        <h3 className="bg-info p-2" style={{ textAlign: 'center' }}>
          Lets Download Study Material And Notes
        </h3>
        <DownloadSection />
      </div>
      <Footer />
    </div>
  );
};

// Download section
export const DownloadSection = () => {
  const [downloadItems, setDownloadItems] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('https://smartserver-ip6l.onrender.com/download');
        const data = await response.json();
        setDownloadItems(data); // Assuming the API returns an array similar to downloadItems
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div className="download-section-container">
      <h2>Download Section</h2>
      <ul className="download-list">
        {downloadItems.map(item => (
          <li key={item._id} className="download-item border p-2 d-flex" style={{ justifyContent: 'space-between' }}>
            <strong>{item.title}:</strong>{' '}
            <a href={item.url} target='/' download className="download-link">
              Download <i className="fa fa-download" aria-hidden="true"></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Downloads;
