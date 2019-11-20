//---------------CLASE_3---------------//
/*
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
*/
//---------------CLASE_4---------------//
/*
//------- fdm =========> formaDeMovilidad ------------//
class Transporte {
	private velocidad: number;
	private fdm: string;

	
	constructor(velocidad: number, fdm: string) {
		this.velocidad = velocidad;
		this.fdm = this.fdm;
	}

	setVelocidad(velocidad: number) {
		this.velocidad = velocidad;
	}

	getVelocidad() {
		return this.velocidad;
	}

	setfmd(fdm: string) {
		this.fdm = fdm;
	}

	getfdm() {
		return this.fdm;
	}
}

//Se expecifica de que tipo es el objeto.
const transporte: Transporte = new Transporte(2, 'suelo');

//Herencia de clases
class Auto extends Transporte {
	private cantidadDePuertas: number;

	constructor(velocidad: number, fdm: string, cantidadDePuertas: number) {
		//Ingresar los datos, a las variables padres, mediante su constructor super(x,x)
		super(velocidad, fdm);
		this.cantidadDePuertas = cantidadDePuertas;
	}

	getVelocidad() {
		//Obtener valores de la clase padre, mediante sus funciones.
		return super.getVelocidad();
	}

	setCantidadDePuertas(cantidadDePuertas: number) {
		this.cantidadDePuertas = cantidadDePuertas;
	}

	getCantidadDePuertas() {
		return this.cantidadDePuertas;
	}
}

//Instancia del objeto auto, con 2 param de transporte y uno de auto.
const auto: Auto = new Auto(20, 'suelo', 4);
*/
//---------------CLASE_5---------------//

type Dni = number;

interface Persona {
    //Con ? se indica que es opcional el atributo.
    altura?: number,
    edad: number,
    nombre: string,
    apellido: string
    dni: Dni
}

//Al crear un objeto mediante interface, es obligatorio ingresar los valores
//al momento de crear un objeto de esta.
const persona: Persona = {
    altura: 1.69,
    edad: 27,
    nombre: 'ande',
    apellido: 'mar',
    dni: 1.144
}

























//---------------CLASE_---------------//
//---------------CLASE_---------------//
//---------------CLASE_---------------//
//---------------CLASE_---------------//
//---------------CLASE_---------------//
//---------------CLASE_---------------//
//---------------CLASE_---------------//
//---------------CLASE_---------------//
//---------------CLASE_---------------//