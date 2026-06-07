import { Dropdown } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import i18n from "../../../i18n";


const LanguageDropdown = () => {
  const items = [
    {
      key: "de",
      label: "Deutsch",
      onClick: () => i18n.changeLanguage("de"),
    },
    {
      key: "en",
      label: "English",
      onClick: () => i18n.changeLanguage("en"),
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={["hover"]}>
      <div
        style={{
          position: "absolute",
          bottom: "230px",
          left: "2px",
          cursor: "pointer",
          width: 48,
          height: 48,
          border: "1px solid #232d42",
          borderRadius: 12,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <GlobalOutlined style={{ fontSize: 22, color: "#d1d5db" }} />
      </div>
    </Dropdown>
  );
};

export default LanguageDropdown;