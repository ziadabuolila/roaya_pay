import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useAllJS() {
  const location = useLocation();

  /* ------------------------------------------------------ */
  /* ------------ 🔄 Reload Once On First Page Load -------- */
  /* ------------------------------------------------------ */
  useEffect(() => {
    const reloaded = sessionStorage.getItem("page_reloaded");

    if (!reloaded) {
      sessionStorage.setItem("page_reloaded", "true");
      window.location.reload();
    }
  }, []);

  /* ------------------------------------------------------ */
  /* ---------------------- MAIN JS ------------------------ */
  /* ------------------------------------------------------ */
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("✅ JS applied on:", location.pathname);

      /* ------------------ 🟩 Submenu Toggle & Menu Toggle ------------------ */
      const waitForMenu = setInterval(() => {
        const menu = document.getElementById("menu");
        const toggleLinks = document.querySelectorAll(".toggle-submenu");
        const openMenuButton = document.querySelector(".btn-open-menu");
        const closeMenuButton = document.getElementById("closeMenu");
        const overlay = document.querySelector(".overlay");
        const body_Element = document.body;

        if (
          menu &&
          toggleLinks.length > 0 &&
          openMenuButton &&
          closeMenuButton &&
          overlay
        ) {
          clearInterval(waitForMenu);
          console.log("📱 Menu elements loaded.");

          /* ------------------ Submenu Toggle ------------------ */
          toggleLinks.forEach((link) => {
            link.onclick = (e) => {
              e.preventDefault();
              const submenu = link.parentElement.querySelector(".submenu");
              const arrow = link.querySelector(".menu-arrow");
              submenu?.classList.toggle("show");
              arrow?.classList.toggle("rotate");
            };
          });

          /* ------------------ Menu Open ------------------ */
          const openMenu = (e) => {
            e.stopPropagation();
            menu.style.transition = "right 0.6s ease, left 0.6s ease";
            menu.classList.add("open");
            overlay.classList.add("show");
            body_Element.classList.add("over-hidden");
          };

          /* ------------------ Menu Close ------------------ */
          const closeMenu = () => {
            menu.style.transition = "right 0.3s ease, left 0.3s ease";
            menu.classList.remove("open");
            overlay.classList.remove("show");
            body_Element.classList.remove("over-hidden");
          };

          openMenuButton.addEventListener("click", openMenu);
          closeMenuButton.addEventListener("click", closeMenu);
          overlay.addEventListener("click", closeMenu);

          /* ------------------ Click Outside ------------------ */
          document.addEventListener("click", (e) => {
            if (
              !menu.contains(e.target) &&
              !openMenuButton.contains(e.target)
            ) {
              closeMenu();
            }
          });

          /* Prevent menu click propagation */
          menu.addEventListener("click", (e) => e.stopPropagation());
        }
      }, 100);

      /* ------------------ 💬 Chat Toggle ------------------ */
      const waitForChatElements = setInterval(() => {
        const chatToggle = document.getElementById("chatToggle");
        const chatBox = document.getElementById("chatBox");

        if (chatToggle && chatBox) {
          clearInterval(waitForChatElements);
          console.log("💬 Chat elements loaded.");

          if (!document.getElementById("chatAnimations")) {
            const style = document.createElement("style");
            style.id = "chatAnimations";
            style.innerHTML = `
              @keyframes slideDown { from { opacity: 0; transform: translateY(-40px); } to { opacity: 1; transform: translateY(0); } }
              @keyframes slideUp { from { opacity: 1; transform: translateY(0); } to { opacity: 0; transform: translateY(-40px); } }
            `;
            document.head.appendChild(style);
          }

          const toggleChat = (e) => {
            e.stopPropagation();
            if (chatBox.classList.contains("open")) {
              chatBox.style.animation = "slideUp 0.4s ease forwards";
              setTimeout(() => {
                chatBox.classList.remove("open");
                chatBox.style.display = "none";
              }, 400);
            } else {
              chatBox.style.display = "block";
              chatBox.classList.add("open");
              chatBox.style.animation = "slideDown 0.5s ease forwards";
            }
          };

          chatToggle.addEventListener("click", toggleChat);

          const clickOutside = (e) => {
            if (!chatBox.contains(e.target) && !chatToggle.contains(e.target)) {
              if (chatBox.classList.contains("open")) {
                chatBox.style.animation = "slideUp 0.4s ease forwards";
                setTimeout(() => {
                  chatBox.classList.remove("open");
                  chatBox.style.display = "none";
                }, 400);
              }
            }
          };

          document.addEventListener("click", clickOutside);

          let offsetX = 0,
            offsetY = 0,
            isDragging = false;

          const chatHeader = chatBox.querySelector(".chat-header");

          if (chatHeader) {
            const mouseDown = (e) => {
              if (
                e.target.tagName === "INPUT" ||
                e.target.tagName === "TEXTAREA"
              )
                return;
              isDragging = true;
              const rect = chatBox.getBoundingClientRect();
              offsetX = e.clientX - rect.left;
              offsetY = e.clientY - rect.top;
              chatBox.style.transition = "none";
              chatBox.style.cursor = "grabbing";
            };

            const mouseMove = (e) => {
              if (!isDragging) return;
              chatBox.style.left = `${e.clientX - offsetX}px`;
              chatBox.style.top = `${e.clientY - offsetY}px`;
              chatBox.style.right = "auto";
              chatBox.style.bottom = "auto";
            };

            const mouseUp = () => {
              isDragging = false;
              chatBox.style.cursor = "default";
            };

            chatHeader.addEventListener("mousedown", mouseDown);
            document.addEventListener("mousemove", mouseMove);
            document.addEventListener("mouseup", mouseUp);

            return () => {
              chatToggle.removeEventListener("click", toggleChat);
              chatHeader.removeEventListener("mousedown", mouseDown);
              document.removeEventListener("mousemove", mouseMove);
              document.removeEventListener("mouseup", mouseUp);
              document.removeEventListener("click", clickOutside);
            };
          }
        }
      }, 200);

      /* ------------------ 🔹 QR Modal Toggle ------------------ */
      const waitForQR = setInterval(() => {
        const openBtn = document.querySelector(".btn-open-qr");
        const modal = document.getElementById("qrModal");
        const closeBtn = document.getElementById("closeModal");

        if (openBtn && modal && closeBtn) {
          clearInterval(waitForQR);
          console.log("🔹 QR Modal elements loaded.");

          const openModal = (e) => {
            e.stopPropagation();
            modal.style.display = "flex";
            setTimeout(() => modal.classList.add("show"), 10);
          };

          const closeModal = () => {
            modal.classList.remove("show");
            setTimeout(() => (modal.style.display = "none"), 300);
          };

          openBtn.addEventListener("click", openModal);
          closeBtn.addEventListener("click", closeModal);

          modal.addEventListener("click", (e) => {
            if (e.target === modal) {
              closeModal();
            }
          });

          return () => {
            openBtn.removeEventListener("click", openModal);
            closeBtn.removeEventListener("click", closeModal);
            modal.removeEventListener("click", closeModal);
          };
        }
      }, 300);

      /* ------------------ 📋 Copy Link Button ------------------ */
      const waitForCopyLink = setInterval(() => {
        const copyBtn = document.getElementById("copyBtn");
        const merchantLink = document.getElementById("merchantLink");
        const copyMsg = document.getElementById("copyMsg");

        if (copyBtn && merchantLink && copyMsg) {
          clearInterval(waitForCopyLink);
          console.log("📋 Copy link elements loaded.");

          const copyHandler = () => {
            merchantLink.select();
            merchantLink.setSelectionRange(0, 99999);
            navigator.clipboard.writeText(merchantLink.value).then(() => {
              copyMsg.style.display = "inline";
              copyMsg.style.opacity = "1";

              setTimeout(() => {
                copyMsg.style.opacity = "0";
                setTimeout(() => (copyMsg.style.display = "none"), 300);
              }, 1500);
            });
          };

          copyBtn.addEventListener("click", copyHandler);

          return () => {
            copyBtn.removeEventListener("click", copyHandler);
          };
        }
      }, 300);

      /* ------------------------------------------------------ */
      /* ---------- 🟩 Team Cards Ultra Animation -------------- */
      /* ------------------------------------------------------ */
      const cards = document.querySelectorAll(".item");

      function revealCards() {
        cards.forEach((card) => {
          const rect = card.getBoundingClientRect();
          if (rect.top < window.innerHeight - 120) {
            card.classList.add("show");
          }
        });
      }

      window.addEventListener("scroll", revealCards);
      revealCards();
      /* ------------------------------------------------------ */
    }, 400);

    return () => clearTimeout(timer);
  }, [location.pathname]);
}

export default useAllJS;
