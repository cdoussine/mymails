var sentence =
  "ramenez la coupe à la maison, allez les bleus allez! 20 ans après, c'est le moment, allez les bleus, allez!";

var sentenceSplit = sentence.split(' ');

var newSentence = '';

for (mot of sentenceSplit) {
  newSentence = newSentence + mot[0].toUpperCase();
  if (mot.startsWith('bleus') || mot.startsWith('allez')) {
    newSentence = newSentence + mot.toUpperCase().slice(1);
  } else {
    newSentence = newSentence + mot.slice(1);
  }
  newSentence = newSentence + ' ';
}

console.log(sentence);
console.log(newSentence);
