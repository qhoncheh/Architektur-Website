import type { ComponentType } from "react";

export type ContactItemProps = {
  icon: ComponentType<{ style?: React.CSSProperties }>;
  href: string;
  value: string;
  textStyle?: React.CSSProperties;
};
