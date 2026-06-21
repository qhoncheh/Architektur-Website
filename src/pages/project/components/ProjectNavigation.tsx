import { Button } from "antd";
import {
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";

type Props = {
  onPrev: () => void;
  onNext: () => void;
};

const ProjectNavigation = ({
  onPrev,
  onNext,
}: Props) => {
  return (
    <div className="flex justify-between mt-6">
      <Button
        type="text"
        icon={<LeftOutlined  style={{ color: "#fff" }}/>}
        onClick={onPrev}
        style={{ color: "#fff" }}
      >
        Previous
      </Button>

      <Button
        type="text"
        icon={<RightOutlined style={{ color: "#fff" }} />}
        iconPosition="end"
        onClick={onNext}
        style={{ color: "#fff" }}
      >
        Next
      </Button>
    </div>
  );
};

export default ProjectNavigation;