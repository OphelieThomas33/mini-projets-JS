let articles = 0

const btnAddArticle = document.querySelector('.add-article')
const btnDeleteArticle = document.querySelector('.delete-article')
const shop = document.querySelector('.shop')
const numberArticle = document.querySelector('#number-article')

const addArticle = () => {
    articles++;
    numberArticle.textContent = articles
    if (articles > 0 ) {
        shop.style.display = "block"
    }
}

const deleteArticle = () => {
    articles--;
    numberArticle.textContent = articles
    if (articles === 0 ) {
        shop.style.display = "none"
    }
}

const goToShop = () => {
    btnAddArticle.removeEventListener('click', addArticle)
    btnDeleteArticle.removeEventListener('click', deleteArticle)
}

shop.addEventListener('click', goToShop)
btnAddArticle.addEventListener('click', addArticle)
btnDeleteArticle.addEventListener('click', deleteArticle)

const btnConnexion = document.createElement('button')
btnConnexion.textContent = "Connexion"
document.body.appendChild(btnConnexion);
btnConnexion.style.backgroundColor = 'green'
btnConnexion.style.color = 'white'

btnConnexion.addEventListener('click', () => {
    alert('Vous avez cliqué sur le bouton de connexion')
})

btnConnexion.addEventListener('mouseenter', () => {
    btnConnexion.style.backgroundColor = 'red'
})

btnConnexion.addEventListener('mouseleave', () => {
    btnConnexion.style.backgroundColor = 'green'
})