import React from "react";
import exploreIcon from '../../assets/icons/btn-Icon.png';
import { Link } from "react-router-dom";
import ComingSoonPop from "../Common/ComingSoonPop/ComingSoonPop";


const JoinOurTeam = () => {
  return (
    <section className="joinUsAd_section container my-5 text-center py-5">
      {/* Heading */}
      <h2 className="joinUs_text">
        <span className="fw-bold fst-italic">A Team</span> Committed to Your Growth and Raising the Next <span className="fw-bold fst-italic">Gatekeepers of Innovations</span>
      </h2>

      <div className="btn-action_div my-5">
        <Link className="customBtn" data-bs-toggle="modal" data-bs-target="#joinTeamModal">
          <span>Join Our Team</span> <span className="customBtn-icon"><img src={exploreIcon} alt="icon" className='img-fluid' width='10.42px' height="10.42"  /></span>
        </Link>
      </div>

      {/* <!-- Modal --> */}
      <section className="modal fade" id="joinTeamModal" tabIndex="-1" aria-labelledby="joinTeamModalLabel" aria-hidden="true">
          <div className="modal-dialog">
              <div className="modal-content">
                  <div className="d-flex justify-content-end p-2">
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                      <ComingSoonPop title="Join Our Team" text='Sorry we are not currently recruiting new team members. Kindly check in next time.' />
                  </div>
              </div>
          </div>
      </section>
    </section>
  );
};

export default JoinOurTeam;
