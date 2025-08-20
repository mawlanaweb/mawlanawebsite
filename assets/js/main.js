/**
 * Template Name: Mawlanaweb
 * Updated: 2025
 * Author: mawlanaweb.web.id
 */

/**
 * Utility: select element
 */
const select = (el, all = false) => {
  el = el.trim();
  if (all) {
    return [...document.querySelectorAll(el)];
  } else {
    return document.querySelector(el);
  }
};

/**
 * Utility: on event
 */
const on = (type, el, listener, all = false) => {
  let selectEl = select(el, all);
  if (selectEl) {
    if (all) {
      selectEl.forEach(e => e.addEventListener(type, listener));
    } else {
      selectEl.addEventListener(type, listener);
    }
  }
};

/**
 * Utility: onscroll event
 */
const onscroll = (el, listener) => {
  el.addEventListener('scroll', listener);
};

/**
 * Navbar active state on scroll
 */
let navbarlinks = select('#navbar .scrollto', true);
const navbarlinksActive = () => {
  let position = window.scrollY + 200;
  navbarlinks.forEach(navbarlink => {
    if (!navbarlink.hash) return;
    let section = select(navbarlink.hash);
    if (!section) return;
    if (
      position >= section.offsetTop &&
      position <= section.offsetTop + section.offsetHeight
    ) {
      navbarlink.classList.add('active');
    } else {
      navbarlink.classList.remove('active');
    }
  });
};
window.addEventListener('load', navbarlinksActive);
onscroll(document, navbarlinksActive);

/**
 * Scrolls to an element with header offset
 */
const scrollto = (el) => {
  let header = select('#header');
  let offset = header.offsetHeight;

  let elementPos = select(el).offsetTop;
  window.scrollTo({
    top: elementPos - offset,
    behavior: 'smooth'
  });
};

/**
 * Back to top button
 */
let backtotop = select('.back-to-top');
if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      backtotop.classList.add('active');
    } else {
      backtotop.classList.remove('active');
    }
  };
  window.addEventListener('load', toggleBacktotop);
  onscroll(document, toggleBacktotop);
}

/**
 * Mobile nav toggle
 */
on('click', '.mobile-nav-toggle', function(e) {
  select('#navbar').classList.toggle('navbar-mobile');
  this.classList.toggle('bi-list');
  this.classList.toggle('bi-x');
});

/**
 * Mobile nav dropdowns activate
 */
on('click', '.navbar .dropdown > a', function(e) {
  if (select('#navbar').classList.contains('navbar-mobile')) {
    e.preventDefault();
    this.nextElementSibling.classList.toggle('dropdown-active');
  }
}, true);

/**
 * Scroll with offset on links with class name .scrollto
 */
on('click', '.scrollto', function(e) {
  if (select(this.hash)) {
    e.preventDefault();

    let navbar = select('#navbar');
    if (navbar.classList.contains('navbar-mobile')) {
      navbar.classList.remove('navbar-mobile');
      let navbarToggle = select('.mobile-nav-toggle');
      navbarToggle.classList.toggle('bi-list');
      navbarToggle.classList.toggle('bi-x');
    }
    scrollto(this.hash);
  }
}, true);

/**
 * Scroll with offset on page load with hash links in the URL
 * (di-disable agar tidak auto scroll ke section)
 */
// Dihapus / dikomentari karena bikin auto-scroll saat refresh
// window.addEventListener('load', function(e) {
//   if (window.location.hash) {
//     if (document.querySelector(window.location.hash)) {
//       setTimeout(() => {
//         let section = document.querySelector(window.location.hash);
//         let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
//         window.scrollTo({
//           top: section.offsetTop - parseInt(scrollMarginTop),
//           behavior: 'smooth'
//         });
//       }, 100);
//     }
//   }
// });

/**
 * Clients Slider
 */
new Swiper('.clients-slider', {
  speed: 400,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
});

/**
 * Initiate glightbox
 */
const glightbox = GLightbox({
  selector: '.glightbox'
});

/**
 * Initiate AOS
 */
function aos_init() {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });
}
window.addEventListener('load', () => {
  aos_init();
});

/**
 * ================================
 * PATCH: Fix scroll refresh issue
 * ================================
 */

// Smooth scroll tanpa simpan hash di URL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetEl = document.querySelector(targetId);

    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
      // Hapus hash dari URL agar tidak lompat saat refresh
      history.pushState("", document.title, window.location.pathname + window.location.search);
    }
  });
});

// Paksa halaman selalu mulai dari atas saat load / refresh
window.addEventListener("load", function () {
  window.scrollTo(0, 0);
});
window.addEventListener("pageshow", function () {
  window.scrollTo(0, 0);
});

/**
 * Scroll Up & Down Buttons
 */
let scrollUpBtn = document.querySelector('.scroll-up');
let scrollDownBtn = document.querySelector('.scroll-down');

if (scrollUpBtn && scrollDownBtn) {
  const toggleScrollBtns = () => {
    // tampilkan tombol scroll up kalau sudah turun > 100px
    if (window.scrollY > 100) {
      scrollUpBtn.classList.add('active');
    } else {
      scrollUpBtn.classList.remove('active');
    }

    // tampilkan tombol scroll down kalau belum sampai bawah
    if ((window.innerHeight + window.scrollY) < document.body.offsetHeight - 100) {
      scrollDownBtn.classList.add('active');
    } else {
      scrollDownBtn.classList.remove('active');
    }
  };

  window.addEventListener('load', toggleScrollBtns);
  window.addEventListener('scroll', toggleScrollBtns);

  // Scroll ke atas
  scrollUpBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Scroll ke bawah
  scrollDownBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  });
}

/**
 * Init Swiper for Clients Section
 */
new Swiper(".init-swiper", {
  loop: true,
  speed: 600,
  autoplay: { delay: 5000 },
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true
  },
  breakpoints: {
    320: { slidesPerView: 2, spaceBetween: 40 },
    480: { slidesPerView: 3, spaceBetween: 60 },
    640: { slidesPerView: 4, spaceBetween: 80 },
    992: { slidesPerView: 6, spaceBetween: 120 }
  }
});

document.querySelectorAll('.faq-item').forEach(item => {
  item.querySelector('.faq-toggle').addEventListener('click', () => {
    item.classList.toggle('faq-active');
  });
});
