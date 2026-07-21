import { Card, Typography, Space, Divider } from "antd";
import {
  EnvironmentOutlined,
  FieldTimeOutlined,
  HomeOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const { Title, Text, Paragraph } = Typography;

type Project = {
  titleProject: string;
  subtitle: string;
  location: string;
  landArea: string;
  builtArea: string;
  text: string;
  images: string[];
  year: {
    design: string;
    completion: string;
  };
  designTeam: {
    architect: string;
  };
};

type Props = {
  project: Project;
};

const ProjectInfo = ({ project }: Props) => {
  const { t } = useTranslation();

  return (
    <Card bordered={false} className="h-full !bg-transparent shadow-none">
      <div className="text-center mb-14">
        <Title level={4} style={{ color: "#fff", fontWeight: "normal" }}>
          {project.titleProject}
        </Title>

        <Text style={{ color: "#9ca3af" }}>{project.subtitle}</Text>
      </div>

      <Space direction="vertical" size="middle">
        <div>
          <Text style={{ color: "#6d83cc" }}>
            <EnvironmentOutlined /> {t("Location")} :
          </Text>
          <Text style={{ color: "#fff" }}> {project.location}</Text>
        </div>

        <div>
          <Text style={{ color: "#6d83cc" }}>
            <HomeOutlined /> {t("LandArea")} :
          </Text>
          <Text style={{ color: "#fff" }}> {project.landArea}</Text>
        </div>

        <div>
          <Text style={{ color: "#6d83cc" }}>
            <HomeOutlined /> {t("BuiltArea")} :
          </Text>
          <Text style={{ color: "#fff" }}> {project.builtArea}</Text>
        </div>

        <div>
          <Text style={{ color: "#6d83cc" }}>
            <FieldTimeOutlined /> {t("Year")} :
          </Text>
          <Text style={{ color: "#fff" }}>
            {t("DesignBy")} {project.year.design} - {t("Completion")}{" "}
            {project.year.completion}
          </Text>
        </div>

        <div>
          <Text style={{ color: "#6d83cc" }}>
            <TeamOutlined /> {t("Architect")} :
          </Text>
          <Text style={{ color: "#fff" }}> {project.designTeam.architect}</Text>
        </div>
      </Space>

      <Divider style={{ borderColor: "#474141", margin: "24px 0" }} />

      <Paragraph className="mt-8" style={{ color: "#cac3c3" }}>
        {t(project.text)}
      </Paragraph>
    </Card>
  );
};

export default ProjectInfo;