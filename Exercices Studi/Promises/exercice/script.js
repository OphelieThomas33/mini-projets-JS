function askAge() {
  return prompt('Quel âge avez-vous ?')
}   

function success() {
  console.log('Vous êtes majeur, vous pouvez continuer votre navigation')
}

function error() {
  console.log('Vous êtes mineur, vous allez être redirigé vers une autre page')
}

function redirectUser() {
  return new Promise((resolve, reject) => {
    let userAge = askAge()

    if(userAge >= 18) {
      resolve()
    } else {
      reject()
    }
  })
 // code à implémenter
}

redirectUser().then(success, error)