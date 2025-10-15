
//Llamadas asíncronas: no siguen el orden de las líneas del documento, pueden saltar a otras líneas anteriores
//En este tipo de funciones no es necesario poner () tras el nombre en la llamada

//Function Callback

    function imprimir(mensaje) {
    console.log(mensaje);
    }
    function sumar(op1, op2, functionCallback) {
    //este nombre "functioncallback" puede ser el nombre que queramos
    let res = op1 + op2;
    functionCallback(`Resultado: ${res}`);
    }
    sumar(5, 3, imprimir); //se llama a las dos funciones una dentro de otra en la misma llamada

//Function setTimeout: hace la llamada a la función en un tiempo determinado que le asignas, no al momento

    function miFuncionCallback(){
        console.log('saludo asíncrono después de 3seg');
    }
    setTimeout(miFuncionCallback, 3000); //3segundos = 3000

    setTimeout( function(){ console.log('saludo desp 4seg')}, 4000); //esta es otra forma de llamar a la función

    setTimeout( () => console.log('saludo desp 5seg'), 5000); //otra forma de llamar con arrow function

//Function setInterval: hace la llamada a la función cada cierto tiempo (intervalo) la sigue haciendo siempre.

    let reloj = () => {
        let fecha = new Date();
        console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
    }
    //setInterval(reloj, 1000); // la llamada al ser intervalo lo hace cada segundo, nunca termina