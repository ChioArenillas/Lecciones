

/* SESIÓN 29 CREAR PROMESA */

const myPromise = new Promise((resolve) => { //creando la nueva promesa
    setTimeout(() => resolve("Hello world"), 3000); //a los 3 seg manda 'hello world' a la consola
});
myPromise.then(console.log); //Aquí se le llama para ejecutarse

/* FUNCIÓN QUE CREA UN NUM ALEATORIO HASTA EL 100 CADA SEGUNDO Y SI ES >90 TE MANDA UN MENSAJE DE CUMPLIDO, SI NO LO ES, 
DESPUÉS DE 5 INTENTOS MANDA MENSAJE DE NO CUMPLIDO */

const button = document.querySelector('button');
button.addEventListener('click', () => {
    console.clear();
    randomNums().then(console.log).catch(console.error);
}); //creas un botón que cada vez que haces click, limpia la consola y pone a run la función randomNum

//Otra forma de escribir lo de arriba:
/* 
const button = document.querySelector('button');
button.addEventListener('click', onClickStart);

async function onClickStart(){
    console.clear();
    const result = await randomNums();
    console.log(result);
    }
*/


function randomNums(){
    return new Promise((resolve, reject) => { //llamada a la función para que se ejecute
        let count = 1; //cuenta de las veces que se ejecuta
        const max = 90; //buscamos un num mayor que 90

        const id = setInterval(() => {
            const rand = Math.floor(Math.random() * 100); //busca un num random hasta el 100
            console.log(count, rand); // la consola muestra las veces que se ejecuta y el número por cada vez

            if (rand > max) {
                resolve('Num found ${rand}');
                clearInterval(id); //si el num random que saca es mayor que 90 aparece el mensaje de resolución y se limpia
            } else if (count >= 5){
                reject ('Number higher than ${max} not found.'); //si después de 5 intentos, el num random que saca no es mayor que 90, aparece el mensaje de reject y se limpia
                clearInterval(id);
            } else{
                count ++; //si no pasa ninguna de esas dos, la cuenta se incrementa
            }
        }, 1000); //esto pasa cada segundo
    });
}



/* EJERCICIO SESIÓN 29
Crea una promesa que, después de 1 segundo, calcule un número aleatorio y que se cumpla
si el número es par devolviendo el número y que sea rechazada si el número es impar.
Utiliza la promesa (then/catch/finally) para mostrar un log en consola si se cumple con el
número y un error en consola si es rechazada.
Prueba ahora a utilizar tu nueva promesa con una función async/await.
*/
