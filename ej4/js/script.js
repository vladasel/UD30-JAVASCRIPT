var valores = [true, 5, false, "hola", "adios", 2];

/*El operador de estricta igualdad ( === )
 revisa si dos operandos son iguales 
 y produce un resultado Booleano. 
 A diferencia del operador de igualdad regular (==), 
 el operador de estricta igualdad siempre considera que 
 los operandos de distinto tipo de valor son diferentes y nunca similares.
 */



// separar por tipo de dato
booleans = valores.filter(valor => typeof valor === "boolean")
strings = valores.filter(valor => typeof valor === "string")
numbers = valores.filter(valor => typeof valor === "number")
//1.determoinar cual de los elem de texto es mayor
if (strings[0] > strings[1]) {
    console.log("el elemento mayor es " + strings[0])
} else if (strings[0] < strings[1]) {
    console.log("el elemento maayor es " + strings[1])
} else {
    console.log("los elementos son iguales")
}

//2.utilizando exclusivamnte los 2 valores booleanos del aray, 
// los operadores necesarios para obtener un resultado true y otro false

var verdadero = (booleans[0] != booleans[1]);
var falso = (booleans[0] == booleans[1]);
console.log("operaciones verdadero: " + verdadero + "\noperaciones falso: " + falso);


//3.determinar el resultado de las 5 operaciones matematicas realizadas
//con los dos elem numericos
var a = numbers[0];
var b = numbers[1];
console.log("suma: " + (a + b));
console.log("resta: " + (a - b));
console.log("mult: " + (a * b));
console.log("div: " + (a / b));
console.log("modulo: " + (a % b));
