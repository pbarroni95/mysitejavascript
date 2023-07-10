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


