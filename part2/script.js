const nombreMessages = () => {
  var messagesCount = document.getElementsByTagName('p').length;
  document.getElementById('count').textContent = messagesCount;
};

const palindrome = word => {
  var wordSplit = word.split('');
  var wordReverse = wordSplit.reverse().join('');
  return word === wordReverse ? true : false;
};

const anagramme = (word, tab, indice) => {
  var wordSorted = word
    .split('')
    .sort()
    .join('');
  for (var i = 0; i < tab.length; i++) {
    var wordTabSorted = tab[i]
      .split('')
      .sort()
      .join('');

    if (wordSorted === wordTabSorted && i !== indice) {
      return true;
    }
  }
  return false;
};

// Afficher le nombre de messages
nombreMessages();

var p = document.getElementsByTagName('p');

for (var i = 0; i < p.length; i++) {
  document
    .getElementsByClassName('trash')
    [i].addEventListener('click', function() {
      this.parentNode.remove();
      nombreMessages();
    });

  document.getElementsByTagName('h6')[i].addEventListener('click', function() {
    var p = this.parentNode.childNodes[3];
    console.log(p);
    p.textContent = p.textContent.toUpperCase();
  });

  var tab = document
    .getElementsByTagName('p')
    [i].textContent.split(' ')
    .filter(word => word.trim() !== '');

  // Afficher le nombre de mots dans la description
  var nbmots = document
    .getElementsByTagName('p')
    [i].textContent.split(' ')
    .filter(word => word.trim() !== '').length;
  document.getElementsByClassName('nbmotdesc')[i].textContent = nbmots;

  // Afficher le nombre de Lorem ...
  nbmots = tab.filter(word => {
    if (
      word.includes('libero') ||
      word.includes('Lorem') ||
      word.includes('elit')
    ) {
      return word;
    }
  }).length;
  document.getElementsByClassName('nblibero')[i].textContent = nbmots;

  // Afficher le nombre d'anagramme
  nbmots = tab.filter((word, indice) => {
    if (anagramme(word, tab, indice) || palindrome(word)) {
      return word;
    }
  }).length;

  document.getElementsByClassName('nbana')[i].textContent = nbmots;
}
