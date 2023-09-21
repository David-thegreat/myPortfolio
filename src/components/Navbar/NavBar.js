import { Navbar, Container, Nav } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import images from '../../constant/images';

import '../Navbar/NavBar.css';

export const NavBar = () => {
    
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, seScrolled] = useState(false);

  useEffect(() => {
      const onScroll = () => {
          if (window.scrollY > 50) {
              seScrolled(true);
          } else {
              seScrolled(false);
          }
      }

      window.addEventListener("scroll", onScroll);

      return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const scrollToContact = () => {
    window.scrollTo({
        top: 4700,
        behavior: 'smooth',
    });
  };

  const onUpdateActiveLink = (value) => {
      setActiveLink(value);
  }


  return (
      <Navbar expand='lg' className={scrolled ? "scrolled": ""}>
          <Container>
              <Navbar.Brand className='nav-logo' href="#home">
                  {/* <img src={images.logo2} alt="Logo" /> */}
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav">
                  <span className='navbar-toggler-icon'></span>
              </Navbar.Toggle>
              
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                  <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                  <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                  <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Project</Nav.Link>
              </Nav>
              <span className="navbar-text">
                  <div className="social-icon">
                    <a href='https://twitter.com/David_dgreat'><img src={images.x} alt='Twitter' /> </a>
                    <a href='https://www.linkedin.com/in/david-ozisiaka-705901236'><img src={images.linkedin} alt='Linkedin' /> </a> 
                  </div>
                  <button className="vvd" onClick={scrollToContact} ><span>Let's Connect</span></button>
              </span>
              </Navbar.Collapse>
          </Container>
  </Navbar>
  )
}

export default NavBar