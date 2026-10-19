import { useTranslation } from "react-i18next";
import i18n from "../../../i18n";

const LanguageToggle = () => {
  const { t, i18n: currentI18n } = useTranslation();

  return (
    <label style={{ display: "block", color: "#fff" }}>
      <span className="sr-only">{t("language.label")}</span>
      <select
        aria-label={t("language.label")}
        value={currentI18n.resolvedLanguage ?? currentI18n.language}
        onChange={(event) => void i18n.changeLanguage(event.target.value)}
        style={{ width: "100%", padding: "12px", border: "1px solid #232d42", borderRadius: "12px", color: "#fff", background: "#232d42" }}
      >
        <option value="fa">{t("language.fa")}</option>
        <option value="en">{t("language.en")}</option>
        <option value="de">{t("language.de")}</option>
      </select>
    </label>
  );
};

export default LanguageToggle;