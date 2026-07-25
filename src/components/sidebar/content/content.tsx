import { Menu, Button } from "antd";
import {
  UserOutlined,
  FolderOpenOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { NavLink, useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import LanguageToggle from "../language/language";

type Props = {
  collapsed?: boolean;
};

const SidebarContent = ({ collapsed = false }: Props) => {
  const location = useLocation();
  const { t } = useTranslation();

  const menuItems = [
    {
      key: "/",
      icon: <FolderOpenOutlined />,
      label: (
        <NavLink to="/" style={{ fontWeight: 300 }}>
          {t("menu.projects")}
        </NavLink>
      ),
    },
    {
      key: "/about",
      icon: <UserOutlined />,
      label: (
        <NavLink to="/about" style={{ fontWeight: 300 }}>
          {t("menu.about")}
        </NavLink>
      ),
    },
    {
      key: "/contact",
      icon: <MailOutlined />,
      label: (
        <NavLink to="/contact" style={{ fontWeight: 300 }}>
          {t("menu.contact")}
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
      }}
    >
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

      {!collapsed && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
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
              height: 50,
            }}
          >
            {t("menu.downloadCV")}
          </Button>

          <div
            style={{
              color: "#9ca3af",
              fontSize: 13,
              textAlign: "center",
              lineHeight: 1.8,
            }}
          >
            <div>
              {t("Design")}{" "}
              <a
                href="https://ghoncheataei-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#ddd2d3",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Ghoncheh Ataei
              </a>
            </div>
            <div>{t("footer")}</div>
          </div>

          <LanguageToggle />
        </div>
      )}
    </div>
  );
};

export default SidebarContent;
