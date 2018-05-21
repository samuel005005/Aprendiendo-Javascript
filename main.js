/*

var expresionFuncional = function(){
	var variable = 'Mi prueba';
	console.log(variable);
}

expresionFuncional();
//console.log(variable);

test('asdsd');

function test(elemento){
	console.log('Elemento '+elemento);
}

var matriz  = [1,2,3,4,5,6];

//matriz.forEach(test);


(function(){
	console.log('Inmediately Invoked Function Expresion');
	// Inmediately Invoked Function Expresion
var variable = 'Mi prueba';

})();


///Aprende JavaScript esencial #24 - Closures
function function1(){
	var miVariable = 1 ;

	function funcionInterna(){
		console.log(miVariable);
	}
	return funcionInterna;
}


var variableExterna = function1();
variableExterna();


function function2(){
	var miVariable = 2;

	function funcionInterna(){
		console.log(miVariable);
	}
	funcionExterna(funcionInterna);
}


function funcionExterna(funcion){
	funcion();
}

function2();

*/
/*

var Persona = {
	nombre :"SAMUEL",
	apellido :"PAEZ",
	edad : 23,
	color : 'Rojo',
	caminar : function(){
		console.log('Ando caminando pendejo');
	},
	saludar: function(){
		console.log("Hey tu klok tu dice , Me llaman "+this.nombre);

		var func = function(){
			console.log(this.nombre);
		}.bind(this);
		func();

	}
};

	var i = 0;
	var cant = 5500;
	var billetes;

	if(cant%100 !=0){
		console.log("solo se aceptan cantidades multiplos de 100");
	}else{
		if (cant >= 2000) {
			billetes = cant / 2000;
				console.log(" Enviando " + Math.trunc(billetes)
						+ " papeleta de 2000 $");
				cant = cant % 2000;	
		}
		if (cant >= 1000) {
			billetes = cant / 1000;
				console.log(" Enviando " + Math.trunc(billetes)
						+ " papeleta de 1000 $");
				cant = cant % 1000;	
		}
		if (cant >= 500) {
			billetes = cant / 500;
				console.log(" Enviando " + Math.trunc(billetes)
						+ " papeleta de 500 $");
				cant = cant % 500;	
		}
		if (cant >= 200) {
			billetes = cant / 200;
				console.log(" Enviando " + Math.trunc(billetes)
						+ " papeleta de 200 $");
				cant = cant % 200;	
		}
		if (cant >= 100) {
			billetes = cant / 100;
				console.log(" Enviando " + Math.trunc(billetes)
						+ " papeleta de 100 $");
				cant = cant % 100;	
		}
	}

*/
//Object.create
var BF ={
	titulo: "Battlefield",
	genero : "FPS",
	jugar: function(){
		console.log("Estoy jugando a "+this.titulo);
	}
};

var BF1 = Object.create(BF);

BF1["version"] ="Battlefield 1";

//console.log(BF1);

//console.log(BF.isPrototypeOf(BF1));
//console.log(Object.prototype.isPrototypeOf(BF));

//Syntax Sugar for Object Create
var object1 = {};
var object2 = Object.create(Object.prototype);
object2.nombre ="Samuel";
object1.nombre ="Samuel";
//console.log(Object.prototype.isPrototypeOf(object1));
//console.log(Object.prototype.isPrototypeOf(object2));
//console.log(object1);

///New

function Cod(){
	this.titulo = "Call of Duty",
	this.genero = "FPS",
	this.jugar = function(){
		console.log("Estoy jugando a "+this.titulo);
	};
}

var IW = new Cod();
IW.version = "Infinity Word";
console.log(IW);


