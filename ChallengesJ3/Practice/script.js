//
// Commande à lancer dans le terminal pour lancer la page internet
// browser-sync start --server --files "**/*.html, **/*.css, **/*.js"
//

/*var todo1 = document.getElementById('todo-1');
todo1.addEventListener('click', function() {
  var text = todo1.textContent.toUpperCase();
  todo1.textContent = text;
});*/

var p = document.createElement('p');

/*
p.innerHTML = 'Ajout todo 6';
*/

/* Plus propre pour tout type de chaine de caractère */
var newText = document.createTextNode('Jogging avec Jules samedi 10h00');
p.appendChild(newText);

document.body.appendChild(p);

/*
for (var i = 0; i < document.getElementsByTagName('p').length; i++) {
  console.log(document.getElementsByTagName('p')[i].textContent);
}
*/

// this car dans le event handler on a perdu le contexte
/*
for (var i = 0; i < document.getElementsByTagName('p').length; i++) {
  document.getElementsByTagName('p')[i].addEventListener('click', function() {
    var text = this.textContent.toUpperCase();
    this.textContent = text;
  });
}
*/

const paragraphUp = event => {
  var text = event.target.textContent.toUpperCase();
  event.target.textContent = text;
  console.log(text);
};

for (var i = 0; i < document.getElementsByTagName('p').length; i++) {
  var p = document.getElementsByTagName('p')[i];
  p.onclick = paragraphUp;
  /* si +sieurs eventhanlers sur le même evènement
  p.addEventListener('click', paragraphUp);
  */
}
