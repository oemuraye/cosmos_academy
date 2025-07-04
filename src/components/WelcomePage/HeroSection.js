import { Link, useLocation, useNavigate } from 'react-router-dom';
import heroImage1 from '../../assets/images/hero-welcome.png';
import exploreIcon from '../../assets/icons/btn-Icon.png';
import JoinClasses from './JoinClasses';
import ComingSoonPop from '../Common/ComingSoonPop/ComingSoonPop';
import thumbsUpGif from "../../assets/images/thumbs_up.gif";
import { useRef, useState } from 'react';

const HeroSection = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const successModalRef = useRef(null);

    const handleScheduleScroll = (e, targetId, url) => {
        e.preventDefault();

        navigate(`/${url}`);
        setTimeout(() => {
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }, 300);
    };
  return (
    <section className="hero-section my-5">
        <div className="container">
            <div className="container">
                <div className="row align-items-center">
                    
                    <section className="col-md-6 col-sm-12 my-3">
                        <div className="text-start mb-4 mb-md-0 px-1 pt-5 pt-md-0">
                            <h1 className="mb-3">Thanks for your interest in Cosmos Academy</h1>
                            <p className="mb-5">
                                To learn more about the program curriculum, format, and payment options,
                                register for our <span className="fw-bold fst-italic">informational webinar </span>
                                 or schedule a <span className="fw-bold fst-italic"> 1-on-1 call </span> with our team.
                            </p>
                            <div className="btn-action_div justify-content-center justify-content-md-start">
                                <Link className="customBtn" onClick={(e) => handleScheduleScroll(e, 'cosmos_programs', 'programs')}>
                                    <span>Join Live Classes</span> <span className="customBtn-icon"><img src={exploreIcon} alt="icon" className='img-fluid' width='10.42px' height="10.42"  /></span>
                                </Link>
                                {/* <Link className="customBtn" data-bs-toggle="modal" data-bs-target="#regModal">
                                    <span>Join Live Classes</span> <span className="customBtn-icon"><img src={exploreIcon} alt="icon" className='img-fluid' width='10.42px' height="10.42"  /></span>
                                </Link> */}
                            </div>

                            {/* <!-- Modal --> */}
                            {/* <section className="modal fade" id="regModal" tabIndex="-1" aria-labelledby="regModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="d-flex justify-content-end p-2">
                                            <button type="button" className="btn-close" id='joinModalCloseBtn' data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <JoinClasses successModalRef={successModalRef} />
                                        </div>
                                    </div>
                                </div>
                            </section> */}
                        </div>
                    </section>
                    
                    <section className="col-md-6 col-sm-12 my-3">
                        <div className="container">
                            <iframe width="100%" height="350" src="https://www.youtube.com/embed/wM9RaH121iY?si=AP1D3EZ4422rXYwS&autoplay=1&mute=1&loop=1" 
                                title="Cosmos Introduction Video" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            >
                            </iframe>
                        </div>
                    </section>

                </div>
            </div>
        </div>

        {/* Success Modal */}
        {/* <div className="modal fade" ref={successModalRef} id="successModal" tabIndex="-1" aria-labelledby="successModalLabel" aria-hidden="true">
            <div className="modal-dialog mt-4" style={{ maxWidth: "550px", margin: "0 auto" }}>
                <div className="modal-content">
                    <div className="d-flex justify-content-end p-2">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body mb-5" style={{ maxWidth: "450px", margin: "0 auto", width: "100%" }}>
                        <ComingSoonPop 
                            title="Welcome to Cosmos Academy Community" 
                            text='Check your email for the slack channel link and connect with other innovators.'
                            popImg={thumbsUpGif} 
                            widthSize={"52.07px"}
                            heightSize={"52.07px"}
                            welcomeModal={true}
                        />
                    </div>
                </div>
            </div>
        </div> */}
    </section>
  )
}

export default HeroSection