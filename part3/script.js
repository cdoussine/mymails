/* -------- CODING PART WITH DOM INSTRUCTIONS --------------------------------------------------------------------*/

// Calculating the number of messages
var messagesCount = document.getElementsByTagName('p').length;

// updating the counter (with id='count')
document.getElementById('count').textContent = messagesCount;

// For each paragraph 'p'
for (var i = 0; i < document.getElementsByTagName('p').length; i++) {
  // 1) Listening for the click on a trash
  document
    .getElementsByClassName('trash')
    [i].addEventListener('click', function() {
      // 2) deleting the parent of the trash --> the entire Row
      this.parentNode.remove();

      // 3)- Updating the count again

      // We need the acquisition of the messages numbers again
      messagesCount = document.getElementsByTagName('p').length;

      // updating counter once more
      document.getElementById('count').textContent = messagesCount;
    });
}

/* -------------------------------------------------------------------------------------------------------*/

document.getElementById('btn-add').addEventListener('click', function() {
  var textSaisi = document.getElementById('add-message').value;

  var rowDiv = document.createElement('div');
  rowDiv.className = 'row-added';
  document.body.appendChild(rowDiv);

  var avatar = document.createElement('img');
  avatar.className = 'avatar';
  avatar.src = 'avatar-1.jpg';
  rowDiv.appendChild(avatar);

  var divContent = document.createElement('div');
  divContent.className = 'content';
  rowDiv.appendChild(divContent);

  var h6 = document.createElement('h6');
  var newText = document.createTextNode('Nouveau Nom');
  h6.appendChild(newText);
  divContent.appendChild(h6);

  var p = document.createElement('p');
  newText = document.createTextNode(textSaisi);
  p.appendChild(newText);
  divContent.appendChild(p);

  var trash = document.createElement('img');
  trash.className = 'trash';
  trash.src = 'trash.png';
  rowDiv.appendChild(trash);

  var messagesCount = document.getElementsByTagName('p').length;

  // updating the counter (with id='count')
  document.getElementById('count').textContent = messagesCount;
  document.getElementById('add-message').value = '';

  trash.addEventListener('click', removeMessage);

  /*trash.addEventListener('click', function() {
    this.parentNode.remove();
    messagesCount = document.getElementsByTagName('p').length;
    document.getElementById('count').textContent = messagesCount;
  });*/
});

const removeMessage = event => {
  event.target.parentNode.remove();
  messagesCount = document.getElementsByTagName('p').length;
  document.getElementById('count').textContent = messagesCount;
};
