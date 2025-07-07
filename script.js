document.querySelectorAll('.social-icon').forEach(icon => {
  icon.addEventListener('click', function(event) {
    event.preventDefault();
    let url = "#";
    switch(this.id) {
      case "facebook":
        url = "https://www.facebook.com/share/14G1Z7ArH2y/?mibextid=wwXIfr";
        break;
      case "instagram":
        url = "https://www.instagram.com/isas.iraqi_formal_page?igsh=dnlnZWZ0ZjZ0Y2k2&utm_source=qr";
        break;
      case "tiktok":
        url = "https://www.tiktok.com/@iraqiisas2025?_t=ZS-8xJRhtigRmr&_r=1";
        break;
      case "x":
        url = "#"; // ضع هنا رابط تويتر متى ما أعطيتني إياه
        break;
    }
    window.open(url, '_blank');
  });
});
