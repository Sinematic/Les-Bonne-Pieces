const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();

const sectionFiches = document.querySelector(".fiches");

for (let i = 0; i < (pieces.length); i++) {
    const pieceElement = document.createElement("article");
    const imageElement = document.createElement("img");
    imageElement.src = pieces[i].image;
    const nomElement = document.createElement("h2");
    nomElement.innerText = pieces[i].nom;
    const prixElement = document.createElement("p");
    prixElement.innerText = `Prix : ${pieces[i].prix} (${pieces[i].prix < 35 ? "€" : "€€€"})`;
    const categorieElement = document.createElement("p");
    categorieElement.innerText = pieces[i].categorie ?? "(aucune catégorie)";
    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = pieces[i].description ?? "Pas de description pour le moment.";
    const disponibiliteElement = document.createElement("p");
    disponibiliteElement.innerText = pieces[i].disponibilite ? "En stock" : "Rupture de stock";
    pieceElement.appendChild(imageElement);
    pieceElement.appendChild(nomElement);
    pieceElement.appendChild(prixElement);
    pieceElement.appendChild(categorieElement);
    pieceElement.appendChild(descriptionElement);
    pieceElement.appendChild(disponibiliteElement);
    sectionFiches.appendChild(pieceElement);
}

const boutonTrier = document.querySelector('.btn-trier'); /* Tri par pri croissant */

boutonTrier.addEventListener("click", function() {

    const piecesOrdonnees = Array.from(pieces);

    piecesOrdonnees.sort(function(a,b) {
        return a.prix - b.prix;
    });

    console.log(piecesOrdonnees);
});

const boutonFiltrer = document.querySelector('.btn-filtrer'); /* Tri des éléments non abordables */

boutonFiltrer.addEventListener("click", function() {

    const piecesFiltrees = pieces.filter(function(piece) {
        return piece.prix <= 35;
    });

    console.log(piecesFiltrees);
});

const boutonDescription = document.querySelector('.btn-nodesc'); /* Tri des éléments ne possédant pas une description */

boutonDescription.addEventListener("click", function() {

    const piecesFiltrees = pieces.filter(function(piece) {
        return piece.description;
    });

    console.log(piecesFiltrees);
});

const boutonDecroissant = document.querySelector('.btn-decroissant'); /* Tri par pri décroissant */

boutonDecroissant.addEventListener("click", function() {

    const piecesOrdonnees = Array.from(pieces);

    piecesOrdonnees.sort(function(a,b) {
        return b.prix - a.prix;
    });

    console.log(piecesOrdonnees);
});

const boutonMap = document.querySelector('.btn-map'); /* Tri pour ne récupérer que les noms des pièces*/

boutonMap.addEventListener("click", function() {
    const nomsPieces = pieces.map(piece => piece.nom);
    console.log(nomsPieces);
});

const boutonMapTri = document.querySelector('.btn-mapTri'); /* Affichage des noms des pièces abordables */

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

const elementsDisponibles = pieces.map(piece => piece.nom, piece => piece.description);
console.log(elementsDisponibles);
