// =============================
// 🔹 Ahrefs Analytics
// =============================
(function(){
  var s = document.createElement("script");
  s.src = "https://analytics.ahrefs.com/analytics.js";
  s.async = true;
  s.setAttribute("data-key","DQKNs2xEtMZ0N3ML7xNMMQ");
  document.body.appendChild(s);
})();

// =============================
// 🔹 Kombinasi Tracker
// (Yandex Metrika, Clarity, GTM)
// =============================
function loadTrackers() {
  // === YANDEX METRIKA ===
  var ymScript = document.createElement('script');
  ymScript.src = "https://mc.yandex.ru/metrika/tag.js";
  ymScript.async = true;
  ymScript.onload = function () {
    window.ym = window.ym || function () {
      (window.ym.a = window.ym.a || []).push(arguments);
    };
    window.ym.l = new Date().getTime();

    ym(102162382, "init", {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
      ecommerce: "dataLayer"
    });
  };
  document.head.appendChild(ymScript);

  // === MICROSOFT CLARITY ===
  (function(c, l, a, r, i, t, y) {
    c[a] = c[a] || function () {
      (c[a].q = c[a].q || []).push(arguments)
    };
    t = l.createElement(r);
    t.async = true;
    t.src = "https://www.clarity.ms/tag/" + i + "?ref=bwt";
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
  })(window, document, "clarity", "script", "rq25g1e9j5");

  // === GOOGLE TAG MANAGER (gtag.js) ===
  var gtagScript = document.createElement('script');
  gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-91Y83805BP";
  gtagScript.async = true;
  gtagScript.onload = function () {
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', 'G-91Y83805BP');
  };
  document.head.appendChild(gtagScript);
}

// Tunda 3 detik setelah semua konten halaman termuat
window.addEventListener('load', function () {
  setTimeout(loadTrackers, 3000);
});

// === Lazy Load Tawk.to Chat ===
function loadTawkTo() {
  if (window.Tawk_API) return; // sudah load, jangan ulang

  var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
  (function(){
    var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/685b628d5dc248190eeaea15/1iuifhutt';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
  })();

  // Setelah Tawk berhasil diload
  window.Tawk_API = window.Tawk_API || {};
  window.Tawk_API.onLoad = function() {
    // Auto open chat langsung setelah load
    Tawk_API.maximize();
    Tawk_API.addEvent('chat_button_clicked');

    // Reposition ke kiri
    const repositionTawk = setInterval(() => {
      const iframe = document.querySelector("iframe[title='chat widget']");
      if (iframe) {
        iframe.style.left = 'auto';
		iframe.style.right = '10px';
        clearInterval(repositionTawk);
      }
    }, 500);
  };
}

// Event klik tombol
document.addEventListener("DOMContentLoaded", function(){
  const chatButton = document.getElementById("chatButton");
  if (chatButton) {
    chatButton.addEventListener("click", function(){
      loadTawkTo();
      chatButton.style.display = "none"; // sembunyikan tombol setelah klik
    });
  }
});

