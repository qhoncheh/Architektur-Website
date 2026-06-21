import {
  Card,
  Typography,
  Space,
  Divider,
} from "antd";

import {
  EnvironmentOutlined,
  FieldTimeOutlined,
  HomeOutlined,
  TeamOutlined,
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

type Project = {
  title: string;
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
  return (
    <Card bordered={false} className="h-full !bg-transparent shadow-none">
      <div className="text-center mb-14">
        <Title level={3} style={{ color: "#Fff" }}>
          {project.title}
        </Title>

        <Text style={{ color: "#9ca3af" }}>
          {project.subtitle}
        </Text>
      </div>

      <Space direction="vertical" size="middle">
        <div>
          <Text strong style={{ color: "#6d83cc" }}>
            <EnvironmentOutlined /> Location : 
          </Text>
          <Text style={{ color: "#fff" }}> {project.location}</Text>
        </div>

        <div>
          <Text strong style={{ color: "#6d83cc" }}>
            <HomeOutlined /> Land Area : 
          </Text>
          <Text style={{ color: "#fff" }}> {project.landArea}</Text>
        </div>

        <div>
          <Text strong style={{ color: "#6d83cc" }}>
            <HomeOutlined /> Built Area : 
          </Text>
          <Text style={{ color: "#fff" }}> {project.builtArea}</Text>
        </div>

        <div>
          <Text strong style={{ color: "#6d83cc" }}>
            <FieldTimeOutlined /> Year :  
          </Text>
          <Text style={{ color: "#fff" }}>
            Design {project.year.design} - Completion {project.year.completion}
          </Text>
        </div>

        <div>
          <Text strong style={{ color: "#6d83cc" }}>
            <TeamOutlined /> Architect :
          </Text >
          <Text style={{ color: "#fff" }}> {project.designTeam.architect}</Text>
        </div>
      </Space>

      <Divider style={{ borderColor: "#474141", margin: "24px 0" }} />

      <Paragraph className="mt-8" style={{ color: "#cac3c3" }}>
        {project.text}
      </Paragraph>
    </Card>
  );
};

export default ProjectInfo;