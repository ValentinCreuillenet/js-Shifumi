// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>Shifumi</h1>`;

//Variables qui stockent les points des joueurs
var score1 = 0;
var score2 = 0;

//Variables qui stockent les manche gagnées par les joueurs
var manche1 = 0;
var manche2 = 0;

//Nombre de points a atteindre pour gagner une manche
var pointsParManche = 3;

//Noùbre de manche a gagner pour remporter la partie
var mancheParPartie = 3;

//Cette fonction s'execute quand on appuie sur le bouton "Jouer!"
//Elle recupère les valeur selectionées par es joueurs et les compares ensuite
function shifumi() {

  //On recupère les tableaux avec les slections des joueurs
  let select1 = document.getElementById("j1");
  let select2 = document.getElementById("j2");

  //On recupère les index des options selectionées
  let index1 = select1.selectedIndex;
  let index2 = select2.selectedIndex;

  //On affecte le choix des jouerus a des variables
  let j1 = select1[index1].value;
  let j2 = select2[index2].value;

  //Et on apelle la fonction qui compare ces résultats
  return compareResults(j1, j2);
}



//Cette fonction s'execute quand on appuie sur le bouton "jouer contre l'ordinateur!"
//Elle récupère la valeur sellectioné par le joueur1  et la compare contre une valeur aléatoire
function shifumiRandom(){

//On réupère la valeur selectioné par le jouer 1
let select1 = document.getElementById("j1").value;

//On génère un nombre aléatoire entre 0 et 2
let randomIndex = Math.floor(Math.random() * 3);
//Et on va chercher la valeur qui correspond ace nombre aléatoire
let randomSelect = document.getElementById("j2")[randomIndex].value;

//On affiche ce que l'ordinateur a choisit
document.getElementById("choix").innerText = "L'ordinateur a choisit " + randomSelect;

return compareResults(select1,randomSelect);
}

// Cette fonctionest utilisée pour comparer les résultats fournis par le HTML

function compareResults(result1, result2) {
  //Cette varaible sert à stocker notre résultat et plus tard a l'afficher
  let result = "";
  let draw = "Égalité!";
  let win1 = "Joueur 1 gagne un point!";
  let win2 = "Joueur 2 gagne un point!";

  //On vérifie en premier si il y a une égalité pour reduire le nombre de possibilités
  if (result1 == result2) {
    result = draw;
  }

  //Pour les cas ou le joueur 1 a joué pierre
  else if (result1 == "pierre") {
    //Si le joueur 2 a joué feuille c'est le joueur 2 qui gagne
    if (result2 == "feuille") {
      result = win2;

      //Si le joueur 2 a joué ciseaux c'est le joueur 1 qui gagne
    } else if (result2 == "ciseaux") {
      result = win1;
    }
  }

  //Pour les cas ou le joueur 2 a joué feuille
  else if (result1 == "feuille") {
    //Si le joueur 2 a joué pierre c'est le joueur 1 qui gagne
    if (result2 == "pierre") {
      result = win1;

      //Si le joueur 2 a joué ciseaux c'est le joueur 2 qui gagne
    } else if (result2 == "ciseaux") {
      result = win2;
    }
  }

  //Pour les cas ou le joueur 3 a joué ciseaux
  else if (result1 == "ciseaux") {
    //Si le joueur 2 a joué feuille c'est le joueur 1 qui gagne
    if (result2 == "feuille") {
      result = win1;

      //Si le joueur 2 a joué pierre c'est le joueur 2 qui gagne
    } else if (result2 == "pierre") {
      result = win2;
    }
  }
  //On affiche le resultat sur la page
  document.getElementById("resultat").innerHTML = result;

  //On vérifie qui a gagné et on apelle la fonction qui met a jour le score en fonction de
  if ((result == win1)) {
    updateScore(1);
  } else if ((result == win2)) {
    updateScore(2);
  }
  return result;
}

//Cette fonction met a jour le score en fonction de qui a gagné
function updateScore(winner) {

  //Si le jouer 1 gagne on incrémante son score
  if (winner === 1) {
    score1++;
  //Si le joueur 2 gagne on incrémante son score
  } else if (winner === 2) {
    score2++;
  }

  //On vérifie si un des deux joueur a assez de points pour lui attribuer une manche
  if (score1==pointsParManche){
    score1=0;
    score2=0;
    manche1++;
    //Si le joueur 1 remporte la manche, on l'affiche
    document.getElementById("resultat").innerHTML = "Le joueur 1 remporte la manche!";

  } else if(score2==pointsParManche){
    score1=0;
    score2=0;
    manche2++;
    //Si le joueur 2 remporte la manche, on l'affiche
    document.getElementById("resultat").innerHTML = "Le joueur 2 remporte la manche!";
  }

  //On vérifie si un des deux joueur a remporter assez de manche pour gagner la partie
  if(manche1==mancheParPartie){
    manche1=0;
    manche2=0;
    //On affiche que le joueur 1 a gagné la partie
    document.getElementById("resultat").innerHTML = "Le joueur 1 remporte la partie!";
  } else if (manche2==mancheParPartie){
    manche1=0;
    manche2=0;
    //On affiche que le joueur 2 a gagné la partie
    document.getElementById("resultat").innerHTML = "Le joueur 2 remporte la partie!";

  }

  //Et ensuite on met a jour le text qui affiche le score
  document.getElementById("score").innerText =
    "Score : " + score1 + "-" + score2;

  document.getElementById("manche").innerText =
    "Manches : " + manche1 + "-" + manche2;
}

//On récupère les valeur et on les compare quand on clique sur le bouton "Jouer!"
document.getElementById("jouer").addEventListener("click", event => {
  shifumi();
})
//On récupère la valeur selectioné par le joueur 1 et génère on valeur aléatoire quand on appuie
//sur le bouton "Jouer contre l'ordinateur!"
document.getElementById("ordinateur").addEventListener("click", event => {
  shifumiRandom();
})

//On met a jour les scores nécessaire pour gagner quand on clique sur le slider correspondant
document.getElementById("scoreRange").addEventListener("click", event => {
  pointsParManche = document.getElementById("scoreRange").value;
  document.getElementById("scoreRangeLabel").innerText = 
  "Nombre de points pour gagner une manche ("+pointsParManche+")";
})
