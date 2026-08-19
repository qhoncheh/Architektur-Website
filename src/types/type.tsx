import type { ComponentType, ReactNode } from "react";

export type ContactItemProps = {
  icon: ComponentType<{ style?: React.CSSProperties }>;
  href: string;
  value: string;
  textStyle?: React.CSSProperties;
};

export interface ProjectGalleryProps {
  images: string[];
}

export type InfoItem = {
  key: string;
  icon: ReactNode;
  label: string;
  value: ReactNode;
};