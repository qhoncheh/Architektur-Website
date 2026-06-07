import { Menu } from "antd";
import { NavLink, useLocation } from "react-router";
import { useTranslation } from "react-i18next";

const SidebarMenu = () => {
  const location = useLocation();
  const { t } = useTranslation();

  const menuItems = [
    { key: "/", label: <NavLink to="/">{t("projects")}</NavLink> },
    { key: "/about", label: <NavLink to="/about">{t("about")}</NavLink> },
    { key: "/contact", label: <NavLink to="/contact">{t("contact")}</NavLink> },
  ];

  return (
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
  );
};

export default SidebarMenu;