/* 
SENTENCIAS:
    IF/ELSE
    SWITCH
*/

/* 
 IMPORTANTE! 
    Al usar IF/ELSE la condición solo compara el valor, no del tipo de variable. (Puede ser un String con un Number)
    Al usar SWITCH la condición compara tanto el valor como el tipo de variable. EJ si (let mesB = "7") (String) te saldrá "Valor incorrecto" ya que está comparando un String con un Number y te lo marca como incorrecto.
 */


// IF/ELSE
    let condicion = true;

    if(condicion){
        console.log("condicion verdadera");
    }
    else{
        console.log("condicion falsa");
    }

    //lo mismo pero con la condición directamente en el paréntesis. Además si solo hay una línea de código en los {} se pueden quitar, pero es recomendable siempre ponerlos igualmente.
    if(2>3)
        console.log("condicion verdadera");
    else
        console.log("condicion falsa");

    //Varios ELSE
        let numero = 3;

        if( numero == 1){
            console.log("Número uno");
        }
        else if( numero == 2){ //añadir más ELSE
            console.log("Número dos");
        }
        else if( numero == 3){
            console.log("Número tres");
        }
        else{ //si no coincide con ninguno de los anteriores
            console.log("Número desconocido");
        }


        // EJEMPLO: ESTACIONES DEL AÑO con IF/ELSE
            let mes = 4;
            let estacion;

            if( mes ==1 || mes == 2 || mes == 12){
                estacion = "Invierno";
            }
            else if( mes == 3 || mes == 4 || mes == 5){
                estacion = "Primavera";
            }
            else if( mes == 6 || mes == 7 || mes == 8){
                estacion = "Verano";
            }
            else if( mes == 9 || mes == 10 || mes == 11){
                estacion = "Otoño";
            }
            else{
                estacion = "Valor incorrecto";
            }

            console.log(estacion);

        // EJEMPLO: MENSAJE SEGÚN HORARIO con IF/ELSE
            /* 
                6-11am Buenos días
                12-18pm Buenas tardes
                19-24pm Buenas noches
                0-6am Durmiendo
            */
                let hora = 7;
                let mensaje;

                if( hora >= 6 && hora <= 11){
                    mensaje = "Buenos días";
                }
                else if( hora >= 12 && hora <= 18){
                    mensaje = "Buenas tardes";
                }
                else if( hora >= 19 && hora <= 24){
                    mensaje = "Buenas noches";
                }
                else if( hora >= 0 && hora < 6){
                    mensaje = "Durmiendo";
                }
                else{
                    mensaje = "Valor incorrecto";
                }

                console.log(mensaje);

// SWITCH
    let numeroB = 3;
    let numeroBTexto = "Valor desconocido";

    switch( numeroB ){
        case 1:
            numeroBTexto = "Número uno";
            break; //hace que si se cumple el caso no continúa ejecutando la cadena, si no lo ponemos una vez se cumpla ejecutará el siguiente. EJ: si no ponemos el break tras caso 1, una vez se cumpla seguirá ejecutando hasta que encuentre un break y nos dará el valor antes del break.
        case 2:
            numeroBTexto = "Número dos";
            break;
        case 3:
            numeroBTexto = "Número tres";
            break;
        case 4:
            numeroBTexto = "Número cuatro";
            break;
        default:
            numeroBTexto = "Caso no encontrado";
            break; //al ser el final de la cadena es opcional poner BREAK
    }
    console.log(numeroBTexto);

    // EJEMPLO: ESTACIONES DEL AÑO con SWITCH
        let mesB = 7;
        let estacionB;

        switch( mesB ){
            case 1: case 2: case 12:
                estacionB = "Invierno";
                break; 
            case 3: case 4: case 5:
                estacionB= "Primavera";
                break;
            case 6: case 7: case 8:
                estacionB = "Verano";
                break;
            case 9: case 10: case 11:
                estacionB = "Otoño"
            default:
                estacionB = "Valor incorrecto";
                break; 
        }
        console.log(estacionB);

 
