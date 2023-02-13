// Version ES6
class Personne {
    constructor(nom, prenom, age, sexe, adresse) {
      this.nom = nom
      this.prenom = prenom
      this.age = age
      this.sexe = sexe
      this.adresse = adresse
    }
    identite() {
        console.log(`${this.prenom.substr(0, 1)} ${this.nom}`)
    }
    gender() {
        if(this.sexe === "F") {
            console.log(`Madame ${this.nom}`)
        }
        else {
            console.log(`Monsieur ${this.nom}`)
        }
    }
    changeAge(age) {
        this.age = age
    }
  }

let personne1 = new Personne('Doe', 'John', 31, 'M', 'Rue du JavaScript')
let personne2 = new Personne('Doe', 'Ann', 28, 'F', 'Avenue des classes et objets')

personne1.identite()
personne2.identite()

personne1.gender()
personne2.gender()

personne1.changeAge(41)
console.log(personne1)


