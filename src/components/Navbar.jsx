import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Copy, Check } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

import LogoNgd from "../assets/img/LogoNgd.jpg";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const [copied, setCopied] = useState(false);
  const email = "installatore.v@gmail.com";
  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset "copiato" dopo 2 sec
    });
  };

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
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


  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container fluid className='px-5'>
        <Navbar.Brand href="/">
          <img src={LogoNgd} alt="LogoNGD" className="logoNgd" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className="collapsed">
          <Nav className="ms-auto">
            <Nav.Link href='/'
            className={
              activeLink === "home" ? "active navbar-link" : "navbar-link"
              }>
                Home
            </Nav.Link>
            <Nav.Link as={NavLink}
              to ="/services"
              className={
                activeLink === "services" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("services")}
            >
                Servizi
            </Nav.Link>
            <Nav.Link as={NavLink}
              to="/aboutUs"
              className={
                activeLink === "aboutUs" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("aboutUs")}
            >
                Chi Siamo?
            </Nav.Link>
          </Nav>

          <div className="navbar-text">
            <div className="social-icon">
              <a href="#"
              onClick={handleCopy}
              title='Copia email'>
                {copied ? <Check /> : <i className="bi-envelope"></i>}
              </a>
            </div>
            <Nav.Link href="#connect">
            <button className="">
              <span >Contattaci</span>
            </button>
            </Nav.Link>
          </div>

        </Navbar.Collapse>
      </Container>
      <div  className="scroll-watcher"></div>
    </Navbar>
  );
}
export default NavBar;
