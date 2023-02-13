class Partie {
    constructor(joueurs, tour) {
        this.joueurs = joueurs
        this.tour = tour
        this.joueurVainqueur = null
    }
    vainqueur() {
        let pts = 0
        this.joueurs.forEach(joueur => {
            this.joueurVainqueur = joueur.nombrePoints > pts ? joueur : this.joueurVainqueur
            pts = joueur.nombrePoints > pts ? joueur.nombrePoints : pts
        })

        if (this.joueurVainqueur === null) {
            console.log('Oups ! Personne n\'a gagné')
            return;
        }
            
        console.log(`${this.joueurVainqueur.identite()} gagne la partie avec ${this.joueurVainqueur.nombrePoints} points`)    
    }
}


class Joueur {
    constructor(nom, prenom, nombrePoints, tour) {
        this.nom = nom
        this.prenom = prenom
        this.nombrePoints = 100
        this.tour = 0
    }
    rand(nb) {
        return Math.floor(Math.random() * Math.floor(nb));
    }

    attaque(adversaire, bonus = 0) {
        if (this.tour < 3) {
            adversaire.nombrePoints -= this.rand(51) + bonus
            if (adversaire.nombrePoints < 0) {
              adversaire.nombrePoints = 0
            }
            adversaire.affichePoints()
            ++this.tour
          }        
    }
    identite() {
        return `${this.nom} ${this.prenom}`
    }
    affichePoints() {
        console.log(`${this.identite()} possède ${this.nombrePoints} points`)
    }

}

Joueur.prototype.superAttaque = function(adversaire) {
    this.attaque(adversaire, 10)
}

let joueur1 = new Joueur("THOMAS", "Ophélie")
let joueur2 = new Joueur("KOPEC", "Nicolas")
let joueur3 = new Joueur("ABBEY", "Alex")
let partie1 = new Partie([joueur1, joueur2, joueur3], 5)


//Déroulement de la partie
for (let tour = 0; tour < partie1.tour; tour++) {
    joueur1.attaque(joueur3)
    joueur1.superAttaque(joueur2)
    
    joueur2.attaque(joueur1)
    joueur2.superAttaque(joueur3)
    
    joueur3.attaque(joueur2)
    joueur3.superAttaque(joueur1)
  }
  
  joueur1.affichePoints()
  joueur2.affichePoints()
  joueur3.affichePoints()
  
  partie1.vainqueur()

  