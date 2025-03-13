import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
// import menuIcon from '../../utils/icons/menuToggler.png';
// import closeIcon from '../../utils/icons/closeBtn.png';
import exploreIcon from '../../assets/icons/go-icon.png';

import './header.css';


const dropdownContent = {
  Programs: (
    <div className="dropdown_menu program-menu">
      <div className="dropdown-grid">
        <section className='col-4 pt-1 pe-5 border_end first'>
          <div>
            <h4>Product Design</h4>
            <p>Mobil App Dev</p>
          </div>
          <div>
            <h4>Mobil App Dev</h4>
            <p>Product Design</p>
          </div>
          <div>
            <h4>Brand Design</h4>
            <p>Product Design</p>
          </div>
        </section>

        <section className='col-4 pt-1 pe-5 border_end second'>
          <div>
            <h4>Social Media Mangament</h4>
            <p>Product Design</p>
          </div>
          <div>
            <h4>AR & VR Dev</h4>
            <p>Product Design</p>
          </div>
          <div>
            <h4>Digital Information</h4>
            <p>Product Design</p>
          </div>
        </section>

        <section className='col-4 pt-1'>
          <div>
            <h4>Website Development</h4>
            <p>Product Design</p>
          </div>
          <div>
            <h4>Artificial Intelligence</h4>
            <p>Product Design</p>
          </div>
          <div>
            <h4>Embedded Systems and IOT</h4>
            <p>Product Design</p>
          </div>
        </section>
      </div>
    </div>
  ),
  Resources: (
    <div className="dropdown_menu resource-menu">
      <div className="dropdown-grid">
        <section className='col-4 pt-1 pe-5 border_end first'>
            <div>
              <h4>Blogs</h4>
              <p>Product Design</p>
            </div>
            <div>
              <h4>Mobil App Dev</h4>
              <p>Product Design</p>
            </div>
        </section>
        <section className='col-4 pt-1 pe-3'>
            <div>
              <h4>Cosmos Explorer</h4>
              <p>Product Design</p>
            </div>
        </section>
      </div>
    </div>
  ),
  About: (
    <div className="dropdown_menu about-menu">
      <div className="dropdown-grid">
        <section className='col-4 pt-1 pe-5 border_end first'>
          <div>
            <h4>About Us</h4>
            <p>Product Design</p>
          </div>
          <div>
            <h4>Why Cosmos Conference</h4>
            <p>Product Design</p>
          </div>
        </section>

        <section className='col-4 pt-1 pe-3'>
          <div>
            <h4>FAQ</h4>
            <p>Product Design</p>
          </div>
          <div>
            <h4>Contact Us</h4>
            <p>Product Design</p>
          </div>
        </section>
      </div>
    </div>
  ),
  Business: (
    <div className="dropdown_menu buiness-menu">
      <div className="dropdown-grid">
        <section className='col-4 pt-1 pe-2'>
          <div>
            <h4>For Companies </h4>
            <p>Product Design</p>
          </div>
        </section>
      </div>
    </div>
  ),
  Partner: (
    <div className="dropdown_menu partner-menu">
      <div className="dropdown-grid">
      <section className='col-4 pt-1 pe-5 border_end first'>
          <div>
            <h4>Donate to affiliate</h4>
            <p>Product Design</p>
          </div>
          <div>
            <h4>Donate to Memitech</h4>
            <p>Product Design</p>
          </div>
        </section>

        <section className='col-4 pt-1 pe-3'>
          <div>
            <h4>Donate to Cosmos</h4>
            <p>Product Design</p>
          </div>
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
  { name: "Schedule", path: "schedule" },
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
    window.open('', '_blank');
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
          <img src={logo} alt="logo" height="57.489px" width="129px" />
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
            
            <span onClick={externalLinkClick} role='button' className='customBtn d-md-none mt-2'> <span>Get Started</span> <img src={exploreIcon} alt="" /></span>
          </ul>

        </div>

        <a href='' rel="noopener noreferrer"  target='_blank' className='customBtn d-none d-md-flex'> <span>Get Started</span> <img src={exploreIcon} alt="" /></a>
      </nav>
    </header>
  )
}

export default Header