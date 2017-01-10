var seuil;
var i;

var seuil= prompt("Combien veut tu de case ? Entre 1 et 200")
for (var i = 1; i <= seuil ; i++) {
    document.getElementById('case').innerHTML += "<li>" +i+ "</li>";
}