const pieces = await fetch("pieces-autos.json").then(pieces => pieces.json());

const sectionFiches = document.querySelector(".fiches");

function genererPieces(pieces) {

    sectionFiches.innerHTML = "";

    for(let i = 0; i <pieces.length; i++) {

        const pieceElement = document.createElement("article");

        const imageElement = document.createElement("img");
        imageElement.src = pieces[i].image;
        pieceElement.appendChild(imageElement);

        const nomElement = document.createElement("h2");
        nomElement.innerText = pieces[i].nom;
        pieceElement.appendChild(nomElement);

        const prixElement = document.createElement("p");
        prixElement.innerText = `Prix : ${pieces[i].prix} (${pieces[i].prix < 35 ? "€" : "€€€"})`;
        pieceElement.appendChild(prixElement);

        const categorieElement = document.createElement("p");
        categorieElement.innerText = pieces[i].categorie ?? "(aucune catégorie)";
        pieceElement.appendChild(categorieElement);

        const descriptionElement = document.createElement("p");
        descriptionElement.innerText = pieces[i].description ?? "Pas de description pour le moment.";
        pieceElement.appendChild(descriptionElement);

        const disponibiliteElement = document.createElement("p");
        disponibiliteElement.innerText = pieces[i].disponibilite ? "En stock" : "Rupture de stock";
        pieceElement.appendChild(disponibiliteElement);
        
        sectionFiches.appendChild(pieceElement);
    }
}

const boutonTrier = document.querySelector('.btn-trier'); /* Tri par pri croissant */

boutonTrier.addEventListener("click", function() {

    const piecesOrdonnees = Array.from(pieces);

    piecesOrdonnees.sort(function(a,b) {
        return a.prix - b.prix;
    });

    genererPieces(piecesOrdonnees);
});


const boutonFiltrer = document.querySelector('.btn-filtrer'); /* Tri des éléments non abordables */

boutonFiltrer.addEventListener("click", function() {

    const piecesFiltrees = pieces.filter(function(piece) {
        return piece.prix <= 35;
    });

    sectionFiches.innerHTML = "";
    genererPieces(piecesFiltrees);
});


const boutonDescription = document.querySelector('.btn-nodesc'); /* Tri des éléments ne possédant pas une description */

boutonDescription.addEventListener("click", function() {

    const piecesFiltrees = pieces.filter(function(piece) {
        return piece.description;
    });

    sectionFiches.innerHTML = "";
    genererPieces(piecesFiltrees);
});


const boutonDecroissant = document.querySelector('.btn-decroissant'); /* Tri par pri décroissant */

boutonDecroissant.addEventListener("click", function() {

    const piecesOrdonnees = Array.from(pieces);

    piecesOrdonnees.sort(function(a,b) {
        return b.prix - a.prix;
    });

    sectionFiches.innerHTML = "";
    genererPieces(piecesOrdonnees);
});


const boutonMap = document.querySelector('.btn-map'); /* Tri pour ne récupérer que les noms des pièces*/

boutonMap.addEventListener("click", function() {
    const nomsPieces = pieces.map(piece => piece.nom);
    console.log(nomsPieces);
});


const boutonMapTri = document.querySelector('.btn-abordable'); /* Affichage des noms des pièces abordables */

const abordables = document.querySelector(".abordables"); 
abordables.style.display = "none";

boutonMapTri.addEventListener("click", function() {
    
    const noms = pieces.map(piece => piece.nom);

    for(let i = pieces.length - 1; i >= 0; i--) {
        if(pieces[i].prix >= 35) {
            noms.splice(i, 1);
        }
    }

    const elementsAbordables = document.createElement("ul");

    for(let i = 0; i < noms.length; i++) {
        const elements = document.createElement("li");
        elements.innerText = noms[i];
        elementsAbordables.appendChild(elements);
    }

    abordables.appendChild(elementsAbordables);
    abordables.style.display = "inline-block";
    console.log(noms);
});


const boutonDisponible = document.querySelector(".btn-disponible");
const disponibles = document.querySelector(".disponibles"); 
disponibles.style.display = "none";

boutonDisponible.addEventListener("click", function() {

    const nomsDisponibles = pieces.map(piece => piece.nom);
    const prixDisponibles = pieces.map(piece => piece.prix);

    for (let i = pieces.length - 1; i >= 0; i--) {

        if (pieces[i].disponibilite === false) {
            nomsDisponibles.splice(i, 1);
            prixDisponibles.splice(i, 1);
        }    
    }

    const elementsDisponibles = document.createElement("ul");

    for(let i = 0; i < nomsDisponibles.length; i++) {
        const elements = document.createElement("li");
        elements.innerText = `${nomsDisponibles[i]} – ${prixDisponibles[i]} €`;
        elementsDisponibles.appendChild(elements);
    }

    disponibles.appendChild(elementsDisponibles);
    disponibles.style.display = "inline-block";
    console.log(nomsDisponibles);
    console.log(prixDisponibles);

});





/*
function genererPieces(pieces) {
    for (let i = 0; i < pieces.length; i++) {
         // Création d’une balise dédiée à une pièce auto
         const pieceElement = document.createElement("article");
         // On crée l’élément img.
         const imageElement = document.createElement("img");
         // On accède à l’indice i de la liste pieces pour configurer la source de l’image.
         imageElement.src = pieces[i].image;
         // On rattache l’image à pieceElement (la balise article)
         pieceElement.appendChild(imageElement);
         // Idem pour le nom, le prix et la catégorie ...
         // ...    
         // On rattache la balise article au body
         document.body.appendChild(pieceElement);
    }
   
  }*/