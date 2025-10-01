
/*  
TIPOS DE DATOS:
   STRING 
   NUMBER
   OBJECT
   BOOLEAN
   FUNCTION
   SYMBOL
   CLASS
   UNDEFINED
   NULL
*/

/* 
VAR (ya no se usa para llamar variables, se usa let o const)
LET es para variables que se pueden modificar
CONST es para variables que no admiten cambios 
*/

    let x, y;
    x = 10, y = 20;
    let z = x + y;
    console.log(z);

// STRING
    var nombre = "chio";
    console.log(nombre);

// NUMBER
    var number = 1000
    console.log(number);

// OBJECT
    var object = {
        nombre : "chio",
        apellido : "alvarez",
        telefono : "858903"
    } 
    console.log(object);
    console.log(typeof object)

// BOOLEAN (T, F)
    var bandera = true;
    console.log(bandera);
    console.log(typeof bandera);

// FUNCTION
    function myFunction(){}
    console.log(myFunction);

// SYMBOL 
    var simbolo = Symbol("mi simbolo");
    console.log(simbolo);

// CLASS es una function
    class Persona{
        constructor(nombre, apellido){
            this.nombre = nombre;
            this.apellido = apellido;
        }
    }
    console.log(typeof Persona);

//UNDEFINED 
    var w;
    console.log(w);

//NULL = ausencia de valor (es una var de tipo object)
    var v = null;
    console.log(v);
    console.log(typeof v);
