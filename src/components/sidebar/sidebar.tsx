import { useState } from "react";
import { Layout, Drawer, Grid, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import SidebarContent from "./content/content";

const { Sider } = Layout;
const { useBreakpoint } = Grid;

const Sidebar = () => {
  const screens = useBreakpoint();
  const [open, setOpen] = useState(false);

  const content = <SidebarContent />;

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
          styles={{ body: { padding: 0, background: "#111827" } }}
        >
          {content}
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
      {content}
    </Sider>
  );
};

export default Sidebar;
