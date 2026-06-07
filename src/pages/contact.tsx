import { useEffect } from "react";
import { Layout, Row, Col, Typography } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { FaTelegramPlane } from "react-icons/fa";
import { IoPhonePortrait } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

const { Content } = Layout;
const { Title, Text, Link } = Typography;
const Contact = () => {
  const photoUrl = "/113.png";

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
    <Layout
      style={{
        minHeight: "100vh",
        backgroundColor: "#1F2937",
      }}
    >
      <Content
        style={{
          padding: "50px",
          paddingTop: "100px",
        }}
      >
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
                  textAlign: "center",
                  fontSize: "2rem",
                  color: "#FFFFFF",
                  fontWeight: 300,
                }}
              >
                Contact Me
              </Title>

              <Link href="tel:09116771794">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "12px",
                  }}
                >
                  <PhoneOutlined style={{ color: "#9CA3AF" }} />
                  <Text style={textStyle}>09116771794</Text>
                </div>
              </Link>

              <Link href="tel:09356944705">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "12px",
                  }}
                >
                  <IoPhonePortrait
                    style={{ color: "#9CA3AF", fontSize: "18px" }}
                  />
                  <Text style={textStyle}>09356944705</Text>
                </div>
              </Link>

              <Link
                href="https://www.linkedin.com/in/ghazaleh-ataei-b54829192/"
                target="_blank"
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "12px",
                  }}
                >
                  <LinkedinOutlined
                    style={{ color: "#9CA3AF", fontSize: "18px" }}
                  />
                  <Text style={textStyle}>ghazalehataei</Text>
                </div>
              </Link>

              <Link href="https://t.me/ghazalehataei" target="_blank">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "12px",
                  }}
                >
                  <FaTelegramPlane
                    style={{ color: "#9CA3AF", fontSize: "18px" }}
                  />
                  <Text style={textStyle}>@ghazalehataei</Text>
                </div>
              </Link>

              <Link href="mailto:ghazalehataeim@gmail.com">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "12px",
                  }}
                >
                  <MailOutlined
                    style={{ color: "#9CA3AF", fontSize: "18px" }}
                  />
                  <Text style={textStyle}>
                    ghazalehataeim@gmail.com
                  </Text>
                </div>
              </Link>
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
                data-aos="fade-up"
                data-aos-delay="300"
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