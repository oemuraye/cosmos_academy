import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
// import menuIcon from '../../utils/icons/menuToggler.png';
// import closeIcon from '../../utils/icons/closeBtn.png';
import exploreIcon from '../../assets/icons/go-icon.png';

import './header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuAnimating, setMenuAnimating] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
    window.open('https://lu.ma/6pj6tk23', '_blank');
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
    <header className={`navbar sticky-top px-3 py-md-4 py-sm-0 ${isScrolled ? 'navbar-color-onscroll' : 'navbar-default-color'}`}>
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
          <ul className="navbar-nav gap-2 mx-2 mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/programs" className={`nav-link ${location.pathname === "/programs" ? "active" : ""}`}>Programs</Link>
            </li>
            <li className="nav-item">
              <Link to="/resources" className={`nav-link ${location.pathname === "/resources" ? "active" : ""}`}>Resources</Link>
            </li>
            <li className="nav-item">
              <Link to="/business" className={`nav-link ${location.pathname === "/business" ? "active" : ""}`}>For Business</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}>About</Link>
            </li>
            <li className="nav-item">
              <Link to="/partner" className={`nav-link ${location.pathname === "/partner" ? "active" : ""}`}>Partner</Link>
            </li>
            <li className="nav-item">
              <Link onClick={(e) => handleScheduleScroll(e, 'schedule-section')} className={`nav-link ${location.pathname === "/schedule" ? "active" : ""}`}>Schedule</Link>
            </li>
            
            <span onClick={externalLinkClick} role='button' className='customBtn d-md-none mt-2'> <span>Get Started</span> <img src={exploreIcon} alt="" /></span>
          </ul>

        </div>

        <a href='https://lu.ma/6pj6tk23' rel="noopener noreferrer"  target='_blank' className='customBtn d-none d-md-flex'> <span>Get Started</span> <img src={exploreIcon} alt="" /></a>
      </nav>
    </header>
  )
}

export default Header