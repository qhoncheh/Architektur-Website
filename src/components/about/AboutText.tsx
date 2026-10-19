import { useTranslation } from "react-i18next";

const AboutText = () => {
  const { t } = useTranslation();

  return (
    <div className="about-copy" data-aos="fade-up">
      <span className="about-eyebrow">{t("about.eyebrow")}</span>
      <h1 className="sr-only">{t("AboutMe")}</h1>
      <p>{t("about.text")}</p>
    </div>
  );
};

export default AboutText;