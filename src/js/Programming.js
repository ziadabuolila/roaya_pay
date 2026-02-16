import { useEffect } from "react";
import { useTranslation } from "react-i18next";
function Programmimg() {
  const { t, i18n } = useTranslation();
  const changeLang = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    document.body.dir = newLang === "ar" ? "rtl" : "ltr";
  };
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
    <>
      <div class="programming">
        <div class="sections">
          <section class="section_1">
            <div class="typing-services reveal">
              <p>{t("description_programming")}</p>
            </div>
            <div class="services">
              <div class="card_service_programming reveal">
                <div class="first-content">
                  <img
                    src="/s_img/section1/programming.png"
                    alt="إنشاء موقع إلكتروني"
                    class="programming"
                  />
                  <p>{t("new_website")}</p>
                </div>
                <div class="second-content">
                  <p>{t("one_new_website")}</p>
                  <p>{t("two_new_website")}</p>
                </div>
              </div>
              <div class="card_service_programming reveal">
                <div class="first-content">
                  <img
                    src="/s_img/section1/phone.png"
                    alt="إنشاء موبايل Application"
                    class="programming"
                  />
                  <p>{t("new_application")}</p>
                </div>
                <div class="second-content">
                  <p>{t("one_new_application")}</p>
                  <p>{t("two_new_application")}</p>
                </div>
              </div>
              <div class="card_service_programming reveal">
                <div class="first-content">
                  <img
                    src="/s_img/section1/system.png"
                    alt="إنشاء نظم إلكترونية متكاملة"
                    class="programming"
                  />
                  <p>{t("new_system_elctronic")}</p>
                </div>
                <div class="second-content">
                  <p>{t("one_new_system_elctronic")}</p>
                  <p>{t("two_new_system_elctronic")}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Programmimg;
