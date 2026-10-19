import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="site-footer">
      <Link className="footer-brand" to="/">GHAZALEH ATAEI<span>{t("brand.footerTagline")}</span></Link>
      <p>{t("footer")}</p>
      <a href="mailto:hello@ghazalehataei.com">{t("footerContact")} <span aria-hidden="true">↗</span></a>
    </footer>
  );
};

export default Footer;
