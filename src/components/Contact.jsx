import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";

function Contact() {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Invia");
  const [status, setStatus] = useState({});



  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center" >
          <Col md={4}>
            <i className="bi bi-chat-dots d-flex"></i>
          </Col>
          <Col md={8}>
            <h2>Contattaci</h2>
            <form >
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="Nome"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Adress"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Telefono"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col sm={12} className="px-1">
                <textarea row="6" name={formDetails.message} placeholder="Dettagli..." onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                </Col>
                {
                  status.message &&
                  <Col>
                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                  </Col>
                }
              </Row>
            </form>
              <div >
                 <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Ho preso visione dell’informativa sulla Privacy ed autorizzo il trattamento dei dati personali (D.Lgs 193/03) *
                </label>
                </div>
              </div>
              <form action="">
              <button className="contact-button" type="submit"><span>{buttonText}</span></button>
              </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Contact;
