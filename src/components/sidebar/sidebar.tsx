import { useState } from "react";
import { Layout, Button, Drawer, Grid } from "antd";
import {
  MenuOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import SidebarContent from "./content/content";

const { Sider } = Layout;
const { useBreakpoint } = Grid;
const glassStyle = {
  background: "linear-gradient(180deg, #636161, rgba(9, 13, 20, 0.95))",
  backdropFilter: "blur(80px) saturate(180%)",
  WebkitBackdropFilter: "blur(80px) saturate(180%)",
  borderRight: "1px solid rgba(255,255,255,0.12)",
  boxShadow: "0 10px 40px rgba(0,0,0,0.45)",
};

const Sidebar = () => {
  const screens = useBreakpoint();
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(true);

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
            left: 30,
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
          bodyStyle={{
            ...glassStyle,
            padding: 0,
          }}
          maskStyle={{
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            background: "rgba(0,0,0,0.25)",
          }}
        >
          <SidebarContent collapsed={false} />
        </Drawer>
      </>
    );
  }

  return (
    <Sider
      width={300}
      collapsed={collapsed}
      collapsedWidth={90}
      trigger={null}
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        transition: "all .4s cubic-bezier(.4,0,.2,1)",
        ...glassStyle,
      }}
    >
      <Button
        type="text"
        icon={
          collapsed ? (
            <MenuUnfoldOutlined />
          ) : (
            <MenuFoldOutlined />
          )
        }
        onClick={() => setCollapsed((prev) => !prev)}
        style={{
          position: "absolute",
          top: 16,
          right: 26,
          zIndex: 100,
          color: "#fff",
          width: 42,
          height: 42,
          borderRadius: "12px",
          background: "rgba(255,255,255,.08)",
          border: "1px solid rgba(255,255,255,.08)",
          backdropFilter: "blur(20px)",
        }}
      />

      <SidebarContent collapsed={collapsed} />
    </Sider>
  );
};

export default Sidebar;