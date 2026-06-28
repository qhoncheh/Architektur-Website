import { useEffect } from "react";
import { Layout, Row, Col, Typography } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { contactData } from "../../components/contact/contactData";
import ContactItem from "../../components/contact/ContactItem";

const { Content } = Layout;
const { Title } = Typography;

const Contact = () => {
  const photoUrl = "/113.png";
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const textStyle = {
    color: "#9CA3AF",
    fontSize: "18px",
    fontWeight: 400,
  };

  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "transparent" }}>
      <Content style={{ padding: "50px", paddingTop: "100px" }}>
        <Row gutter={[24, 24]} align="middle" data-aos="fade-up">
          <Col xs={24} sm={24} md={24} lg={12}>
            <div
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
                gap: "20px",
              }}
            >
              <Title
                level={3}
                style={{
                  marginBottom: "30px",
                  fontSize: "1.5rem",
                  color: "#FFFFFF",
                  fontWeight: 300,
                }}
              >
                {t("ContactMe")}
              </Title>

              {contactData.map((item, index) => (
                <ContactItem key={index} {...item} textStyle={textStyle} />
              ))}
            </div>
          </Col>

          <Col xs={24} sm={24} md={24} lg={12}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <img
                src={photoUrl}
                alt="Contact"
                style={{
                  width: "90%",
                  height: "400px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Contact;
