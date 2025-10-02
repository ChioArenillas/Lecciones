/*
FUNCIONES O MÉTODOS


*/

    /* *HOSTING: este concepto hace referencia a que la función puede estar descrita en cualquier parte del archivo,
    que siempre que se la llame a la función se ejecutará aunque no esté justo después de la declaración. */
        miFuncion(4, 5);


//FUNCIONES O MÉTODOS
    //Declaración de la función
    function miFuncion(a, b){
        return a + b;
    }

    //Llamada a la función
    let resultado = miFuncion(2, 3);
    console.log(resultado);

    //Función de tipo EXPRESIÓN
    let sumar = function (a, b) {return a + b};

    resultado = sumar(1,2);
    console.log(resultado);

    //Función SELF INVOKING (este tipo se ejecutan una sola vez)
    (function (a, b){
        console.log("Ejecutando la función:" + (a + b));
    })(3, 4);

    //Función como OBJETO (las funciones pueden ser descritas como Objeto)
    console.log(typeof miFuncion); //Función como valor Function

    //como cambiarla a objeto:
    var miFuncionTexto = miFuncion.toString();
    console.log(miFuncionTexto);




