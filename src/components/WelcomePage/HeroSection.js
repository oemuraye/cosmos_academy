import { Link } from 'react-router-dom';
import heroImage1 from '../../assets/images/hero-welcome.png';
import exploreIcon from '../../assets/icons/go-icon.png';

const HeroSection = () => {
  return (
    <section className="hero-section my-5">
        <div className="container">
            <div className="container">
                <div className="row align-items-center">
                    
                    <section className="col-md-6 col-sm-12 my-3">
                        <div className="text-center text-md-start mb-4 mb-md-0 px-1 pt-5 pt-md-0">
                            <h1 className="mb-3">Thanks for your interest in Cosmos Academy</h1>
                            <p className="mb-5">
                                Your Cosmos Academy Syllabus is on the way to your inbox now. 
                                To learn more about the program curriculum, format, and payment options,
                                register for our <span className="fw-bold fst-italic">informational webinar</span>
                                 or schedule a <span className="fw-bold fst-italic">1-on-1 call</span> with our team.
                            </p>
                            <div className="btn-action_div justify-content-start">
                                <Link className="customBtn">
                                    <span>Join Live Classes</span> <img src={exploreIcon} alt="icon" />
                                </Link>
                            </div>
                        </div>
                    </section>
                    
                    <section className="col-md-6 col-sm-12 my-3">
                        <div className="container">
                            <img src={heroImage1} alt="img" />
                        </div>
                    </section>

                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection