// Number of messages
$('#count').text($('p').length);

// Listening to the click of the trash
$('.trash').click(function() {
  $(this)
    .parent()
    .remove();
  $('#count').text($('h6').length);
});

// Click on Search button
$('#btn-search').click(function() {
  var textSearch = $('#search-message').val();
  $('#search-message').val('');
  $('h6').each(function() {
    if (textSearch.length > 0 && $(this).text() !== textSearch) {
      $(this)
        .parent()
        .parent()
        .fadeOut();
      $('#count').text($('h6').length);
    }
    if (textSearch.length === 0) {
      $(this)
        .parent()
        .parent()
        .fadeIn();
    }
  });
});

// Click on Add button
$('#btn-add').click(function() {
  var textInput = $('#add-message').val();
  $('#add-message').val('');

  var message =
    '<div class="row-added">' +
    '<img class="avatar" src="avatar-1.jpg" />' +
    '<div class="content">' +
    '<h6>Noel Paganelli</h6>' +
    '<p>' +
    textInput +
    '</p>' +
    '</div>' +
    '<img class="trash" src="trash.png" />' +
    '</div>';

  $('body').append(message);

  // Listening to the click of the trash
  $('.trash').click(function() {
    $(this)
      .parent()
      .remove();
    $('#count').text($('h6').length);
  });

  $('#count').text($('h6').length);
});
