import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import logo from '../../assets/images/brand_logo.png';
// import menuIcon from '../../utils/icons/menuToggler.png';
// import closeIcon from '../../utils/icons/closeBtn.png';
import exploreIcon from '../../assets/icons/btn-Icon.png';

import './header.css';


const dropdownContent = {
  Programs: (
    <div className="dropdown_menu program-menu">
      <div className="dropdown-grid">
        <section className='col-4 pt-1 pe-5 border_end first'>
          <Link to='/programs'>
            <h4>Product Design</h4>
            {/* <p>Mobil App Dev</p> */}
          </Link>
          <Link to='/programs'>
            <h4>Mobil App Dev</h4>
            {/* <p>Product Design</p> */}
          </Link>
          <Link to='/programs'>
            <h4>Brand Design</h4>
            {/* <p>Product Design</p> */}
          </Link>
        </section>

        <section className='col-4 pt-1 pe-5 border_end second'>
          <Link to='/programs'>
            <h4>Social Media Mangament</h4>
            {/* <p>Product Design</p> */}
          </Link>
          <Link to='/programs'>
            <h4>AR & VR Dev</h4>
            {/* <p>Product Design</p> */}
          </Link>
          <Link to='/programs'>
            <h4>Digital Information</h4>
            {/* <p>Product Design</p> */}
          </Link>
        </section>

        <section className='col-4 pt-1'>
          <Link to='/programs'>
            <h4>Website Development</h4>
            {/* <p>Product Design</p> */}
          </Link>
          <Link to='/programs'>
            <h4>Artificial Intelligence</h4>
            {/* <p>Product Design</p> */}
          </Link>
          <Link to='/programs'>
            <h4>Embedded Systems and IOT</h4>
            {/* <p>Product Design</p> */}
          </Link>
        </section>
      </div>
    </div>
  ),
  Resources: (
    <div className="dropdown_menu resource-menu">
      <div className="dropdown-grid">
        <section className='col-4 pt-1 pe-5 border_end first'>
            <Link to='/resources'>
              <h4>Blogs</h4>
              {/* <p>Product Design</p> */}
            </Link>
            <Link to='/resources'>
              <h4>Mobil App Dev</h4>
              {/* <p>Product Design</p> */}
            </Link>
        </section>
        <section className='col-4 pt-1 pe-3'>
            <Link to='/resources'>
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
        <section className='col-4 pt-1 pe-5 border_end first'>
          <Link to="/about" >
            <h4>About Us</h4>
            {/* <p>Product Design</p> */}
          </Link>
          <Link to="/about" >
            <h4>Why Cosmos Conference</h4>
            {/* <p>Product Design</p> */}
          </Link>
        </section>

        <section className='col-4 pt-1 pe-3'>
          <Link to="/about" >
            <h4>FAQ</h4>
            {/* <p>Product Design</p> */}
          </Link>
          <Link to="/about" >
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
      <section className='col-4 pt-1 pe-5 border_end first'>
          <Link>
            <h4>Donate to affiliate</h4>
            {/* <p>Product Design</p> */}
          </Link>
          <Link>
            <h4>Donate to Memitech</h4>
            {/* <p>Product Design</p> */}
          </Link>
        </section>

        <section className='col-4 pt-1 pe-3'>
          <Link>
            <h4>Donate to Cosmos</h4>
            {/* <p>Product Design</p> */}
          </Link>
        </section>
      </div>
    </div>
  ),
};


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

  const handleMouseEnter = (item) => {
    if (window.innerWidth > 767) {
      setActiveDropdown(item);
    }
  };
  
  const handleMouseLeave = () => {
    if (window.innerWidth > 767) {
      setActiveDropdown(null);
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
    window.location.href = '/welcome';
    // window.open('/welcome', '_blank');
  };

  const handleScheduleScroll = (e, targetId) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
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

  return (
    <header className={`navbar sticky-top px-3 ${isScrolled ? 'navbar-color-onscroll' : 'navbar-default-color'}`}>
      <nav className="container-fluid p-0 navbar navbar-expand-md" aria-label="Main navigation">
        <Link to='/' className="navbar-brand">
          <img src={logo} alt="logo" width="51px" height="50px" className='img-fluid' />
          <div>
            <span>Cosmos</span>
            <span>Academy</span>
          </div>
        </Link>

        {/* <button className={`navbar-toggler ${menuOpen ? 'open' : ''}`} type="button" onClick={toggleMenu} aria-controls="navbarSupportedContent" aria-expanded={menuOpen} aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" style={{ backgroundImage: `url(${menuOpen ? closeIcon : menuIcon})` }}></span>
        </button> */}

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
              >
                <Link to={`/${path.toLowerCase()}`} className="nav-link">{name}</Link>
                {activeDropdown === name && dropdownContent[name] && dropdownContent[name]}
              </li>
            ))}
            
            <span onClick={externalLinkClick} role='button' className='customBtn d-md-none mt-2'> <span>Get Started</span> <span className="customBtn-icon"><img src={exploreIcon} alt="icon" className='img-fluid' width='10.42px' height="10.42"  /></span> </span>
          </ul>

        </div>

        <button onClick={externalLinkClick} className='customBtn d-none d-md-flex'> <span>Get Started</span> <span className="customBtn-icon"><img src={exploreIcon} alt="icon" className='img-fluid' width='10.42px' height="10.42"  /></span> </button>
      </nav>
    </header>
  )
}

export default Header