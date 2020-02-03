var tableau = [
  'bonjour',
  'kayak',
  'salut',
  'ressasser',
  'toto',
  'javascript',
  'été',
  'algo'
];

var newTableau = tableau.filter(word => {
  var wordSplit = word.split('');
  var wordReverse = wordSplit.reverse().join('');
  console.log(word);
  console.log(wordReverse);
  if (word === wordReverse) {
    return word;
  }
});

console.log(tableau);
console.log(newTableau);
