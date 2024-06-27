/* let numeroSecreto = generarNumeroSecreto();

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario === numeroSecreto);
    return;
}

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
}

asignarTextoElemento("h1", "Juego del número secreto");
asignarTextoElemento("p", "Indica un número del 1 al 10");
 */

/* function saludar(nombre){
    console.log(`Hola, ${nombre}`);
}

saludar("Cynthia"); */

//Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

/* function doble (numero) {
    return numero * 2;
}

let resultado = doble(5);
console.log(resultado); */

//Crear una función que reciba tres números como parámetros y devuelva su promedio.

/* function calcularPromedio (num1, num2, num3) {
    let suma = num1 + num2 + num3;
    let promedio = suma/3;
    return promedio;
}

let promedio = calcularPromedio(4,2,6);
console.log(promedio); */

//Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.

/* function numeroMayor (num1, num2) {
    if (num1 > num2) { 
        return num1;
    } else {
        return num2;
    }
}
let mayor = numeroMayor(23,6);
console.log(`el número mayor es ${mayor}`); */

//Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.

/* function encontrarMayor (a,b) {
    return a > b ? a : b;
}

let numeroMayor = encontrarMayor(15,25);
console.log(numeroMayor);
 */

//Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.

/* function cuadrado (num){
    return num * num;
}
let resultado = cuadrado(12);
console.log(resultado); */

/* let numeroSecreto = 0;
let intentos = 0;
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor");
        } else {
            asignarTextoElemento("p", "El número secreto es mayor");
        }
        intentos++;
        limpiarCaja()
    }
    return;
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
    
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p", "Indica un número del 1 al 10");
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    condicionesIniciales();
    //Generar el número aleatorio
    //Deshabilitar el botón de nuevo juego
    //Inicializar el número de intentos
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();
 */

//Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

/* function indiceCorporal(altura,peso) {
    let imc = peso / (altura * altura);
    return imc;
}
    let peso = 65;
    let altura = 1.56;
    let imc = indiceCorporal(altura,peso);
    console.log(`El IMC es ${imc.toFixed(2)}`); */

//Crea una función que calcule el valor del factorial de un número pasado como parámetro.

/* function calcularFactorial(numero) {
    if (numero < 0) {
        return "El factorial no esta definido para números negativos";
    }
    let factorial = 1;
    for (let i = 1; i<= numero; i++) {
        factorial *= i;
    }
    return factorial;
}
let numero = 5;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es: ${resultado}`); */


//Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.

/* function convertirMoneda(dolares) {
    const cotizacionDolar = 3.60;
    let soles = dolares * cotizacionDolar;
    return soles;
}
    let dolares = 10;
    let soles = convertirMoneda(dolares);
    console.log(`El tipo de cambio de ${dolares} dolares son ${soles} soles`); */

//Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.

/* function salaRectangular (altura,anchura) {
    let area = altura * anchura;
    let perimetro = 2*(altura + anchura);

    console.log(`El área de la sala es ${area} metros cuadrados.`);
    console.log(`El perímetro de la sala es ${perimetro} metros.`);
}

salaRectangular(5,3); */

//Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

/* function salaCircular (radio) {
    const pi = 3.14;
    let area = pi * (radio * radio);
    let perimetro = 2 * pi * radio;

console.log(`El área del circulo es ${area} metros cuadrados.`);
console.log(`El perímetro del circulo es ${perimetro} metros.`);
}

salaCircular(5); */

//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

/* function tablaDeMultiplicar(numero) {
    let resultado = "";

    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}\n`;
    }
    alert(resultado);
}
tablaDeMultiplicar(3); */


/* let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor");
        } else {
            asignarTextoElemento("p", "El número secreto es mayor");
        }
        intentos++;
        limpiarCaja()
    }
    return;
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento ("p", "Ya se sortearon todos los números posibles");
    } else {
    //Si el número generado esta incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    condicionesIniciales();
    //Generar el número aleatorio
    //Deshabilitar el botón de nuevo juego
    //Inicializar el número de intentos
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales(); */


//Crea una lista vacía llamada "listaGenerica".
/* listaGenerica = [];

//Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguajesDeProgramacion = ["JavaScript", "C", "C++", "Kotlin", "Phyton"];


//Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.

lenguajesDeProgramacion.push("Java","Ruby", "GoLang");


//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.

function mostrarLenguajes(){
    console.log(lenguajesDeProgramacion);
    return mostrarLenguajes;
}
mostrarLenguajes();

//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.

function mostrarLenguajesInverso(){
    let listaInversa = lenguajesDeProgramacion.slice().reverse();
        console.log(listaInversa);
}
console.log("Lista inversa");
mostrarLenguajesInverso();
 */
//Crea una función que calcule el promedio de los elementos en una lista de números.

/* function calcularPromedio(lista){
    if(lista.length === 0) {
        return 0;
    }
    let suma = 0;
    for (let numero of lista) {
        suma += numero;
    }
    let promedio = suma / lista.length;
    return promedio;
}

let numeros = [10, 20, 30, 40, 50];
let promedio = calcularPromedio(numeros);
console.log(`el promedio es ${promedio}`);
 */
//Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

/* function mostrarMayorYMenor(lista) {
    if(lista.length === 0) {
        console.log("La lista esta vacía");
        return;
    }
    let mayor = Math.max(...lista);
    let menor = Math.min(...lista);

    console.log(`El número más grande es ${mayor}`);
    console.log(`El número más pequeño es ${menor}`);
}

let numeros = [10,20,30,40,50];
mostrarMayorYMenor(numeros);
 */
//Crea una función que devuelva la suma de todos los elementos en una lista.

/* function calcularSuma(lista) {
    if(lista.length === 0) {
        return;
    }
    let suma = 0;
    for (let numero of lista) {
        suma += numero;
    }
    let sumaTotal = suma;
    return sumaTotal;
}
let numeros = [10, 20, 30, 40, 50];
let sumaTotal = calcularSuma(numeros);
console.log(`la suma es ${sumaTotal}`);
 */
//Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

/* function encontrarPosicion(listaDeNumeros, elemento) {
    return listaDeNumeros.indexOf(elemento);
}

let numeros = [10, 20, 30, 40, 50];
let elemento = 60;
let posicion = encontrarPosicion(numeros, elemento);
console.log("La posición del elemento es:", posicion); */

//Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.

/* function sumarListas(lista1, lista2) {
    // Verifica que las listas tengan el mismo tamaño
    if (lista1.length !== lista2.length) {
        throw new Error("Las listas deben tener el mismo tamaño.");
    }

    let listaSuma = [];
    for (let i = 0; i < lista1.length; i++) {
        listaSuma.push(lista1[i] + lista2[i]);
    }

    return listaSuma;
}

// Ejemplo de uso
let numeros1 = [1, 2, 3, 4, 5];
let numeros2 = [6, 7, 8, 9, 10];

let suma = sumarListas(numeros1, numeros2);
console.log("La lista resultante es:", suma); // Salida: La lista resultante es: [7, 9, 11, 13, 15] */

//Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

/* function cuadrados (lista) {
    let listaCuadrados = [];
    for(let numero of lista) {
        listaCuadrados.push(numero*numero);
    }
    return listaCuadrados;
}
let numeros = [1,2,3,4,5];
let resultados = cuadrados(numeros);
console.log(`la lista de cuadrados es ${resultados}`); */



let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "El número secreto es menor");
        } else {
            asignarTextoElemento("p", "El número secreto es mayor");
        }
        intentos++;
        limpiarCaja()
    }
    return;
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento ("p", "Ya se sortearon todos los números posibles");
    } else {
    //Si el número generado esta incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    condicionesIniciales();
    //Generar el número aleatorio
    //Deshabilitar el botón de nuevo juego
    //Inicializar el número de intentos
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales(); 