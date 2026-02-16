import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Menu() {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const [submenuOpen, setSubmenuOpen] = useState(false);

  const isActive = (path) => (location.pathname === path ? "active" : "");

  useEffect(() => {
    const lang = localStorage.getItem("lang") || "ar";
    i18n.changeLanguage(lang);
    document.body.dir = lang === "ar" ? "rtl" : "ltr";
  }, [i18n]);

  const toggleSubmenu = (e) => {
    e.preventDefault();
    setSubmenuOpen(!submenuOpen);
  };

  // اتجاه السهم حسب اللغة
  const getChevron = () =>
    i18n.language === "ar" ? "fa-chevron-left" : "fa-chevron-right";

  return (
    <>
      <div className="menu" id="menu">
        <div className="header-menu">
          <div className="close-btn" id="closeMenu">
            <i className="fa fa-close"></i>
          </div>
        </div>

        <div className="menu-header">
          <img src="/Roaya.png" alt="Roaya" id="Roaya" />
        </div>

        <span className="innovation">{t("innovation")}</span>

        <ul className="ul_menu_website">
          <li id={isActive("/")}>
            <Link to="/">
              <i className="fa-solid fa-house"></i> {t("home")}
              <i className={`fa-solid ${getChevron()}`}></i>
            </Link>
          </li>

          <li id={isActive("/about")}>
            <Link to="/about">
              <i className="fa-solid fa-info"></i> {t("about")}
              <i className={`fa-solid ${getChevron()}`}></i>
            </Link>
          </li>

          <li id={isActive("/our_team")}>
            <Link to="/our_team">
              <i className="fa-solid fa-people-group"></i> {t("our_team")}
              <i className={`fa-solid ${getChevron()}`}></i>
            </Link>
          </li>

          <li id={isActive("/developers")}>
            <Link to="/developers">
              <i className="fa-solid fa-code"></i> {t("developers")}
              <i className={`fa-solid ${getChevron()}`}></i>
            </Link>
          </li>
          <li
            className={
              isActive("/payments") || isActive("/programming") ? "active" : ""
            }
          >
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleSubmenu(e);
              }}
              className="menu-link toggle-submenu"
            >
              <i className="fa-solid fa-satellite"></i>
              <span>{t("services_toggle")}</span>
              <i
                className={`fa-solid ${getChevron()} menu-arrow ${
                  submenuOpen ? "rotate" : ""
                }`}
              ></i>
            </a>

            <ul className={`submenu ${submenuOpen ? "show" : ""}`}>
              <li>
                <Link to="/payments" className="submenu-link">
                  {t("payments")}
                </Link>
              </li>
              <li>
                <Link to="/programming" className="submenu-link">
                  {t("programming")}
                </Link>
              </li>
            </ul>
          </li>

          <li id={isActive("/our_partners")}>
            <Link to="/our_partners">
              <i className="fa-solid fa-handshake"></i> {t("our_partners")}
              <i className={`fa-solid ${getChevron()}`}></i>
            </Link>
          </li>

          <li id={isActive("/faq")}>
            <Link to="/faq">
              <i className="fa-solid fa-question"></i> {t("faq")}
              <i className={`fa-solid ${getChevron()}`}></i>
            </Link>
          </li>

          <li id={isActive("/contact_us")}>
            <Link to="/contact_us">
              <i className="fa-solid fa-phone-volume"></i> {t("contact_us")}
              <i className={`fa-solid ${getChevron()}`}></i>
            </Link>
          </li>
        </ul>
      </div>

      <div className="overlay"></div>
    </>
  );
}

export default Menu;
