/*  
OPERADORES:
    BÁSICOS (+ - * / % **)
   INCREMENTO 
        ++PreIncremento 
        PostIncremento++
   DECREMENTO 
        --PreDecremento  
        PostDecremento--
    *PRECEDENCIA
   ASIGNACIÓN (+=  -=  *=  /=  %=  **=)
   COMPARACIÓN (True / False)
        Igualdad (==  ===)
        Diferencia (!= !==)
    RELACIONALES
        Menor o Igual (< <=)
        Mayor o Igual (> >=)
    LÓGICOS
        AND (&&)
        OR (||)
    TERNARIO (?)
    * STRING A NUMBER
    IsNan
*/


let a = 3, b = 2;

//OPERACIONES BÁSICAS
    let z = a + b;
    console.log("Resultado de la suma: " + z );

    z = a - b;
    console.log("Resultado de la resta: " + z );

    z = a * b;
    console.log("Resultado de la multiplicacion: " + z );

    z = a / b;
    console.log("Resultado de la division: " + z );

    z = a % b; // residuo= cantidad del número que te sobra para llegar al siguiente, cuándo no es exacto
    console.log("Resultado de residuo: " + z );

    z = a ** b; // elevado a 
    console.log("Resultado de operador exponente: " + z );


//INCREMENTO
    // Pre-incremento (el operador ++ antes de la variable, se incrementa en el momento)
        z = ++a;
        console.log(a);
        console.log(z);

    //Post-incremento (el operador ++ despues de la variable) (se incrementa no en el momento en que lo usas, sino la siguiente vez que se usa esa variable, la prox vez que se use estará incrementada)
        z = b++;
        console.log(b);
        console.log(z);

//DECREMENTO
    //Predecremento
        z = --a;
        console.log(a);
        console.log(z);

    //Postdecremento
        z = b--
        console.log(b);
        console.log(z);


//PRECEDENCIA DE OPERADORES
    let c = 1, d = 4;

    let x = a * b + c / d; //primero se hace la multiplicación, luego la división y luego la suma
    console.log(x);

    x = c + a * b / d; // primero la multipl, luego divis, último suma
    console.log(x);

    x = ++c + d--; // primero se aumenta C, luego se suma D (no se decrementa D todavía)
    console.log(c);
    console.log(d);
        // aquí ya se decrementa D porque se ha usado de nuevo D
    console.log(x);


//OPERADORES DE ASIGNACIÓN (+=  -=  *=  /=  %=  **=)
    a += 3; //a = a + 3
    console.log(a);


//OPERADORES DE COMPARACIÓN (true/false)
    let e = 3, f = 2, g = "3";

    //Igualdad
        let h = (e == g); // revisa el valor, sin importar el tipo de variable
        console.log(h);

        h = e === g; // revisa los valores, pero también el tipo de variable
        console.log(h);

    //Diferencia
        let i = (e != g); // revisa el valor, sin importar el tipo de variable
        console.log(i);

        i = e !== g; // revisa los valores, pero también el tipo de variable
        console.log(i);

            //EJEMPLO: PAR O IMPAR CON IGUALADOR Y RESIDUO
                //Even
                    let m = 10;

                    if( m % 2 == 0){ //el residuo es 0? al hacer la división da el resultado exacto
                        console.log("Es un numero par");
                    }
                    else{
                        console.log("Es un numero impar");
                    }

                //Odd
                    let n = 9;

                    if( n % 2 == 0){ //el residuo es 0? al hacer la división da el resultado exacto
                        console.log("Es un numero par");
                    }
                    else{
                        console.log("Es un numero impar");
                    }


//OPERADORES RELACIONALES
    //menor o igual
        let j = e < f;
        console.log(j);

        j = e <= f;
        console.log(j);

    //mayor o igual
        j = e > g;
        console.log(j);

        j = e >= g;
        console.log(j);

        // EJEMPLO: MAYOR DE EDAD
            let edad = 20, adulto = 18; // si cambias el valor de edad a menos de 18 te saldrá que es menor de edad

            if ( edad >= adulto){
                console.log("Es un adulto");
            }
            else{
                console.log("Es menor de edad");
            }


//OPERADORES LÓGICOS

    //AND && (comprueba varias expresiones, se tienen que cumplir todas para que sea TRUE)
        let l = 5;
        let valMin = 0, valMax = 10;

        if( l >= valMin && l <= valMax){
            console.log("Dentro de rango ");
        }
        else{
            console.log("Fuera de rango");
        }

    //OR  || (comprueba varias expresiones, se tiene que cumplir al menos una para que sea TRUE, no hace falta que se cumplan todas)
        let vacaciones = true, diaDescanso = false; //si uno o los dos son TRUE se cumple, si los dos son FALSE no se cumple

        if( vacaciones || diaDescanso){
            console.log("Padre puede asistir al juego del hijo");
        }
        else{
            console.log("El padre está ocupado y no puede asistir al juego del hijo");
        }

//OPERADOR TERNARIO (en vez de usar if/else)
    let resultado = (1>2) ? "true" : "false";
    console.log(resultado);

    let numero = 9;
    resultado = ( numero % 2 == 0 ) ? "even" : "odd";
    console.log(resultado);

//STRING A NUMBER
    let miNumeroA = "10" //al ponerlo entre "" el numero es una variable string y no number

    //console.log(typeof miNumero); (Aquí saldría STRING)

    let edadA = Number(miNumeroA);
    //console.log(typeof edad); (Aquí lo hemos cambiado a NUMBER) (Edad es un NUMBER pero miNumero es STRING)
    if(edadA >= 18){
        console.log("Puede votar");
    }
    else{
        console.log("No puede votar");
    }

    //lo mismo pero con operador ternario
    votar = (edadA >= 18) ? "Puede votar" : "No puede votar";
    console.log(votar);

//IS A NUMBER? isNan (no es un Numero)
    let miNumeroB = "10x" 
    let edadB = Number(miNumeroB);
    console.log( edadB );

    if( isNaN(edadB)){
        console.log("No es un numero");
    }
    else{
        if(edadB >= 18){
            console.log("Puede votar");
        }
        else{
            console.log("No puede votar");
        }
        }

    //lo mismo pero con operador ternario
    if( isNaN(edadB)){
        console.log("No es un numero");
    }
    else{
        let votar = (edadB >= 18) ? "Puede votar" : "No puede votar";
        console.log(votar);
    }
