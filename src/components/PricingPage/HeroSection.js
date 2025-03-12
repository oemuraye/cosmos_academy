import exploreIcon from '../../assets/icons/go-icon.png';

const HeroSection = () => {
  return (
    <section className="hero-section">
        <div className="container-fluid">
            <div className="hero-content text-center mb-4 mb-md-0 px-1 pt-5 pt-md-0">
                <h1 className="mb-3">Invest in Your Future with Flexible Plans</h1>
                <p className="mb-5">We believe that access to quality tech education should be flexible and affordable. Find the perfect plan for you and your team, starting from less than N10,000/week — cancel anytime.</p>
                <div className="d-flex justify-content-center mt-4">
                    <button className="customBtn">
                        Contact Our Team
                        <img src={exploreIcon} alt="icon" />
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection