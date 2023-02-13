const div = document.querySelector('div')
const section = document.querySelector('section')
const h1 = document.querySelector('h1')

// div.addEventListener('click', (event) => {
//     alert('document.querySelector(\'div\')')
//     event.stopPropagation()
// })

// h1.addEventListener('click', (event) => {
//     alert('document.querySelector(\'h1\')')
//     event.stopPropagation()
// })

// section.addEventListener('click', (event) => {
//     alert('document.querySelector(\'section\')')
//     event.stopPropagation()
// })

// solution optimale :
for (let element of document.querySelectorAll('*')) {
    element.addEventListener("click", (event) => {
      event.stopPropagation();
      alert(` Capturing the element: ${element.tagName}`)
    }, false);
 }