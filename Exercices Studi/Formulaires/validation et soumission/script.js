form.addEventListener('submit', (event) => {
    // ici nos traitements sur les données du formulaire
    event.preventDefault(); // Annule l'envoi des données
   })

// accéder aux champs d'un formulaire :
var form = document.querySelector('form')

// Nombre d'éléments du formulaire
console.log(`Choix : ${form.elements.length}`);

// Nom du 1er élément
console.log(`Choix : ${form.elements[0].name}`);

// Type du second élément
console.log(`Choix : ${form.elements[1].type}`);

// Valeur du second élément
console.log(`Choix : ${form.elements[1].value}`);


// soummettre un formulaire :
var form = document.querySelector('form')

form.addEventListener('submit', (event => {
  for(var countElement = 0; countElement < form.elements.length; countElement++) {
    console.log(`Choix : ${form.elements[countElement].name}`);
  }
  event.preventDefault()
}))

// Validation des données pendant la saisie utilisateur : 
var mytxt = document.getElementById('my-txt')
var error = document.getElementById('error')

mytxt.addEventListener('input', (event) => {
  var mytxtValue = event.target.value
  if (mytxtValue.length < 6) {
    error.innerText = 'Le texte doit comporter au moins 6 caractères ...'
  } else {
    error.innerText = 'Texte validé !'
  }
})