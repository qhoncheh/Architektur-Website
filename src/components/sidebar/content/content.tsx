import { Menu, Button } from "antd";
import {
  UserOutlined,
  FolderOpenOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { NavLink, useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import LanguageToggle from "../language/language";

const SidebarContent = ({ collapsed = false }) => {
  const location = useLocation();
  const { t } = useTranslation();

  const menuItems = [
    {
      key: "/",
      icon: <FolderOpenOutlined />,
      label: (
        <NavLink to="/" style={{ fontWeight: "300" }}>
          {t("projects")}
        </NavLink>
      ),
    },
    {
      key: "/about",
      icon: <UserOutlined />,
      label: (
        <NavLink to="/about" style={{ fontWeight: "300" }}>
          {t("about")}
        </NavLink>
      ),
    },
    {
      key: "/contact",
      icon: <MailOutlined />,
      label: (
        <NavLink to="/contact" style={{ fontWeight: "300" }}>
          {t("contact")}
        </NavLink>
      ),
    },
  ];

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: collapsed ? "70px 10px 20px" : "70px 20px 32px",
        background: "#111827",
        position: "relative",
      }}
    >
      <div>
        <Menu
          theme="dark"
          mode="inline"
          inlineCollapsed={collapsed}
          selectedKeys={[location.pathname]}
          items={menuItems}
          style={{
            border: "none",
            background: "transparent",
          }}
        />
      </div>

      {!collapsed && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <Button
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
      )}
    </div>
  );
};

export default SidebarContent;