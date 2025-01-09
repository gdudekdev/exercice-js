function afficherResultat(resultat,nombreMots){
    return(console.log("Votre score est : "+ resultat +"/"+nombreMots));
};

function choisirPhrasesOuMots(){
    let choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?");
    while (choix !== "mots" && choix !== "phrases") {
        choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?");
    };
    return choix;
};

function lancerBoucleDeJeu(tableauChoisi){
    let score=0;
    for(let i=0;i<tableauChoisi.length;i++){
        let motCourant=prompt("Entrez le mot: " +tableauChoisi[i] );
        if(motCourant===tableauChoisi[i]){
            score++;
        };
    }
    return(score);
};


function lancerJeu(){
    let choix=choisirPhrasesOuMots();
    let score=0;
    let nbMotsProposes=0;

    if(choix==="mots"){
        score = lancerBoucleDeJeu(listeMots);
        nbMotsProposes=listeMots.length;
    }else{
        score = lancerBoucleDeJeu(listePhrases);
        nbMotsProposes=listePhrases.length;
    };
    afficherResultat(score,nbMotsProposes);
}