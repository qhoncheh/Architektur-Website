import { useTranslation } from "react-i18next";

const AboutImage = () => {
  const { t } = useTranslation();
  const photoUrl = "/112.png";

  return (
    <figure className="about-image" data-aos="fade-up" data-aos-delay="150">
      <img
        src={photoUrl}
        alt={t("about.imageAlt")}
      />
      <figcaption><span>GHAZALEH ATAEI</span><span>{t("about.imageCaption")}</span></figcaption>
    </figure>
  );
};

export default AboutImage;