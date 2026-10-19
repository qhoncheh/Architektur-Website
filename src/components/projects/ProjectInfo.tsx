import { Card, Typography, Space, Divider } from "antd";
import {
  EnvironmentOutlined,
  FieldTimeOutlined,
  HomeOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import type { InfoItem } from "../../types/type";

const { Title, Text, Paragraph } = Typography;

type Project = {
  id: string;
  translationKey: string;
  titleKey: string;
  subtitleKey: string;
  textKey: string;
  landArea: string;
  builtArea: string;
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
  const infoItems: InfoItem[] = [
    {
      key: "location",
      icon: <EnvironmentOutlined />,
      label: t("project.location"),
      value: t(`project.${project.translationKey}.location`),
    },
    {
      key: "landArea",
      icon: <HomeOutlined />,
      label: t("project.LandArea"),
      value: `${project.landArea} ${t("project.sqm")}`,
    },
    {
      key: "builtArea",
      icon: <HomeOutlined />,
      label: t("project.BuiltArea"),
      value: `${project.builtArea} ${t("project.sqm")}`,
    },
    {
      key: "year",
      icon: <FieldTimeOutlined />,
      label: t("project.Year"),
      value: (
        <>
            {t("project.DesignBy")} {project.year.design} - {t("project.Completion")}{" "}
          {project.year.completion}
        </>
      ),
    },
    {
      key: "architect",
      icon: <TeamOutlined />,
      label: t("project.Architect"),
      value: project.designTeam.architect,
    },
  ];

  return (
    <Card bordered={false} className="h-full bg-transparent! shadow-none">
      <div className="mb-14 text-center">
        <Title level={4} className="font-normal! text-white!"> {t(project.titleKey)} </Title>
        <Text className="text-[#9ca3af]!"> {t(project.subtitleKey)} </Text>
      </div>
      <Space direction="vertical" size="middle">
        {infoItems.map(({ key, icon, label, value }) => (
          <div key={key}> <Text className="text-[#6d83cc]!"> {icon} {label} : </Text>
            <Text className="text-white!"> {value}</Text>
          </div>
        ))}
      </Space>
      <Divider className="my-6! border-[#474141]!" />
      <Paragraph className="mt-8 text-[#cac3c3]!"> {t(project.textKey)} </Paragraph>
    </Card>
  );
};

export default ProjectInfo;