import { useState } from "react";
import { Layout, Button, Drawer, Grid } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import SidebarContent from "./content/content";

const { Sider } = Layout;
const { useBreakpoint } = Grid;

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
          styles={{
            body: { padding: 0, background: "#111827" },
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
      style={{ minHeight: "100vh", background: "#111827" }}
    >
      <SidebarContent />
    </Sider>
  );
};

export default Sidebar;