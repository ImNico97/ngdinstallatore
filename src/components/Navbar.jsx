import { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Copy, Check } from "react-bootstrap-icons";
import { NavLink, useLocation } from "react-router-dom";

import LogoNgd from "../assets/img/LogoNgd.jpg";

function NavBar() {
  const location = useLocation(); // 👈 Ottieni il path corrente
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const handleNavClick = () => {
  setExpanded(false);
};

  const email = "installatore.v@gmail.com";

  const handleCopy = (e) => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset "copiato" dopo 2 sec
    });
    e.preventDefault()
  };

    const handleContactClick = (e) => {
    e.preventDefault();
    
    setExpanded(false)

    const connectElement = document.getElementById('connect');
    if (connectElement) {
      connectElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path) =>
    location.pathname === path ? "active navbar-link" : "navbar-link";

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""} expanded={expanded} onToggle={(isOpen) => setExpanded(isOpen)}>
      <Container fluid className="px-5">
        <Navbar.Brand as={NavLink} to="/" onClick={handleNavClick}>
          <img src={LogoNgd} alt="LogoNGD" className="logoNgd" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="collapsed">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" className={isActive("/")} onClick={handleNavClick}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/services" className={isActive("/services")} onClick={handleNavClick}>
              Servizi
            </Nav.Link>
            <Nav.Link as={NavLink} to="/aboutUs" className={isActive("/aboutUs")} onClick={handleNavClick}>
              Chi Siamo?
            </Nav.Link>
          </Nav>

          <div className="navbar-text">
            <div className="social-icon">
              <a href="#" onClick={handleCopy} title="Copia email">
                {copied ? <Check /> : <i className="bi-envelope"></i>}
              </a>
            </div>
            <button onClick={handleContactClick} className="contact-btn">
              <span>Contattaci</span>
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
      <div className="scroll-watcher"></div>
    </Navbar>
  );
}

export default NavBar;
