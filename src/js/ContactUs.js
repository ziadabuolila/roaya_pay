import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function ContactUs() {
  const { t, i18n } = useTranslation();
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
  const labelPos = {
    right: i18n.language === "ar" ? "1px" : "auto",
    left: i18n.language === "en" ? "1px" : "auto",
  };
  return (
    <section
      className="contact-section"
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      <div className="contact-container reveal">
        <div className="img-icon reveal" data-aos="zoom-in">
          <img src="/logo_roaya_pay.jpg" alt="رؤية باي" />
        </div>

        <div className="display reveal">
          <div className="contact-info reveal">
            <p>{t("name_contact_us")}</p>
            <ul>
              <div className="text_contact_us reveal">
                <li className="reveal">
                  <strong className="text-main">
                    {t("title_address")}&nbsp;
                  </strong>
                  {t("name_address")}
                </li>
                <li className="reveal">
                  <strong className="text-main">
                    {t("title_email_company")}&nbsp;
                  </strong>
                  {t("name_email_company")}
                </li>
              </div>
              <div className="text_contact_us reveal">
                <li className="reveal">
                  <strong className="text-main">
                    {t("title_customer_service")}&nbsp;
                  </strong>
                  {t("customer_service_phone")}
                </li>
                <li className="reveal">
                  <strong className="text-main">
                    {t("title_customer_service_telephone")}&nbsp;
                  </strong>
                  {t("customer_service_telephone")}
                </li>
              </div>
            </ul>
          </div>

          <div className="contact-form reveal">
            <form>
              <div className="display_inputs_contact_us reveal">
                <div className="input-group reveal">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="contact_us-input"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="name"
                    className="floating-label"
                    style={labelPos}
                  >
                    {t("name_person")}
                  </label>
                </div>

                <div className="input-group reveal">
                  <input
                    type="number"
                    id="phone"
                    name="mobile"
                    className="contact_us-input"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="phone"
                    className="floating-label"
                    style={labelPos}
                  >
                    {t("number_phone_person")}
                  </label>
                </div>
              </div>

              <div className="display_inputs_contact_us reveal">
                <div className="input-group reveal">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="contact_us-input"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="email"
                    className="floating-label"
                    style={labelPos}
                  >
                    {t("email_person")}
                  </label>
                </div>

                <div className="input-group reveal">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="contact_us-input"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="subject"
                    className="floating-label"
                    style={labelPos}
                  >
                    {t("topic_person")}
                  </label>
                </div>
              </div>

              <div className="input-group reveal">
                <textarea
                  className="review-textarea contact_us-input"
                  name="message"
                  rows="4"
                  placeholder=" "
                  required
                ></textarea>
                <label
                  htmlFor="message"
                  className="floating-label"
                  style={labelPos}
                >
                  {t("message_person")}
                </label>
              </div>

              <div className="btns">
                <button
                  type="submit"
                  name="submit"
                  className="submit"
                >
                  {t("button_send")}
                </button>
              </div>
            </form>
          </div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d861.1940981319874!2d30.979871460012102!3d30.300426746454765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDE4JzAwLjQiTiAzMMKwNTgnNDcuMSJF!5e0!3m2!1sar!2seg!4v1750063770603!5m2!1sar!2seg"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="موقع الشركة"
          className="reveal"
        ></iframe>
      </div>
    </section>
  );
}

export default ContactUs;