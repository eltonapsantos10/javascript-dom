var lista = ["Laranja", "Maracujá", "Banana", "Pera", "Uva", "Mexerica", "Pêssego"]

lista.push("Ameixa", "Carambola", "Tomate")

var body = document.getElementsByTagName("body");
var ul = document.createElement("ul")

/*var ulNoBody = document.getElementsByTagName("ul") */

body[0].appendChild(ul);
console.log(body[0])

for(var i = 0; i<lista.length; i++){
lista[i];  

var li = document.createElement("li")
var listaNaLi = document.createTextNode(lista[i])
li.appendChild(listaNaLi);

body[0].appendChild(li)
};