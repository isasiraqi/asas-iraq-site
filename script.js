// روابط مواقع التواصل
const links = {
  facebook: 'https://web.facebook.com/people/%D8%A7%D8%A6%D8%AA%D9%84%D8%A7%D9%81-%D8%A7%D9%84%D8%A3%D8%B3%D8%A7%D8%B3-%D8%A7%D9%84%D8%B9%D8%B1%D8%A7%D9%82%D9%8A/61575067951431/',
  x: 'https://twitter.com',
  instagram: 'https://www.instagram.com/isas.iraqi_formal_page?igsh=dnlnZWZ0ZjZ0Y2k2&utm_source=qr',
  tiktok: 'https://www.tiktok.com/@iraqiisas2025?_t=ZS-8xJRhtigRmr&_r=1'
};

// دالة فتح الرابط بطريقة مدعومة في أغلب الأجهزة
function openLink(url) {
  const newWin = window.open(url, '_blank', 'noopener,noreferrer');
  if (!newWin) {
    window.location.href = url;
  }
}

// ربط الروابط بالأزرار
['facebook', 'x', 'instagram', 'tiktok'].forEach(id => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener('click', e => {
      e.preventDefault();
      openLink(links[id]);
    });
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLink(links[id]);
      }
    });
  }
});
