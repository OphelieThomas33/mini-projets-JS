const identifiant = document.querySelector('#identifiant')
const password = document.querySelector('#password')
const email = document.querySelector('#email')
const emailConfirm = document.querySelector('#email-confirm')
const nom = document.querySelector('#nom')
const prenom = document.querySelector('#prenom')
const annee = document.querySelector('#annee')
const submit = document.querySelector('#btn-submit')
const form = document.querySelector('form')
let error = ''

const validationID = () => {
    if(identifiant.value == '') {
        console.log('L\'identifiant est obligatoire')
        return 'L\'identifiant est obligatoire. '
    }
    return ''
}

const validationPassword = () => {
    if(password.value.length < 6) {
        console.log('Le mot de passe est obligatoire et doit contenir au moins 6 caractères')
        return 'Le mot de passe est obligatoire et doit contenir au moins 6 caractères. '
    }
    return ''
}

const validationEmail = () => {
    if(email.value !== emailConfirm.value) {
        console.log('Les 2 adresses email doivent être identiques')
        return 'Les 2 adresses email doivent être identiques. '
    }
    else if(email.value == '') {
        console.log('L\'adresse email est obligatoire. ')
        return 'L\'adresse email est obligatoire. '
    }
    return ''
}

const validations = () => {
    if (validationEmail == '' && validationPassword == '' && validationID == '') {
        return ''
    }
    console.log('error')
    return 'error'
}

form.addEventListener('submit', (event) => {
    error = ''
    error += validationEmail()
    error += validationID()
    error += validationPassword()
    if (error !== '') {
        alert(error)
        event.preventDefault()
    }
    else {
        alert('formulaire envoyé')
    }
})




// form.addEventListener('submit', (event) => {
//     error = ''
//     error += validEmail(email.value, emailConfirmation.value)
//     for(let count=0; count<form.elements.length; count++) {
//      if (form.elements[count].name === 'identifiant') {
//         error+= validIdentifiant(form.elements[count].value)
//        } else if (form.elements[count].name === 'password'){
//     error += validPassword(form.elements[count].value)
//       }
// }
  
// if (error !== '') {
// alert(error)
//  event.preventDefault()
// }
// })