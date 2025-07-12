import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

import './contact.css';
import ContactForm from '../../components/Common/ContactUsForm/ContactForm';

const Contact = () => {
  return (
    <>
        <Helmet>
            <title>Contact - Cosmos Academy</title>
        </Helmet>
        <main className='contact-page'>
            <section className="section-width my-2 my-md-5">
                <div className="row px-2">
                    <div className="col-md-7 col-sm-12 my-3">
                        <div className="section-heading">
                            <h2>Your Path to Knowledge Begins with a Conversation.</h2>
                            <p className='color-gray' style={{color: '#3C3C3C'}}>
                                Have questions or need guidance? Our dedicated team is here to help! 
                                Whether it’s about courses, enrollment, or general inquiries, 
                                we’re just a message away. Reach out, and let’s make your Cosmos Academy experience seamless!
                            </p>
                            <Link to='tel:+2348058786930'><p className='mt-5'>+234 805 878 6930</p></Link>
                            <a href='mailto:info@cosmosacademy.org' rel="noopener noreferrer"><p>info@cosmosacademy.org</p></a>

                            <section className="social-links d-flex align-items-center gap-3">
                                <Link target='_blank' to=''><FaLinkedin size={24} color='#101010' /></Link>
                                <Link target='_blank' to=''><FaXTwitter size={24} color='#101010' /></Link>
                                <Link target='_blank' to=''><AiFillInstagram size={24} color='#101010' /></Link>
                                <Link target='_blank' to=''><FaYoutube size={24} color='#101010' /></Link>
                                <Link target='_blank' to=''><FaTiktok size={20} color='#101010' /></Link>
                            </section>
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-12 my-5 my-md-4"><ContactForm contactPage={true} /></div>
                </div>
            </section>
        </main>
    </>
  )
}

export default Contact