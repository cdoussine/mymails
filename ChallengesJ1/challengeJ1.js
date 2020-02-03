var myText =
  'Si tu travailles avec un marteau-piqueur pendant un tremblement de terre, désynchronise-toi, sinon tu travailles pour rien';
var myText2 = myText.split(' ');

console.log(' ');
console.log('Challenge: Nombre de mots');

// Challenge - Nombre de mots
var j = 0;
for (var i = 0; i < myText2.length; i++) {
  if (myText2[i].length > 2) {
    j++;
  }
}
console.log(j);

console.log(' ');
console.log('Count words');

// Count words
for (var i = 0; i < myText2.length; i++) {
  if (myText2[i].length > 2) {
    console.log(myText2[i]);
  }
}

console.log(' ');
console.log("Transformation d'objet");
var contacts = [
  {
    prenom: 'Vanessa',
    telephone: '0874544587',
    email: 'vanessa@gmail.com'
  },
  {
    prenom: 'John',
    telephone: '0223388828',
    email: 'john@gmail.com'
  },
  {
    prenom: 'Alice',
    telephone: '0228876629',
    email: 'vanessa@gmail.com'
  },
  {
    prenom: 'George',
    telephone: '087765556',
    email: 'george@gmail.com'
  }
];

for (var i = 0; i < contacts.length; i++) {
  console.log(contacts[i].prenom.toUpperCase());
}

console.log(' ');
console.log('Homonyme');
contacts = [
  {
    prenom: 'Vanessa',
    telephone: '0874544587',
    email: 'vanessa@gmail.com'
  },
  {
    prenom: 'John',
    telephone: '0223388828',
    email: 'john@gmail.com'
  },
  {
    prenom: 'Alice',
    telephone: '0228876629',
    email: 'vanessa@gmail.com'
  },
  {
    prenom: 'George',
    telephone: '087765556',
    email: 'george@gmail.com'
  },
  {
    prenom: 'Alice',
    telephone: '0622559980',
    email: 'Alice@gmail.com'
  },
  {
    prenom: 'Vanessa',
    telephone: '087765556',
    email: 'vanessa@gmail.com'
  },
  {
    prenom: 'Vanessa',
    telephone: '0644250093',
    email: 'vanessa@gmail.com'
  }
];

var prenom = [];
var nombre = [];

for (var i = 0; i < contacts.length; i++) {
  var trouve = false;
  for (var j = 0; j < prenom.length; j++) {
    if (contacts[i].prenom === prenom[j]) {
      trouve = true;
      nombre[j] = nombre[j] + 1;
    }
  }
  if (!trouve) {
    prenom.push(contacts[i].prenom);
    nombre[prenom.length - 1] = 1;
  }
}

console.log(prenom);
console.log(nombre);
