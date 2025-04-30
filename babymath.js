// babymath.js

// 1. Set Favicon
(function setFavicon() {
  const link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/x-icon';
  link.href = 'https://raw.githubusercontent.com/babymath/imp-file/refs/heads/main/babymath-favicon.ico';
  document.head.appendChild(link);
})();

// 2. Show App Promotion Popup (after 5 seconds, once every 24 hours)
(function showAppPromotionPopup() {
  const popupKey = 'appPromoLastShown';
  const lastShown = localStorage.getItem(popupKey);
  const now = Date.now();
  const oneDay = 24 * 60 * 60 * 1000;

  if (lastShown && now - parseInt(lastShown) < oneDay) return;

  setTimeout(() => {
    const popup = document.createElement('div');
    popup.innerHTML = `
      <div id="appPromoPopup" style="
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 300px;
        background: #fff;
        border: 1px solid #ccc;
        border-radius: 10px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        padding: 15px;
        z-index: 9999;
        font-family: sans-serif;
      ">
        <strong>📱 Get our App!</strong>
        <p>Enjoy a better experience on mobile.</p>
        <a href="https://babymath.pages.dev" target="_blank" style="
          display: inline-block;
          margin-top: 10px;
          background: #4285f4;
          color: white;
          padding: 8px 12px;
          border-radius: 5px;
          text-decoration: none;
        ">Open BabyMath</a>
        <span id="closeAppPromo" style="
          position: absolute;
          top: 5px;
          right: 10px;
          cursor: pointer;
          font-size: 16px;
        ">&times;</span>
      </div>
    `;
    document.body.appendChild(popup);

    document.getElementById('closeAppPromo').onclick = function () {
      document.getElementById('appPromoPopup').remove();
      localStorage.setItem(popupKey, now.toString());
    };
  }, 5000); // 5-second delay
})();
