
import exploreIcon from '../../assets/icons/go-icon.png';
import userIcon from '../../assets/icons/user-icon.png';
import bookIcon from '../../assets/icons/book-icon.png';
import usersIcon from '../../assets/icons/users_icon.png';
import cpuIcon from '../../assets/icons/cpu-icon.png';
import brandIcon from '../../assets/icons/medal_star-icon.png';

import cardImg from '../../assets/images/cardImg.png';


const WhySection = () => {
  return (
    <section className='why-section padding_y-spacing container'>
        <div className="why-content">
            <section className="why-details">
                <h2>Why innovators choose to learn with us</h2>
                <p className='my-3'>We equip you with the skills, knowledge, and mindset to turn your expertise into real-world impact. Our programs are designed for individuals who want to innovate, create, and drive change using technology.</p>
                <div className="btn-action_div my-4">
                    <button className="customBtn">
                        <span>Get Started</span> <img src={exploreIcon} alt="icon" />
                    </button>
                </div>
            </section>

            <section className="why-cards my-5">
                <div className="row py-4">
                    <div className="col-md-4 col-sm-12 my-4">
                        <div className="why-card">
                            <img src={cardImg} alt="img" width='100%' height='185px' className='img-fluid xt-border-radius' />
                            <div className="card-content">
                                <div className="icon-circle">
                                    <img src={userIcon} alt="" className="img-fluid" />
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
                                    <img src={bookIcon} alt="" className="img-fluid" />
                                </div>
                                <h4 className='mb-0'>Hands-On, Impact-Driven Learning.</h4>
                                <p>Every course is designed with practical applications, real-world projects, and mentor-guidance.</p>
                            </div>
                            <img src={cardImg} alt="img" width='100%' height='185px' className='img-fluid xb-border-radius' />
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 my-4">
                        <div className="why-card">
                            <img src={cardImg} alt="img" width='100%' height='185px' className='img-fluid xt-border-radius' />
                            <div className="card-content">
                                <div className="icon-circle">
                                    <img src={usersIcon} alt="" className="img-fluid" />
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
                                    <img src={cpuIcon} alt="" className="img-fluid" />
                                </div>
                                <h4 className='mb-0'>Future-Focused Curriculum.</h4>
                                <p>Stay ahead of the curve with training in AI, Blockchain, Quantum Computing, and other emerging technologies as we prepare you to but build and innovate.</p>
                            </div>
                            <img src={cardImg} alt="img" width='100%' height='185px' className='img-fluid xb-border-radius' />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 my-4">
                        <div className="why-card">
                            <div className="card-content">
                                <div className="icon-circle">
                                    <img src={brandIcon} alt="" className="img-fluid" />
                                </div>
                                <h4 className='mb-0'>Flexible & Accessible Learning.</h4>
                                <p>With weekly subscription plans, live training, and on-demand content that fits into your schedule—so you can learn at your own pace, without limitations.</p>
                            </div>
                            <img src={cardImg} alt="img" width='100%' height='185px' className='img-fluid xb-border-radius' />
                        </div>
                    </div>


                </div>
            </section>
        </div>
    </section>
  )
}

export default WhySection;