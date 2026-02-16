import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ar from "../locales/ar/translation.json";
import en from "../locales/en/translation.json";

const savedLang = localStorage.getItem("lang") || "ar";

i18n.use(initReactI18next).init({
  resources: {
    ar: { translation: ar },
    en: { translation: en },
  },
  lng: savedLang,
  fallbackLng: "ar",
  interpolation: { escapeValue: false },
});

document.body.dir = savedLang === "ar" ? "rtl" : "ltr";

export default i18n;
