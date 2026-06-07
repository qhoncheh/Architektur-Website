import SidebarFooter from "../footer/footer";
import SidebarMenu from "../menu/menu";


const SidebarContent = () => {
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
      <SidebarMenu />
      <SidebarFooter />
    </div>
  );
};

export default SidebarContent;