/*primera entrega*/

alert("Primer desafio a entregar")
for(i = prompt("Ingrese un numero para cuenta atras:"); i>=0 ;i--){
    if (i>=1){
        alert(i)
    } else {
        alert("Cuentra atrás terminada")
    }    
};

pesoTotal = (a,b,c,d) => (a+b+c+d);

alert("Ingrese pesos para calcular el total:")
let pesoA = parseInt(prompt("Peso persona A"))
let pesoB = parseInt(prompt("Peso persona B"))
let pesoC = parseInt(prompt("Peso persona C"))
let pesoD = parseInt(prompt("Peso persona D"))

let pesosTotales = pesoTotal(pesoA, pesoB, pesoC, pesoD).toString()

alert("Entre todas las personas se suman "+pesosTotales)