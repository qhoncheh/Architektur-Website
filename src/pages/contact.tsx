import { FaPhoneAlt, FaLinkedin, FaEnvelope, FaTelegramPlane } from "react-icons/fa";
import { IoPhonePortrait } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="p-6 space-y-5 text-lg">
      {/* تلفن ثابت */}
      <a
        href="tel:09116771794"
        className="flex items-center gap-3 hover:text-blue-600 transition-colors"
      >
        <FaPhoneAlt className="text-blue-600" />
        <span>09116771794</span>
      </a>

      {/* تلفن همراه */}
      <a
        href="tel:09356944705"
        className="flex items-center gap-3 hover:text-green-600 transition-colors"
      >
        <IoPhonePortrait className="text-green-600" />
        <span>09356944705</span>
      </a>

      {/* ایمیل */}
      <a
        href="mailto:ghazalehataeim@gmail.com"
        className="flex items-center gap-3 hover:text-red-500 transition-colors"
      >
        <FaEnvelope className="text-red-500" />
        <span>ghazalehataeim@gmail.com</span>
      </a>

      {/* لینکدین */}
      <a
        href="https://linkedin.com/in/arashkhatir"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-3 hover:text-blue-700 transition-colors"
      >
        <FaLinkedin className="text-blue-700" />
        <span>ghazalehataei</span>
      </a>

      {/* تلگرام */}
      <a
        href="https://t.me/ghazalehataei"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-3 hover:text-sky-500 transition-colors"
      >
        <FaTelegramPlane className="text-sky-500" />
        <span>@ghazalehataei</span>
      </a>
    </div>
  );
};

export default Contact;
