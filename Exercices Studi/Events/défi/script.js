// Participant 1
const btnsend1 = document.getElementById('btn-send1')
const login1 = document.querySelector('#login1')
const message1 = document.querySelector('#message1')

// Participant 2
const btnsend2 = document.getElementById('btn-send2')
const login2 = document.querySelector('#login2')
const message2 = document.querySelector('#message2')

// Zone d'affichage
const displayText = document.getElementById('display-text')
const currentMessage = document.getElementsByClassName('message')

// Boutons d'actions
const btnreset = document.getElementById('reset')
const stop = document.getElementById('stop')

btnsend1.addEventListener('click', ()=> setTimeout(function(e) {
  displayMessage1(e)
}, 2000))

btnsend2.addEventListener('click', ()=> setTimeout(function(e) {
  displayMessage2(e)
}, 2000))

function displayMessage1(e) {
  displayText.innerHTML += '<p class="message">'+login1.value+' dit '+message1.value+'</p>'
}

function displayMessage2(e) {
  displayText.innerHTML += '<p class="message">'+login2.value+' dit '+message2.value+'</p>'
}

btnreset.addEventListener('click', reset)

function reset() {
  displayText.innerHTML = ''
}

stop.addEventListener('click', stopMessage)

function stopMessage(e) {
  e.preventDefault()
  btnsend2.setAttribute('disabled','disabled')
  btnsend2.removeEventListener('click', displayMessage2)
}