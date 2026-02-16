import { React, useEffect } from "react";
import { useTranslation } from "react-i18next";

function About() {
  const { t, i18n } = useTranslation();
  const changeLang = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    document.body.dir = newLang === "ar" ? "rtl" : "ltr";
  };
  useEffect(() => {
    const cards = document.querySelectorAll(".card_about");

    cards.forEach((card) => {
      const circle = card.querySelector(".hover-circle");
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        circle.style.left = x + "px";
        circle.style.top = y + "px";
      });
    });

    // تنظيف الأحداث عند unmount
    return () => {
      cards.forEach((card) => {
        const circle = card.querySelector(".hover-circle");
        card.removeEventListener("mousemove", () => {});
      });
    };
  }, []);
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const handleScroll = () => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();

        if (rect.top < window.innerHeight - 50) {
          el.classList.add("active");
          el.classList.remove("hide");
        } else {
          el.classList.remove("active");
          el.classList.add("hide");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div id="cards">
      <div className="cards reveal">
        <div className="card_about reveal" data-aos="fade-left">
          <div class="hover-circle"></div>
          <div className="card-header">
            <h2>{t("who_about")}</h2>
          </div>
          <div className="card-body">
            <p>{t("one_who_about")}</p>
          </div>
        </div>

        <div className="card_about reveal" data-aos="fade-left">
          <div class="hover-circle"></div>
          <div className="card-header">
            <h2>{t("our_vision")}</h2>
          </div>
          <div className="card-body">
            <p>{t("one_our_vision")}</p>
          </div>
        </div>

        <div className="card_about reveal" data-aos="fade-left">
          <div class="hover-circle"></div>
          <div className="card-header">
            <h2>{t("our_message")}</h2>
          </div>
          <div className="card-body">
            <p>{t("one_our_message")}</p>
          </div>
        </div>

        <div className="card_about reveal" data-aos="fade-left">
          <div class="hover-circle"></div>
          <div className="card-header">
            <h2>{t("our_values")}</h2>
          </div>
          <div className="card-body">
            <p>{t("one_our_values")}</p>
            <p>{t("two_our_values")}</p>
            <p>{t("three_our_values")}</p>
            <p>{t("four_our_values")}</p>
          </div>
        </div>

        <div className="card_about reveal" data-aos="fade-left">
          <div class="hover-circle"></div>
          <div className="card-header">
            <h2>{t("our_experiences")}</h2>
          </div>
          <div className="card-body">
            <p>{t("one_our_experiences")}</p>
          </div>
        </div>

        <div className="card_about reveal" data-aos="fade-left">
          <div class="hover-circle"></div>
          <div className="card-header">
            <h2>{t("what_we_offer")}</h2>
          </div>
          <div className="card-body">
            <p>{t("one_what_we_offer")}</p>
            <p>{t("two_what_we_offer")}</p>
            <p>{t("three_what_we_offer")}</p>
            <p>{t("four_what_we_offer")}</p>
            <p>{t("five_what_we_offer")}</p>
          </div>
        </div>

        <div className="card_about reveal" data-aos="fade-left">
          <div class="hover-circle"></div>
          <div className="card-header">
            <h2>{t("why_us?")}</h2>
          </div>
          <div className="card-body">
            <p>{t("one_why_us?")}</p>
            <p>{t("two_why_us?")}</p>
            <p>{t("three_why_us?")}</p>
            <p>{t("four_why_us?")}</p>
          </div>
        </div>

        <div className="card_about reveal" data-aos="fade-left">
          <div class="hover-circle"></div>
          <div className="card-header">
            <h2>{t("why_choose_us")}</h2>
          </div>
          <div className="card-body">
            <p>{t("one_why_choose_us")}</p>
            <p>{t("two_why_choose_us")}</p>
            <p>{t("three_why_choose_us")}</p>
            <p>{t("four_why_choose_us")}</p>
            <p>{t("five_why_choose_us")}</p>
          </div>
        </div>

        <div className="card_about reveal" data-aos="fade-left">
          <div class="hover-circle"></div>
          <div className="card-header">
            <h2>{t("our_commitment")}</h2>
          </div>
          <div className="card-body">
            <p>{t("one_our_commitment")}</p>
          </div>
        </div>

        <div className="card_about reveal" data-aos="fade-left">
          <div class="hover-circle"></div>
          <div className="card-header">
            <h2>{t("work_team")}</h2>
          </div>
          <div className="card-body">
            <p>{t("one_work_team")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
