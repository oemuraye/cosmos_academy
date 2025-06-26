import exploreIcon from '../../assets/icons/btn-Icon.png';
import ContactForm from '../Common/ContactUsForm/ContactForm';

const HeroSection = () => {
  return (
    <section className="hero-section">
        <div className="container-fluid">
            <div className="hero-content text-center mb-4 mb-md-0 px-2 pt-5 pt-md-0">
                <h1 className="mb-3">Invest in Your Future with Flexible Plans</h1>
                <p className="mb-5">We believe that access to quality tech education should be flexible and affordable. Find the perfect plan for you and your team, starting from less than N10,000/week — cancel anytime.</p>
                <div className="d-flex justify-content-center mt-4">
                    <button className="customBtn" data-bs-toggle="modal" data-bs-target="#contactFormModal">
                        Contact Our Team
                        <span className="customBtn-icon"><img src={exploreIcon} alt="icon" className='img-fluid' width='10.42px' height="10.42"  /></span>
                    </button>
                </div>
            </div>
            {/* <!-- Modal --> */}
            <section className="modal fade" id="contactFormModal" tabIndex="-1" aria-labelledby="contactFormModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="d-flex justify-content-end p-2">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>
  )
}

export default HeroSection