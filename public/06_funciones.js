/*
FUNCIONES O MÉTODOS
    DECLARACIÓN DE LA FUNCIÓN
    LLAMADA A LA FUNCIÓN

    - EXPRESION FUNCTION
    - SELF INVOKING FUNCTION

    FUNCIÓN COMO OBJETO

    - ARROW FUNCTION

    PARÁMETROS Y ARGUMENTOS
    PASO POR VALOR
    PASO POR REFERENCIA
*/

    /* *HOISTING: este concepto hace referencia a que la función puede estar descrita en cualquier parte del archivo,
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

    //EXPRESION FUNCTION
        let sumar = function (a, b) {return a + b};

        resultado = sumar(1,2);
        console.log(resultado);

    //SELF INVOKING FUNCTION (este tipo se ejecutan una sola vez)
        (function (a, b){
            console.log("Ejecutando la función:" + (a + b));
        })(3, 4);

            //Función como OBJETO (las funciones pueden ser descritas como Objeto)
                console.log(typeof miFuncion); //Función como valor Function

                //como cambiarla a objeto:
                var miFuncionTexto = miFuncion.toString();
                console.log(miFuncionTexto);

    //FUNCTION ARROW es igual que la de Expresión pero se escribe de otra forma
        const sumarFuncionTipoArrow = (a, b) => a + b;
        resultado = sumarFuncionTipoArrow(3, 5);
        console.log(resultado);

        //PARÁMETROS Y ARGUMENTOS
        //PARÁMETROS: elementos que le damos a la función (ej: a, b)
        //ARGUMENTOS: valores que le damos a esos parámetros (ej: 3, 5)(los valores que le designas a esos "a, b")

            sumar = function (a, b){ //estos son los parámetros
                console.log(arguments[0]);
                console.log(arguments[1]);
                return a + b
            };

            resultado = sumar(3, 2); //estos los argumentos
            console.log(resultado);


            //EJEMPLO: SUMA TODOS LOS ARGUMENTOS

                let resultadoB = sumarTodo(5, 4, 13, 10, 9);
                console.log(resultadoB);

                function sumarTodo(){
                    let suma = 0;
                    for(let i = 0; i < arguments.length; i++){
                        suma += arguments[i]; // suma = suma + arguments[i]
                    }
                    return suma;
                }

        //PASO POR VALOR
        
            //Tipos primitivos (no tienen propiedades ni métodos asociados)
            let x = 10;

            function cambiarValor(a){
                a = 20;
            }
        
            cambiarValor(x); //10
            console.log(x);
            console.log(a);

            //primero tienes x=10 y defines a=20, pero luego le mandas a "a" ponerse el valor de "x" por lo que "a" cambia a 10. Una vez cambiado el valor de "a" ya no puede ser =20 por lo que se queda undefined.
        
        //PASO POR REFERENCIA
            const persona = {
                nombre: "Marta",
                apellido: "Sanchez"
            }
            function cambiarValorObjeto(p1){
                p1.nombre = "Celia";
                p1.apellido = "Conde";
            }

            cambiarValorObjeto( persona );
            console.log( persona ); // no se porqué no lo imprime aquí)

            //aquí se crea un objeto en la memoria y se cambia desde ahí