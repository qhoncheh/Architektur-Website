import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      language: { label: "Language", fa: "فارسی", en: "English", de: "Deutsch" },
      siteTitle: "Ghazaleh Ataei | Architecture & Interiors",
      menu: { projects: "Projects", about: "About", contact: "Contact", downloadCV: "Download CV", toggle: "Toggle navigation" },
      brand: { home: "Ghazaleh Ataei home", tagline: "Architecture & Interiors", footerTagline: "Architecture · Interiors · Objects" },
      Design: "Designed & developed by", footer: "© 2026 All rights reserved", footerContact: "Start a conversation",
      ContactMe: "Contact me", AboutMe: "About me", Previous: "Previous", Next: "Next",
      about: {
        kicker: "01 / THE STUDIO", descriptor: "INDEPENDENT ARCHITECTURE · MAZANDARAN, IRAN",
        eyebrow: "SPACES WITH A SENSE OF PLACE", noteOne: "THOUGHTFUL BY DESIGN.", noteTwo: "TIMELESS BY NATURE.",
        imageAlt: "Architecture studio portrait", imageCaption: "ARCHITECTURE & INTERIORS",
        text: "For me, architecture is much more than designing a building—it is a process of shaping spaces that enhance people's quality of life. In every project, I strive to create a balanced harmony between the client's requirements, the site's characteristics, and the aesthetic principles of architecture. With a flexible design approach and experience in various architectural styles, my goal is to develop designs that have a compelling visual identity, are functionally thoughtful, and meet the real-world demands of execution. I view each project as an opportunity to create sustainable, characterful, and user-oriented spaces through creative and precise planning.",
      },
      home: {
        heroLabel: "Featured architecture project", studio: "INDEPENDENT ARCHITECTURE STUDIO", location: "MAZANDARAN · IRAN",
        description: "We shape considered spaces for living, gathering and belonging.", exploreLabel: "Explore selected work", explore: "EXPLORE THE WORK",
        scroll: "SCROLL TO DISCOVER", category: "RESIDENTIAL · INTERIORS · OBJECTS",
        approach: "01 / OUR APPROACH", approachTitle: "DESIGNING A SENSE OF PLACE", introTitle: "Less, but|more meaningful.",
        introText: "We are an independent architecture and interior design studio creating places with a strong sense of identity. Our work begins with listening—to the land, to the light, and to the lives that will unfold within each space.",
        noteOne: "THOUGHTFUL BY DESIGN.", noteTwo: "TIMELESS BY NATURE.", selected: "02 / SELECTED WORK", selectedTitle: "Built around|how we live.",
        selectedText: "A collection of places shaped by light, material and the everyday rituals of life.",
        projectsNote: "SELECTED PROJECTS · 2024—2026", projectsEnd: "MADE WITH CARE, FROM THE GROUND UP.",
        services: "03 / WHAT WE DO", servicesTitle: "From first sketch|to last detail.", servicesText: "One studio, a considered process, and a clear point of view at every scale.",
        serviceArchitecture: "Architecture", serviceInterior: "Interior design", serviceSpatial: "Spatial direction",
      },
      contact: {
        kicker: "04 / GET IN TOUCH", prompt: "HAVE A PROJECT IN MIND?", eyebrow: "LET’S MAKE SPACE FOR IT",
        text: "For new projects, collaborations, or simply to say hello, get in touch.", imageAlt: "Architecture and interior design by Ghazaleh Ataei",
        availability: "AVAILABLE FOR SELECT PROJECTS", location: "MAZANDARAN · IRAN",
      },
      project: {
        selected: "SELECTED PROJECT", location: "Location", LandArea: "Land area", BuiltArea: "Built area", Year: "Year", Completion: "Completion", DesignBy: "Design", Architect: "Architect", sqm: "sqm",
        villaKhezershahr: { titleProject: "Villa Khezershahr", subtitle: "Residential – Villa", text: "This contemporary villa embodies modern architectural principles through clean lines, open-plan living areas, and expansive glazing.", location: "Khezershahr, Mazandaran" },
        apartmentInterior: { titleProject: "Bedroom Design", subtitle: "Apartment", text: "This interior renovation focuses on creating warm and functional living spaces, combining contemporary aesthetics with practical solutions. Natural materials, soft lighting, and carefully selected furnishings create a comfortable and elegant atmosphere.", location: "Babol, Mazandaran" },
        duplexElahieh: { titleProject: "Living Room", subtitle: "Apartment", text: "This living room design emphasizes openness, natural light, and refined materials. The interior balances functionality with elegance, creating a warm and welcoming environment for everyday living.", location: "Babol, Mazandaran" },
        duplexKela: { titleProject: "Facade and Interior Design", subtitle: "Modern Villa", text: "This villa features a striking facade and thoughtfully designed interior spaces that blend seamlessly with the surrounding landscape. The design emphasizes natural materials and open layouts to create a harmonious living environment.", location: "Kelaabad, Mazandaran" },
        fifthProject: { titleProject: "Modern Residence", subtitle: "Residential", text: "A contemporary residence designed with clean geometric forms, natural stone surfaces, and balanced lighting to create a seamless connection between interior spaces and the surrounding landscape.", location: "Sorkhrood, Mazandaran" },
      },
    },
  },
  de: {
    translation: {
      language: { label: "Sprache", fa: "فارسی", en: "English", de: "Deutsch" },
      siteTitle: "Ghazaleh Ataei | Architektur & Innenräume",
      menu: { projects: "Projekte", about: "Über uns", contact: "Kontakt", downloadCV: "Lebenslauf herunterladen", toggle: "Navigation umschalten" },
      brand: { home: "Ghazaleh Ataei – Startseite", tagline: "Architektur & Innenräume", footerTagline: "Architektur · Innenräume · Objekte" },
      Design: "Gestaltet & entwickelt von", footer: "© 2026 Alle Rechte vorbehalten", footerContact: "Kontakt aufnehmen",
      ContactMe: "Kontakt", AboutMe: "Über mich", Previous: "Zurück", Next: "Weiter",
      about: {
        kicker: "01 / DAS STUDIO", descriptor: "UNABHÄNGIGE ARCHITEKTUR · MAZANDARAN, IRAN",
        eyebrow: "RÄUME MIT CHARAKTER", noteOne: "DURCHDACHT ENTWORFEN.", noteTwo: "ZEITLOS VON NATUR AUS.",
        imageAlt: "Porträt im Architekturstudio", imageCaption: "ARCHITEKTUR & INNENRÄUME",
        text: "Architektur ist für mich weit mehr als das Entwerfen eines Gebäudes – sie ist ein Prozess, Räume zu gestalten, die die Lebensqualität der Menschen verbessern. In jedem Projekt strebe ich ein ausgewogenes Zusammenspiel zwischen den Anforderungen der Auftraggebenden, den Besonderheiten des Ortes und den ästhetischen Prinzipien der Architektur an. Mit einem flexiblen Gestaltungsansatz und Erfahrung in unterschiedlichen Architekturstilen entwickle ich Entwürfe mit einer überzeugenden visuellen Identität, durchdachter Funktionalität und einem klaren Blick auf die praktische Umsetzung. Jedes Projekt ist eine Gelegenheit, durch kreative und präzise Planung nachhaltige, charakterstarke und nutzungsorientierte Räume zu schaffen.",
      },
      home: {
        heroLabel: "Ausgewähltes Architekturprojekt", studio: "UNABHÄNGIGES ARCHITEKTURSTUDIO", location: "MAZANDARAN · IRAN",
        description: "Wir gestalten durchdachte Räume zum Leben, Zusammenkommen und Wohlfühlen.", exploreLabel: "Ausgewählte Projekte entdecken", explore: "PROJEKTE ENTDECKEN",
        scroll: "WEITER ENTDECKEN", category: "WOHNEN · INNENRÄUME · OBJEKTE",
        approach: "01 / UNSER ANSATZ", approachTitle: "EIN GEFÜHL FÜR DEN ORT SCHAFFEN", introTitle: "Weniger, aber|bedeutungsvoller.",
        introText: "Wir sind ein unabhängiges Architektur- und Innenarchitekturstudio und schaffen Orte mit einer starken Identität. Unsere Arbeit beginnt mit dem Zuhören – dem Ort, dem Licht und den Menschen, deren Leben sich hier entfalten wird.",
        noteOne: "DURCHDACHT ENTWORFEN.", noteTwo: "ZEITLOS VON NATUR AUS.", selected: "02 / AUSGEWÄHLTE PROJEKTE", selectedTitle: "Gestaltet für|unser Leben.",
        selectedText: "Eine Sammlung von Orten, geprägt von Licht, Material und den alltäglichen Ritualen des Lebens.",
        projectsNote: "AUSGEWÄHLTE PROJEKTE · 2024—2026", projectsEnd: "MIT SORGFALT VON GRUND AUF GESTALTET.",
        services: "03 / UNSER ANGEBOT", servicesTitle: "Von der ersten Skizze|bis ins letzte Detail.", servicesText: "Ein Studio, ein durchdachter Prozess und eine klare Haltung in jedem Maßstab.",
        serviceArchitecture: "Architektur", serviceInterior: "Innenarchitektur", serviceSpatial: "Räumliche Gestaltung",
      },
      contact: {
        kicker: "04 / KONTAKT", prompt: "SIE PLANEN EIN PROJEKT?", eyebrow: "RAUM DAFÜR SCHAFFEN", text: "Für neue Projekte, Kooperationen oder einfach einen freundlichen Gruß – nehmen Sie Kontakt auf.",
        imageAlt: "Architektur und Innenarchitektur von Ghazaleh Ataei", availability: "OFFEN FÜR AUSGEWÄHLTE PROJEKTE", location: "MAZANDARAN · IRAN",
      },
      project: {
        selected: "AUSGEWÄHLTES PROJEKT", location: "Standort", LandArea: "Grundstücksfläche", BuiltArea: "Bebaute Fläche", Year: "Jahr", Completion: "Fertigstellung", DesignBy: "Entwurf", Architect: "Architektin", sqm: "m²",
        villaKhezershahr: { titleProject: "Villa Khezershahr", subtitle: "Wohnen – Villa", text: "Diese zeitgenössische Villa verkörpert moderne Architektur mit klaren Linien, offenen Wohnbereichen und großzügigen Verglasungen.", location: "Khezershahr, Mazandaran" },
        apartmentInterior: { titleProject: "Schlafzimmergestaltung", subtitle: "Wohnung", text: "Diese Innenraumgestaltung schafft warme und funktionale Wohnbereiche und verbindet zeitgenössische Ästhetik mit praktischen Lösungen. Natürliche Materialien, sanftes Licht und sorgfältig ausgewählte Möbel sorgen für eine behagliche und elegante Atmosphäre.", location: "Babol, Mazandaran" },
        duplexElahieh: { titleProject: "Wohnzimmergestaltung", subtitle: "Wohnung", text: "Dieses Wohnzimmer setzt auf Offenheit, natürliches Licht und hochwertige Materialien. Funktionalität und Eleganz verbinden sich zu einer warmen, einladenden Atmosphäre für den Alltag.", location: "Babol, Mazandaran" },
        duplexKela: { titleProject: "Fassaden- und Innenraumgestaltung", subtitle: "Moderne Villa", text: "Diese Villa verbindet eine markante Fassade mit sorgfältig gestalteten Innenräumen, die sich harmonisch in die Landschaft einfügen. Natürliche Materialien und offene Grundrisse schaffen ein stimmiges Wohnumfeld.", location: "Kelaabad, Mazandaran" },
        fifthProject: { titleProject: "Modernes Wohnhaus", subtitle: "Wohnhaus", text: "Ein zeitgenössisches Wohnhaus mit klaren geometrischen Formen, Natursteinoberflächen und ausgewogener Beleuchtung. So entsteht eine fließende Verbindung zwischen Innenräumen und Landschaft.", location: "Sorkhrood, Mazandaran" },
      },
    },
  },
  fa: {
    translation: {
      language: { label: "زبان", fa: "فارسی", en: "English", de: "Deutsch" },
      siteTitle: "غزاله عطایی | معماری و طراحی داخلی",
      menu: { projects: "پروژه‌ها", about: "درباره ما", contact: "تماس", downloadCV: "دانلود رزومه", toggle: "باز و بسته کردن منو" },
      brand: { home: "صفحه اصلی غزاله عطایی", tagline: "معماری و طراحی داخلی", footerTagline: "معماری · طراحی داخلی · اشیا" },
      Design: "طراحی و توسعه توسط", footer: "© ۲۰۲۶ تمامی حقوق محفوظ است", footerContact: "شروع گفتگو",
      ContactMe: "تماس با من", AboutMe: "درباره من", Previous: "قبلی", Next: "بعدی",
      about: {
        kicker: "۰۱ / استودیو", descriptor: "استودیوی مستقل معماری · مازندران، ایران",
        eyebrow: "فضاهایی با هویت و معنا", noteOne: "طراحی‌شده با دقت.", noteTwo: "ماندگار همچون طبیعت.",
        imageAlt: "پرتره در استودیوی معماری", imageCaption: "معماری و طراحی داخلی",
        text: "برای من، معماری بسیار فراتر از طراحی یک ساختمان است؛ فرایند شکل‌دادن به فضاهایی است که کیفیت زندگی مردم را ارتقا می‌دهند. در هر پروژه می‌کوشم میان نیازهای کارفرما، ویژگی‌های بستر و اصول زیبایی‌شناسی معماری هماهنگی ایجاد کنم. با رویکردی منعطف و تجربه در سبک‌های گوناگون معماری، هدفم خلق طرح‌هایی با هویت بصری متمایز، عملکردی سنجیده و قابل‌اجراست. هر پروژه فرصتی است تا با برنامه‌ریزی خلاقانه و دقیق، فضاهایی پایدار، شخصیت‌مند و متناسب با نیاز کاربران خلق کنم.",
      },
      home: {
        heroLabel: "پروژه منتخب معماری", studio: "استودیوی مستقل معماری", location: "مازندران · ایران",
        description: "فضاهایی سنجیده برای زندگی، گردهم‌آمدن و احساس تعلق طراحی می‌کنیم.", exploreLabel: "مشاهده پروژه‌های منتخب", explore: "مشاهده پروژه‌ها",
        scroll: "برای کشف بیشتر پیمایش کنید", category: "مسکونی · طراحی داخلی · اشیا",
        approach: "۰۱ / رویکرد ما", approachTitle: "طراحی با درک هویت مکان", introTitle: "کمتر، اما|معنادارتر.",
        introText: "ما استودیویی مستقل در زمینه معماری و طراحی داخلی هستیم و مکان‌هایی با هویتی متمایز خلق می‌کنیم. کار ما با گوش‌سپردن آغاز می‌شود؛ به زمین، به نور و به زندگی‌هایی که در هر فضا جریان خواهند یافت.",
        noteOne: "طراحی‌شده با دقت.", noteTwo: "ماندگار همچون طبیعت.", selected: "۰۲ / پروژه‌های منتخب", selectedTitle: "طراحی‌شده برای|شیوه زندگی ما.",
        selectedText: "مجموعه‌ای از مکان‌ها که نور، مصالح و آیین‌های روزمره زندگی به آن‌ها شکل داده‌اند.",
        projectsNote: "پروژه‌های منتخب · ۲۰۲۴—۲۰۲۶", projectsEnd: "با دقت، از پایه تا جزئیات.",
        services: "۰۳ / خدمات ما", servicesTitle: "از نخستین طرح|تا آخرین جزئیات.", servicesText: "یک استودیو، فرایندی سنجیده و نگاهی روشن در هر مقیاس.",
        serviceArchitecture: "معماری", serviceInterior: "طراحی داخلی", serviceSpatial: "طراحی فضایی",
      },
      contact: {
        kicker: "۰۴ / ارتباط با ما", prompt: "پروژه‌ای در ذهن دارید؟", eyebrow: "برای آن فضا بسازیم", text: "برای پروژه‌های جدید، همکاری یا حتی یک سلام ساده، با من در ارتباط باشید.",
        imageAlt: "معماری و طراحی داخلی اثر غزاله عطایی", availability: "پذیرای پروژه‌های منتخب", location: "مازندران · ایران",
      },
      project: {
        selected: "پروژه منتخب", location: "موقعیت", LandArea: "مساحت زمین", BuiltArea: "زیربنا", Year: "سال", Completion: "پایان پروژه", DesignBy: "طراحی", Architect: "معمار", sqm: "مترمربع",
        villaKhezershahr: { titleProject: "ویلای خزرشهر", subtitle: "مسکونی – ویلا", text: "این ویلای معاصر با خطوط ساده، فضاهای باز و پنجره‌های گسترده، اصول معماری مدرن را به نمایش می‌گذارد.", location: "خزرشهر، مازندران" },
        apartmentInterior: { titleProject: "طراحی اتاق خواب", subtitle: "آپارتمان", text: "این بازسازی داخلی با ترکیب زیبایی‌شناسی معاصر و راهکارهای کاربردی، فضاهایی گرم و کارآمد خلق می‌کند. مصالح طبیعی، نورپردازی ملایم و مبلمان گزیده، فضایی آرام و دلنشین می‌سازند.", location: "بابل، مازندران" },
        duplexElahieh: { titleProject: "طراحی نشیمن", subtitle: "آپارتمان", text: "در این طراحی بر گشودگی فضا، نور طبیعی و مصالح باکیفیت تأکید شده است. ترکیب کارایی و ظرافت، محیطی گرم و دلپذیر برای زندگی روزمره می‌سازد.", location: "بابل، مازندران" },
        duplexKela: { titleProject: "طراحی نما و فضای داخلی", subtitle: "ویلای مدرن", text: "این ویلا نمایی شاخص و فضاهای داخلی سنجیده‌ای دارد که با چشم‌انداز پیرامون هماهنگ‌اند. مصالح طبیعی و پلان‌های باز، محیطی متعادل برای زندگی ایجاد می‌کنند.", location: "کله‌آباد، مازندران" },
        fifthProject: { titleProject: "خانه‌ای مدرن", subtitle: "مسکونی", text: "خانه‌ای معاصر با فرم‌های هندسی ساده، سطوح سنگ طبیعی و نورپردازی متعادل که پیوندی روان میان فضای داخلی و چشم‌انداز پیرامون برقرار می‌کند.", location: "سرخرود، مازندران" },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
