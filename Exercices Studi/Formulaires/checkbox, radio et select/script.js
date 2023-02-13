const checkbox = document.getElementById('check')

checkbox.addEventListener('change', (event) => {
  alert(event.target.checked) // True si coché, sinon false 
})

// *************************

const btnradio = document.getElementsByName('gender')

for (var count = 0; count < btnradio.length; count++) {
    btnradio[count].addEventListener('change', (event) => {
        alert(`Choix : ${event.target.value}`);
    });
}

// ************************

const language = document.getElementById('language')

language.addEventListener('change', (event) => {
  alert(event.target.value)
})

