import { useState } from "react";
import { Link } from "react-router-dom";

import { Container } from "react-bootstrap";
import { Alert } from "react-bootstrap";

import cucinaLuce from "../assets/img/cucina-luce.jpg";
import cucinaNoLuce from "../assets/img/cucina-no-luce.jpg";

function Home() {

    const [activeLink, setActiveLink] = useState("home");
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
        window.scrollTo({ top: 0, behavior: "smooth" });
        };
    
    const [showMaintenance, setShowMaintenance] = useState(true);
    
    // Funzione per scrollare al componente Contact
    const handleContactClick = (e) => {
        e.preventDefault();
        const connectElement = document.getElementById('connect');
        if (connectElement) {
            connectElement.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
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
                className="text-center m-0 rounded-0"
            >
                🔧 Sito in aggiornamento <br />
                Stiamo lavorando per migliorare la tua esperienza sul nostro sito. Alcuni servizi potrebbero essere temporaneamente non disponibili. <br />
                Hai bisogno di assistenza immediata? <span onClick={handleContactClick} style={{ 
                        color: '#0066cc', 
                        cursor: 'pointer', 
                        textDecoration: 'underline', 
                        fontWeight: 'bold' 
                    }}>Contattaci</span>  utilizzando i recapiti in fondo alla pagina - saremo felici di aiutarti!
                Grazie per la pazienza.
            </Alert>
            )}

            <div className="d-flex image-container">
                
                <img className="home-img" src={cucinaNoLuce} alt="cucinaNoLuce" />
                
                <div className="home-button ">
                    <Link to={"/services"}
                        className={
                            activeLink === "services" ? "active navbar-link" : "navbar-link"}

                            onClick={() => onUpdateActiveLink("services")}> 
                            
                            <button >
                                <span>Servizi</span>
                            </button>
                    </Link>
                </div>
                <img className="home-img" src={cucinaLuce} alt="cucinaLuce" />
            </div>

            <div className="home-text">
                <hr/>
                <br />
                <p><em>"Più luce, più spazio, più vita: portiamo il cielo dentro casa tua con installazioni su misura."</em></p>
                <br />
            </div>

        </Container>
    );
}

export default Home