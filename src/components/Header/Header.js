import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { IoIosArrowRoundForward } from "react-icons/io";

import logo from '../../assets/images/brand_logo.png';
// import menuIcon from '../../utils/icons/menuToggler.png';
// import closeIcon from '../../utils/icons/closeBtn.png';
import exploreIcon from '../../assets/icons/btn-Icon.png';

import './header.css';


const menuItems = [
  { name: "Programs", path: "programs" },
  { name: "Resources", path: "resources" },
  { name: "For Business", path: "business" }, 
  { name: "About", path: "about" },
  { name: "Partner", path: "partner" },
  // { name: "Schedule", path: "schedule" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuAnimating, setMenuAnimating] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseEnter = (item) => {
    if (!isMobile) {
      setActiveDropdown(item);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setActiveDropdown(null);
    }
  };

  const handleDropdownClick = (item) => {
    if (isMobile) {
      setActiveDropdown(activeDropdown === item ? null : item);
    }
  };


  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 300) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const toggleMenu = () => {
    if (menuOpen) {
      setMenuAnimating(true);
      setTimeout(() => {
        setMenuOpen(false);
        setMenuAnimating(false);
      }, 500);
    } else {
      setMenuOpen(true);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      setMenuAnimating(true);
      setTimeout(() => {
        setMenuOpen(false);
        setMenuAnimating(false);
      }, 500);
    }
  }, [location]);
  

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const externalLinkClick = () => {
    // window.open('/welcome', '_self');
    // window.location.href = '/welcome';
    // window.open('/welcome', '_blank');
    navigate('/welcome');
  };

  const handleLinkClick = (e, item) => {
    if (isMobile && dropdownContent[item]) {
      e.preventDefault();
    }
  };

  const handleScheduleScroll = (e, targetId, url) => {
    e.preventDefault();
    if (location.pathname !== `/${url}`) {
      navigate(`/${url}`);
      setTimeout(() => {
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    }
    if (menuOpen) {
      setMenuAnimating(true);
      setTimeout(() => {
        setMenuOpen(false);
        setMenuAnimating(false);
      }, 500);
    }
  };

  const dropdownContent = {
    Programs: (
      <div className="dropdown_menu program-menu">
        <div className="dropdown-grid">
          <section className='col-4 pt-1 pe-5 border_end first'>
            <Link to='/programs?category=Product%20Design'>
              <h4>Product Design</h4>
            </Link>
            <Link to='/programs?category=Mobile%20Development'>
              <h4>Mobil App Dev</h4>
            </Link>
            <Link to='/programs?category=Brand%20Development'>
              <h4>Brand Design</h4>
            </Link>
          </section>

          <section className='col-4 pt-1 pe-5 border_end second'>
            <Link to='/programs?category=Social%20Management'>
              <h4>Social Media Mangament</h4>
            </Link>
            <Link to='/programs?category=AR%2FVR%20Development'>
              <h4>AR & VR Dev</h4>
            </Link>
            <Link to='/programs?category=Digital%20Innovation'>
              <h4>Digital Information</h4>
            </Link>
          </section>

          <section className='col-4 pt-1'>
            <Link to='/programs?category=Web%20Development'>
              <h4>Website Development</h4>
            </Link>
            <Link to='/programs?category=Artificial%20Intelligence'>
              <h4>Artificial Intelligence</h4>
            </Link>
            <Link to='/programs?category=Embedded%20System%2FIoT'>
              <h4>Embedded Systems and IOT</h4>
            </Link>
          </section>
        </div>
      </div>
    ),
    Resources: (
      <div className="dropdown_menu resource-menu">
        <div className="dropdown-grid">
          <section className='col-12 pt-1'>
              <Link to='#' onClick={(e) => handleScheduleScroll(e, 'blogs-section', 'resources')}>
                <h4>Blogs</h4>
                {/* <p>Product Design</p> */}
              </Link>
              <Link to='#' onClick={(e) => handleScheduleScroll(e, 'explorer-section', 'resources')}>
                <h4>Cosmos Explorer</h4>
                {/* <p>Product Design</p> */}
              </Link>
          </section>
        </div>
      </div>
    ),
    About: (
      <div className="dropdown_menu about-menu">
        <div className="dropdown-grid">
          <section className='col-4 pt-2 pe-5 border_end first'>
            <Link to="/about" >
              <h4>About Us</h4>
              {/* <p>Product Design</p> */}
            </Link>
            <Link to="/community" >
              <h4>Community</h4>
              {/* <p>Product Design</p> */}
            </Link>
            <a href="https://cosmosconference.org/" target="_blank" >
              <h4>Cosmos Conference</h4>faq
              {/* <p>Product Design</p> */}
            </a>
          </section>

          <section className='col-4 pt-1 pe-3'>
            <Link to="/faq" >
              <h4>FAQ</h4>
              {/* <p>Product Design</p> */}
            </Link>
            <Link to="/contact" >
              <h4>Contact Us</h4>
              {/* <p>Product Design</p> */}
            </Link>
          </section>
        </div>
      </div>
    ),
    Business: (
      <div className="dropdown_menu buiness-menu">
        <div className="dropdown-grid">
          <section className='col-4 pt-1 pe-2'>
            <Link to="/business">
              <h4>For Companies </h4>
              {/* <p>Product Design</p> */}
            </Link>
          </section>
        </div>
      </div>
    ),
    Partner: (
      <div className="dropdown_menu partner-menu">
        <div className="dropdown-grid">
            <section className='col-12 pt-1'>
              <Link to='/partner'>
                <h4>Donate to partner</h4>
                {/* <p>Product Design</p> */}
              </Link>
              <Link to='/partner'>
                <h4>Donate to Cosmos</h4>
                {/* <p>Product Design</p> */}
              </Link>
            </section>
        </div>
      </div>
    ),
  };

  const dropdownMobileContent = {
    Programs: (
      <div className="mobile-dropdown">
        <Link to='/programs?category=AR%2FVR%20Development'><h4> <IoIosArrowRoundForward /> AR & VR Dev</h4></Link>
        <Link to='/programs?category=Brand%20Development'><h4> <IoIosArrowRoundForward /> Brand Design</h4></Link>
        <Link to='/programs?category=Mobile%20Development'><h4> <IoIosArrowRoundForward /> Mobil App Dev</h4></Link>
        <Link to='/programs?category=Product%20Design'><h4> <IoIosArrowRoundForward /> Product Design</h4></Link>
        <Link to='/programs?category=Digital%20Innovation'><h4> <IoIosArrowRoundForward /> Digital Information</h4></Link>
        <Link to='/programs?category=Web%20Development'><h4> <IoIosArrowRoundForward /> Website Development</h4></Link>
        <Link to='/programs?category=Artificial%20Intelligence'><h4> <IoIosArrowRoundForward /> Artificial Intelligence</h4></Link>
        <Link to='/programs?category=Social%20Management'><h4> <IoIosArrowRoundForward /> Social Media Management</h4></Link>
        <Link to='/programs?category=Embedded%20System%2FIoT'><h4> <IoIosArrowRoundForward /> Embedded Systems and IOT</h4></Link>
      </div>
    ),
    Resources: (
      <div className="mobile-dropdown">
        <Link to='#' onClick={(e) => handleScheduleScroll(e, 'blogs-section', 'resources')}><h4> <IoIosArrowRoundForward /> Blogs</h4></Link>
        <Link to='#' onClick={(e) => handleScheduleScroll(e, 'explorer-section', 'resources')}><h4> <IoIosArrowRoundForward /> Cosmos Explorer</h4></Link>
      </div>
    ),
    About: (
      <div className="mobile-dropdown">
        <Link to='/about'><h4> <IoIosArrowRoundForward />About Us</h4></Link>
        <Link to='/community'><h4> <IoIosArrowRoundForward />Community</h4></Link>
        <a href='https://cosmosconference.org/' target='_blank' rel='noreferrer'><h4> <IoIosArrowRoundForward /> Cosmos Conference</h4></a>
        <Link to='/faq'><h4> <IoIosArrowRoundForward /> FAQ</h4></Link>
        <Link to='/contact'><h4> <IoIosArrowRoundForward /> Contact Us</h4></Link>
      </div>
    ),
    Business: (
      <div className="mobile-dropdown">
        <Link to='/business'><h4> <IoIosArrowRoundForward /> For Companies</h4></Link>
      </div>
    ),
    Partner: (
      <div className="mobile-dropdown">
        <Link to='/partner'><h4> <IoIosArrowRoundForward /> Donate to partner</h4></Link>
        <Link to='/partner'><h4> <IoIosArrowRoundForward /> Donate to Cosmos</h4></Link>
      </div>
    ),
  };


  return (
    <header className={`navbar sticky-top px-3 ${isScrolled ? 'navbar-color-onscroll' : 'navbar-default-color'}`}>
      <nav className="container-fluid p-0 navbar navbar-expand-md" aria-label="Main navigation">
        <Link to='/' className="navbar-brand">
          <img loading='lazy' src={logo} alt="logo" width="40px" height="55px" className='img-fluid' />
          <div>
            <span>Cosmos</span>
            <span>Academy</span>
          </div>
        </Link>

        <div className={`menu-icon ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <div></div>
          {/* <div></div> */}
          <div></div>
        </div>

        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''} ${menuAnimating ? 'hide' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav gap-2 mx-1 mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page">Home</Link>
            </li>
            {menuItems.map(({ name, path }) => (
              <li 
                key={path} 
                className="nav-item dropdown-container"
                onMouseEnter={() => handleMouseEnter(name)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleDropdownClick(name)}
              >
                <Link to={`/${path.toLowerCase()}`} onClick={(e) => handleLinkClick(e, name)} className="nav-link">{name}</Link>
                {isMobile 
                  ? (activeDropdown === name && dropdownMobileContent[name]) // Render mobile content
                  : (activeDropdown === name && dropdownContent[name]) // Render desktop content
                }
              </li>
            ))}
            
            <span onClick={(e) => handleScheduleScroll(e, 'cosmos_programs', 'programs')} role='button' className='customBtn d-md-none mt-2'> <span>Get Started</span> <span className="customBtn-icon"><img loading='lazy' src={exploreIcon} alt="icon" className='img-fluid' width='10.42px' height="10.42"  /></span> </span>
          </ul>

        </div>

        <button onClick={(e) => handleScheduleScroll(e, 'cosmos_programs', 'programs')} className='customBtn d-none d-md-flex'> <span>Get Started</span> <span className="customBtn-icon"><img loading='lazy' src={exploreIcon} alt="icon" className='img-fluid' width='10.42px' height="10.42"  /></span> </button>
      </nav>
    </header>
  )
}

export default Header