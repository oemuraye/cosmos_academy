import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import infoLiveIcon from '../../assets/icons/record-icon.png';
import infoPlayIcon from '../../assets/icons/play-icon.png';
import infoVideo from '../../assets/videos/heroVideo2.mp4';
import infoVideo2 from '../../assets/videos/coding.mp4';

const InfoSection = () => {
  const [activeTab, setActiveTab] = useState("live");

  // Dynamically set the video source based on the active tab
  const videoSource = activeTab === "live" ? infoVideo : infoVideo2;

  return (
      <section className="info-section section-width padding_y-spacing py-5">
          <div className="container-fluid">
              <div className="info-details container my-5 p-4 py-5">
                  {/* Tabs */}
                  <div className="tabs-section">
                      <div className="custom-tabs d-flex align-items-center gap-4 mb-3">
                          <span role='button' className={`d-flex align-items-center gap-2 ${activeTab === "live" ? "custom-tabActive" : ""}`} onClick={() => setActiveTab("live")} >
                              <img src={infoLiveIcon} alt="icon" className='record-live_icon' width="14px" height='14px' /> Live Training
                          </span>
                          <span role='button' className={`d-flex align-items-center gap-2 ${activeTab === "on-demand" ? "custom-tabActive" : ""}`} onClick={() => setActiveTab("on-demand")} >
                                <img src={infoPlayIcon} alt="icon" width="24px" height='24px' /> On Demand Training
                          </span>
                      </div>
                  </div>

                  {/* Content */}
                  <div className='mb-5'>
                      <p className='my-4 text-center text-md-start'>
                          {activeTab === "live"
                              ? "We believe one of the best ways to truly learn is through real-time interaction, guidance, and collaboration. That's why our Live Training goes beyond traditional online learning—it’s built around mentorship, personalized feedback, and a thriving community of learners and experts."
                              : "Learning should be flexible, accessible, and tailored to your pace. That’s why at Cosmos Academy, our On-Demand Video Training is designed to provide expert-led education anytime, anywhere—while still keeping mentorship, feedback, and community at the heart of your learning experience."
                          }
                      </p>

                      {/* Dynamic Video */}
                      <video key={videoSource}  className="img-fluid" 
                        style={{ height: "", objectFit: "cover", borderRadius: '15px' }} 
                        autoPlay loop muted playsInline
                      >
                          <source src={videoSource} type="video/mp4" />
                          Your browser does not support the video tag.
                      </video>
                  </div>
              </div>
          </div>
      </section>
  );
};

export default InfoSection;