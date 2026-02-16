import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function OurTeam() {
  const { t, i18n } = useTranslation();
  const [lightboxData, setLightboxData] = useState(null); // لتخزين الصورة + الاسم + الوظيفة + الايقونات

  const changeLang = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    document.body.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  const openLightbox = (member) => {
    setLightboxData(member);
  };

  const closeLightbox = () => {
    setLightboxData(null);
  };

  const teamMembers = [
    {
      img: "/team/Emad.png",
      name: t("name_emad_abuolila"),
      job: t("job_emad_abuolila"),
      whatsapp: "https://wa.me/201100730060",
      facebook: "https://www.facebook.com/share/18n25Y83j9/",
      linkedin: "https://www.linkedin.com/in/emad-abuolila-76a744252",
      email: "mailto:emad.abuolila@gmail.com",
    },
    {
      img: "/team/Belal.jpg",
      name: t("name_belal_zedan"),
      job: t("job_belal_zedan"),
      whatsapp: "https://wa.me/201005777703",
      facebook: "https://www.facebook.com/share/1AfJ7y7Jie/?mibextid=wwXIfr",
      linkedin: "",
      email: "mailto:belalzidan.bz@gmail.com",
    },
    {
      img: "/sales/ramy.jpeg",
      name: t("name_ramy_seliem"),
      job: t("job_ramy_seliem"),
      whatsapp: "https://wa.me/201100203820",
      facebook: "https://www.facebook.com/share/1G3ph42gEK/",
      linkedin: "https://www.linkedin.com/in/ramy-atef-244b00149?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "mailto:ramyseliem12@gmail.com",
    },
  ];
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
      <div className="container_our_team">
        <div className="container">
          {teamMembers.map((member, index) => (
            <div className="item reveal" key={index} data-aos="fade-down">
              <div className="layer reveal">
                <img
                  src={member.img}
                  alt={member.name}
                  onClick={() => openLightbox(member)}
                  className="team-img"
                />
                <div className="info">
                  <p>{member.name}</p>
                  <p>{member.job}</p>
                </div>
                <div className="social-icons icons_center_our_team">
                  {member.whatsapp && (
                    <a href={member.whatsapp} className="whatsapp" target="_blank">
                      <i className="fa-brands fa-whatsapp"></i>
                    </a>
                  )}
                  {member.facebook && (
                    <a href={member.facebook} className="facebook" target="_blank">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  )}
                  {member.linkedin && (
                    <a href={member.linkedin} className="linkedin" target="_blank">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  )}
                  {member.email && (
                    <a href={member.email} className="email" target="_blank">
                      <i className="fa fa-envelope"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {lightboxData && (
        <div className="lightbox" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxData.img}
              alt={lightboxData.name}
              className="lightbox-img"
            />
            <div className="lightbox-info">
              <p className="lb-name">{lightboxData.name}</p>
              <p className="lb-job">{lightboxData.job}</p>
              <div className="social-icons">
                {lightboxData.whatsapp && (
                  <a href={lightboxData.whatsapp} className="whatsapp" target="_blank">
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                )}
                {lightboxData.facebook && (
                  <a href={lightboxData.facebook} className="facebook" target="_blank">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                )}
                {lightboxData.linkedin && (
                  <a href={lightboxData.linkedin} className="linkedin" target="_blank">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                )}
                {lightboxData.email && (
                  <a href={lightboxData.email} className="email" target="_blank">
                    <i className="fa fa-envelope"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <style>{`
        .team-img {
          cursor: pointer;
          border-radius: 10px;
        }

        .lightbox {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0,0,0,0.85);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          cursor: zoom-out;
          animation: fadeIn 0.3s;
        }

        .lightbox-content {
          background: #fff;
          border-radius: 15px;
          padding: 20px;
          max-width: 370px;
          width: 85%;
          text-align: center;
          cursor: auto;
          animation: zoomIn 0.3s;
        }

        .lightbox-img {
          width: 100%;
          height: 350px;
          border-radius: 10px;
        }

        .lightbox-info {
          margin-top: 15px;
        }

        .lb-name {
          font-size: 22px;
          font-weight: bold;
          margin-bottom: 5px;
        }

        .lb-job {
          font-size: 16px;
          color: #555;
          margin-bottom: 10px;
        }

        .lb-social a {
          margin: 0 8px;
          font-size: 20px;  
          color: #333;
          transition: transform 0.3s, color 0.3s;
        }

        .lb-social a:hover {
          color: #53a951;
          transform: scale(1.2);
        }

        @keyframes zoomIn {
          0% { transform: scale(0.7); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </>
  );
}
export default OurTeam;
