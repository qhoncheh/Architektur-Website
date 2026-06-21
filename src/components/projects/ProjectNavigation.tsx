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
    <div className="flex justify-between mt-6">
      <Button
        type="text"
        icon={<LeftOutlined style={{ color: "#fff"  }} />}
        onClick={onPrev}
        style={{ color: "#fff" , border: "1px solid gray" , borderRadius: "50px"  }}
      >
        {t("Previous")}
      </Button>

      <Button
        type="text"
        icon={<RightOutlined style={{ color: "#fff" }} />}
        iconPosition="end"
        onClick={onNext}
        style={{ color: "#fff" , border: "1px solid gray" , borderRadius: "50px" }}
      >
        {t("Next")}
      </Button>
    </div>
  );
};

export default ProjectNavigation;