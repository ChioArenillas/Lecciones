console.clear();

/* EJERCICIO.  SESIÓN 26
Crea un elemento de formulario input de tipo texto y escucha todos
los elementos de pulsación de tecla sólo cuando dicho elemento esté en foco. 

Cuando se escriba texto en dicho elemento se deberá actualizar el contenido 
de otroelemento tipo div (inicialmente sin contenido)con el contenido del input. 
Al perder el foco el input se debe dejar de escuchar los eventos de 
pulsación de teclas y borrar el contenido del div. */



/* EJERCICIO  SESIÓN 26
Crea un elemento de formulario select con Javascript y añadelo al DOM. Dicho
elemento select debe mostrar las categorías de las películas de la constante ‘movies-categories’.

Añade un listener para escuchar un evento que nos permita saber cuando el usuario a
seleccionado una de las categorías y muestra en otro elemento del DOM el nombre de la
categoría (primera letra en mayúscula, el resto en minúscula). 

A continuación muestra en el DOM con una lista desordenada el título de las películas en esa categoría.

Sugerencia: practica lo que has aprendido en el módulo anterior y dale una apariencia correcta
usando CSS. */




/* EJERCICIO  SEISÓN 27
Escribe una función closure que encierre:
● Un array de películas, inicialmente vacío.
● Una función que, pasándole como argumentos, un string con la acción que queremos hacer
y, si hace falta, un objeto película, permita:
○ añadir la película si la acción es ‘setMovie’. Hay que pasarle una película.
○ devolver todas las películas si la acción es ‘getMovies’. */

 /*    
    const movies = [];
    console.log(movies);

    function setMovie(movie){
        return movie
    }
    function sgetMovie(movie){
        return movies
    }
 */
 

/* EJERCICIO SESIÓN 27 *COMPLETADO
Termina de crear la clase Movie del ejemplo anterior:
● Añadiendo alguna propiedad de clase.
● Todos las propiedades que hemos visto en los objetos películas.
● Métodos de instancia para:
    ○ calcular si una película tiene una calificación alta.
    ○ determinar si una película es un clásico (anterior a 1980).
    ○ devolver una cadena con los datos más relevantes (título, año y categoría). */


class Movie { //añades las variables de la clase
    title;
    director;
    actors;
    rating;
    year;
    category;

    constructor(title, director, actors, rating, year, category){
        this.title = title;
        this.director = director;
        this.actors = actors;
        this.rating = rating;
        this.year = year;
        this.category = category;
    }
    isHigRated() { //calcular si una película tiene una calificación alta.
        return this.rating > 8;
    }
    isClassic() { //determinar si una película es un clásico (anterior a 1980)
        return this.year < 1980;
    }
    datosRelevantes(){ //devolver una cadena con los datos más relevantes (título, año y categoría).
        return this.title + " " + this.year + " " + this.category;
    }
}

//Crear nuevas instancias
const movie1 = new Movie("forest Gump", "Jhon Doe", "Tom Hanks", 8.5, 1977, "Drama"); //añadir los parámetros de la instancia
console.log(movie1.title);
console.log(movie1.isHigRated());
console.log(movie1.datosRelevantes());
console.log(movie1.isClassic());

const movie2 = new Movie("Barbie", "XXX", "YYY", 9, 2022, "Comedy");
console.log(movie2.director);
console.log(movie1.isHigRated());
console.log(movie1.datosRelevantes());
console.log(movie1.isClassic());


/* EJERCICIO SESIÓN 28
Utiliza los métodos para generar eventos de tiempos y ejecutar codigo despues de un retraso o
a cierto intervalo:
● Usa setTimeout para mostrar un mensaje en pantalla con un retraso de 2 segundos.
● Usa setInterval and clearInterval para cambiar el color de fondo de un cuadrado cada
segundo. Elimina el evento/intervalo despues de que cambie de color 20 veces.
● Utiliza setInterval para crear un efecto debounce de 500 ms al leer el texto de un input. */





/* EJERCICIO SESIÓN 29
Crea una promesa que, después de 1 segundo, calcule un número aleatorio y que se cumpla
si el número es par devolviendo el número y que sea rechazada si el número es impar.
Utiliza la promesa (then/catch/finally) para mostrar un log en consola si se cumple con el
número y un error en consola si es rechazada.
Prueba ahora a utilizar tu nueva promesa con una función async/await.
*/