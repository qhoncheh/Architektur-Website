import { Typography } from "antd";
import type { ComponentType } from "react";

const { Text, Link } = Typography;

type ContactItemProps = {
  icon: ComponentType<{ style?: React.CSSProperties }>;
  href: string;
  value: string;
  textStyle?: React.CSSProperties;
};

const ContactItem = ({ icon: Icon, href, value, textStyle }: ContactItemProps) => {
  return (
    <Link href={href} target={href.startsWith("http") ? "_blank" : undefined}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
        }}
      >
        <Icon style={{ color: "#9CA3AF", fontSize: "18px" }} />
        <Text style={textStyle}>{value}</Text>
      </div>
    </Link>
  );
};

export default ContactItem;