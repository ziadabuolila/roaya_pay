import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./css/index.css";
import "./js/i18n";

import useAllJS from "./js/useAllJS";
import Loader from "./js/Loader";

import Header from "./js/Header";
import Home from "./js/Home";
import About from "./js/About";
import Our_Team from "./js/OurTeam";
import Developers from "./js/Developers";
import Payments from "./js/Payments";
import Programming from "./js/Programming";
import Our_Partners from "./js/OurPartners";
import Faq from "./js/Faq";
import Contact_Us from "./js/ContactUs";
import Footer from "./js/Footer";
import Menu from "./js/Menu";

import i18next from "i18next";

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  useAllJS();

  useEffect(() => {
    const loadCSSForLang = (lang) => {
      document.querySelectorAll(".lang-css").forEach((link) => link.remove());

      const folder = lang === "ar" ? "css_ar" : "css_en";
      const cssFiles = [
        "style.css",
        "developers.css",
        "drop_down.css",
        "fag.css",
        "footer.css",
        "header.css",
        "menu.css",
      ];

      cssFiles.forEach((file) => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = `${process.env.PUBLIC_URL}/css/${folder}/${file}?v=${Date.now()}`;
        link.className = "lang-css";
        document.head.appendChild(link);
      });

      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    };

    const savedLang = localStorage.getItem("lang") || "ar";
    i18next.changeLanguage(savedLang);
    loadCSSForLang(savedLang);

    const handleLangChange = (lng) => {
      localStorage.setItem("lang", lng);
      loadCSSForLang(lng);
    };

    i18next.on("languageChanged", handleLangChange);
    return () => i18next.off("languageChanged", handleLangChange);
  }, []);

  const content = (
    <>
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our_team" element={<Our_Team />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/programming" element={<Programming />} />
        <Route path="/our_partners" element={<Our_Partners />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact_us" element={<Contact_Us />} />
      </Routes>
      <Footer />
    </>
  );

  return isHome ? <Loader>{content}</Loader> : content;
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
