
import heroImage1 from '../../assets/images/HeroFrame.png';
import heroVideo from '../../assets/videos/businessVideo.mp4';

const HeroSection = () => {
  return (
    <section className="hero-section">
        <div className="container-fluid">
            <div className="section-width">
                <div className="container">
                    <div className="row align-items-center">
                        
                        <section className="col-md-6 col-sm-12 my-3">
                            <div className="text-start mb-4 mb-md-0 px-1 pt-5 pt-md-0">
                                <h1 className="mb-3">Empower Your Team, Drive Innovation, Create Impact</h1>
                                {/* <p className="mb-5">This is where visionaries are made. We equip you with cutting-edge digital skills, the right mindset, and knowledge needed to transform your life and create the impact that matters.</p> */}
                            </div>
                        </section>
                        
                        <section className="col-md-6 col-sm-12 my-3">
                            <div className="container">
                                <video className="img-fluid rounded" style={{ height: "", width: "", objectFit: "cover" }} autoPlay loop muted playsInline>
                                    <source src={heroVideo} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
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