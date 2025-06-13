import { useEffect } from 'react';

const IubendaCookieSolution = ({ 
  siteId = "4063563", 
  cookiePolicyId = "13394686", 
  lang = "it" 
}) => {
  useEffect(() => {
    // Inizializza la configurazione globale di Iubenda
    const initializeIubenda = () => {
      // Crea l'oggetto globale _iub se non esiste
      window._iub = window._iub || [];
      
      // Configurazione Cookie Solution
      window._iub.csConfiguration = {
        "siteId": parseInt(siteId),
        "cookiePolicyId": parseInt(cookiePolicyId),
        "lang": lang,
        "storage": {
          "useSiteId": true
        }
      };

      console.log('Configurazione Iubenda Cookie Solution:', window._iub.csConfiguration);
    };

    // Carica gli script necessari
    const loadScripts = () => {
      const scripts = [
        {
          src: `https://cs.iubenda.com/autoblocking/${siteId}.js`,
          type: 'text/javascript',
          id: 'iubenda-autoblocking'
        },
        {
          src: '//cdn.iubenda.com/cs/iubenda_cs.js',
          type: 'text/javascript',
          charset: 'UTF-8',
          async: true,
          id: 'iubenda-cs'
        }
      ];

      scripts.forEach(scriptConfig => {
        // Controlla se lo script è già presente
        if (!document.querySelector(`script[src="${scriptConfig.src}"]`) && 
            !document.getElementById(scriptConfig.id)) {
          
          const script = document.createElement('script');
          
          // Imposta tutte le proprietà dello script
          Object.keys(scriptConfig).forEach(key => {
            if (key === 'src') {
              script.src = scriptConfig[key];
            } else if (key === 'async') {
              script.async = scriptConfig[key];
            } else {
              script.setAttribute(key, scriptConfig[key]);
            }
          });

          // Aggiungi listeners per debug
          script.onload = () => {
            console.log(`Script Iubenda caricato: ${scriptConfig.src}`);
          };
          
          script.onerror = () => {
            console.error(`Errore caricamento script: ${scriptConfig.src}`);
          };

          document.head.appendChild(script);
        }
      });
    };

    // Esegui l'inizializzazione
    initializeIubenda();
    loadScripts();

    // Cleanup function
    return () => {
      // Gli script di Iubenda devono rimanere per tutta la sessione
      // Non rimuoverli qui
    };
  }, [siteId, cookiePolicyId, lang]);

  // Questo componente non renderizza nulla visivamente
  return null;
};

export default IubendaCookieSolution;

// Hook personalizzato per usare le funzionalità Iubenda
export const useIubendaCookies = () => {
  const acceptAllCookies = () => {
    if (window._iub && window._iub.cs && window._iub.cs.api) {
      window._iub.cs.api.acceptAllCookies();
    }
  };

  const rejectAllCookies = () => {
    if (window._iub && window._iub.cs && window._iub.cs.api) {
      window._iub.cs.api.rejectAllCookies();
    }
  };

  const openPreferenceCenter = () => {
    if (window._iub && window._iub.cs && window._iub.cs.api) {
      window._iub.cs.api.openPreferenceCenter();
    }
  };

  const getCurrentPreferences = () => {
    if (window._iub && window._iub.cs && window._iub.cs.api) {
      return window._iub.cs.api.getCurrentPreferences();
    }
    return null;
  };

  return {
    acceptAllCookies,
    rejectAllCookies,
    openPreferenceCenter,
    getCurrentPreferences
  };
};