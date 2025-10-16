
/* 
DOM: Document Object Mode
    Document: (Objetos:)
        Root element: HTML
        Element: Head / body
        Element: Title / h1
        Text: "My title" / "Click here"
        Atrribute: href / src     
*/
/* 
    CREACIÓN HTML
    ACCESO AL DOM
        getElementById
        MODIFICAR
        getElementByTagName
        getElementByClassName
        querySelectorAll
    FORMULARIOS
    DOCUMENT.WRITE
    CAMBIO CONTENIDO HTML CON JS
    CAMBIO VALORES HTML CON JS
    CAMBIO ESTILO CSS CON JS
*/
/* CREACIÓN HTML:
        Creamos el documento HTML y en el <body> hay que poner:       
        <script type="module" src="/src/main.js"></script>
        Esto es lo que hace que se lea el .js
        Debe estar al final del todo, si se pone algo después de esa línea no saldrá

 */
    //EJ en HTML:
    //<h1 id='cabecero'>Ejemplo DOM</h1>
    //<p id='parrafo'>Saludos</p>

//ACCESO AL DOM:
    //getElementById (Id asignado en el HTML)
        let cabecero = document.getElementById('cabecero').innerHTML; 
        console.log('valor cabecero' + cabecero);  
        //console.log(`valor cabecero: ${cabecero}`); //Otra forma de llamarlo:
        /*  document llama al documento HTML 
            .getElementById llama a las Id que tengas en HTML
            'cabecero' es el id que has puesto en el HTML
            .innerHTML llama al contenido interno del HTML, es decir al contenido de esa clase Id (Ejemplo DOM), si no pones esto, llamará solo al Id y te dirá que es un h1, pero no el contenido del h1
         */

//MODIFICANDO EL DOM:
        let cabeceroB = document.getElementById('cabecero').innerHTML; 
        console.log(`valor cabecero: ${cabeceroB}`)
        cabeceroB.innerHTML = 'Nuevo cabecero' //cambia el contenido del HTML

//OTROS MÉTODOS DE ACCESO AL DOM:
    //getElementByTagName (Tipo de elemento <> en el HTML)
        let parrafo = document.getElementsByTagName('p');
        console.log(`Num parrafos:${parrafo.length}`); //calcula cuántos párrafos hay
        for(let i=0; i<parrafo.length; i++){
            console.log(`${i} - ${parrafo[i].innerHTML}`); //manda la posición de cada párrafo y su contenido
        }
    
    //EJ en HTML:
    //<h1 class='azul'>Ejemplo DOM</h1>
    //<p class='azul'>Saludos</p>

    //getElementByClassName (Tipo de clase en CSS)
        let elementos = document.getElementsByClassName('azul');
        console.log(`Num elementos:${elementos.length}`); //calcula cuántos de class azul hay
        for(let elemento of elementos){
            console.log(`${elemento.innerHTML}`); //manda la posición de cada elemento y su contenido
        }
    
    //querySelectorAll (clase CSS y el TagName HTML)
        let elementosB = document.querySelectorAll('p.azul');
        console.log(`Num elementos:${elementosB.length}`);
        for(let elementoB of elementosB){
            console.log(`${elementoB.innerHTML}`);
        }

//FORMULARIOS CON JS

        /* EN HTML:
        <form id='formulario'>
            Nombre: <input type='text' name='nombre' value='Ana'/>
            <br/>
            Apellido: <input type='text' name='apellido' value='Moran'/>
            <br/>
        </form>
        <button onclick='mostrarValores()'>Mostrar</button> //este botón lo pone solo para poderle dar al botón y comprobar el cambio
        <div id='valores'></div>
        */

        function mostrarValores(){
            let formulario = document.forms['formulario'];
            let texto = '';
            for(let elementoC of formulario){
                texto += elementoC.value + '<br/>';
            }
            document.getElementById('valores').innerHTML = texto;
        }

        //Acceder a los elementos del formulario
        function mostrarValores(){
            let formulario = document.forms['formulario'];
            let texto = '';
            let nombre = formulario['nombre'];
            let apellido = formulario['apellido'];
            texto = nombre.value + '<br/>' + apellido.value;
            document.getElementById('valores').innerHTML = texto;
        }

//DOCUMENT.WRITE
    /* EN HTML:
        <h1> Manejo DOM </h1>
        <button onclick='mostrar()'>Mostrar</button>
        <br/>
        <img id='imagen' src='http://.......png'/>
        */
    document.write('saludos'); //sale tachado porque realmente no hay un HTML ahora mismo

    function mostrar(){
        document.write('Adios');
    }
    //una vez se hace click en mostrar, se elimina todo el HTML y solo se muestra lo que pone en el document.write, sobreescribe todo

//CAMBIO CONTENIDO HTML CON JS
    function mostrar(){
        document.getElementById('titulo').innerHTML += '<br/>Nuevo Título';
    }
//CAMBIO VALORES HTML CON JS
    function mostrar(){
        document.getElementById('imagen').src = 'http://...nuevaImagen....png';
    }
//CAMBIO ESTILO CSS CON JS
    function mostrar(){
        document.getElementById('titulo').style.color = 'red';
    }
