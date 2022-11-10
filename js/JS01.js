/*Las variables se pueden declarar con la palabra reservada "var", estas variables se pueden considerar como globales
También se pueden declarar con la palabra reservada "let" y estas serán usadas dentro de un bloque de código
Igualmente está la declaración con la palabra reservada "const" y se usarán cuando el valor no cambie */
console.log("\n************* Variables de puto **************\n");
var numero1 = 4;
let numero2 = 6;
const numero3 = 0;
console.log("Número 1: " + numero1 + " Número 2: " + numero2 + " Número 3: " + numero3);

/*Las cadenas (Strings) son caracteres que pueden ser una frase o palabra y estas pueden darse con comillas dobles "", simples '' o invertidas ``
la diferencia es que con las invertidas podemos agregar variables dentro de la cadena con la sintaxis ${}*/
console.log("\n************* Cadenas **************\n");
var frase1 = "Ejemplo comillas dobles";
let frase2 = 'Ejemplo comillas simples';
var frase3 = `Ejemplo comillas ${frase1} invertidas`;
let frase4 = "Buto el que";
let frase6 = `jaja salu2 jajajandbusaiyfdbqeyih`;
let frase5 = `${frase4} lo lea jeje ${frase6}`;

console.log(frase1 + "\n" + frase2 + "\n" + frase3 + "\n" + frase5);

/* Las condicionales se pueden usar valores como > < = == === != y cada una tiene una funcionalidad de comparación entre elementos */
console.log("\n************* Condicionales boolean**************\n");

console.log(numero1 != numero2);
console.log(numero3 == numero1);
console.log(numero2 === numero1);

/*Los operadores lógicos se utilizan cuando se necesita comparar más de una condicional
El operador && (AND) necesita que todos sus valores sean true para que la salida sea true
El operador || (OR) necesita que solo uno de sus valores sea true para que la salida sea true*/
console.log("\n************* Operador lógico AND **************\n");
console.log(true && true);
console.log(true && true && false && true && false);
console.log((true && false) || true);
console.log(numero1 === numero1 && numero2 < numero3);

console.log("\n************* Operador lógico OR **************\n");  /* el OR manda mas que el AND */
console.log(false || false);
console.log(true || false || true || false || true);
console.log(false && (false || true));
console.log(numero1 === numero1 || numero2 < numero3);


/* Los arreglos son estructuras de datos que nos permiten agrupar datos de un mismo tipo */
console.log("\n************* Arreglos **************\n");
let listaDeNumeros = [2, 3, 5, 7, 11, 234, 255548, 41654, 8520, 52, 85845, 84516];

console.log(listaDeNumeros[5]);
console.log(listaDeNumeros[10]);

listaDeNumeros.push(16);
listaDeNumeros.push(939);

console.log(listaDeNumeros);
console.log(listaDeNumeros.length);

listaDeNumeros.pop();

console.log(listaDeNumeros);
console.log(listaDeNumeros.length);


let listaDePalabras = ["Explorer", "MisionComander", "LaunchX", "Innovaccion"];
console.log(listaDePalabras);
console.log(listaDePalabras.length);

/* Las cadenas (strings) pueden ser tratadas como arreglos */
let palabra = "Explorer";
console.log(palabra[2]);
console.log(palabra.length);


/* Los objetos son estructuras de datos que nos permiten agrupar datos de un diferentes tipos */
console.log("\n************* Objetos **************\n");

let explorer = {
    nombre: "Nombre del Explorer",
    email: "email@innovaccion.mx",
    numReg: 12345,
    mision: "FrontEnd",
    proyectos: ["Abogabot", "Taquería", "Pastelería", "Vacunación"],
    proPer: {
        escolar: "Tareas",
        profesional: "Trabajo",
        personal: "Negocio"
    }
};

console.log(explorer);

console.log(explorer.proPer.escolar);


/* Flujo condicional */
let number1 = 2;
let number2 = 6;
console.log("\n************* if / else **************\n");
if (number1 > number2 && number2 > 5) {
  console.log("El número 1 es mayor que número 2");
}
else if( number1 == number2 || number1 < 3){
  console.log("Los números son iguales");
}
else {
  console.log("El número 2 es mayor que número 1");
}

/* Ciclo condicional */
console.log("\n************* While **************\n");
let numberWhile = 5;
while (numberWhile <= 12) {
  console.log(numberWhile);
  numberWhile = numberWhile + 2;
}
console.log("Aquí ya salió del while " + numberWhile);

/* Ciclo condicional de una iteración mínimo */
console.log("\n************* Do While **************\n");
let numeroDoWhile = 22;
do {
    numeroDoWhile = numeroDoWhile + 2;
    console.log(numeroDoWhile);
} while (numeroDoWhile < 20);
console.log("Aquí sale del Do While " + numeroDoWhile);


/* Ciclo for con iteración controlada */
console.log("\n************* For **************\n");
let numeroFor = 0
for (numeroFor ; numeroFor <= 12; numeroFor = numeroFor + 1) {
  console.log(numeroFor);
}
console.log("Aquí salimos del for " + numeroFor);

/* Ciclo for con iteración controlada el = es igual */
console.log("\n************* For1 **************\n");
let numeroFor1 = 5;
for (numeroFor1 ; numeroFor1 < 12; numeroFor1 = numeroFor1 + 1) {
  console.log(numeroFor1);
}
console.log("Aquí salimos del for " + numeroFor1);

/* Opciones para evitar anidar condicionales */
console.log("\n************* Switch **************\n");
switch (prompt("¿Cómo está el clima?")) {
  case "lluvioso":
    console.log("No te vayas a mojar");
    break;
  case "soleado":
    console.log("Ponte bloqueador");
    break;
  case "nublado":
    console.log("Tapate bien");
    break;
  default:
    console.log("No se como está el clima");
    break;
}
console.log("Aquí salimos del Switch");