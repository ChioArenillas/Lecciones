// tipo de dato string
var nombre = "chio";
console.log(nombre);

// dato number
var number = 1000
console.log(number);

//dato object
var object = {
    nombre : "chio",
    apellido : "alvarez",
    telefono : "858903"
} 
console.log(object);
console.log(typeof object)

//dato boolean (T, F)
var bandera = true;
console.log(bandera);
console.log(typeof bandera);

//dato function
function myFunction(){}
console.log(myFunction);

//dato symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo);

//Tipo clase es una function
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona);

//tipo undefined
var w;
console.log(w);

//null = ausencia de valor (es una var de tipo object)
var v = null;
console.log(v);
console.log(typeof v);

//var (ya no se usa para llamar variables, se usa let o const)
//let es para variables que se pueden modificar
//const es para variables que no admiten cambios

let x, y;
x = 10, y = 20;
let z = x + y;
console.log(z);

