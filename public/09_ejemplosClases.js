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


/* CSS:

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 100vh;
}
.box {
  width: 50px;
  height: 50px;
}
.blue{
    background-color: #0000ff;
}
.green{
    background-color: #00ff00;
}
.red{
    background-color: #ff0000;
} */

//JS:

function addBoxes(numBoxes){
  let container = document.createElement('div');
  container.className = "container"
  
  for (let i = 0; i < numBoxes; i++){
    const box = document.createElement('div');
    box.className = 'box';
    
    if(i % 3 === 0){
      box.className += ' blue';
    } else if (i % 3 === 1){
      box.className += ' green';
    } else {
      box.className += ' red';
    }
    container.appendChild(box);
  }
  document.body.appendChild(container);
}
addBoxes(8);
