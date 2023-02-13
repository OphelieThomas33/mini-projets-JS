const email = document.querySelector('#email')
const password = document.querySelector('#password')
const regexEmail = /^([0-9a-zA-Z].*?@([0-9a-zA-Z].*\.\w{2,4}))$/
const error = document.querySelector('#error')

email.addEventListener('input', (event) => {
    if(!regexEmail.test(event.target.value)) {
        error.innerText = "Le format de l'email est incorrect"
    }
    else {
        error.innerText = ""
    }
})

password.addEventListener('input', (event) => {
    if(event.target.value.length < 8) {
        error.innerText = "Votre mdp doit comporter au moins 8 caracères"
    }
    else {
        error.innerText = ""
    }
})

form.addEventListener('submit', (event) => {
  if (error.innerText !== '') {
    event.preventDefault()
    alert("Le formulaire contient des erreurs et n'a pas été envoyé")
  }
})
