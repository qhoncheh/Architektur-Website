import { useState } from "react";
import { Layout, Menu, Button, Drawer, Grid, Dropdown } from "antd";
import {
  DownloadOutlined,
  MenuOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { NavLink, useLocation } from "react-router";

const { Sider } = Layout;
const { useBreakpoint } = Grid;
const Sidebar = () => {
  const screens = useBreakpoint();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const languageItems = [
    {
      key: "De",
      label: "Germany",
      onClick: () => console.log("Persian"),
    },
    {
      key: "en",
      label: "English",
      onClick: () => console.log("English"),
    },
  ];

  const menuItems = [
    {
      key: "/",
      label: (
        <NavLink to="/" style={{ fontWeight: 300 }}>
          Projects
        </NavLink>
      ),
    },
    {
      key: "/about",
      label: (
        <NavLink to="/about" style={{ fontWeight: 300 }}>
          About
        </NavLink>
      ),
    },
    {
      key: "/contact",
      label: (
        <NavLink to="/contact" style={{ fontWeight: 300 }}>
          Contact
        </NavLink>
      ),
    },
  ];

  const sidebarContent = (
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

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Button
          icon={<DownloadOutlined />}
          iconPosition="end"
          size="large"
          block
          style={{
            borderRadius: "999px",
            background: "#232d42",
            borderColor: "#232d42",
            color: "#fff",
            fontWeight: 300,
            height: "50px",
          }}
        >
          Download CV
        </Button>

        <div
          style={{
            color: "#9ca3af",
            fontSize: "13px",
            textAlign: "center",
            lineHeight: "1.8",
          }}
        >
          <div>Designed & Developed by Ghoncheh Ataei</div>
          <div>© 2026 All Rights Reserved.</div>
        </div>

        <Dropdown menu={{ items: languageItems }} trigger={["hover"]}>
          <div
            style={{
              position: "absolute",
              bottom: "230px",
              left: "2px",
              cursor: "pointer",
              zIndex: 10,
              width: "48px",
              height: "48px",
              border: "1px solid #232d42",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              transition: "all 0.3s ease",
            }}
          >
            <GlobalOutlined
              style={{
                fontSize: "22px",
                color: "#d1d5db",
              }}
            />
          </div>
        </Dropdown>
      </div>
    </div>
  );

  if (!screens.md) {
    return (
      <>
        <Button
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setOpen(true)}
          style={{
            position: "fixed",
            top: 20,
            left: 20,
            zIndex: 1000,
            color: "#d1d5db",
            fontSize: "24px",
          }}
        />

        <Drawer
          placement="left"
          open={open}
          onClose={() => setOpen(false)}
          width={280}
          closable={false}
          styles={{
            body: {
              padding: 0,
              background: "#111827",
            },
          }}
        >
          {sidebarContent}
        </Drawer>
      </>
    );
  }

  return (
    <Sider
      width={300}
      theme="dark"
      style={{
        minHeight: "100vh",
        background: "#111827",
      }}
    >
      {sidebarContent}
    </Sider>
  );
};

export default Sidebar;
