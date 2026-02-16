import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function Footer() {
  const { t, i18n } = useTranslation();
  const [year, setYear] = useState("");

  const changeLang = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    document.body.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  useEffect(() => {
    fetch("https://worldtimeapi.org/api/ip")
      .then((res) => res.json())
      .then((data) => {
        const currentYear = new Date(data.datetime).getFullYear();
        setYear(currentYear);
      })
      .catch(() => {
        // fallback لو الإنترنت مش شغال
        setYear(new Date().getFullYear());
      });
  }, []);
  return (
    <>
      <footer>
        <div className="social-icons">
          <a
            href="https://wa.me/201100555475"
            className="whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>

          <a
            href="https://www.facebook.com/share/19jDgFxRZo/"
            className="facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-facebook-f"></i>
          </a>

          <a
            href="https://www.linkedin.com/company/107158476/"
            className="linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>

          <a
            href="mailto:roya.tech2025@gmail.com"
            className="email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-envelope"></i>
          </a>
        </div>

        <div className="text-footer">
          {t("all_rights")}
          &nbsp;
          <span>
            <Link to="/">{t("name_roaya_pay")}</Link>
          </span>
          &nbsp;
          {t("the_rest_of_the_name_company")}
          <span> {year} </span>
          <sup>
            <i className="fa-regular fa-copyright"></i>
          </sup>
        </div>
      </footer>
    </>
  );
}

export default Footer;
