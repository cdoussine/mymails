$('.cookie').click(function() {
  if ($(this).attr('src') === 'cookie-1.jpg') {
    $(this).attr('src', 'cookie-2.jpg');
  } else {
    $(this).css('display', 'none');
  }
});
