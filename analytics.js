window.dataLayer = window.dataLayer || [];

function gtag() {
  window.dataLayer.push(arguments);
}

gtag('js', new Date());
gtag('config', 'G-GTTCVPDS3G', {
  allow_google_signals: false,
  allow_ad_personalization_signals: false
});

document.addEventListener('click', (event) => {
  const link = event.target.closest('a[href^="tel:"], a[href^="sms:"]');
  if (!link) return;

  const eventName = link.protocol === 'tel:' ? 'call_click' : 'text_click';
  gtag('event', eventName);
});
