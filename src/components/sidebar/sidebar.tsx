import React, { useState } from "react";
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
      label: <NavLink to="/">Projects</NavLink>,
    },
    {
      key: "/about",
      label: <NavLink to="/about">About</NavLink>,
    },
    {
      key: "/contact",
      label: <NavLink to="/contact">Contact</NavLink>,
    },
  ];

  const sidebarContent = (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "82px 20px",
        background: "#111827",
        position: "relative",
      }}
    >
      <div>
        {/* <h2
          style={{
            textAlign: "center",
            color: "#d1d5db",
            marginBottom: "80px",
            fontSize: "28px",
            fontWeight: "bold",
          }}
        >
          Ghazaleh Ataei
        </h2> */}

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
          gap: "25px",
        }}
      >
        <Button
          icon={<DownloadOutlined />}
          size="large"
          block
          style={{
            borderRadius: "999px",
            background: "#6b7280",
            borderColor: "#6b7280",
            color: "#fff",
            fontWeight: 600,
            height: "50px",
          }}
        >
          Download CV
        </Button>
<Dropdown
  menu={{ items: languageItems }}
  trigger={["hover"]}
  placement="rightTop"
>
  <div
  style={{
    position: "absolute",
    bottom: "155px",
    left: "2px",
    cursor: "pointer",
    zIndex: 10,
    width: "48px",
    height: "48px",
    border: "1px solid #6b7280",
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
          styles={{
            body: {
              padding: 0,
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