import { Container, Row, Col } from "react-bootstrap";
import { Copy, Check } from "react-bootstrap-icons";
import React, { useState } from "react";

import logoVip from "../assets/img/logo-VIP.jpg";
import LogoNgd from "../assets/img/LogoNgd.jpg";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "installatore.v@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset "copiato" dopo 2 sec
    });
  };

  return (
    <footer className="footer">
      <Container>
        <Row className="">
          <Col sm={4} className="d-flex justify-content-between align-items-center">
          <a href="/"><img src={LogoNgd} alt="LogoNGD" className="logo" /></a>
          <img src={logoVip} alt="logoVip" />
          </Col>

          <Col sm={4} className="d-flex justify-content-center">

            {/* Icone */}
            <div className="d-flex flex-column justify-content-center align-items-center">
              <i className="bi bi-telephone ps-4 pe-4"></i>
              <hr />
              <i className="bi bi-file-earmark-person ps-4 pe-4"></i>
              <hr />
              <i className="bi bi-file-earmark-person ps-4 pe-4"></i>
              <hr />
              <i className="bi bi-envelope ps-4 pe-4"></i>

            </div>


            <div className="d-flex flex-column align-items-center justify-content-center">

              {/* Telefono */}
              <div>
                <span>345-0228979 / 335-7569450</span>
              </div>
              <hr />

              {/* P.IVA */}
              <div>
                <span>P.IVA - 05100460236</span>
              </div>
              <hr />

              <div>
                <span>REA   VR-470374</span>
              </div>
              <hr />

              {/* Email */}
              <div className="d-flex justify-content-center email-block">
                <span
                  onClick={handleCopy}
                  title="Copia Email"
                  className="email-text"
                >
                  {email}
                </span>

                <button
                  onClick={handleCopy}
                  title="Copia Email"
                  className="btn-copy"
                >
                  {copied ? <Check /> : <Copy />}
                </button>
              </div>
            {/* <span className={`copied-message ${copied ? "visible" : "invisible"}`} >
              Copiato!
            </span> */}
            </div>
          </Col>

          <Col sm={4} className="d-flex flex-column align-items-center justify-content-center">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22414.388240273325!2d11.275164694202315!3d45.39323477791911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f411a27369a61%3A0x6de075ae194af766!2s37047%20San%20Bonifacio%20VR!5e0!3m2!1sit!2sit!4v1744738628779!5m2!1sit!2sit" width="350" height="200"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" aria-label="Google Maps"></iframe>
          <span className="pt-2 d-flex justify-content-center">San Bonifacio (VR) - 37047</span>
          </Col>
        </Row>
          <hr />
          <span className="d-flex justify-content-center">© 2025. Tutti i diritti riservati.</span>

      </Container>
    </footer>
  );
}