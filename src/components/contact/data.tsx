import {
  PhoneOutlined,
  MailOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
import { FaTelegramPlane } from "react-icons/fa";
import { IoPhonePortrait } from "react-icons/io5";

export const contactData = [
  {
    type: "tel",
    value: "09116771794",
    href: "tel:09116771794",
    icon: PhoneOutlined,
  },
  {
    type: "tel",
    value: "09356944705",
    href: "tel:09356944705",
    icon: IoPhonePortrait,
  },
  {
    type: "linkedin",
    value: "ghazaleh_ataei",
    href: "https://www.linkedin.com/in/ghazaleh-ataei-b54829192/",
    icon: LinkedinOutlined,
  },
  {
    type: "telegram",
    value: "@ghazaleh_ataei",
    href: "https://t.me/ghazaleh_ataei",
    icon: FaTelegramPlane,
  },
  {
    type: "email",
    value: "ghazalehataei.architect@gmail.com",
    href: "mailto:ghazalehataei.architect@gmail.com",
    icon: MailOutlined,
  },
];