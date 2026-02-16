import { useEffect } from "react";
import { useTranslation } from "react-i18next";
function Developers() {
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
      <div className="cards-wrapper">
        <div className="card-container reveal">
          <div className="card reveal" data-aos="flip-left">
            <img
              src="/developers_imgs/Fatma_Ameen.jpeg"
              alt="Fatma Ameen"
              draggable="false"
            />
            <h3>{t("name_fatma_ameen")}</h3>
            <p>{t("job_fatma_ameen")}</p>
            <div className="social-icons">
              <a href="https://wa.me/201029054820" className="whatsapp" target="_blank">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a
                href="https://github.com/fatmaameen"
                className="github" target="_blank"
                style={{ backgroundColor: "#000" }}
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.facebook.com/share/1B5tYGA4gR/?mibextid=qi2Omg"
                className="facebook" target="_blank"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/fatmaameen10?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="linkedin" target="_blank"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="mailto:fatmaameen10@gmail.com" className="email" target="_blank">
                <i className="fa fa-envelope"></i>
              </a>
            </div>
          </div>
          <div className="card reveal" data-aos="flip-up">
            <img
              src="/developers_imgs/Mohamed_Wael.jfif"
              alt="Mohamed Wael"
              draggable="false"
            />
            <h3>{t("name_mohamed_wael")}</h3>
            <p>{t("job_mohamed_wael")}</p>
            <div className="social-icons">
              <a href="https://wa.me/201117165127" className="whatsapp" target="_blank">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a
                href="https://github.com/mohamedweal901"
                className="github" target="_blank"
                style={{ backgroundColor: "#000" }}
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100038961831651"
                className="facebook" target="_blank"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-wael-935026216?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="linkedin" target="_blank"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="mailto:mohamedweal901@gmail.com" className="email" target="_blank">
                <i className="fa fa-envelope"></i>
              </a>
            </div>
          </div>
          {/* <div className="card reveal" data-aos="zoom-in">
            <img
              src="/developers_imgs/Mohamed_Ehab.jpeg"
              alt="Mohamed Ehab"
              draggable="false"
            />
            <h3>{t("name_mohamed_ehab")}</h3>
            <p>{t("job_mohamed_ehab")}</p>
            <div className="social-icons">
              <a href="https://wa.me/201113689195" className="whatsapp" target="_blank">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a
                href="https://github.com/Mohamed-Ehab-Teama"
                className="github" target="_blank"
                style={{ backgroundColor: "#000" }}
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.facebook.com/share/16kGePcq6X/"
                className="facebook" target="_blank"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-ehab-teama-267154250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="linkedin" target="_blank"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="mailto:mohamed111.me111@gmail.com" className="email" target="_blank">
                <i className="fa fa-envelope"></i>
              </a>
            </div>
          </div> */}
          <div className="card reveal" data-aos="flip-down">
            <img
              src="/developers_imgs/Fahd_Abuolila.jpeg"
              alt="Fahd Abuolila"
              draggable="false"
            />
            <h3>{t("name_fahd_abuolila")}</h3>
            <p>{t("job_fahd_abuolila")}</p>
            <div className="social-icons">
              <a href="https://wa.me/201140080930" className="whatsapp" target="_blank">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a
                href="https://github.com/Fahd-Abuoolila"
                className="github" target="_blank"
                style={{ backgroundColor: "#000" }}
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.facebook.com/share/1Evp5Xne2f/"
                className="facebook" target="_blank"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/fahd-abuoolila-ab0a972a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="linkedin" target="_blank"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="mailto:fahd.elden.abuolila@gmail.com" className="email" target="_blank">
                <i className="fa fa-envelope"></i>
              </a>
            </div>
          </div>
          <div className="card reveal" data-aos="flip-right">
            <img
              src="/developers_imgs/Ziad_Abuolila.jpg"
              alt="Ziad Abuolila"
              draggable="false"
            />
            <h3>{t("name_ziad_abuolila")}</h3>
            <p>{t("job_ziad_abuolila")}</p>
            <div className="social-icons">
              <a href="https://wa.me/201140090860" className="whatsapp" target="_blank">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a
                href="https://github.com/ziadabuolila"
                className="github" target="_blank"
                style={{ backgroundColor: "#000" }}
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.facebook.com/ziad.abuolila"
                className="facebook" target="_blank"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/ziad-abuolila-a26584368"
                className="linkedin" target="_blank"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="mailto:ziad.emad.abuolila@gmail.com" className="email" target="_blank">
                <i className="fa fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Developers;
