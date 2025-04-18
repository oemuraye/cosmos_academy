import React from 'react'
import { Link } from 'react-router-dom';
import exploreIcon from '../../assets/icons/btn-Icon.png';
import ContactForm from '../Common/ContactUsForm/ContactForm';

const ContactTeamSection = () => {
  return (
    <section className="joinUsAd_section padding_y-spacing my-5 text-center">
      {/* Heading */}
      <h2 className="joinUs_text">
        Develop and Retain a More  <span className="fw-bold fst-italic">Impactful Team</span> with Our Programs
      </h2>

      <div className="btn-action_div my-5">
        <Link className="customBtn" data-bs-toggle="modal" data-bs-target="#contactFormModal">
            <span>Contact Our Team</span> <span className="customBtn-icon"><img src={exploreIcon} alt="icon" className='img-fluid' width='10.42px' height="10.42"  /></span>
        </Link>
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
    </section>
  )
}

export default ContactTeamSection;