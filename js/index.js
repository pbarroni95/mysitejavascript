/**
 * tipos de datos: string, number, boolean
 * casos especialies: undefined (mp es definido intencionalmente),
 * null (le decimos que el valor es nulo, lo hacemos a proposito),
 * nan (not a number, si quiero hacer una cuenta 5x5 todo bien, pero si hago 5xj no se puede, es una letra)
const → es una constante, no se puede cambiar el valor
var → es una variable, se puede cambiar el valor


let→ existe la variable pero no tiene un valor (la variable estga declarada pero no inicializada) 
const → se tiene que declarar e inicializar en el mismo momento, let no. 

**/
/*let numero1 = 1
let numero = 2
o se puede escribir tmb asi:
let numero1 = 1, numero = 2*/

/*let nombre = prompt("dime tu nombre")
alert("hola" + nombre)

/*
variables de asignación x=y / x+=y */ 
/*let numero = 10;
numero += 5
document.write(numero)

let numero = 10;
numero %= 5 (lo que te muestra es solo el resto que te sobra de la division, divide los enteros y lo q sobra es lo q muestra)
document.write(numero)
*/


/* operadores aritmeticos 
suma +  (vale 1)
resta --  (vale 2)
division /  (vale 1)
elevar al **  (vale 52)
increment ++  (vale 2)
multiplicacion * (vale 1)
remainder % (vale 1)
subtraction - (vale 1)


/*primera entrega*/

/*alert("Primer desafio a entregar")
for (i = prompt("Ingrese un numero para cuenta atras:"); i >= 0; i--) {
    if (i >= 1) {
        alert(i)
    } else {
        alert("Cuentra atrás terminada")
    }
};*/

/*defino funcion suma*/ 
const pesoTotal = (a, b, c, d) => (a + b + c + d);

/*defino variables*/
alert("Ingrese peso en kg para calcular el total:")
let pesoA = parseInt(prompt("Peso persona A"))
let pesoB = parseInt(prompt("Peso persona B"))
let pesoC = parseInt(prompt("Peso persona C"))
let pesoD = parseInt(prompt("Peso persona D"))

/*cambio el formato*/
let pesosTotales = pesoTotal(pesoA, pesoB, pesoC, pesoD).toString()

/*imprimo*/
alert("Entre todas las personas se suman " + pesosTotales) /* esto es concatenar*/

/*defino funcion promedio*/
const pesoProm = (a, b, c, d) => ((a+b+c+d)/4)

/*cambio el formato*/
let pesosPromedios = pesoProm(pesoA, pesoB, pesoC, pesoD).toString()
/*imprimo*/
alert("El peso promedio de las cuatro personas es " + pesosPromedios)