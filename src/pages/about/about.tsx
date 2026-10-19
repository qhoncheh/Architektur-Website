import { useEffect } from "react";
import { Row, Col } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutText from "../../components/about/AboutText";
import AboutImage from "../../components/about/AboutImage";
import "./About.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200,  easing: "ease-out-cubic",  once: true });
  }, []);
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-kicker" data-aos="fade-up">
          <span>01 / THE STUDIO</span>
          <span>INDEPENDENT ARCHITECTURE · MAZANDARAN, IRAN</span>
        </div>
        <Row gutter={[48, 48]} align="middle" className="about-grid">
          <Col xs={24} lg={11}>
            <AboutText />
          </Col>
          <Col xs={24} lg={13}>
            <AboutImage />
          </Col>
        </Row>
        <div className="about-endnote">
          <span>THOUGHTFUL BY DESIGN.</span>
          <span>TIMELESS BY NATURE.</span>
        </div>
      </section>
    </main>
  );
};

export default About;
