
import heroImage from '../../assets/images/resource_heroImg.png';
import exploreIcon from '../../assets/icons/go-iconBlack.png';

const HeroSection = () => {
  return (
    <section className="hero-section">
        <div className="container-fluid">
            <div className="container">
                <div className="row align-items-center">
                    
                    <section className="col-md-6 col-sm-12 my-3">
                        <div className="text-center text-md-start mb-4 mb-md-0 px-1 pt-5 pt-md-0">
                            <h1 className="mb-3">Insights, Innovations & Industry Trends</h1>
                            <p className="mb-5">Whether you're a beginner, a tech enthusiast, or an industry professional, our blog is your go-to resource for expert insights, practical guides, and inspiring stories.</p>
                        </div>
                    </section>
                    
                    <section className="col-md-6 col-sm-12 my-3">
                        <div className="container position-relative">
                            <div className="hero-image-container d-flex justify-content-center">
                                <img src={heroImage} alt="Tech Insights" className="hero-image" />

                                {/* Sticky Notes */}
                                <div className="sticky-note top-left">
                                    <h5>Getting started in tech</h5>
                                    <ol>
                                        <li>Learn from experts</li>
                                        <li>Find resources to learn from.</li>
                                        <li>Get a mentor to guide you.</li>
                                        <li>...</li>
                                    </ol>
                                </div>

                                <div className="sticky-note bottom-right">
                                    <h5>The future tech skills</h5>
                                    <ol>
                                        <li>Artificial Intelligence</li>
                                        <li>Blockchain</li>
                                        <li>Quantum Computing</li>
                                        <li>AR, VR technology</li>
                                        <li>...</li>
                                    </ol>
                                </div>

                                {/* Insights Button */}
                                <button className="insights-btn customBtn">
                                    Insights <img src={exploreIcon} alt="icon" className='img-fluid' width='46px' height='46px' />
                                </button>
                            </div>

                        </div>
                        
                    </section>

                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection