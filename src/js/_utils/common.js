extend();

if (!$.ua.isTouchDevice) {
  $('.rollover').rollover();
}

if (!$.ua.isMobile) {
  $('a[href^="tel:"]').on('click', function (e) {
    e.preventDefault();
  });
}

$.scroller();
$.enableTouchOver();