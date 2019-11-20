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
/*
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
*/
//---------------CLASE_8---------------//
/*
interface Interface1 {
    prop1: number;
}

interface Interface2 {
    prop2: number;
    prop3: number;
}

//La propiedad prop2, tambien es usada por Interface, al momento de unir estos
//con el alias, se "combinan" los 'prop2' creando una unica propiedad.
interface Interface3 {
    prop2: number;
}

//Este alias contiene una interseccion entre 2 interfaces
//la cual indica que se debe crear el alias con los atributos
//de las dos interfaces.
type InterfaceMix = Interface1 & Interface2 & Interface3;

const interfaceMix: InterfaceMix = {
    prop1: 1,
    //Esta propiedad es la union de prop2 de Interface 2 y 3.
    prop2: 2,
    prop3: 3
}
*/
//---------------CLASE_9---------------//
/*
type CallBackError = Error | null;
type CallBack = (error: CallBackError, reponse: object) => void;

type SendRequest = (cb: CallBack) => void;

//Funcion
//cb = call back
//function sendRequest(cb: CallBack): void {
//    if (cb) {
//        cb(null, {message: 'All it\'s fine'});
//    }
//}

//Variable con funcion => ArrowFunction
const sendRequest: SendRequest = (cb: CallBack): void => {
    if (cb) {
        cb(null, { message: 'all it\'s fine' });
    }
}
*/
//---------------CLASE_10---------------//
/*
//El target es el 'objeto' en este caso 'Persona' y la key es la
//funcion, en este caso 'sayMyName()'
function log(target, key) {
    console.log(key + 'se ha llamado');
}

class Persona {

    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    //Sale error por que no se han habilitado los decorators.
    @log
    sayMyName() {
        console.log(this.name);
    }

}

//Instancia de persona.
persona: Persona = new Persona('alan');

//Al ejecutar este metodo se escribira 'Alan' por el console.log de sayMyName
//luego dira 'sayMyName se ha llamado, debido a la extencion de la funcion log
//mediante la equiqueta @ dada a 'sayMyName()'
persona.sayMyName(); //'Alan' //'sayMyName se ha llamado'
*/
//---------------CLASE_11---------------//

//Con el decorator, se  ejecuta esta funcion, la cual le
//brinda atributos nombre y apellido, y sobreEscribe la
//funcion sayMyName
function init(target) {
    return class extends target {
        nombre = 'ande';
        apellido = 'mar';

        sayMyName() {
            return `${this.nombre} ${this.apellido}`;
        }
    }
}


//Esta clase es vacia.
@init
class P {
    constructor() {}
    sayMyName() {}
}


//Se hace instancia de P.
const p: P = new P();


console.log(p.sayMyName()); //andemar










































//---------------CLASE_---------------//
//---------------CLASE_---------------//
//---------------CLASE_---------------//