import { Menu, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { NavLink, useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import LanguageToggle from "../language/language";

const SidebarContent = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const menuItems = [
    {
      key: "/",
      label: <NavLink to="/">{t("projects")}</NavLink>,
    },
    {
      key: "/about",
      label: <NavLink to="/about">{t("about")}</NavLink>,
    },
    {
      key: "/contact",
      label: <NavLink to="/contact">{t("contact")}</NavLink>,
    },
  ];

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "32px 20px",
        background: "#111827",
        position: "relative",
      }}
    >
      <div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
          style={{
            border: "none",
            background: "transparent",
            textAlign: "center",
          }}
        />
      </div>

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

        <LanguageToggle />
      </div>
    </div>
  );
};

export default SidebarContent;