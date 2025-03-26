import exploreIcon from '../../assets/icons/btn-Icon.png';
import userIcon from '../../assets/icons/user-icon.png';
import bookIcon from '../../assets/icons/book-icon.png';
import usersIcon from '../../assets/icons/users_icon.png';
import cpuIcon from '../../assets/icons/cpu-icon.png';
import brandIcon from '../../assets/icons/medal_star-icon.png';

import showcaseImg1 from '../../assets/images/showcase-img1.png';
import showcaseImg2 from '../../assets/images/widows_gif.gif';
import showcaseImg3 from '../../assets/images/showcase-img3.png';
import showcaseImg4 from '../../assets/images/padlockGif.gif';
import showcaseImg5 from '../../assets/videos/showcase-vid5.mp4';
import showcaseImg6 from '../../assets/videos/showcase-vid6.mp4';

const TeamGrowthSection = () => {
  return (
    <section className='teamGrowth-Section'>
            <section className="section_headingWithBtn why-details">
                <h2>How We Help Your Team Grow</h2>
                <p className='my-3'>Your organization’s success depends on the strength of your team. At Cosmos Academy, whether you’re preparing for digital transformation or strengthening your team’s capabilities, we provide training that makes an immediate impact.</p>
                <div className="btn-action_div my-4">
                    <button className="customBtn">
                        <span>Contact Our Team</span> <span className="customBtn-icon"><img src={exploreIcon} alt="icon" className='img-fluid' width='10.42px' height="10.42"  /></span>
                    </button>
                </div>
            </section>

            <section className="why-cards container my-5">
                <div className="row py-4">
                    <div className="col-md-4 col-sm-12 my-4">
                        <div className="why-card">
                            <img src={showcaseImg1} alt="img" width='100%' height='185px' className='img-fluid xt-border-radius' />
                            <div className="card-content">
                                {/* <div className="icon-circle">
                                    <img src={userIcon} alt="" className="img-fluid" />
                                </div> */}
                                <h4 className='mb-0'>Mentorship & Expert Guidance</h4>
                                <p>Our instructors are experts, providing 1:1 coaching, live feedback, and career insights to help you grow.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 my-4">
                        <div className="why-card">
                            <div className="card-content">
                                {/* <div className="icon-circle">
                                    <img src={bookIcon} alt="" className="img-fluid" />
                                </div> */}
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
                                {/* <div className="icon-circle">
                                    <img src={usersIcon} alt="" className="img-fluid" />
                                </div> */}
                                <h4 className='mb-0'>Built for the  Busy Professionals</h4>
                                <p>Flexible training formats that fit your team’s schedule without disrupting the teams productivity.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12 my-4">
                        <div className="why-card">
                            <div className="flexible-card">
                                <div className="diamond-frame">
                                    <img src={showcaseImg4} alt="img" width='62px' height='62px' className='img-fluid padlock-gif' />
                                </div>
                            </div>
                            <div className="card-content">
                                {/* <div className="icon-circle">
                                    <img src={cpuIcon} alt="" className="img-fluid" />
                                </div> */}
                                <h4 className='mb-0'>Future-Proof Your organization’s Workforce</h4>
                                <p>Ensure your team stays relevant with in-demand skills in AI, Web Development, AR/VR, IoT, and more.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 my-4">
                        <div className="why-card">
                            <div className="card-content">
                                {/* <div className="icon-circle">
                                    <img src={bookIcon} alt="" className="img-fluid" />
                                </div> */}
                                <h4 className='mb-0'>Drive true Innovation from Within</h4>
                                <p>Empower employees to think creatively, solve complex problems, and develop tech-driven solutions that push your organization forward.</p>
                            </div>
                            <video className="video_xb-border-radius" style={{ height: "185px", objectFit: "cover", borderRadius: '15px', width: '100%' }} autoPlay loop muted playsInline>
                                <source src={showcaseImg5} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            {/* <img src={showcaseImg5} alt="img" width='100%' height='185px' className='img-fluid xb-border-radius' /> */}
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 my-4">
                        <div className="why-card">
                            <video className="video_xt-border-radius" style={{ height: "185px", objectFit: "cover", borderRadius: '15px', width: '100%' }} autoPlay loop muted playsInline>
                                <source src={showcaseImg6} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            {/* <img src={showcaseImg6} alt="img" width='100%' height='185px' className='img-fluid xt-border-radius' /> */}
                            <div className="card-content">
                                {/* <div className="icon-circle">
                                    <img src={brandIcon} alt="" className="img-fluid" />
                                </div> */}
                                <h4 className='mb-0'>Learn from Professional  Experts</h4>
                                <p>Your team will gain hands-on experience and insights from professionals who have built and led successful digital projects.</p>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
    </section>
  )
}

export default TeamGrowthSection