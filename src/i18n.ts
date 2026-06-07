

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        projects: "Projects",
        about: "About",
        contact: "Contact",
        downloadCV: "Download CV",
        Design: "Designed & Developed by Ghoncheh Ataei",
        footer: "© 2026 All Rights Reserved.",
        ContactMe: " Contact Me ",
        AboutMe : "About Me",

      },
    },
    de: {
      translation: {
        projects: "Projekte",
        about: "Über mich",
        contact: "Kontakt",
        downloadCV: "Lebenslauf herunterladen",
        Design: "Entworfen & Entwickelt von Ghoncheh Ataei",
        footer: "© 2026 Alle Rechte vorbehalten.",
        ContactMe: " Kontaktieren Sie mich ",
        AboutMe : "Über mich",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;