var seuil
var i;

var seuil= prompt("Combien veut tu de case ? Entre 1 et 1000")
  while(seuil > 1000){
    var seuil=prompt("Choisit un nombre entre 1 et 1000")
    }
for (var i = 1; i <= seuil ; i++) {
    document.getElementById('case').innerHTML += "<li>" +i+ "</li>";

}
