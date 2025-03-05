import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import infoImage from '../../assets/images/info_img.png'
import infoImage2 from '../../assets/images/info_img2.png'

const InfoSection = () => {
    const [activeTab, setActiveTab] = useState("live");

  return (
    <section className="info-section padding_y-spacing py-5 bg-light">
      <div className="container-fluid">
        <div className="info-details container my-5 p-4 py-5">
            {/* Tabs */}
            <div className="tabs-section">
                <div className="info-tabs d-flex align-items-center gap-4 mb-3">
                    <span role='button' className={`${activeTab === "live" ? "info-active" : ""}`} onClick={() => setActiveTab("live")} >
                    🔴 Live Training
                    </span>
                    <span role='button' className={`${activeTab === "on-demand" ? "info-active" : ""}`} onClick={() => setActiveTab("on-demand")} >
                    ▶ On Demand Training
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className='mb-5'>
                {activeTab === "live" ? (
                <div>
                    <p className='my-4 text-center text-md-start'>
                    We believe one of the best ways to truly learn is through real-time interaction, guidance, and collaboration.
                    That's why our Live Training goes beyond traditional online learning—it’s built around mentorship, 
                    personalized feedback, and a thriving community of learners and experts.
                    </p>
                    <img src={infoImage} alt="Live Training" className="img-fluid rounded" />
                </div>
                ) : (
                <div>
                    <p className='my-4 text-center text-md-start'>
                        Learning should be flexible, accessible, and tailored to your pace. That’s why at Cosmos Academy, our On-Demand Video Training is designed to provide expert-led education anytime, anywhere—while still keeping mentorship, feedback, and community at the heart of your learning experience.
                    </p>
                    <img src={infoImage2} alt="On Demand Training" className="img-fluid rounded" />
                </div>
                )}
            </div>
        </div>
      </div>
    </section>
  )
}

export default InfoSection;