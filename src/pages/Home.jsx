import { useState } from "react";
import { Link } from "react-router-dom";

import { Container } from "react-bootstrap";
import { Alert } from "react-bootstrap";

import cucinaLuce from "../assets/img/cucina-luce.jpg";
import cucinaNoLuce from "../assets/img/cucina-no-luce.jpg";





function Home() {
    const [showMaintenance, setShowMaintenance] = useState(true);
    return (
        <Container fluid className="home px-0">

            {showMaintenance && (
            <Alert
                variant="warning"
                dismissible
                onClose={() => setShowMaintenance(false)}
                className="text-center m-0 rounded-0"
            >
                🔧 Il sito è attualmente in manutenzione. Alcuni servizi potrebbero non essere disponibili. <br />Per qualsiasi informazione trovi i contatti in fondo al sito, ci scusiamo per il disagio.
            </Alert>
            )}

            <div className="d-flex image-container">
                
                <img className="home-img" src={cucinaNoLuce} alt="cucinaNoLuce" />
                
                <div className="home-button">
                    <Link to={"/services"}>
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