import { Typography } from "antd";
import { useTranslation } from "react-i18next";

const { Title, Paragraph } = Typography;

const AboutText = () => {
  const { t } = useTranslation();

  return (
    <div className="flex h-full flex-col justify-center text-center">
      <Title
        level={3}
        className="mb-4! text-2xl! font-light! text-white!"
      >
        {t("AboutMe")}
      </Title>

      <Paragraph className="mb-0! whitespace-pre-line text-justify text-base! leading-7! text-[#9CA3AF]!">
        {t("AboutMeText")}
      </Paragraph>
    </div>
  );
};

export default AboutText;