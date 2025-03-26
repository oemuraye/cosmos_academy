import { useState, useEffect } from "react";

import exploreIcon from '../../assets/icons/btn-Icon.png';
import userIcon from '../../assets/icons/iconoir_user.png';
import bookIcon from '../../assets/icons/book.png';
import usersIcon from '../../assets/icons/fluent_people.png';
import cpuIcon from '../../assets/icons/cpu.png';
import brandIcon from '../../assets/icons/medal-star.png';

import cardImg from '../../assets/images/cardImg.png';
import showcaseImg1 from '../../assets/images/showcase-img1.png';
import showcaseImg2 from '../../assets/images/widows_gif.gif';
// import showcaseImg2 from '../../assets/images/showcase-img2.png';
import showcaseImg3 from '../../assets/images/showcase-img7.png';
// import showcaseImg4 from '../../assets/images/showcase-img8.png';
import showcaseVideo4 from '../../assets/videos/future-video.mp4';
import showcaseImg5 from '../../assets/images/fireGif.gif';
import showcaseImg5_b from '../../assets/icons/Mask group.png';
import SlidingText from "../Common/SlidingText/SlidingText";

const subscriptionTexts = [
  "Weekly Subscription",
  "Annual Subscription",
  "On-Demand Videos",
  "Live <br /> Training"
];

const WhySection = () => {
    const [index, setIndex] = useState(0);

  return (
    <section className='why-section padding_y-spacing'>
        <div className="why-content">
            <section className="section_headingWithBtn why-details">
                <h2>Why innovators choose to learn with us</h2>
                <p className='my-3'>We equip you with the skills, knowledge, and mindset to turn your expertise into real-world impact. Our programs are designed for individuals who want to innovate, create, and drive change using technology.</p>
                <div className="btn-action_div my-4">
                    <button className="customBtn">
                        <span>Get Started</span> <span className="customBtn-icon"><img src={exploreIcon} alt="icon" className='img-fluid' width='10.42px' height="10.42"  /></span>
                    </button>
                </div>
            </section>

            <section className="why-cards container my-5">
                <div className="row py-4">
                    <div className="col-md-4 col-sm-12 my-4">
                        <div className="why-card">
                            <img src={showcaseImg1} alt="img" width='100%' height='185px' className='img-fluid xt-border-radius' />
                            <div className="card-content">
                                <div className="icon-circle">
                                    <img src={userIcon} alt="icon" className="" width='21.24px' height='21.24px' />
                                </div>
                                <h4 className='mb-0'>Mentorship & Expert Guidance</h4>
                                <p>Our instructors are experts, providing 1:1 coaching, live feedback, and career insights to help you grow.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 my-4">
                        <div className="why-card">
                            <div className="card-content">
                                <div className="icon-circle">
                                    <img src={bookIcon} alt="icon" className="" width='21.24px' height='21.24px' />
                                </div>
                                <h4 className='mb-0'>Hands-On, Impact-Driven Learning.</h4>
                                <p>Every course is designed with practical applications, real-world projects, and mentor-guidance.</p>
                            </div>
                            <div className="driven-card">
                                <img src={showcaseImg2} alt="img" className='img-fluid' width='152px' height='145px' />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 my-4">
                        <div className="why-card">
                            <img src={showcaseImg3} alt="img" width='100%' height='185px' className='img-fluid xt-border-radius' />
                            <div className="card-content">
                                <div className="icon-circle">
                                    <img src={usersIcon} alt="icon" className="" width='21.24px' height='21.24px' />
                                </div>
                                <h4 className='mb-0'>A Thriving Community of Innovators</h4>
                                <p>Our collaborative learning environment connects you with like-minded peers, professionals who share your vision.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 my-4">
                        <div className="why-card">
                            <div className="card-content">
                                <div className="icon-circle">
                                    <img src={cpuIcon} alt="icon" className="" width='21.24px' height='21.24px' />
                                </div>
                                <h4 className='mb-0'>Future-Focused Curriculum.</h4>
                                <p>Stay ahead of the curve with training in AI, Blockchain, Quantum Computing, and other emerging technologies as we prepare you to but build and innovate.</p>
                            </div>
                            {/* <video className="img-fluid " style={{ height: "185px", objectFit: "cover", borderRadius: '15px', width: '100%', maxWidth: '270px', margin: '0 auto' }} autoPlay loop muted playsInline> */}
                            <video className="img-fluid " style={{ height: "185px", objectFit: "cover", borderRadius: '15px', width: '100%' }} autoPlay loop muted playsInline>
                                <source src={showcaseVideo4} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 my-4">
                        <div className="why-card">
                            <div className="card-content">
                                <div className="icon-circle">
                                    <img src={brandIcon} alt="icon" className="" width='21.24px' height='21.24px' />
                                </div>
                                <h4 className='mb-0'>Flexible & Accessible Learning.</h4>
                                <p>With weekly subscription plans, live training, and on-demand content that fits into your schedule—so you can learn at your own pace, without limitations.</p>
                            </div>
                            <div className="flexible-card">
                                <span className="subscription-text">
                                    <SlidingText texts={subscriptionTexts} />
                                </span>
                                <div className="diamond-frame">
                                    <img src={showcaseImg5} alt="img" width='62px' height='62px' className='img-fluid fire-red' />
                                    <img src={showcaseImg5_b} alt="img" width='65px' height='65px' className='img-fluid fire-white' />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </div>
    </section>
  )
}

export default WhySection;