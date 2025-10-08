
 /* ME HE QUEDADO EN EL MINUTO 1:15 DE SESIÓN 26 */


const movie = {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    actors: "Christian Bale, Heath Ledger, Aaron Eckhart",
    year: 2008,
    category: "Action",
    poster: "http://image.tmdb.org/t/p/w500//qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    rating: 9,
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
  };

  function createPosterElement(poster){
    //Crear
    const element = document.createElement("img"); //<img
    element.setAttribute("src", poster); // añade src="url"
    element.setAttribute("class", "movie-poster"); //añade class="movie-poster"
    element.className = "poster";    
    return element;
  }

  function createTitleElement(title){
    //Crear un <div class="title"> 
    const element = document.createElement("div");
    element.className = "title";
    //Añade el contenido del texto
    element.textContent = title;
    //devuelve title
    return element;
  }

    function createDataElement(rating, year){
    const element = document.createElement("div");
    element.className = "data";
    element.textContent = `Rating: ${rating} | ${year}`; //esta comilla es simple (acento al revés)
    return element;
  }
  function createHeadingElement(heading){
    const element = document.createElement("div");
    element.className = "heading";
    element.textContent = "Sumary", heading;
    return element;
  }
  function createDescriptionElement(description){
    const element = document.createElement("div");
    element.className = "description";
    element.textContent = description;
    return element;
  } 
  function createOtherElement(director, actors, category) {
    const element = document.createElement("div");
    element.className = "other";

    const directorEl = document.createElement("div");
    directorEl.innerHTML = `<span>Director:</span> ${director}`;
    directorEl.className = "other";
    const actorsEl = document.createElement("div");
    actorsEl.innerHTML = `<span>Actors: </span> ${actors}`;
    actorsEl.className = "other";
    const categoryEl = document.createElement("div");
    categoryEl.innerHTML = `<span>Category:</span> ${category}`;
    categoryEl.className = "other";

    element.appendChild(directorEl);
    element.appendChild(actorsEl);
    element.appendChild(categoryEl);

    return element;
}

  //CREAR FAKE BUTTON
  /* Ejercicio 1. Continuando con el ejercicio anterior, añade a la sección película un nuevo elemento (por Javascript) que alterne
el texto “Ocultar descripción” y “Mostrar descripción” y que escuche el evento clic. Al hacer clic sobre dicho elemento se
debe mostrar/ocultar la descripción de la película. */
  function createFakeButton(){
    const element = document.createElement("div");
    element.id = "movie-data-hide";
    element.textContent = 'Hide data';
    element.addEventListener('click', hideData);
    return element
  }
  function hideData(){
    const movieDataContainer = document.querySelector("#movie-data-container");
    const movieFakeButton = document.querySelector("#movie-data-hide");

    movieDataContainer.toggleAttribute('hidden'); //toggleAttribute es para que si pulsas una vez lo pone, si pulsas otra lo quita
    
    const isHidden = movieDataContainer.hasAttribute('hidden');
    movieFakeButton.textContent = isHidden ? 'Show data' : 'Hide data';

    /*
    ESTO ES LO MISMO QUE LO DE ARRIBA PERO DE OTRA FORMA:
    if(movieDataContainer.hasAttribute('hidden')){ 
      movieFakeButton.textContent = 'Show data';
    } else{
      movieFakeButton.textContent = 'Hidde data';
    } */
  }

  function createMovieElement(movieObj){
    //Crear un <div class="movie"> 
    const movieElement = document.createElement('div');
    movieElement.className = 'movie';
    //Añade cada una a movie
    movieElement.appendChild(createPosterElement(movieObj.poster));
    movieElement.appendChild(createFakeButton());

    const movieDataContainer = document.createElement("div");
    movieDataContainer.id = 'movie-data-container'
    movieDataContainer.appendChild(createTitleElement(movieObj.title));
    movieDataContainer.appendChild(createDataElement(movieObj.rating, movieObj.year)); //Al haber dos hay que añadir los dos
    movieDataContainer.appendChild(createHeadingElement(movieObj.heading));
    movieDataContainer.appendChild(createDescriptionElement(movieObj.description));
    movieDataContainer.appendChild(createOtherElement(movieObj.director, movieObj.actors, movieObj.category));
    movieElement.appendChild(movieDataContainer);

    //devuelve movie
    return movieElement;
  }

  // Crear el <div class="movie-container"> 
  const movieConteinter = document.createElement('div');
  movieConteinter.className = 'movie-container'; 
  
  // Crear el <div class="movie"> y lo añade al container
  const movieElement = createMovieElement(movie);
  movieConteinter.appendChild(movieElement); 
  
  // Añade al body
  document.body.appendChild(movieConteinter); 

