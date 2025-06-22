import { Link } from 'react-router-dom';

import heroImage1 from '../../assets/images/HeroFrame.png';
import heroImage2 from '../../assets/images/HeroFrame2.png';
import heroVideo1 from '../../assets/videos/heroVideo1.mp4';
import heroVideo2 from '../../assets/videos/heroVideo2.mp4';
import hero_video1 from '../../assets/videos/hero-video1.mp4';
import hero_video2 from '../../assets/videos/hero-video2.mp4';
import exploreIcon from '../../assets/icons/btn-Icon.png';
import liveIcon from '../../assets/icons/record-icon.png';

import enrolledUsersImg1 from '../../assets/images/enrolled-users1.png';
import enrolledUsersImg2 from '../../assets/images/enrolled-users2.png';
import enrolledUsersImg3 from '../../assets/images/enrolled-users3.png';
import enrolledUsersImg4 from '../../assets/images/enrolled-users4.png';
import enrolledUsersImg5 from '../../assets/images/enrolled-users5.png';
import stackedUsersImg from '../../assets/images/groupImages.png';

const userEnrolledImages = [
    enrolledUsersImg1,
    enrolledUsersImg2,
    enrolledUsersImg3,
    enrolledUsersImg4,
    enrolledUsersImg5,
];


const HeroSection = () => {
  return (
    <section className="hero-section">
        <div className="container-fluid animated-background ">
            <div className="section-width">
                <div className="row align-items-center container">
                    <div className="col-6 col-md-3 col-sm-6 order-md-1 order-2 my-3 pt-0 pt-md-5">
                        <div className="position-relative d-flex justify-content-center pt-0 pt-md-5">
                            <div className='position-absolute top-0 start-0 m-3 d-flex align-items-center px-3 py-1'>
                                {/* <img src={heroImage1} alt="Community member" className="img-fluid pt-0 pt-md-5" /> */}
                                <div className="community-stackImages pt-0 pt-md-5">
                                    <div className="enrolled">
                                        <div className="studentImages">
                                            {/* {userEnrolledImages.map((userEnrolled, index) => (
                                                <img key={index} src={userEnrolled} alt="Enrolled users" className='img-fluid' />
                                            ))} */}
                                            <img src={stackedUsersImg} alt="Enrolled users" className='img-fluid' width='63px' height='18px' />
                                        </div>
                                        <span>Community</span>
                                    </div>
                                </div>
                            </div>
                            <video className="img-fluid " style={{ height: "320px", objectFit: "cover", borderRadius: '15px', width: '100%', maxWidth: '270px', margin: '0 auto' }} autoPlay loop muted playsInline>
                                <source src={heroVideo1} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    
                    <div className="col-md-6 col-sm-12 order-md-2 order-1 my-3">
                        <div className="text-center mb-4 mb-md-0 px-1 pt-5 pt-md-0">
                            <h1 className="mb-3">Building skills for impact.</h1>
                            <p className="mb-5">This is where visionaries are made. We equip you with cutting-edge digital skills, the right mindset, and knowledge needed to transform your life and create the impact that matters.</p>
                            <div className="d-flex justify-content-center mt-4">
                                <Link to="/community" className="customBtn">
                                    Join Community
                                    <span className="customBtn-icon"><img src={exploreIcon} alt="icon" className='img-fluid' width='10.42px' height="10.42"  /></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-6 col-md-3 col-sm-6 order-md-3 order-3 my-3">
                        <div className="position-relative d-flex justify-content-center pb-0 pb-md-5">
                            <div className='position-absolute top-0 start-0 m-3 d-flex align-items-center px-3 py-1'>
                                {/* <img src={heroImage2} alt="Community member" className="img-fluid" /> */}
                                <div className="live-trainingImg">
                                    <img src={liveIcon} alt="icon" className='record-live_icon' width='14px' height='14px' />
                                    <span>Live Training</span>
                                </div>
                            </div>
                            <video className="img-fluid " style={{ height: "320px", objectFit: "cover", borderRadius: '15px', width: '100%', maxWidth: '270px', margin: '0 auto' }} autoPlay loop muted playsInline>
                                <source src={heroVideo2} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection