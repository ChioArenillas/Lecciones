/* 
EVENTOS
    CAMBIAR CONTENIDO DEL HTML
    ONLOAD (se ejecuta una vez cargada la web)
    ONCHANGE (se ejecuta cuándo se hace un cambio que definimos)

    ONMOUSEOVER (al poner el ratón encima)
    ONMOUSEOUT (al quitar el ratón de encima)

    ONMOUSEDOWN (al dar click)
    ONMOUSEUP (al quitar el click)
    ONCLICK (cuándo se ha realizado el click. Al poner los 3 ONMOUSEUP no se va a notar, ya que pasa casi directamente a ONCLICK )

    ONFOCUS (cuándo hemos dado click a un elemento, por ej una casilla de formulario(lo tenemos seleccionado)
    ONBLUR (cuándo nos quitamos del elemento ONFOCUS, si no usáramos ONBLUR se quedaría siempre ONFOCUS, ONBLUR es el contrario para que vuelva a cambiar al original.
    
    ADDEVENTLISTENER
    ARROW + ADDEVENTLISTENER
    DELEGACIÓN DE EVENTOS O USED CAPTURE
*/

//CAMBIAR CONTENIDO DEL HTML
    // HTML: <h1 onclick="cambiarTexto(this)">Manejo DOM</h1>
    function cambiarTexto(titulo){
        titulo.innerHTML = "Cambiamos el titulo";
    }
    
    /* HTML: <h1 id='titulo'>Manejo DOM</h1> <br/>
             <div id='contenido'>Contenido Antiguo </div>
    */
   document.getElementById('titulo').onclick = cambiarTexto; //cuándo le das click al titulo. la función cambiarTexto es una func Callback ya que se la llama después

   function cambiarTexto(){
    document.getElementById('contenido').innerHTML = 'Nuevo Contenido'; //El contenido 'Contenido Antiguo' cambia a 'Nuevo contenido'
   }

//EVENTO ONLOAD (se ejecuta una vez cargada la web)
    /* HTML: <body onload="entrar()">
             <h1 id='titulo'>Manejo DOM</h1> <br/>
             <div id='contenido'>Contenido Antiguo </div>
    */
   function entrar(){
    alert('Entrando en la web'); //una vez cargada la web saltará este mensaje de alerta
    let texto = '';
    if(navigator.cookieEnabled){ // se le puede añadir esto una vez salimos del mensaje de alarma, el sist comprueba si las cookies están habilitadas y manda el mensaje correspondiente
        texto = 'cookies habilitadas';
    }
    else{
        texto = 'cookies deshabilitadas';
    }
    document.getElementById('contenido').innerHTML = texto; //se muestra el texto en el div de contenido
   }

//EVENTO ONCHANGE (se ejecuta cuándo se hace un cambio que definimos)
    /* HTML: 
             <h1 id='titulo'>Manejo DOM</h1> <br/>
             Nombre: <input type="text" onchange="convertir(this)"/> //creamos una casilla de formulario
    */
   function convertir(nombreInput){
    nombreInput.value = nombreInput.value.toUpperCase(); //cuándo cambia la casilla de formulario (por ej escribimos algo en ella) entonces modifica el texto a mayúsculas
   }

//ONMOUSEOVER (al poner el ratón encima)
//ONMOUSEOUT (al quitar el ratón de encima)
    /* HTML: <h1 id='titulo' onmouseover="rojo(this)" onmouseout="azul(this)">Manejo DOM</h1> */
   function rojo(titulo){
        titulo.style.color = 'red'; //cambia el título a rojo
   }
    function azul(titulo){
        titulo.style.color = 'blue'; //cambia el título a azul
   }

//ONMOUSEDOWN (al dar click)
//ONMOUSEUP (al quitar el click)
//ONCLICK (cuándo se ha realizado el click. Al poner los 3 ONMOUSEUP no se va a notar, ya que pasa casi directamente a ONCLICK )
    /* HTML: <h1 id='titulo' onmouseover="rojo(this)" onmouseout="azul(this)" onclick="verde(this)">Manejo DOM</h1> */
   function rojo(titulo){
        titulo.style.color = 'red'; //cambia el título a rojo
   }
    function azul(titulo){
        titulo.style.color = 'blue'; //cambia el título a azul
   }
    function verde(titulo){
        titulo.style.color = 'green'; //cambia el título a verde
   }

//ONFOCUS (cuándo hemos dado click a un elemento, por ej una casilla de formulario(lo tenemos seleccionado)
//ONBLUR (cuándo nos quitamos del elemento ONFOCUS, si no usáramos ONBLUR se quedaría siempre ONFOCUS, ONBLUR es el contrario para que vuelva a cambiar al original.
    /* HTML: 
             <h1 id='titulo'>Manejo DOM</h1> <br/>
             Nombre: <input type="text" onfocus="cambiar(this)" onblur="volver(this)"/> <br/>
             Apellido: <input type="text" onfocus="cambiar(this)" onblur="volver(this)"/> 
    */
   function cambiar(elementoInput){
        elementoInput.style.background = 'yellow'; //cambia el fondo 
   }
   function volver(elementoInput){
        elementoInput.style.background = 'white'; 
   }

//ADDEVENTLISTENER
    /* HTML: 
             <h1 id='titulo'>Manejo DOM</h1> <br/>
             Nombre: <input type="text" id="nombre"/>  <br/>
             Apellido: <input type="text" id="apellido"/>
    */
   document.getElementById("nombre").addEventListener('focus', cambiar); //cuándo se hace focus en el nombre, se llama a la función cambiar
   document.getElementById("nombre").addEventListener('blur', volver); //cuándo se hace blur en el nombre se llama a la función volver

   document.getElementById("apellido").addEventListener('focus', cambiar);
   document.getElementById("apellido").addEventListener('blur', volver);

   function cambiar(evento){
    let componente = evento.target; //.target accede al evento que se está llevando a cabo (nombre o apellido)
    componente.style.background = 'yellow';
   }
   function volver(evento){
        evento.target.style.background = 'white'; //el color por defecto tb se puede escribir: ''
   }

//FUNCION ARROW + ADDEVENTLISTENER
   document.getElementById("nombre").addEventListener('focus', (evento) =>{
        evento.target.style.background = 'pink';
   });
   document.getElementById("nombre").addEventListener('blur', (evento) =>{
        evento.target.style.background = '';
   });
   //la función flecha colo sirve para este mismo evento (nombre), no se puede reutilizar para el resto, como la anterior. Por lo que solo se usa cuándo tienes un evento aislado.

//DELEGACIÓN DE EVENTO O USED CAPTURE
    /* HTML: 
             <h1 id='titulo'>Manejo DOM</h1> <br/>
             <form id='forma'>
                Nombre: <input type="text" id="nombre"/>  <br/>
                Apellido: <input type="text" id="apellido"/>
             </form>
    */
   const forma = document.getElementById('forma');

   forma.addEventListener('focus', (evento) =>{
        evento.target.style.background = 'orange';
   }, true); //true: lo que se configura para el form, se aplique para los elementos dentro del form
   forma.addEventListener('blur', (evento) =>{
        evento.target.style.background = '';
   }, true); 
