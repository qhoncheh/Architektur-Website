import { Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

type Props = {
  onPrev: () => void;
  onNext: () => void;
};

const ProjectNavigation = ({ onPrev, onNext }: Props) => {
  const { t } = useTranslation();

  return (
    <div className="mt-6 flex justify-between">
      <Button
        type="text"
        icon={<LeftOutlined className="text-white!" />}
        onClick={onPrev}
        className="rounded-[50px]! border border-gray! text-white!" >
        {t("Previous")}
      </Button>
      <Button
        type="text"
        icon={<RightOutlined className="text-white!" />}
        iconPosition="end"
        onClick={onNext}
        className="rounded-[50px]! border border-gray! text-white!" >
        {t("Next")}
      </Button>
    </div>
  );
};

export default ProjectNavigation;