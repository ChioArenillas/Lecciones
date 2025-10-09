/* Ejercicio. 
Crea una web en HTML que muestre 4 cuadrados rellenos de color hex. #3b78d7. Usando CSS
centrar los cuadrados horizontal y verticalmente con una separación de 10px.

Una vez esté listo el código CSS elimina los elementos HTML y crea una función que le pasemos el
número de cuadrados y añada todos los elementos HTML necesarios para mostrar el mismo resultado
que antes. Ahora crea las clases necesarias en CSS para que los cuadrados alternen 3 colores
sucesivamente y actualiza tu función para que aplique las clases.

Nota: para definir las clases CSS que va a tener un elemento en Javascript usa la propiedad “className”
de dicho elemento asignándole una cadena de texto con el nombre de las clases. 
*/


//JS:

console.clear();


//Añade un elemento div con nombre de class=container
function addBoxes(numBoxes){
  let container = document.createElement('div');
  container.className = "container"
  
  //por cada numero de caja que exista vete creando un div llamado box
  for (let i = 0; i < numBoxes; i++){
    const box = document.createElement('div');
    box.className = 'box';

    
    //si no tiene residuo lo pones de clase blue, si el residuo es 1 clase green y si no es ninguna red.
    if(i % 3 === 0){
      box.className += ' blue'; //Al añadir una clase hay que dejar un espacio antes
    } else if (i % 3 === 1){
      box.className += ' green';
    } else {
      box.className += ' red';
    }
    container.appendChild(box); //mete las box dentro del container
  }
  
  container.addEventListener("click", clicked); //Añade una escucha en el container para comprobar si se ha hecho click. Lo ponemos al container para que no haya una escucha en cada caja, lo que podría hacer que haya demasiado trabajo para el servidor.
  document.body.appendChild(container); //mete el container en el body
}
addBoxes(8);

//ADDEVENTLISTENER
//Al hacer click la caja cambia a rojo
function clicked(event){
  if (event.type === "click" && this !== event.srcElement){
    event.srcElement.className += " red";
  }
}
    
