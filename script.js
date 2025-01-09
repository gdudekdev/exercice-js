// Apprentissage sur les variables

// let totalLivres=500

// totalLivres+=50
// totalLivres-=10
// totalLivres+=5



// let affichageTotalLivres= "Notre bibliothèque contient" + totalLivres +"livres"
// console.log(affichageTotalLivres)

// let monPersonnage = {
//     nom: "Wayne",
//     prenom: "Bruce",
//     age: 35,
//     couleurPreferee: "noir",
//     hobbies: "sortir la nuit"
//     }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Apprentissage sur les objets

// let ticket={
//     nomFilm: "batman",
//     prix:10 ,
//     numeroSalle:1
//   }
//   let nom="Gauthier"
  
//   let texteAffichage="Bonjour "+nom+" votre film "+ ticket.nomFilm+" est en salle "+ticket.prix
//   console.log(texteAffichage)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Apprentissage sur les tableaux 

// let playlist =["Shoca","Show","Odo"]
// let totalMorceaux= playlist.length
// playlist.push("Value")
// playlist.push("Ussewa")
// playlist.pop("Ussewa")

// console.log(playlist)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let listeMots=["Cachalot","Pétunia","Serviette"];
// let score=0;
// let premierMot=prompt("Rentrez le mot contenu dans la première case");

// if (listeMots[0]==premierMot){
//     score+=1;
// }
// console.log(score)

// let secondMot=prompt("Rentrez le mot contenu dans la seconde case");

// if (listeMots[1]==secondMot){
//     score+=1;
// }
// console.log(score)

// let dernierMot=prompt("Rentrez le mot contenu dans la dernière case");

// if (listeMots[2]==dernierMot){
//     score+=1;
// }
// console.log(score)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let listeMots=["Cachalot","Pétunia","Serviette"];
// let score=0;

// for(let i=0;i<3;i++){
//     let motCourant=prompt("Rentrez le mot contenu dans la case n°"+(i+1) );

//     if(motCourant==listeMots[i]){
//         score++;
//     };
//     console.log(score);

// };

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let listeMots=["Cachalot","Pétunia","Serviette"];
let listePhrases=["Pas de panique !", "La vie, l’univers et le reste", "Merci pour le poisson"];
let score=0;

let choixUtilisateur=prompt("Choisissez entre la liste : mots ou phrases")

while (choixUtilisateur!=="mots" && choixUtilisateur!=="phrases"){
    choixUtilisateur=prompt("Choisissez entre la liste : mots ou phrases");
};

if(choixUtilisateur=="mots"){
    for(let i=0;i<listeMots.length;i++){
        let motCourant=prompt("Rentrez le mot: " +listeMots[i] );
        if(motCourant==listeMots[i]){
            score++;
        };
        
    };
    console.log("Votre score est de "+ score+ " sur "+ listeMots.length);
}else{
    for(let i=0;i<listePhrases.length;i++){
        let phraseCourant=prompt("Rentrez la phrase: " +listePhrases[i] );
        if(phraseCourant==listePhrases[i]){
            score++;
        };
    };
    console.log("Votre score est de "+ score+ " sur "+ listePhrases.length);
};

