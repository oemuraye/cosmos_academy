import React from "react";
import exploreIcon from '../../assets/icons/btn-Icon.png';
import { Link } from "react-router-dom";


const JoinOurTeam = () => {
  return (
    <section className="joinUsAd_section container my-5 text-center py-5">
      {/* Heading */}
      <h2 className="joinUs_text">
        <span className="fw-bold fst-italic">A Team</span> Committed to Your Growth and Raising the Next <span className="fw-bold fst-italic">Gatekeepers of Innovations</span>
      </h2>

      <div className="btn-action_div my-5">
        <Link className="customBtn">
          <span>Join Our Team</span> <span className="customBtn-icon"><img src={exploreIcon} alt="icon" className='img-fluid' width='10.42px' height="10.42"  /></span>
        </Link>
      </div>
    </section>
  );
};

export default JoinOurTeam;
