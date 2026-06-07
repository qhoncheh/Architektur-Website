import { useState } from "react";
import i18n from "../../../i18n";

const LanguageToggle = () => {
  const [lang, setLang] = useState(i18n.language || "en");

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "de" : "en";
    setLang(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <div
      onClick={toggleLanguage}
      style={{
        position: "absolute",
        bottom: "230px",
        left: "2px",
        cursor: "pointer",
        width: "48px",
        height: "48px",
        border: "1px solid #232d42",
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontSize: "12px",
        fontWeight: 500,
        userSelect: "none",
      }}
    >
      {lang.toUpperCase()}
    </div>
  );
};

export default LanguageToggle;