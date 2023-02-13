const json = '[{"id":33,"name":"Boni Avenue"},{"id":34,"name":"Shaw Boulevard"},{"id":35,"name":"Rue Madeleine"},{"id":36,"name":"Shaw Boulevard"}]';

const select = document.querySelector('#button')

const populateSelect = () => {
    const data = JSON.parse(json)     // transforme le Json en tableau JS contenant des objets
    let ele = document.querySelector('#select')
    for (let i = 0; i < data.length; i++) {
        let option = document.createElement('option')
        console.log(data)
        option.value = data[i]['id']
        option.innerText = data[i]['name']
        ele.append(option)
    }
}

select.addEventListener('click', populateSelect)