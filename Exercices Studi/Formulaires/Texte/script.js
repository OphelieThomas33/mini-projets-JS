// Champs de type texte : input & textarea

const shortTxt = document.querySelector('#short-txt')

console.log(shortTxt.value)   // lire la valeur de Input ou Textarea
shortTxt.value = 'Texte modifié'

// Focus => cibler un champ
// blur => retirer le ciblage d'un champ

const txtfocus = document.getElementById('txt-focus')
const txtblur = document.getElementById('txt-blur')

txtfocus.addEventListener('focus', (event) => {
  event.target.style.background = 'blue'
})

txtblur.addEventListener('blur', (event) => {
  alert('blur')
})

// Autres possibilités : 
let txtblur1 = document.querySelector('#txt-blur')
txtblur1.focus() // Cible le champ txtblur
let txtfocus1 = document.querySelector('#txt-focus')
txtfocus1.blur() // Permet de ne plus cibler le champ txtfocus

