import { useEffect } from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

const { Content } = Layout;
// const { Title, Text } = Typography;
const { Title, Paragraph } = Typography;

const About = () => {
const photoUrl = '/112.png';
const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-out-cubic',
      once: true,
    });
  }, []);

  return (
    <Layout
      className="site-layout"
      style={{
        minHeight: '100vh',
        backgroundColor: 'transparent',
      }}
    >
      <Content
        style={{
          padding: '50px',
          paddingTop: '100px',
        }}
      >
        <Row
          gutter={[24, 24]}
          align="middle"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <Col xs={24} sm={24} md={24} lg={12}>
            <div
              style={{
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100%',
              }}
            >
              <Title
                level={3}
                style={{
                  marginBottom: '16px',
                  fontSize: '1.5rem',
                  color: '#FFFFFF',
                  fontWeight: 300,
                }}
              >
                {t("AboutMe")}
              </Title>


              <Paragraph
                style={{
                  fontSize: '1rem',
                  color: '#9CA3AF',
                  lineHeight: '1.75',
                  textAlign: 'justify',
                  whiteSpace: 'pre-line',
                  marginBottom: 0,
                }}
              >
                {t("AboutMeText")}
              </Paragraph>
            </div>
          </Col>

          <Col xs={24} sm={24} md={24} lg={12}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <img
                src={photoUrl}
                alt="توضیح عکس"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
                style={{
                  width: '80%',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default About;