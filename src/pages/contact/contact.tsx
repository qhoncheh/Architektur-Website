import { useEffect } from "react";
import { Row, Col } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
// import { useTranslation } from "react-i18next";
import { contactData } from "../../components/contact/data";
import ContactItem from "../../components/contact/Contact";
import "./Contact.css";

const Contact = () => {
  const photoUrl = "/113.png";
  // const { t } = useTranslation();

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
          <span>04 / GET IN TOUCH</span>
          <span>HAVE A PROJECT IN MIND?</span>
        </div>
        <Row gutter={[64, 48]} align="middle" className="contact-grid">
          <Col xs={24} lg={12}>
            <div className="contact-copy" data-aos="fade-up">
              <span className="contact-eyebrow">LET’S MAKE SPACE FOR IT</span>
              {/* <h1>{t("ContactMe")}</h1> */}
              <p>For new projects, collaborations, or simply to say hello, get in touch.</p>
              <div className="contact-list">
                {contactData.map((item) => (
                  <ContactItem key={item.type} {...item} />
                ))}
              </div>
            </div>
          </Col>
          <Col xs={24} lg={12}>
            <figure className="contact-image" data-aos="fade-up" data-aos-delay="150">
              <img src={photoUrl} alt="Architecture and interior design by Ghazaleh Ataei" />
              <figcaption><span>MAZANDARAN · IRAN</span><span>AVAILABLE FOR SELECT PROJECTS</span></figcaption>
            </figure>
          </Col>
        </Row>
      </section>
    </main>
  );
};

export default Contact;
