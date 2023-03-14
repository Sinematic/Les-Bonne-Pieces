const reponse = await fetch('pieces-autos.json');
const pieces = await reponse.json();
/*
const article = pieces[0];

const imageElement = document.createElement("img");
imageElement.src = article.image;
const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;
const prixElement = document.createElement("p");
prixElement.innerText = `Prix : ${article.prix} (${article.prix < 35 ? "€" : "€€€"})`;
const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie ?? "(aucune catégorie)";
const descriptionElement = document.createElement("p");
descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";
const disponibiliteElement = document.createElement("p");
disponibiliteElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";

let fiches = document.querySelector(".fiches");
fiches.appendChild(imageElement);
fiches.appendChild(nomElement);
fiches.appendChild(prixElement);
fiches.appendChild(categorieElement);
fiches.appendChild(descriptionElement);
fiches.appendChild(disponibiliteElement);
*/

let fiches = document.querySelector(".fiches");

for (let i = 0; i < (pieces.length); i++) {
    let div = document.createElement("div");
    let imageElement = document.createElement("img");
    imageElement.src = pieces[i].image;
    let nomElement = document.createElement("h2");
    nomElement.innerText = pieces[i].nom;
    let prixElement = document.createElement("p");
    prixElement.innerText = `Prix : ${pieces[i].prix} (${pieces[i].prix < 35 ? "€" : "€€€"})`;
    let categorieElement = document.createElement("p");
    categorieElement.innerText = pieces[i].categorie ?? "(aucune catégorie)";
    let descriptionElement = document.createElement("p");
    descriptionElement.innerText = pieces[i].description ?? "Pas de description pour le moment.";
    const disponibiliteElement = document.createElement("p");
    disponibiliteElement.innerText = pieces[i].disponibilite ? "En stock" : "Rupture de stock";
    div.appendChild(imageElement);
    div.appendChild(nomElement);
    div.appendChild(prixElement);
    div.appendChild(categorieElement);
    div.appendChild(descriptionElement);
    div.appendChild(disponibiliteElement);
    fiches.appendChild(div);
}


