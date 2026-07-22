import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        menu: {
          projects: "Projects",
          about: "About",
          contact: "Contact",
          downloadCV: "Download CV",
        },

        Design: "Designed & Developed by",
        footer: "© 2026 All Rights Reserved",
        ContactMe: "Contact Me",
        AboutMe: "About Me",
        Previous: "Previous",
        Next: "Next",

        AboutMeText: `For me, architecture is much more than designing a building – it is a process of shaping spaces that enhance people's quality of life.
        In every project, I strive to create a balanced harmony between the client's requirements, the site's characteristics, and the aesthetic principles of architecture.
        With a flexible design approach and experience in various architectural styles, my goal is to develop designs that not only possess a compelling visual identity but are also functionally thoughtful and meet the real-world demands of execution.
        I view each project as an opportunity to create sustainable, characterful, and user-oriented spaces through creative and precise planning.`,
        Location: "Location",
          LandArea: "Land Area",
          BuiltArea: "Built Area",
          Year: "Year",
          Completion: "Completion",
          DesignBy: "Design",
          Architect: "Architect",
project: {
  villaKhezershahr: {
    titleProject: "Villa Khezershahr",
    subtitle: "Residential – Villa",
    text: "This contemporary villa embodies modern architectural principles through clean lines, open-plan living areas, and expansive glazing.  ",
  },

  apartmentInterior: {
    titleProject: "Bedroom Design",
    subtitle: "Apartment",
    text: "This interior renovation focuses on creating warm and functional living spaces, combining contemporary aesthetics with practical solutions. Natural materials, soft lighting, and carefully selected furnishings create a comfortable and elegant atmosphere.",
  },

  duplexElahieh: {
    titleProject: "Living Room",
    subtitle: "Apartment",
    text: "This living room design emphasizes openness, natural light, and refined materials. The interior balances functionality with elegance, creating a warm and welcoming environment for everyday living.",
  },
  duplexKela: {
    titleProject: "Facade and Interior Design",
    subtitle: "Modern Villa",
    text: "This villa features a striking facade and thoughtfully designed interior spaces that blend seamlessly with the surrounding landscape. The design emphasizes natural materials and open layouts to create a harmonious living environment.",
  },
},
      },
    },

    de: {
      translation: {
        menu: {
          projects: "Projekte",
          about: "Über mich",
          contact: "Kontakt",
          downloadCV: "Lebenslauf herunterladen",
        },

        Design: "Entworfen & Entwickelt von Ghoncheh Ataei",
        footer: "© 2026 Alle Rechte vorbehalten",
        ContactMe: "Kontaktieren Sie mich",
        AboutMe: "Über mich",
        Previous: "Zurück",
        Next: "Weiter",


        AboutMeText: `Architektur ist für mich weit mehr als das Entwerfen eines Gebäudes – sie ist ein Prozess der Gestaltung von Räumen, die die Lebensqualität der Menschen verbessern.
      In jedem Projekt strebe ich danach, ein ausgewogenes Gleichgewicht zwischen den Anforderungen des Auftraggebers, den Besonderheiten des Standorts und den ästhetischen Prinzipien der Architektur zu schaffen.
      Mit einem flexiblen Gestaltungsansatz und Erfahrung in unterschiedlichen Architekturstilen ist es mein Ziel, Entwürfe zu entwickeln, die nicht nur eine überzeugende visuelle Identität besitzen, sondern auch funktional durchdacht sind und den realen Anforderungen der Ausführung gerecht werden.
      Jedes Projekt betrachte ich als eine Gelegenheit, durch kreative und präzise Planung nachhaltige, charakterstarke und nutzungsorientierte Räume zu schaffen.`,
      Location: "Standort",
        LandArea: "Grundstücksfläche",
        BuiltArea: "Bebaute Fläche",
        Year: "Jahr",
        DesignBy: "Entwurf",
        Completion: "Fertigstellung",
        Architect: "Architekt",
project: {
  villaKhezershahr: {
    titleProject: "Villa Khezershahr",
    subtitle: "Wohnhaus – Villa",
    text: "Diese zeitgenössische Villa verkörpert moderne architektonische Prinzipien durch klare Linien, offen gestaltete Wohnbereiche und großzügige Verglasungen.  ",
  },

  apartmentInterior: {
    titleProject: "Schlafzimmergestaltung",
    subtitle: "Wohnung",
    text: "Diese Innenraumgestaltung konzentriert sich auf die Schaffung warmer und funktionaler Wohnräume. Natürliche Materialien, sanfte Beleuchtung und sorgfältig ausgewählte Möbel schaffen eine komfortable und elegante Atmosphäre.",
  },

  duplexElahieh: {
    titleProject: "Wohnzimmergestaltung",
    subtitle: "Wohnung",
    text: "Dieses Wohnzimmerdesign legt den Schwerpunkt auf Offenheit, natürliches Licht und hochwertige Materialien. Der Innenraum verbindet Funktionalität mit Eleganz und schafft eine warme und einladende Wohnatmosphäre.",
  },

  duplexKela: {
    titleProject: "Facade and Interior Design",
    subtitle: "Villa",
    text:"Eine zeitgenössische zweistöckige Villa, die mit einem  Architekturansatz entworfen wurde. Das Projekt legt Wert auf klare geometrische Formen, natürliche Steinoberflächen und ausgewogene Beleuchtung, um eine nahtlose Verbindung zwischen Innen- und Außenbereichen zu schaffen."
  },
},
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