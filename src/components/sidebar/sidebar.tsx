import { useState } from "react";
import { Layout, Button, Drawer, Grid } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import SidebarContent from "./content/content";

const { Sider } = Layout;
const { useBreakpoint } = Grid;

const glassStyle = {
  background: "linear-gradient(180deg, #636161, rgba(9, 13, 20, 25))",
  backdropFilter: "blur(80px) saturate(180%)",
  WebkitBackdropFilter: "blur(80px) saturate(180%)",
  borderRight: "1px solid rgba(255,255,255,0.12)",
  boxShadow: "0 10px 40px rgba(0,0,0,0.45)",
};

const Sidebar = () => {
  const screens = useBreakpoint();
  const [open, setOpen] = useState(false);

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
          bodyStyle={{
            ...glassStyle,
            padding: 0,
          }}
          maskStyle={{
            backdropFilter: "blur(80px)",
            WebkitBackdropFilter: "blur(80px)",
            background: "rgba(0,0,0,0.25)",
          }}
        >
          <SidebarContent />
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
        ...glassStyle,
      }}
    >
      <SidebarContent />
    </Sider>
  );
};

export default Sidebar;