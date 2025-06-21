/**
 * Optimized JavaScript for Mawlanaweb
 * Author: mawlanaweb
 * Date: Optimized 2025-06-21
 */

(function () {
  "use strict";

  // Sticky header toggle
  const header = document.querySelector("#header");
  const body = document.body;

  function toggleScrolled() {
    if (header && (header.classList.contains("scroll-up-sticky") || header.classList.contains("sticky-top") || header.classList.contains("fixed-top"))) {
      body.classList.toggle("scrolled", window.scrollY > 100);
    }
  }
  window.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);

  // Mobile nav toggle
  const toggle = document.querySelector(".mobile-nav-toggle");
  const navMenu = document.getElementById("navmenu");

  function toggleMobileNav() {
    body.classList.toggle("mobile-nav-active");
    toggle?.classList.toggle("bi-list");
    toggle?.classList.toggle("bi-x");
    navMenu?.classList.toggle("navmenu-mobile");
  }

  toggle?.addEventListener("click", toggleMobileNav);

  navMenu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      body.classList.remove("mobile-nav-active");
      toggle?.classList.add("bi-list");
      toggle?.classList.remove("bi-x");
      navMenu.classList.remove("navmenu-mobile");
    });
  });

  // Dropdown toggle
  document.querySelectorAll(".navmenu .toggle-dropdown").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const parent = el.closest("li");
      parent?.classList.toggle("active");
      parent?.querySelector("ul")?.classList.toggle("dropdown-active");
    });
  });

  // Scroll to top
  const scrollTopBtn = document.querySelector(".scroll-top");

  function toggleScrollTop() {
    scrollTopBtn?.classList.toggle("active", window.scrollY > 100);
  }

  scrollTopBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", toggleScrollTop);
  window.addEventListener("load", toggleScrollTop);

  // Animation on scroll
  window.addEventListener("load", () => {
    if (typeof AOS !== "undefined") {
      AOS.init({ duration: 600, easing: "ease-in-out", once: true, mirror: false });
    }
  });

  // Init glightbox
  if (typeof GLightbox !== "undefined") {
    GLightbox({ selector: ".glightbox" });
  }

  // Swiper init
  window.addEventListener("load", () => {
    document.querySelectorAll(".init-swiper").forEach((el) => {
      const configEl = el.querySelector(".swiper-config");
      if (configEl) {
        try {
          const config = JSON.parse(configEl.textContent.trim());
          new Swiper(el, config);
        } catch (e) {
          console.error("Invalid Swiper config", e);
        }
      }
    });
  });

  // PureCounter
  if (typeof PureCounter !== "undefined") new PureCounter();

  // FAQ toggle
  document.querySelectorAll(".faq-item h3, .faq-item .faq-toggle").forEach((el) => {
    el.addEventListener("click", () => {
      el.closest(".faq-item")?.classList.toggle("faq-active");
    });
  });

  // Smooth scroll for hash on load
  window.addEventListener("load", () => {
    if (window.location.hash) {
      const section = document.querySelector(window.location.hash);
      if (section) {
        setTimeout(() => {
          const scrollMarginTop = parseInt(getComputedStyle(section).scrollMarginTop || "0", 10);
          window.scrollTo({ top: section.offsetTop - scrollMarginTop, behavior: "smooth" });
        }, 100);
      }
    }
  });

  // Scrollspy
  const navLinks = document.querySelectorAll(".navmenu a[href^='#']");

  function scrollSpy() {
    const scrollPos = window.scrollY + 200;
    navLinks.forEach((link) => {
      const section = document.querySelector(link.hash);
      if (!section) return;
      const inView = scrollPos >= section.offsetTop && scrollPos <= section.offsetTop + section.offsetHeight;
      link.classList.toggle("active", inView);
    });
  }

  window.addEventListener("scroll", scrollSpy);
  window.addEventListener("load", scrollSpy);
})();
