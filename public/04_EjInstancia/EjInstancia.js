console.clear();


/* EJERCICIO  SEISÓN 27
Escribe una función closure que encierre:
● Un array de películas, inicialmente vacío.
● Una función que, pasándole como argumentos, un string con la acción que queremos hacer
y, si hace falta, un objeto película, permita:
○ añadir la película si la acción es ‘setMovie’. Hay que pasarle una película.
○ devolver todas las películas si la acción es ‘getMovies’. */

  
    const movies = [];
    console.log(movies);

    function setMovie(movie){
        return movie
    }
    function sgetMovie(movie){
        return movies
    }
 
 

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

