import { useEffect } from "react";
import { Row, Col } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { contactData } from "../../components/contact/data";
import ContactItem from "../../components/contact/Contact";
import "./Contact.css";

const Contact = () => {
  const { t } = useTranslation();
  const photoUrl = "/113.png";

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <main className="contact-page">
      <section className="contact-section">
        <div className="contact-kicker" data-aos="fade-up">
          <span>{t("contact.kicker")}</span>
          <span>{t("contact.prompt")}</span>
        </div>
        <Row gutter={[64, 48]} align="middle" className="contact-grid">
          <Col xs={24} lg={12}>
            <div className="contact-copy" data-aos="fade-up">
              <span className="contact-eyebrow">{t("contact.eyebrow")}</span>
              <h1 className="sr-only">{t("ContactMe")}</h1>
              <p>{t("contact.text")}</p>
              <div className="contact-list">
                {contactData.map((item) => (
                  <ContactItem key={item.type} {...item} />
                ))}
              </div>
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <figure className="contact-image" data-aos="fade-up" data-aos-delay="150">
              <img src={photoUrl} alt={t("contact.imageAlt")} />
              <figcaption><span>{t("contact.location")}</span><span>{t("contact.availability")}</span></figcaption>
            </figure>
          </Col>
        </Row>
      </section>
    </main>
  );
};

export default Contact;
