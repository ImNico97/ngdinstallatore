import { useEffect } from 'react';

const IubendaPolicies = ({ policyId = "13394686", showBoth = true, separator = " | " }) => {
  useEffect(() => {
    // Funzione per caricare lo script Iubenda
    const loadIubendaScript = () => {
      // Controlla se lo script è già presente
      if (document.querySelector('script[src="https://cdn.iubenda.com/iubenda.js"]')) {
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://cdn.iubenda.com/iubenda.js';
      script.async = true;
      
      // Inserisce lo script nel head
      document.head.appendChild(script);
      
      script.onload = () => {
        console.log('Iubenda script caricato con successo');
      };
      
      script.onerror = () => {
        console.error('Errore nel caricamento dello script Iubenda');
      };
    };

    loadIubendaScript();

    // Cleanup function
    return () => {
      // Rimuovi il listener se necessario
      const existingScript = document.querySelector('script[src="https://cdn.iubenda.com/iubenda.js"]');
      if (existingScript) {
        // Non rimuoviamo lo script perché potrebbe essere usato da altri componenti
      }
    };
  }, []);

  if (showBoth) {
    return (
      <div className="footer-policies">
        <a 
          href={`https://www.iubenda.com/privacy-policy/${policyId}`}
          className="iubenda-noiframe privacy-policy"
          title="Privacy Policy"
        >
          Privacy Policy
        </a>
        
        
        <a 
          href={`https://www.iubenda.com/privacy-policy/${policyId}/cookie-policy`}
          className="iubenda-noiframe cookie-policy"
          title="Cookie Policy"
        >
          Cookie Policy
        </a>
      </div>
    );
  }

  return null;
};

// Componente separato per solo Privacy Policy
export const IubendaPrivacyPolicy = ({ policyId = "13394686" }) => {
  useEffect(() => {
    const loadIubendaScript = () => {
      if (document.querySelector('script[src="https://cdn.iubenda.com/iubenda.js"]')) {
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://cdn.iubenda.com/iubenda.js';
      script.async = true;
      document.head.appendChild(script);
    };

    loadIubendaScript();
  }, []);

  return (
    <a 
      href={`https://www.iubenda.com/privacy-policy/${policyId}`}
      className="iubenda-noiframe privacy-policy"
      title="Privacy Policy"
    >
      Privacy Policy
    </a>
  );
};

// Componente separato per solo Cookie Policy
export const IubendaCookiePolicy = ({ policyId = "13394686" }) => {
  useEffect(() => {
    const loadIubendaScript = () => {
      if (document.querySelector('script[src="https://cdn.iubenda.com/iubenda.js"]')) {
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://cdn.iubenda.com/iubenda.js';
      script.async = true;
      document.head.appendChild(script);
    };

    loadIubendaScript();
  }, []);

  return (
    <a 
      href={`https://www.iubenda.com/privacy-policy/${policyId}/cookie-policy`}
      className="iubenda-noiframe cookie-policy"
      title="Cookie Policy"
    >
      Cookie Policy
    </a>
  );
};

export default IubendaPolicies;