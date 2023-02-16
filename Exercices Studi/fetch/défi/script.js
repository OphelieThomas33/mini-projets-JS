// const url = new URL("https://api-adresse.data.gouv.fr/search")
// const address = document.getElementById('address').value 
// console.log(address)

// function searchAddress () {
//     url.search = new URLSearchParams({q: address}).toString()
//     console.log(url.href)
// }

const url = "https://api-adresse.data.gouv.fr/search/?"
const address = document.getElementById('address')
console.log(address)
let urlSearch;

function searchAddress () {
    urlSearch = url + new URLSearchParams({q: address.value})
    fetch(urlSearch, {
        method: 'GET'
    })
    .then((response) => {
        if(response.ok) {
            let responseJson = response.json()
            return responseJson
        }
        else {
            console.log(response.status)
        }
    })
    .then((data) => {
        fillResults(data)
    })
    .catch((error) => console.error(error)) //Traitement de l'erreur dans l'appel
}

function fillResults(data) {
    let list = document.getElementById('results')
    list.innerHTML = ''
    if(undefined !== data.features) {
      data.features.forEach(function(element) {
        let li = document.createElement('li')
        li.appendChild(document.createTextNode(element.properties.label))
        list.appendChild(li)
      });
    }
  }

function manageResearch () {
    console.log('J\'ai été déclenchée')
    Promise.all([authentification(), isNotARobot()]).then(success, error)
}

function askUserName() {
    return prompt('Quel est votre identifiant ?')
}

function askCalcul() {
    return prompt('Combien font 6 x 7')
}

function success() {
    console.log('Vous pouvez accéder à l\'application')
    searchAddress();
}

function error() {
    console.log('Accès refusé')
}

function authentification() {
    return new Promise((resolve, reject) => {

        let userName = askUserName()

        if (userName === 'admin') {
            resolve()
        } else {
            reject()
        }
    })
}

function isNotARobot() {
    return new Promise((resolve, reject) => {

        let calcul = askCalcul()

        if (calcul == 42) {
            resolve()
        } else {
            reject()
        }
    })
}

