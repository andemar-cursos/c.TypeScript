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
/*
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
*/
//---------------CLASE_6-Shapes---------------//
/*
class Persona {
    private edad: number;
    private altura: number;
    private dni: string;

    constructor(edad:number, altura:number, dni:string) {
        this.edad = edad;
        this.altura = altura;
        this.dni = dni;
    }
}

class Alumno extends Persona {
    //Este valor distingue un alumno de una persona.
    private matricula: string;

    constructor(edad: number, altura: number, dni: string, matricula: string) {
        super(edad, altura, dni);
        this.matricula = matricula;
    }
}

let persona: Persona = new Persona(27, 1.69, '1.144');
let alumno: Alumno = new Alumno(27, 1.69, '1.144', '123');

//No todas las personas son alumnos.
alumno = persona;
//Todos los alumnos, son personas.
persona = alumno;
*/
//---------------CLASE_7-Union type--------------//

//Alias con diferentes tipos de valores
type SumaParameter  = string | number;
type sumaReturnType = string | number;

//Funcion que tiene parametros de diferentes tipos, e igual que su retorno.
function Suma(num1: SumaParameter, num2: SumaParameter): sumaReturnType {
    return Number(num1) + Number(num2);
}


interface Interface1 {
    prop1: number;
}

interface Interface2 {
    prop2: number;
}

//Alias con diferentes interfaces
type InterfaceMix = Interface1 | Interface2;

//Objeto que puede contener ninguno o varios atributos de las interfaces
//estipuladas del alias interfaceMix
const interfaceMix: InterfaceMix = {
    prop1: 1,
    prop2: 2
}








//---------------CLASE_---------------//
//---------------CLASE_---------------//
//---------------CLASE_---------------//
//---------------CLASE_---------------//
//---------------CLASE_---------------//
//---------------CLASE_---------------//
//---------------CLASE_---------------//