import { useEffect } from "react";
import { Layout, Row, Col } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutText from "../../components/about/AboutText";
import AboutImage from "../../components/about/AboutImage";

const { Content } = Layout;

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <Layout
      className="site-layout"
      style={{ minHeight: "100vh", backgroundColor: "transparent" }}
    >
      <Content style={{ padding: "50px", paddingTop: "100px" }}>
        <Row gutter={[24, 24]} align="middle">
          <Col xs={24} sm={24} md={24} lg={12}>
            <AboutText />
          </Col>

          <Col xs={24} sm={24} md={24} lg={12}>
            <AboutImage />
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default About;
