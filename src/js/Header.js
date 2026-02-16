import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const changeLang = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    document.body.dir = newLang === "ar" ? "rtl" : "ltr";
    localStorage.setItem("lang", newLang);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const isActive = (path) => (location.pathname === path ? "active" : "");
  const go = (path) => {
    navigate(path); // التنقل السلس
    setDropdownOpen(false); // يغلق الـdropdown إذا مفتوح
  };

  return (
    <header>
      <ul>
        <li className={`${isActive("/")} nav-item`} onClick={() => go("/")}>
          <span className="nav-icon">
            <i className="fa fa-home icon_span_li_header_active"></i>
          </span>
          <Link to="/" className="link_pages_header">
            {t("home")}
          </Link>
        </li>

        <li
          className={`${isActive("/about")} nav-item`}
          onClick={() => go("/about")}
        >
          <span className="nav-icon">
            <i className="fa fa-info-circle icon_span_li_header_active"></i>
          </span>
          <Link to="/about" className="link_pages_header">
            {t("about")}
          </Link>
        </li>

        <li
          className={`${isActive("/our_team")} nav-item`}
          onClick={() => go("/our_team")}
        >
          <span className="nav-icon">
            <i className="fa fa-users icon_span_li_header_active"></i>
          </span>
          <Link to="/our_team" className="link_pages_header">
            {t("our_team")}
          </Link>
        </li>

        <li
          className={`${isActive("/developers")} nav-item`}
          onClick={() => go("/developers")}
        >
          <span className="nav-icon">
            <i className="fa fa-code icon_span_li_header_active"></i>
          </span>
          <Link to="/developers" className="link_pages_header">
            {t("developers")}
          </Link>
        </li>

        <li
          id="dropdown"
          className={`${
            isActive("/payments") || isActive("/programming") ? "active" : ""
          } nav-item`}
        >
          <span className="nav-icon">
            <i className="fa fa-concierge-bell icon_span_li_header_active"></i>
          </span>
          <a
            href="#"
            className="link_pages_header"
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown();
            }}
          >
            {t("services_toggle")} <i className="fa-solid fa-chevron-down"></i>
          </a>

          {dropdownOpen && (
            <ul className="dropdown-menu show">
              <li
                className={isActive("/payments")}
                onClick={() => go("/payments")}
              >
                <Link className="dropdown-item" to="/payments">
                  {t("payments")}
                </Link>
              </li>
              <li
                className={isActive("/programming")}
                onClick={() => go("/programming")}
              >
                <Link className="dropdown-item" to="/programming">
                  {t("programming")}
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li
          className={`${isActive("/our_partners")} nav-item`}
          onClick={() => go("/our_partners")}
        >
          <span className="nav-icon">
            <i className="fa fa-handshake icon_span_li_header_active"></i>
          </span>
          <Link to="/our_partners" className="link_pages_header">
            {t("our_partners")}
          </Link>
        </li>

        <li
          className={`${isActive("/faq")} nav-item`}
          onClick={() => go("/faq")}
        >
          <span className="nav-icon">
            <i className="fa fa-question-circle icon_span_li_header_active"></i>
          </span>
          <Link to="/faq" className="link_pages_header">
            {t("faq")}
          </Link>
        </li>

        <li
          className={`${isActive("/contact_us")} nav-item`}
          onClick={() => go("/contact_us")}
        >
          <span className="nav-icon">
            <i className="fa fa-envelope icon_span_li_header_active"></i>
          </span>
          <Link to="/contact_us" className="link_pages_header">
            {t("contact_us")}
          </Link>
        </li>
      </ul>

      <div className="btn-open-menu">
        <i className="fa fa-bars"></i>
      </div>

      <div className="logo-roaya">
        <a href="#" className="lang-switch" onClick={changeLang}>
          {i18n.language === "ar" ? "EN" : "AR"}
        </a>
        <Link to="/">
          <img src="/Roaya.png" alt="Roaya" draggable={false} />
        </Link>
      </div>
    </header>
  );
}

export default Header;
