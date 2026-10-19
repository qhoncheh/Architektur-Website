import type { ContactItemProps } from "../../types/type";

const ContactItem = ({ icon: Icon, href, value }: ContactItemProps) => {
  return (
    <a className="contact-item" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
      <div>
        <Icon aria-hidden="true" />
        <span>{value}</span>
        <span className="contact-item-arrow" aria-hidden="true">↗</span>
      </div>
    </a>
  );
};

export default ContactItem;