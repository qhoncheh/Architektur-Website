import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';

const { Title, Paragraph } = Typography;

const AboutText = () => {
  const { t } = useTranslation();

  return (
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
  );
};

export default AboutText;