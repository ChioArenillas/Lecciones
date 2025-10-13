console.clear();

/* EJERCICIO SESIÓN 28
Utiliza los métodos para generar eventos de tiempos y ejecutar codigo despues de un retraso o
a cierto intervalo:
● Usa setTimeout para mostrar un mensaje en pantalla con un retraso de 2 segundos.
● Utiliza setInterval para crear un efecto debounce de 500 ms al leer el texto de un input. */

/* Usa setInterval and clearInterval para cambiar el color de fondo de un cuadrado cada
segundo. Elimina el evento/intervalo despues de que cambie de color 20 veces. (faltaría que pare a los 20veces):
 */


const elem = document.querySelector('.box');
let count = 0;

function changeColor(){
    const colorNum = count % 3;

    switch (colorNum){
        case 0: 
        elem.className = "box red"; 
        break;
        case 1: 
        elem.className = "box blue"; 
        break;
        case 2: 
        elem.className = "box green"; 
        break;
    }
    count++;
}
setInterval(changeColor, 2000);


