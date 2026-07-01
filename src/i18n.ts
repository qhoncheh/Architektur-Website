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
        footer: "© 2026 All Rights Reserved",
        ContactMe: "Contact Me",
        AboutMe: "About Me",
        Previous: "Previous",
        Next:"Next", 

        AboutMeText: `For me, architecture is much more than designing a building – it is a process of shaping spaces that enhance people's quality of life.
        In every project, I strive to create a balanced harmony between the client's requirements, the site's characteristics, and the aesthetic principles of architecture.
        With a flexible design approach and experience in various architectural styles, my goal is to develop designs that not only possess a compelling visual identity but are also functionally thoughtful and meet the real-world demands of execution.
        I view each project as an opportunity to create sustainable, characterful, and user-oriented spaces through creative and precise planning.
        `,
      },
    },

    de: {
      translation: {
        projects: "Projekte",
        about: "Über mich",
        contact: "Kontakt",
        downloadCV: "Lebenslauf herunterladen",
        Design: "Entworfen & Entwickelt von Ghoncheh Ataei",
        footer: "© 2026 Alle Rechte vorbehalten",
        ContactMe: "Kontaktieren Sie mich",
        AboutMe: "Über mich",
        Previous:"Zurück",
        Next:"Weiter",


        AboutMeText: `Architektur ist für mich weit mehr als das Entwerfen eines Gebäudes – sie ist ein Prozess der Gestaltung von Räumen, die die Lebensqualität der Menschen verbessern.
        In jedem Projekt strebe ich danach, ein ausgewogenes Gleichgewicht zwischen den Anforderungen des Auftraggebers, den Besonderheiten des Standorts und den ästhetischen Prinzipien der Architektur zu schaffen.
        Mit einem flexiblen Gestaltungsansatz und Erfahrung in unterschiedlichen Architekturstilen ist es mein Ziel, Entwürfe zu entwickeln, die nicht nur eine überzeugende visuelle Identität besitzen, sondern auch funktional durchdacht sind und den realen Anforderungen der Ausführung gerecht werden.
        Jedes Projekt betrachte ich als eine Gelegenheit, durch kreative und präzise Planung nachhaltige, charakterstarke und nutzungsorientierte Räume zu schaffen.
        `,
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
