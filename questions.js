/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    return texte.length;
}
var remplaceECar = function (texte) {
    return texte.replace("e", " ");
}
var concatString = function (texte1, texte2) {
    return texte1.concat(texte2);
}
var afficherCar5 = function (texte) {
    return texte.slice(4, 5);
}
var afficher9Car = function (texte) {
    return texte.slice(0, 9);
}
var majusculeString = function (texte) {
    return texte.toUpperCase();
}
var minusculeString = function (texte) {
    return texte.toLowerCase();
}
var SupprEspaceString = function (texte) {
    return texte.trim();
}
var IsString = function (texte) {
    return isNaN(texte);
}
var AfficherExtensionString = function (texte) {
    return texte.slice(-3);
}
// split divise le texte par rapport au séparateur " " dans un tableau
// Pour avoir le nombre d'espace on compte le nombre de mot - 1
var NombreEspaceString = function (texte) {
      return texte.split(" ").length-1;
}
// split pour diviser la chaine lettre par lettre et l'insérer dans un tableau
// reverse pour inverser le tableau
// join pour recoller tout les éléments du tableau
var InverseString = function (texte) {
    return texte.split("").reverse().join("");
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return Math.pow(x, y);
}
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre);
}
var valeurAbsolueArray = function (array) {
     for (var i = 0; i < array.length; i++)
     {
      array[i] = Math.abs(array[i]);
    } return array;
}
var sufaceCercle = function (rayon) {
    return Math.round(Math.PI * rayon * rayon);
}
var hypothenuse = function (ab, ac) {
    return Math.hypot(ab, ac);
}
var calculIMC = function (poids, taille) {
    return Number((poids/(taille*taille)).toPrecision(4));
}
