let users = []

// fonction pour récupérer la liste des utilisateurs
const getList = (token) => {
    const newXhr = new XMLHttpRequest();
    newXhr.open('GET', 'https://reqres.in/api/users?page=1');
    newXhr.setRequestHeader('Authorization', token);
    newXhr.addEventListener('readystatechange', () => {
      if(newXhr.readyState === 4) {
        if (newXhr.status === 200) {
          users = JSON.parse(newXhr.response).data;
          console.log(users)
        } else {
          alert('Erreur user')
        }
      }
    });
    newXhr.send();
  }

// Action au click sur le formulaire
const sendForm = (email, password) => {
  setTimeout(() => {
    const token = 'ffghthfzszsz654412dsvcds';
    getList(token);
  }, 2000)
}