// Phrase de départ
var sentence =
  "ramenez la coupe à la maison, allez les bleus allez! 20 ans après, c'est le moment, allez les bleus, allez!";

// Tableau avec les mots
var stringToTab = sentence.split(" ");

// Boucle map pour mettre en majuscule les mots
var tableWithUpperCase = stringToTab.map(word => {
  // Condition pour les mots bleus et allez
  if (word.includes("bleus") || word.includes("allez")) {
    return word.toLocaleUpperCase();
  }
  // On peut aussi la condition avec => (word === "bleus" || word === "allez" || word === "allez!")

  //On gère le cas classique
  return word.charAt(0).toUpperCase() + word.slice(1);
});

// On transforme le tableau avec les mots en majuscule en string
var tableToString = tableWithUpperCase.join(" ");

console.log(tableToString);
