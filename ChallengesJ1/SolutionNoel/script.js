// 1er challenge : afficher uniquement les mots supérieurs à 2 caractères
var myText = "Si tu travailles avec un marteau-piqueur pendant un tremblement de terre, désynchronise-toi, sinon tu travailles pour rien";
var textSplit = myText.split(' ');

for (var i = 0; i < textSplit.length; i++) {
  if (textSplit[i].length > 2) {
    console.log(textSplit[i])
  }
};

// 2ème challenge : transformer tous les prénoms de cette structure majuscule
var contacts = [
  {
      prenom : "Vanessa",
      telephone : "0874544587",
      email : "vanessa@gmail.com"
  },
  {
    prenom : "John",
    telephone : "0223388828",
    email : "john@gmail.com"
  },
  {
    prenom : "Alice",
    telephone : "0228876629",
    email : "vanessa@gmail.com"
  },
  {
    prenom : "George",
    telephone : "087765556",
    email : "george@gmail.com"
  },
];

for (var i = 0; i < contacts.length; i++) {
  console.log(contacts[i].prenom.toUpperCase())
};

// 2ème solution : avec la boucle for (... of ...)
for (i of contacts) {
  console.log(i.prenom.toUpperCase())
};



// 3ème challenge : Compter le nombre de fois où chaque prénom apparait
var contacts = [
  {
    prenom : "Vanessa",
    telephone : "0874544587",
    email : "vanessa@gmail.com"
  },
  {
    prenom : "John",
    telephone : "0223388828",
    email : "john@gmail.com"
  },
  {
    prenom : "Alice",
    telephone : "0228876629",
    email : "vanessa@gmail.com"
  },
  {
    prenom : "George",
    telephone : "087765556",
    email : "george@gmail.com"
  },
  {
    prenom : "Alice",
    telephone : "0622559980",
    email : "Alice@gmail.com"
  },
  {
    prenom : "Vanessa",
    telephone : "087765556",
    email : "vanessa@gmail.com"
  },
  {
    prenom : "Vanessa",
    telephone : "0644250093",
    email : "vanessa@gmail.com"
  }
];

var VanessaCount = 0;
var JohnCount = 0;
var AliceCount = 0;
var GeorgeCount = 0;

for (var i = 0; i < contacts.length; i++) {
  if (contacts[i].prenom === 'Vanessa') {
    VanessaCount++
  } else if (contacts[i].prenom === 'John') {
    JohnCount++
  } else if (contacts[i].prenom === 'Alice') {
    AliceCount++
  } else if (contacts[i].prenom === 'George') {
    GeorgeCount++
  }
};

console.log("Nb de Vanessa : " + VanessaCount);
console.log("Nb de John : " + JohnCount);
console.log("Nb de Alice : " + AliceCount);
console.log("Nb de George : " + GeorgeCount);
