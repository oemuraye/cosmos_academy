
import heroImage1 from '../../assets/images/hero_img1.png';
import heroImage2 from '../../assets/images/hero_img2.png';
import exploreIcon from '../../assets/icons/go-icon.png';

const HeroSection = () => {
  return (
    <section className="hero-section">
        <div className="container-fluid animated-background ">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-3 col-sm-12 order-md-1 order-2 my-3">
                        <div className="position-relative d-flex justify-content-center pt-0 pt-md-5">
                            <img src={heroImage1} alt="Community member" className="img-fluid pt-0 pt-md-5" />
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-sm-12 order-md-2 order-1 my-3">
                        <div className="text-center mb-4 mb-md-0 px-1">
                            <h1 className="fw-bold mb-3">Building skills for impact.</h1>
                            <p className="mb-5">This is where visionaries are made. We equip you with cutting-edge digital skills, the right mindset, and knowledge needed to transform your life and create the impact that matters.</p>
                            <div className="d-flex justify-content-center mt-4">
                                <button className="customBtn">
                                    Join Community
                                    <img src={exploreIcon} alt="icon" />
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-3 col-sm-12 order-md-3 order-3 my-3">
                        <div className="position-relative d-flex justify-content-center pb-0 pb-md-5">
                            <img src={heroImage2} alt="Community member" className="img-fluid pb-0 pb-md-5" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection