import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Faq() {
  const { t, i18n } = useTranslation();

  const arrowDir =
    i18n.language === "ar" ? "fa-chevron-left" : "fa-chevron-right";
  useEffect(() => {
    window.scrollTo(0, 0);

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

    setTimeout(() => {
      handleScroll();
      window.scrollTo(0, 0);
    }, 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="faq_container reveal">
        <div className="faq reveal">
          <details className="reveal">
            <summary>
              <span>{t("faq_one")}</span>
              <i className={`fa-solid ${arrowDir} arrow`}></i>
            </summary>
            <p>{t("faq_two")}</p>
          </details>

          <details className="reveal">
            <summary>
              <span>{t("faq_three")}</span>
              <i className={`fa-solid ${arrowDir} arrow`}></i>
            </summary>
            <p>{t("faq_four")}</p>
          </details>

          <details className="reveal">
            <summary>
              <span>{t("faq_five")}</span>
              <i className={`fa-solid ${arrowDir} arrow`}></i>
            </summary>
            <p>{t("faq_six")}</p>
          </details>

          <details className="reveal">
            <summary>
              <span>{t("faq_seven")}</span>
              <i className={`fa-solid ${arrowDir} arrow`}></i>
            </summary>
            <p>{t("faq_eight")}</p>
          </details>

          <details className="reveal">
            <summary>
              <span>{t("faq_nine")}</span>
              <i className={`fa-solid ${arrowDir} arrow`}></i>
            </summary>
            <p>{t("faq_ten")}</p>
          </details>

          <details className="reveal">
            <summary>
              <span>{t("faq_eleven")}</span>
              <i className={`fa-solid ${arrowDir} arrow`}></i>
            </summary>
            <p>{t("faq_twelve")}</p>
          </details>

          <details className="reveal">
            <summary>
              <span>{t("faq_thirteen")}</span>
              <i className={`fa-solid ${arrowDir} arrow`}></i>
            </summary>
            <p>{t("faq_fourteen")}</p>
          </details>

          <details className="reveal">
            <summary>
              <span>{t("faq_fifteen")}</span>
              <i className={`fa-solid ${arrowDir} arrow`}></i>
            </summary>
            <p>{t("faq_sixteen")}</p>
          </details>

          <details className="reveal">
            <summary>
              <span>{t("faq_seventeen")}</span>
              <i className={`fa-solid ${arrowDir} arrow`}></i>
            </summary>
            <p>{t("faq_eighteen")}</p>
          </details>

          <details className="reveal">
            <summary>
              <span>{t("faq_nineteen")}</span>
              <i className={`fa-solid ${arrowDir} arrow`}></i>
            </summary>
            <p>{t("faq_twenty")}</p>
          </details>
        </div>
      </div>
    </>
  );
}

export default Faq;
