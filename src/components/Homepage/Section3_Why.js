
import exploreIcon from '../../assets/icons/go-icon.png';
import userIcon from '../../assets/icons/user-icon.png';
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

            <section className="why-cards">
                <div className="row">
                    <div className="col-md-4 why-card">
                        <div>
                            <img src={cardImg} alt="img" width='341px' height='185px' className='img-fluid' />
                        </div>
                        <div className="card-content px-2">
                            <div className="icon-circle">
                                <img src={userIcon} alt="" className="img-fluid" />
                            </div>
                            <h4 className='mb-0'>Mentorship & Expert Guidance</h4>
                            <p>Our instructors are experts, providing 1:1 coaching, live feedback, and career insights to help you grow.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>
  )
}

export default WhySection