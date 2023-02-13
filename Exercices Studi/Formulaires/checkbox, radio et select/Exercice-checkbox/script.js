const newsletter = document.querySelector('#consentement')
const partenaire = document.getElementsByName('btn-radio')
const message = document.querySelector('#message')
const pays = document.querySelector('#pays')

newsletter.addEventListener('change', (event) => {
    if (event.target.checked) {
        alert("Vous acceptez de recevoir la newsletter")
        for (let item of partenaire) {
            item.checked = (item.value ==='oui')
        }
    }
    else { 
        for (let item of partenaire) {
            item.checked = (item.value ==='non')
        }
    }
})

pays.addEventListener('change', (event) => {
    message.textContent = `Vous avez indiqué être en : ${event.target.value}.`
})



// console.log(partenaire)


// // solution proposée : 
// let checkbox = document.getElementById('consentement')
// let radio = document.getElementsByName('btn-radio')

// checkbox.addEventListener('change', (event) => {
//   if (event.target.checked) {
//     alert('Vous acceptez de recevoir la newsletter')
//     for(item of radio) {
//       if (item.value == 'oui') {
//         item.checked = true
//       }
//     }
//   } else {
//     for(item of radio) {
//       item.checked = (item.value === 'non');
//     }
//   }
// })