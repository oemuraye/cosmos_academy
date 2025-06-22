import React from "react";

import enrolledUsersImg1 from '../../assets/images/enrolled-users1.png';
import enrolledUsersImg2 from '../../assets/images/enrolled-users2.png';
import enrolledUsersImg3 from '../../assets/images/enrolled-users3.png';
import enrolledUsersImg4 from '../../assets/images/enrolled-users4.png';
import enrolledUsersImg5 from '../../assets/images/enrolled-users5.png';
import stackedUsersImg from '../../assets/images/groupImages.png';

import certificateImg from "../../assets/images/impactAd-img.png"; 
import TestimonySection from "../Homepage/Section5_Testimonial";


const userEnrolledImages = [
    enrolledUsersImg1,
    enrolledUsersImg2,
    enrolledUsersImg3,
    enrolledUsersImg4,
    enrolledUsersImg5,
];

const ImpactAdSection = () => {
  return (
    <section className="impactAd_section padding_y-spacing container my-5 p-4 rounded">
      <section className="impactAd row align-items-center">

        <div className="col-lg-6 text-lg-start">
          <h2 className="">Stay Impacted, and Get Certified.</h2>
          <p className="text-dark">
            Our programs are designed to meet the demands of the ever-evolving
            tech industry, ensuring you gain hands-on experience and industry
            insights that translate into real-world impact.
          </p>
        </div>

        <div className="col-lg-6 text-center mt-4 mt-lg-0">
          <img loading='lazy' src={certificateImg} alt="Certificate" className="certificateImg img-fluid" />
        </div>
      </section>

      <section className="trusted-count my-5 d-flex gap-3">
        <h2 className="">Trusted by Over 100+ Innovators</h2>

        <div>
            <div className="stacked-users d-flex gap-3 align-items-center">
                {/* Stacked User Images */}
                <div className="studentImages">
                    {/* {userEnrolledImages.map((userEnrolled, index) => (
                        <img key={index} src={userEnrolled} alt="Enrolled users" className='img-fluid' />
                    ))} */}
                    <img loading='lazy' src={stackedUsersImg} alt="Enrolled users" className='img-fluid' width='119px' height='35px' />
                </div>

                <h6 className="ms-2">100+ Innovators</h6>
            </div>

            {/* Star Ratings */}
            <div className="stars d-flex gap-1 align-items-center mt-1">
                {Array(5).fill().map((_, i) => (
                    <span key={i} className="text-warning fs-4">★</span>
                ))}
            </div>
        </div>
      </section>

      <section className="testimony-section">
        <TestimonySection />
      </section>

    </section>
  );
};

export default ImpactAdSection;
