import { useEffect } from "react";

function Our_Partners() {
  const partnersList = [
    { src: "/partners/insidx.png", alt: "Insidx", className: "Insidx" },
    { src: "/partners/fawry.png", alt: "Fawry", className: "fawry" },
    { src: "/partners/damen.png", alt: "Damen", className: "damen" },
    { src: "/partners/basata.png", alt: "Basata", className: "basata" },
    { src: "/partners/theqa.png", alt: "Theqa", className: "theqa" },
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
    <div className="partners-section">
      <div className="partners reveal">
        {partnersList.map((partner, index) => (
          <div className="partner-wrapper" key={index}>
            <div className="partner-tooltip">{partner.alt}</div>
            <div className="partner-card">
              <img
                src={partner.src}
                alt={partner.alt}
                draggable="false"
                className={partner.className}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Our_Partners;
