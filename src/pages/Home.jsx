import { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Alert } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";


import salottoLuce from "../assets/img/salotto-luce.jpg";
import cucinaLuce from "../assets/img/cucina-luce.jpg";
import cucinaNoLuce from "../assets/img/cucina-no-luce.jpg";

function Home() {
  const [showMaintenance, setShowMaintenance] = useState(true);
  const [showContactBox, setShowContactBox] = useState(false);

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    const connectElement = document.getElementById("connect");
    if (connectElement) {
      connectElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Container fluid className="home px-0 fade-in-home">
      {showMaintenance && (
            <Alert
            variant="warning"
            dismissible
            onClose={() => setShowMaintenance(false)}
            className="text-center m-0 rounded-0 home-alert fs-5"
            >
            🔧 Sito in aggiornamento. Sezione "contattaci" non disponibile, per contattarci rapidamente clicca {" "}
            
            <span
                className="alert-link-custom"
                onClick={() => setShowContactBox(true)}
            >
                qui
            </span>{" "}🔧.
            </Alert>
      )}
      {showContactBox && (
        <div
          className="contact-overlay"
          onClick={() => setShowContactBox(false)}
        >
          <div
            className="contact-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={() => setShowContactBox(false)}
            >
              ✕
            </button>

            <h3>Contattaci</h3>
            <p className="fs-5">📞 <a href="tel:+393357569450">+39 335 7569 450</a></p>
            <p className="fs-5"><FaWhatsapp size={30} style={{ color: "#25D366" }} /><a href="https://wa.me/3450228979" target="_blank"> Scrivici su WhatsApp </a></p>
            <p className="fs-5">📧 <a href="mailto:installatore.v@gmail.com">installatore.v@gmail.com</a></p>
            <p className="small-note">
              Rispondiamo rapidamente per sopralluoghi e preventivi
            </p>
          </div>
        </div>
      )}


      <section className="hero-section">
        <img
          className="hero-image"
          src={salottoLuce}
          alt="Ambiente interno luminoso dopo installazione lucernario Velux"
        />

        <div className="hero-overlay"></div>

        <div className="hero-content-box">
          <p className="hero-kicker">Installazione lucernari Velux</p>

          <h1>Più luce naturale, più comfort, <br/> più valore alla tua casa</h1>

          <p className="hero-description">
            Installiamo lucernari Velux e accessori con sopralluoghi,
            consulenza e preventivi su misura per ogni esigenza.
          </p>

          <div className="hero-buttons">
            <a href="#connect" className="btn-hero btn-primary-hero" onClick={handleContactClick}>
              Richiedi un sopralluogo
            </a>

            <Link to="/services" className="btn-hero btn-secondary-hero" onClick={goTop}>
              Scopri i servizi
            </Link>
          </div>

          <div className="hero-badges">
            <span>Velux</span>
            <span>Accessori</span>
            <span>Sopralluoghi</span>
            <span>Preventivi</span>
          </div>
        </div>
      </section>

      <section className="quick-services-section">
        <div className="quick-services-grid">
          <div className="quick-service-card">
            <h3>Installazione</h3>
            <p>Montaggio lucernari Velux con attenzione a estetica, tenuta e funzionalità <strong>certificate</strong>.</p>
          </div>

          <div className="quick-service-card">
            <h3>Accessori</h3>
            <p>Tende, tapparelle, motorizzazioni e soluzioni complementari per comfort e praticità.</p>
          </div>

          <div className="quick-service-card">
            <h3>Sopralluoghi e preventivi</h3>
            <p>Valutazioni su misura per trovare la soluzione migliore per il tuo ambiente.</p>
          </div>
        </div>
      </section>

        <div className="home-text">
            <hr />
            <p>
            <em>
                "Più luce, più spazio, più vita: portiamo il cielo dentro casa tua
                con installazioni su misura."
            </em>
            </p>
            <hr />
        </div>

      <section className="before-after-section">
        <div className="section-heading">
          <p className="section-kicker">Trasformazione degli ambienti</p>
          <p>
            Un lucernario ben installato cambia davvero la percezione dello
            spazio: più luce, più respiro, più vivibilità.
          </p>
        </div>

        <div className="before-after-grid">
          <div className="before-after-card">
            <img
              src={cucinaNoLuce}
              alt="Ambiente interno prima dell'installazione del lucernario"
            />
            <div className="before-after-label">Prima</div>
          </div>

          <div className="before-after-card">
            <img
              src={cucinaLuce}
              alt="Ambiente interno dopo l'installazione del lucernario Velux"
            />
            <div className="before-after-label">Dopo</div>
          </div>
        </div>
      </section>

      <section className="home-cta-section">
        <div className="home-cta-box">
          <h2>Vuoi portare più luce naturale nella tua casa?</h2>
          <p>
            Contattaci per ricevere informazioni, fissare un sopralluogo o
            richiedere un preventivo <strong>gratuito</strong>.
          </p>

          <div className="hero-buttons cta-center">
            <a href="#connect" className="btn-hero btn-primary-hero" onClick={handleContactClick}>
              Contattaci
            </a>

            <Link to="/services" className="btn-hero btn-secondary-dark" onClick={goTop}>
              Vai ai servizi
            </Link>
          </div>
        </div>
      </section>

      {/* <div className="home-text">
        <hr />
        <p>
          <em>
            "Più luce, più spazio, più vita: portiamo il cielo dentro casa tua
            con installazioni su misura."
          </em>
        </p>
      </div> */}
    </Container>
  );
}

export default Home;