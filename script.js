const links = {
  facebook: 'https://web.facebook.com/people/...',
  x: 'https://twitter.com',
  instagram: 'https://www.instagram.com/...',
  tiktok: 'https://www.tiktok.com/@iraqiisas2025?...'
};

function openLink(url) {
  const newWin = window.open(url, '_blank', 'noopener,noreferrer');
  if (!newWin) {
    window.location.href = url;
  }
}

['facebook', 'x', 'instagram', 'tiktok'].forEach(id => {
  const el = document.getElementById(id);
  if (el) {
    el.addEventListener('click', e => {
      e.preventDefault();
      openLink(links[id]);
      el.blur(); // حل الفقاعة
    });

    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLink(links[id]);
        el.blur(); // حل الفقاعة
      }
    });
  }
});
