import React from "react";
import exploreIcon from '../../assets/icons/btn-Icon.png';
import { Link } from "react-router-dom";


const JoinUsAdSection = () => {
  return (
    <section className="joinUsAd_section padding_y-spacing my-5 text-center">
      {/* Heading */}
      <h2 className="joinUs_text">
        Ready to turn your <span className="fw-bold fst-italic">skills into impact?</span> Enrol in a program today
        and start <span className="fw-bold fst-italic">building your future!</span>
      </h2>

      <div className="btn-action_div my-5">
        <Link className="customBtn">
            <span>Join Us</span> <span className="customBtn-icon"><img src={exploreIcon} alt="icon" className='img-fluid' width='10.42px' height="10.42"  /></span>
        </Link>
      </div>
    </section>
  );
};

export default JoinUsAdSection;
