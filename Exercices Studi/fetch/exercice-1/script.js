const url = 'https://reqres.in/'
const urlUser2 = 'https://reqres.in/api/users/2.'
const lastNameUser = document.getElementById('lastNameUser')
const firstNameUser = document.getElementById('firstNameUser')
const emailNameUser = document.getElementById('emailUser')
const photoUser = document.getElementById('photoUser')

fetch(urlUser2, {
    method: 'GET'
})
.then(manageResponse)
.then(displayData)


function manageResponse(response) {
    if(response.ok){
       return response.json();
    } else {
       console.log(response.status)
    }
}
   
function displayData(user) {
    console.log(user)
    lastNameUser.innerHTML = user.data.last_name
    firstNameUser.innerHTML = user.data.first_name
    emailUser.innerHTML = user.data.email
    photoUser.innerHTML = '<img src="'+user.data.avatar+'" alt="Photo de l\'utilisateur" >'
    
}


