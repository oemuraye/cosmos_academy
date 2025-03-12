import heroVideo from '../../assets/videos/businessVideo.mp4';

const HeroSection = () => {
    return (
        <section className="hero-section about-hero">
            <div className="container-fluid">
                <section className="col-full px-2 px-md-5 d-flex align-items-center justify-content-center" style={{ minHeight: "350px" }}>
                    <div className="container">
                        <video className="img-fluid rounded" style={{ height: "", width: "", objectFit: "cover" }} autoPlay loop muted playsInline>
                            <source src={heroVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </section>
            </div>
        </section>
    )
}


export default HeroSection