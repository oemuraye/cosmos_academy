
import heroImage1 from '../../assets/images/programsHeroImg2.png';
import heroImage2 from '../../assets/images/programsHeroImg1.png';
import heroVideo1 from '../../assets/videos/programsHeroVid1.mp4';
import heroVideo2 from '../../assets/videos/programsHeroVid2.mp4';
import hero_video1 from '../../assets/videos/hero-video1.mp4';
import hero_video2 from '../../assets/videos/hero-video2.mp4';
import exploreIcon from '../../assets/icons/btn-Icon.png';
import liveIcon from '../../assets/icons/record-icon.png';

const HeroSection = () => {
  return (
    <section className="hero-section">
        <div className="container-fluid">
            <div className="section-width">
                <div className="container">
                    <div className="row align-items-center">
                        
                        <section className="col-md-6 col-sm-12 my-3">
                            <div className="text-start mb-4 mb-md-0 px-1 pt-5 pt-md-0">
                                <h1 className="mb-3">Build Your Future with Cutting-Edge Skills.</h1>
                                {/* <p className="mb-5">This is where visionaries are made. We equip you with cutting-edge digital skills, the right mindset, and knowledge needed to transform your life and create the impact that matters.</p> */}
                            </div>
                        </section>
                        
                        <section className="col-md-6 col-sm-12 my-3">
                            <div className="d-grid gap-3" style={{ gridTemplateColumns: "1fr 1fr", justifyContent: "center", alignItems: "" }}>
                                
                                <div className="">
                                    <div className="position-relative">
                                        <div className='position-absolute top-0 start-0 m-3 d-flex align-items-center px-3 py-1'> 
                                            {/* <img loading='lazy' src={heroImage2} alt="Community member" className="img-fluid" /> */}
                                            <div className="live-trainingImg">
                                                <img loading='lazy' src={liveIcon} alt="icon" className='record-live_icon' width='14px' height='14px' />
                                                <span>Live Training</span>
                                            </div>
                                        </div>
                                        <video className="img-fluid rounded" style={{ height: "270px", objectFit: "cover" }} autoPlay loop muted playsInline>
                                            <source src={heroVideo1} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>

                                    <div className="bg-white rounded mt-2" style={{ height: "auto" }}>
                                        <img src={heroImage1} alt="hero_img" className="img-fluid" />
                                    </div>
                                </div>

                                <div className="">
                                    <div className="bg-white rounded mb-3" style={{ height: "auto" }}>
                                        <img src={heroImage2} alt="hero_img" className="img-fluid" />
                                    </div>

                                    <div className="position-relative">
                                        <div className='position-absolute top-0 start-0 m-3 d-flex align-items-center px-3 py-1'> 
                                            <div className="live-trainingImg">
                                                <img loading='lazy' src={liveIcon} alt="icon" className='record-live_icon' width='14px' height='14px' />
                                                <span>Live Training</span>
                                            </div>
                                        </div>
                                        <video className="img-fluid rounded" style={{ height: "270px", objectFit: "cover" }} autoPlay loop muted playsInline>
                                            <source src={heroVideo2} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                </div>

                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection