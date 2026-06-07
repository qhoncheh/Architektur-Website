import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import LanguageDropdown from "../dropdown/dropdown";

const SidebarFooter = () => {
  const { t } = useTranslation();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Button
        icon={<DownloadOutlined />}
        size="large"
        block
        style={{
          borderRadius: "999px",
          background: "#232d42",
          borderColor: "#232d42",
          color: "#fff",
          height: "50px",
        }}
      >
        {t("downloadCV")}
      </Button>

      <div
        style={{
          color: "#9ca3af",
          fontSize: "13px",
          textAlign: "center",
          lineHeight: "1.8",
        }}
      >
        <div>{t("Design")}</div>
        <div>{t("footer")}</div>
      </div>

      <LanguageDropdown />
    </div>
  );
};

export default SidebarFooter;