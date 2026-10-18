import { useState } from "react";
import { Link, useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { label: t("menu.projects"), href: "/#projects" },
    { label: t("menu.about"), href: "/about" },
    { label: t("menu.contact"), href: "/contact" },
  ];

  const toggleLanguage = () => {
    void i18n.changeLanguage(i18n.language.startsWith("de") ? "en" : "de");
  };

  return (
    <header className="site-header">
      <Link className="brand-mark" to="/" aria-label="Ghazaleh Ataei home">
        <span className="brand-monogram">GA</span>
        <span className="brand-name">GHAZALEH ATAEI<span>ARCHITECTURE & INTERIORS</span></span>
      </Link>
      <button className="menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        <span /> <span />
      </button>
      <nav className={`header-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className={location.pathname === link.href ? "is-active" : ""}>
            {link.label}
          </a>
        ))}
        <button className="language-button" type="button" onClick={toggleLanguage} aria-label="Switch language">
          {i18n.language.startsWith("de") ? "EN" : "DE"}
        </button>
      </nav>
    </header>
  );
};

export default Header;
