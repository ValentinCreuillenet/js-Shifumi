// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Shifumi</h1>`;


//Cette fonction s'execute quand on appuie sur le bouton "Jouer!" 
//Elle recupère les valeur selectionées par es joueurs et les compares ensuite
function shifumi(){
  //On recupère les tableaux avec les slections des joueurs
  var select1 = document.getElementById('j1');
  var select2 = document.getElementById('j2');
  //On recupère les index des options selectionées
  var index1 = select1.selectedIndex;
  var index2 = select2.selectedIndex;
  //On affecte le choix des jouerus a des variables
  var j1 = select1[index1].value;
  var j2 = select2[index2].value;

//Et on apelle la fonction qui compare ces résultats
  return compareResults(j1,j2);
}

 // Cette fonctionest utilisée pour comparer les résultats fournis par le HTML
 
function compareResults (result1,result2){

  //Cette varaible sert à stocker notre résultat et plus tard a l'afficher
  var result;

  //On vérifie en premier si il y a une égalité pour reduire le nombre de possibilités
  if (result1==result2){
    result = 'Égalité!';
  }
  
  //Pour les cas ou le joueur 1 a joué pierre
  else if(result1 == 'pierre'){

    //Si le joueur 2 a joué feuille c'est le joueur 2 qui gagne
    if(result2=='feuille'){
      result = 'Joueur 2 gagne!';

    //Si le joueur 2 a joué ciseaux c'est le joueur 1 qui gagne
    }else if (result2=='ciseaux'){
      result = 'Joueur 1 gagne!';
    }
  }

  //Pour les cas ou le joueur 2 a joué feuille
  else if(result1 == 'feuille'){

    //Si le joueur 2 a joué pierre c'est le joueur 1 qui gagne
    if(result2=='pierre'){
      result = 'Joueur 1 gagne!';

    //Si le joueur 2 a joué ciseaux c'est le joueur 2 qui gagne
    }else if (result2=='ciseaux'){
      result = 'Joueur 2 gagne!';
    }
  }

  //Pour les cas ou le joueur 3 a joué ciseaux
  else if(result1 == 'ciseaux'){

    //Si le joueur 2 a joué feuille c'est le joueur 1 qui gagne
    if(result2=='feuille'){
      result = 'Joueur 1 gagne!';

    //Si le joueur 2 a joué pierre c'est le joueur 2 qui gagne
    }else if (result2=='pierre'){
      result = 'Joueur 2 gagne!';
    }
  }
      //On affiche le resultat sur la page
      document.getElementById('resultat').innerHTML = result;
      return result;
}


//On récupère les valeur et on les compare quand on clique sur le bouton "Jouer!"
document.getElementById("jouer").addEventListener("click",(event)=>{
  shifumi()
})