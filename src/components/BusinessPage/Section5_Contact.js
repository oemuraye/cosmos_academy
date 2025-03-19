import React from 'react'
import { Link } from 'react-router-dom';
import exploreIcon from '../../assets/icons/btn-Icon.png';

const ContactTeamSection = () => {
  return (
    <section className="joinUsAd_section padding_y-spacing my-5 text-center">
      {/* Heading */}
      <h2 className="joinUs_text">
        Develop and Retain a More  <span className="fw-bold fst-italic">Impactful Team</span> with Our Programs
      </h2>

      <div className="btn-action_div my-5">
        <Link className="customBtn">
            <span>Contact Our Team</span> <span className="customBtn-icon"><img src={exploreIcon} alt="icon" className='img-fluid' width='10.42px' height="10.42"  /></span>
        </Link>
      </div>
    </section>
  )
}

export default ContactTeamSection;