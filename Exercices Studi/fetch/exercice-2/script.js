let urls = [
  'https://reqres.in/api/users/2',
  'https://reqress.in/api/users/3',
  'https://reqres.in/api/users/23'
]

function fetchUrl(url) {
    fetch(url, {method: 'GET'})
    .then((response) => {
        if(response.ok){
            return response.json()
        }
        else {
            console.log('Une erreur est survenue, code erreur :' + response.status)
        }
    })
    .then((data) => {
        console.log(data)
    })
    .catch((error) => console.error(error)); //Traitement de l'erreur dans l'appel
}


urls.forEach(url => fetchUrl(url))

