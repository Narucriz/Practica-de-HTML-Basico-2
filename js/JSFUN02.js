<<<<<<< HEAD
//Encontrar elementos de HTML
//teste001

const titulo = document.getElementById("titulo");
const parrafo = document.getElementsByTagName("p");
//es mejor trabajar con IDs
//const parrafo = document.getElementById("parrf")
const linku = document.getElementsByClassName("linku");

console.log(parrafo);


//Cambiar valores de HTML
titulo.innerHTML = "Test de titulo cambiadoo siiiuuuu";

document.getElementById("demo").innerHTML = "el texto en el parrafiño (index 0) es: " + parrafo[0].innerHTML;

linku[0].href = "https://www.facebook.com"; 
linku[0].target = "_blank";

console.log(linku);

//Cambiar estilos

titulo.style.color = "red";

//Eventos

function cambiarTexto(obj) {
    obj.innerHTML = "Que pendejo si clickeo lol"
}

function mOver(obj) {
    obj.innerHTML = "Yamete kudasaiii"
}

function mOut(obj) {
    obj.innerHTML = "AAAhhhhhh"
}

function mDown(obj) {
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "sueltame";
}

function mUp(obj) {
  obj.style.backgroundColor="#D94A38";
  obj.innerHTML="gracias";
}

//addEventListener

const boton = document.getElementById("boton");
boton.addEventListener("click", alerta)

function alerta() {
    alert("alerta");
=======
//Encontrar elementos de HTML

const titulo = document.getElementById("titulo");
const parrafo = document.getElementsByTagName("p");
//es mejor trabajar con IDs
//const parrafo = document.getElementById("parrf")
const linku = document.getElementsByClassName("linku");

console.log(parrafo);


//Cambiar valores de HTML
titulo.innerHTML = "Test de titulo cambiadoo siiiuuuu";

document.getElementById("demo").innerHTML = "el texto en el parrafiño (index 0) es: " + parrafo[0].innerHTML;

linku[0].href = "https://www.facebook.com"; 
linku[0].target = "_blank";

console.log(linku);

//Cambiar estilos

titulo.style.color = "red";

//Eventos

function cambiarTexto(obj) {
    obj.innerHTML = "Que pendejo si clickeo lol"
}

function mOver(obj) {
    obj.innerHTML = "Yamete kudasaiii"
}

function mOut(obj) {
    obj.innerHTML = "AAAhhhhhh"
}

function mDown(obj) {
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "sueltame";
}

function mUp(obj) {
  obj.style.backgroundColor="#D94A38";
  obj.innerHTML="gracias";
}

//addEventListener

const boton = document.getElementById("boton");
boton.addEventListener("click", alerta)

function alerta() {
    alert("alerta");
>>>>>>> 879a039f90371f9a0891de2e88253cbc384fe6d3
}