const onFocus = document.querySelectorAll('.inputPinkOnFocus')


for (let i = 0; i < onFocus.length; i++) {
    onFocus[i].addEventListener('focus', () => {
        onFocus[i].style.backgroundColor = "pink"
        onFocus[i].style.color = "blue"
    }
)}
for (let i = 0; i < onFocus.length; i++) {
    onFocus[i].addEventListener('blur', () => {
        onFocus[i].style.backgroundColor = ""
        onFocus[i].style.color = ""
    }
)}


// // solution proposée :
// let allinputs = document.getElementsByClassName('inputPinkOnFocus');

// Array.from(allinputs).forEach(function(input){
// input.addEventListener('focus', (event) => {
// event.target.style.background = 'pink';
// event.target.style.color = 'blue';
// });

// input.addEventListener('blur', (event) => {
// event.target.style.background = '';
// event.target.style.color = '';
// });
// });