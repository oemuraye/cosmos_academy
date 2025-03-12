import React from 'react'
import { Link } from 'react-router-dom';
import exploreIcon from '../../assets/icons/go-icon.png';

const ContactTeamSection = () => {
  return (
    <section className="joinUsAd_section padding_y-spacing my-5 text-center">
      {/* Heading */}
      <h2 className="joinUs_text">
        Develop and Retain a More  <span className="fw-bold fst-italic">Impactful Team</span> with Our Programs
      </h2>

      <div className="btn-action_div my-5">
        <Link className="customBtn">
            <span>Contact Our Team</span> <img src={exploreIcon} alt="icon" />
        </Link>
      </div>
    </section>
  )
}

export default ContactTeamSection;