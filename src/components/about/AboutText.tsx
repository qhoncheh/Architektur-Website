import { useTranslation } from "react-i18next";

const AboutText = () => {
  const { t } = useTranslation();

  return (
    <div className="about-copy" data-aos="fade-up">
      <span className="about-eyebrow">SPACES WITH A SENSE OF PLACE</span>
      {/* <h1>{t("AboutMe")}</h1> */}
      <p>{t("AboutMeText")}</p>
    </div>
  );
};

export default AboutText;