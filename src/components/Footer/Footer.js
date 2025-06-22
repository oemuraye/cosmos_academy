import { Link } from 'react-router-dom';
import footerLogo from '../../assets/images/footer-logo.png';
import brandLogo from '../../assets/images/footerBrand_logo.png';

import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

import './footer.css';

const Footer = () => {
  return (
    <footer className='padding_y-spacing'>
        <div className="footer-section container-fluid">
            {/* <section className="footer-logo pt-5">
                <img className='img-fluid' src={footerLogo} alt="logo" width='126px' height='106px' />
            </section> */}

            <section className="row">
                <div className="footer-contact col-md-3 col-sm-12 my-4">
                    {/* <img className='img-fluid mb-5' src={footerLogo} alt="logo" width='126px' height='106px' /> */}
                    <Link to='/' className="navbar-brand mb-4">
                        <img loading='lazy' src={brandLogo} alt="logo" width="64px" height="40px" className='img-fluid' />
                        <div>
                            <span>Cosmos</span>
                            <span>Academy</span>
                        </div>
                    </Link>
                    
                    <section className="social-links d-flex align-items-center gap-3">
                        <Link target='_blank' to=''><FaLinkedin size={24} /></Link>
                        <Link target='_blank' to=''><FaXTwitter size={24} /></Link>
                        <Link target='_blank' to=''><AiFillInstagram size={24} /></Link>
                        <Link target='_blank' to=''><FaYoutube size={24} /></Link>
                        <Link target='_blank' to=''><FaTiktok size={20} /></Link>
                    </section>
                </div>
                
                <div className="footer-links col-md-9 col-sm-12">
                    <section className='row'>
                        <div className='row col-md-6 col-sm-12 my-4'>
                            <ul className='col-6'>
                                <li><h4 className='custom-neueFont_Bold'>Academy</h4></li>
                                <li><Link to='/programs'>Programs</Link></li>
                                <li><Link to='/programs'>Mentorship</Link></li>
                                <li><Link to='/partner'>Partnership</Link></li>
                                <li><Link to='/about'>About us</Link></li>
                                <li><Link to=''>Privacy</Link></li>
                                <li><Link to=''>Terms</Link></li>
                            </ul>
                            <ul className='col-6'>
                                <li><h4 className='custom-neueFont_Bold'>Information</h4></li>
                                <li><Link to='/about'>About us</Link></li>
                                <li><Link to='/contact'>Contact us</Link></li>
                                <li><Link to='blog-post/:postID'>Blog</Link></li>
                                <li><Link to=''>Support</Link></li>
                                <li><Link to=''>Help Center</Link></li>
                            </ul>
                        </div>
                        <div className='row col-md-6 col-sm-12 my-4'>
                            <ul className='col-6'>
                                <li><h4 className='custom-neueFont_Bold'>Work with us</h4></li>
                                <li><Link to=''>Become a Facilitator <br /> Careers@Cosmos Academy</Link></li>
                                <li><Link to='/partner'>Donate to Affiliates</Link></li>
                            </ul>
                            <ul className='col-6'>
                                <li><h4 className='custom-neueFont_Bold'>Community</h4></li>
                                <li><Link to='/community'>Overview<br /> Telegram<br /> Events</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>
            </section>


            {/* <hr />

            <section className="custom-neueFont_roman copyright d-flex align-items-center justify-content-between flex-wrap gap-3 pb-5">
                <span>@ Copyright Adesina Assets</span>
                <span>Privacy Policy</span>
                <span>Terms and Conditions</span>
                <span>Website by Cosmos Design Space</span>
            </section> */}
        </div>
    </footer>
  )
}

export default Footer;