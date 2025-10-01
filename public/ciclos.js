/* 
CICLOS:
    WHILE
    DO WHILE
    FOR
VOCABULARIO:
    BREAK
    CONTINUE
    LABLES
*/

// WHILE
    //comprueba la condición que se evalúa y realiza la acción hasta que se deje de cumplir

    let contador = 0;

    while( contador < 3 ){
        console.log(contador);
        contador++;
    }
    console.log("fin ciclo while"); //para comprobar que se ha terminado el ciclo

// DO WHILE (no tan común)
    //primero realiza la acción y después comprueba la condición

    let contadorB = 0;

    do{
        console.log(contadorB);
        contadorB++;
    } while (contadorB < 3);
    console.log("fin ciclo do while");

// FOR
    //for( variable; condición que se evalúa; acción ) Si quisiéramos evaluar más variables las añadimos seguidas con "," (contadorC = 0, x = 3...)

    for(let contadorC = 0; contadorC < 3 ; contadorC ++ ){  
        console.log(contadorC);
    } 
    console.log("Fin ciclo for");

//_______________________________________________________________________________________-

//VOCABULARIO

//PALABRA BREAK
    //una vez llega a BREAK termina la secuencia

    //EJ For SIN break (realiza la secuencia todas las veces hasta que se deja de cumplir)
    for(let contadorD = 0; contadorD <= 10; contadorD ++){
        if( contadorD % 2 == 0)
        console.log(contadorD);
    }
    console.log("Fin del ciclo for");

    //EJ For CON break (realiza la secuencia hasta que llega a break)
    for(let contadorD = 0; contadorD <= 10; contadorD ++){
        if( contadorD % 2 == 0){
        console.log(contadorD);
        break;
        }
    }
    console.log("Fin del ciclo for");
   
//PALABRA CONTINUE
    //una vez se llega a CONTINUE se avanza a la siguiente interacción, sin ejecutar la acción

    for(let contadorE = 0; contadorE <= 10; contadorE ++){
        if( contadorE % 2 != 0){
        continue;
        }
        console.log(contadorE);
    }
    console.log("Fin del ciclo for");

//ETIQUETAS (LABLES)
    //no se suele usar, simplemente es para señalar a qué hace referencia y que quede más claro

    inicio:
    for(let contadorD = 0; contadorD <= 10; contadorD ++){
        if( contadorD % 2 == 0){
        console.log(contadorD);
        break inicio;
        }
    }
    console.log("Fin del ciclo for");
