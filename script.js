function forceOpen(event, url) {
  event.preventDefault();
  // الحل المختلط: اجبر حتى WebView
  window.location.href = url;
}
