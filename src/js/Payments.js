import { useEffect } from "react";
import { useTranslation } from "react-i18next";
function Payments() {
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
      <div class="sections">
        <section class="section_2">
          <div class="typing-services reveal">
            <p>{t("description_payment")}</p>
          </div>
          <div class="services reveal">
            <div
              class="card_service_programming payment_img reveal"
              data-aos="fade-up"
            >
              <div class="first-content">
                <img
                  src="/s_img/section2/1.png"
                  alt="فواتير الاتصالات"
                />
                <p>{t("telecom_bills")}</p>
              </div>
              <div class="second-content">
                <p>{t("telecom_bills")}</p>
                <p>{t("one_telecom_bills")}</p>
                <p>{t("two_telecom_bills")}</p>
              </div>
            </div>
            <div
              class="card_service_programming payment_img reveal"
              data-aos="fade-down"
            >
              <div class="first-content">
                <img src="/s_img/section2/2.png" alt="المرافق" />
                <p>{t("facilities")}</p>
              </div>
              <div class="second-content">
                <p>{t("facilities")}</p>
                <p>{t("one_facilities")}</p>
                <p>{t("two_facilities")}</p>
              </div>
            </div>
            <div
              class="card_service_programming payment_img reveal"
              data-aos="fade-up"
            >
              <div class="first-content">
                <img src="/s_img/section2/3.png" alt="التأمينات" />
                <p>{t("insurance")}</p>
              </div>
              <div class="second-content">
                <p>{t("insurance")}</p>
                <p>{t("one_insurance")}</p>
                <p>{t("two_insurance")}</p>
              </div>
            </div>
            <div
              class="card_service_programming payment_img reveal"
              data-aos="fade-down"
            >
              <div class="first-content">
                <img src="/s_img/section2/4.png" alt="النقابات" />
                <p>{t("unions")}</p>
              </div>
              <div class="second-content">
                <p>{t("unions")}</p>
                <p>{t("one_unions")}</p>
                <p>{t("two_unions")}</p>
              </div>
            </div>
            <div
              class="card_service_programming payment_img reveal"
              data-aos="fade-up"
            >
              <div class="first-content">
                <img src="/s_img/section2/5.png" alt="التعليم" />
                <p>{t("education")}</p>
              </div>
              <div class="second-content">
                <p>{t("education")}</p>
                <p>{t("one_education")}</p>
                <p>{t("two_education")}</p>
              </div>
            </div>
            <div
              class="card_service_programming payment_img reveal"
              data-aos="fade-down"
            >
              <div class="first-content">
                <img src="/s_img/section2/6.png" alt="التبرعات" />
                <p>{t("donations")}</p>
              </div>
              <div class="second-content">
                <p>{t("donations")}</p>
                <p>{t("one_donations")}</p>
                <p>{t("two_donations")}</p>
              </div>
            </div>
            <div
              class="card_service_programming payment_img reveal"
              data-aos="fade-up"
            >
              <div class="first-content">
                <img src="/s_img/section2/7.png" alt="التذاكر" />
                <p>{t("tickets")}</p>
              </div>
              <div class="second-content">
                <p>{t("tickets")}</p>
                <p>{t("one_tickets")}</p>
                <p>{t("two_tickets")}</p>
              </div>
            </div>
            <div
              class="card_service_programming payment_img reveal"
              data-aos="fade-down"
            >
              <div class="first-content">
                <img src="/s_img/section2/8.png" alt="العقارات" />
                <p>{t("real_estate")}</p>
              </div>
              <div class="second-content">
                <p>{t("real_estate")}</p>
                <p>{t("one_real_estate")}</p>
                <p>{t("two_real_estate")}</p>
              </div>
            </div>
            <div
              class="card_service_programming payment_img reveal"
              data-aos="fade-up"
            >
              <div class="first-content">
                <img src="/s_img/section2/9.png" alt="الإلتزامات المالية" />
                <p>{t("financial_obligations")}</p>
              </div>
              <div class="second-content">
                <p>{t("financial_obligations_banks")}</p>
                <p>{t("one_financial_obligations")}</p>
                <p>{t("two_financial_obligations")}</p>
                <p>{t("three_financial_obligations")}</p>
              </div>
            </div>
            <div
              class="card_service_programming payment_img reveal"
              data-aos="fade-down"
            >
              <div class="first-content">
                <img src="/s_img/section2/10.png" alt="مدفوعات الإنترنت" />
                <p>{t("online_payments")}</p>
              </div>
              <div class="second-content">
                <p>{t("online_payments")}</p>
                <p>{t("one_online_payments")}</p>
                <p>{t("two_online_payments")}</p>
              </div>
            </div>
            <div
              class="card_service_programming payment_img reveal"
              data-aos="fade-up"
            >
              <div class="first-content">
                <img src="/s_img/section2/11.png" alt="اشتراكات النوادي" />
                <p>{t("club_subscriptions")}</p>
              </div>
              <div class="second-content">
                <p>{t("club_subscriptions")}</p>
                <p>{t("one_club_subscriptions")}</p>
                <p>{t("two_club_subscriptions")}</p>
              </div>
            </div>
            <div
              class="card_service_programming payment_img reveal"
              data-aos="fade-down"
            >
              <div class="first-content">
                <img src="/s_img/section2/12.png" alt="غرامات المرور" />
                <p>{t("traffic_fines")}</p>
              </div>
              <div class="second-content">
                <p>{t("one_traffic_fines")}</p>
                <p>{t("twp_traffic_fines")}</p>
              </div>
            </div>
            <div
              class="card_service_programming payment_img reveal"
              data-aos="fade-down"
            >
              <div class="first-content">
                <img src="/s_img/section2/13.png" alt="الخدمة العسكرية" />
                <p>{t("military_service")}</p>
              </div>
              <div class="second-content">
                <p>{t("military_service")}</p>
                <p>{t("one_military_service")}</p>
              </div>
            </div>
            <div
              class="card_service_programming payment_img reveal"
              data-aos="fade-up"
            >
              <div class="first-content">
                <img src="/s_img/section2/14.png" alt="Fawry Pay" />
                <p>{t("fawry_pay_reference_number")}</p>
              </div>
              <div class="second-content">
                <p>{t("fawry_pay_reference_number")}</p>
                <p>{t("one_awry_pay_reference_number")}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Payments;
