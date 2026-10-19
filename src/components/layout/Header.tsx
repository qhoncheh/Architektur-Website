import { useState } from "react";
import { Link, useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

const Header = () => {
  const { t, i18n: currentI18n } = useTranslation();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { label: t("menu.projects"), href: "/#projects" },
    { label: t("menu.about"), href: "/about" },
    { label: t("menu.contact"), href: "/contact" },
  ];

  return (
    <header className="site-header">
      <Link className="brand-mark" to="/" aria-label={t("brand.home")}>
        <span className="brand-monogram">GA</span>
        <span className="brand-name">GHAZALEH ATAEI<span>{t("brand.tagline")}</span></span>
      </Link>
      <button className="menu-toggle" type="button" aria-label={t("menu.toggle")} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        <span /> <span />
      </button>
      <nav className={`header-nav${menuOpen ? " is-open" : ""}`} aria-label={t("menu.toggle")}>
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className={location.pathname === link.href ? "is-active" : ""}>
            {link.label}
          </a>
        ))}
        <label className="language-select-wrap">
          <span className="sr-only">{t("language.label")}</span>
          <select
            className="language-select"
            aria-label={t("language.label")}
            value={currentI18n.resolvedLanguage ?? currentI18n.language}
            onChange={(event) => void i18n.changeLanguage(event.target.value)}
          >
            <option value="fa">{t("language.fa")}</option>
            <option value="en">{t("language.en")}</option>
            <option value="de">{t("language.de")}</option>
          </select>
        </label>
      </nav>
    </header>
  );
};

export default Header;
