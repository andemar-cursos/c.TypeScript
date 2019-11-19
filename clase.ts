//Type Inference
let a = 'hola';
a = 'holas';
//Error - Asignacion de num a string
a = 2;

//Expecificar el tipo de variable.
let b: number = 10;
b = a;
b = 20;
b = 10 + 10;
const nume1 = 10;
const nume2 = 20;
b = num1 = num2;

//Se expecifica el tipo de var, por parametros. y el tipo de retorno
//en este caso number.
function suma(num1: number, num2: number): number {
	return num1 + num2;
}

suma(1, 2);
suma(1, 'a');

function sumaJavascriptVanilla(num1, num2) {
	return num1 + num2;
}

//type keyword
type dni = number;
let dniNumber: dni = 123;