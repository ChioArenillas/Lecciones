
/* 
ARRAYS:
    DEFINIR
    MODIFICAR
        PUSH
        LENGTH
    IDENTIFICAR
        typeOf
        isArray
        instanceof
*/

//ARRAYS
    //son listas de elementos

    //DEFINIR ARRAYS
        //let coches = new Array("BMW", "Seat", "Volvo"); //esta forma ya no se usa pero la dejamos aquí para saber que existe

        const coches = ["BMW", "Seat", "Volvo"];
        console.log(coches);

        // cada elemento se identifica con un índice(número) según su posición, empezando con 0. BMW 0, Seat 1, Volvo 2...

        console.log(coches[0]);
        console.log(coches[2]);

        for(let i=0; i < coches.length; i++){
            console.log( coches[i] );
        }
        //también se puede escribir de la siguiente forma para que te marque el índice de cada elemento
        for(let i=0; i < coches.length; i++){
            console.log( i + ":" + coches[i] );
        }

    //MODIFICAR UN ARRAY
        
        //como modificar un elemento que ya se encuentra en la lista
        coches[1] = "Mercedes";
        console.log(coches[1]);

        //como añadir un nuevo elemento a la lista
            //PUSH lo añade al final
            coches.push("Audi");
            console.log(coches);

            //LENGTH
            console.log(coches.length);
            coches[coches.length] = "Ford"

            console.log(coches);

            //lo mismo pero dejando elementos vacíos (no se debe hacer)
            coches[6] = "Seat";
            console.log(coches);

    //IDENTIFICAR UN ARRAY
        
        //TypeOf: si usamos TypeOf solo nos dice que tipo de dato contiene pero no si es un Array
        console.log(typeof coches);

        //isArray
        console.log( Array.isArray(coches));

        //instanceof
        console.log( coches instanceof Array);
