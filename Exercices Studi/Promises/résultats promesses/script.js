// Gérer les callbacks avec .then() : 
// attacher des comportements (callbacks) aux états revolve et reject.

const scrutin = new Promise(function (resolve, reject) {
    // On récupère le % du résultat de l'élection pour le candidat 1    
    var resultat = getResultatDuScrutin("Candidat1"); 
    if(resultat > .50){
        resolve("Candidat 1 est élu");
    } else {
        reject("Candidat 1 a perdu");
    }
}
);

scrutin.then(
(result) => console.log(result),
(error) => console.log(error)
);

/*
Si getResultatDuScrutin("Candidat1") == 0.3
//"Candidat 1 a perdu"
Si getResultatDuScrutin("Candidat1") == 0.6
//"Candidat 1 est élu"
*/


// ***************************************

// Attraper les erreurs avec .catch() : 
// indiquer quel comportement adopter en cas d'erreur
var myPromise = new Promise((resolve, reject) => {
    /*[...]*/
    reject("Une erreur est survenue");
};

myPromise.catch((error) => console.log(error));

//Résultat :
//Une erreur est survenue

// ******************************************

// Exécuter du code systématiquement avec .finally() :
// Il se peut que l'on veuille exécuter du code quel que soit le résultat de la `Promise`, 
// c'est-à-dire qu'elle soit `fulfilled` ou `rejected`.

var myPromise = new Promise((resolve, reject) => {
    if(/*[...]*/)
        resolve("C'est un succès");
    else {
        reject("Une erreur est survenue");
    }
};

myPromise.finally(() => console.log("Toujours executée"));

//Résultat :
//Toujours exécutée


// Exercice : 
Notification.requestPermission().then(function(result) {
    console.log(result);
  });