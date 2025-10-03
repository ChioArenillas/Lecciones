/*
OBJECTS
    AGREGAR MÉTODO 
        nombre.Completo function(){return this.nombre + " " + this.apellido;}
    NEW: CREAR OBJETO 
        let personaC = new Object();

    ACCEDER A LAS PROPIEDADES DE OBJETOS 
        console.log(persona.nombre);
        FOR IN
            for( nombrePropiedad in persona){
                console.log( nombrePropiedad );
                console.log( persona[nombrePropiedad]);
            }

    AÑADIR Y ELIMINAR PROPIEDADES AL OBJETO
        persona.ciudad = "Madrid";
        delete persona.ciudad;

    FORMAS DE IMPRIMIR UN OBJETO
        Concatenar cada valor de cada propiedad
            console.log( persona.nombre + ", " + persona.apellidos);
        for in
            for (nombrePropiedad in persona){
                console.log( persona[nombrePropiedad]);
            }
        Array
            let personaArray = Object.values( persona );
            console.log( personaArray);
        JSON.stringfy
            let personaString = JSON.stringify( persona );
            console.log( personaString );

    MÉTODO GET
        get nombreCompleto(){
            return this.nombre + ' ' + this.apellidos;
        }
        console.log( personaD.nombreCompleto );

    MÉTODO SET
        set lang(lang){
            this.idioma = lang.toUpperCase();
        },
        console.log( personaE.lang );
        personaE.lang = "en";
        console.log( personaE.lang); 
        console.log( personaE.idioma); 

    CONSTRUCTORES
        function Persona(nombre, apellido, mail){
            this.nombre = nombre;
            this.apellido = apellido;
            this.mail = mail;
        }
        let padre = new Persona("Juan", "Perez", "jperez@mail.com");
        console.log( padre );
    
    AGREGAR MÉTODOS
        this.nombreCompleto = function(){
            return this.nombre + " " + this.apellido
        }
    
    FORMAS DE CREAR NUEVOS OBJETOS
        let miObjeto = new Object("Marta");
    
    PROTOTYPE
        Persona.prototype.tel = "85434589"; //cambias la propiedad para todos

    MÉTODO CALL
        console.log( personaF.nombreCompleto.call( personaG));
        console.log( personaH.nombreCompleto.call( personaI, "Ing", "8978554"));

    MÉTODO APPLY
        let arreglo3 = ["Ing", "55438907"]
        console.log( personaJ.nombreCompleto.apply( personaK, arreglo3)); 
*/


//OBJECTS:

    let x = 10;
    console.log(x.length);

    let persona ={
        nombre: "Ana",
        apellidos: "Toledo",
        email: "atoledo@gmail.com",
        edad: 38,
    }
    console.log(persona.nombre);
    console.log(persona.edad);
    console.log(persona);

    //AGREGAR MÉTODO
        let personaB = {
            nombre: "Ana",
            apellidos: "Toledo",
            email: "atoledo@gmail.com",
            edad: 38,
            nombreCompleto: function(){ //método nuevo
                return this.nombre + ' ' + this.apellidos;
            }
        }
        console.log(personaB.nombreCompleto());

    //NEW: CREAR OBJETO CON PALABRA NEW (No se suele utilizar)
        let personaC = new Object();
        personaC.nombre = "Ana";
        personaC.direccion = "Goya 15";
        personaC.telefono = "765789876"

        console.log(personaC.telefono);

    //ACCEDER A LAS PROPIEDADES DE OBJETOS
        console.log(persona.nombre);
        console.log(persona["apellidos"]);

            //for in
            for( nombrePropiedad in persona){
                console.log( nombrePropiedad );
                console.log( persona[nombrePropiedad]);
            }
    
    //AÑADIR Y ELIMINAR PROPIEDADES AL OBJETO
        persona.ciudad = "Madrid"; //añadir
        persona.ciudad = "Barcelona"; //modificar

        console.log(persona);

        delete persona.ciudad; //eliminar
        console.log(persona);

    //FORMAS DE IMPRIMIR UN OBJETO

        //Concatenar cada valor de cada propiedad
            console.log( persona.nombre + ", " + persona.apellidos);

        //for in
            for (nombrePropiedad in persona){
                console.log( persona[nombrePropiedad]);
            }

        //Array
            let personaArray = Object.values( persona );
            console.log( personaArray);

        //JSON.stringfy
            let personaString = JSON.stringify( persona );
            console.log( personaString );

    // MÉTODO GET
        let personaD = {
            nombre: "Ana",
            apellidos: "Toledo",
            email: "atoledo@gmail.com",
            edad: 38,
            get nombreCompleto(){ //método GET
                return this.nombre + ' ' + this.apellidos;
            }
        }
        console.log( personaD.nombreCompleto );

    // MÉTODO SET
        let personaE = {
            nombre: "Ana",
            apellidos: "Toledo",
            email: "atoledo@gmail.com",
            edad: 38,
            idioma: "es",
            get lang(){
                return this.idioma.toUpperCase();
            },
            set lang(lang){ //método SET
                this.idioma = lang.toUpperCase();
            },
            get nombreCompleto(){
                return this.nombre + ' ' + this.apellidos;
            }
        }
        console.log( personaE.lang );

        personaE.lang = "en";
        console.log( personaE.lang); //Aquí simplemente lo imprime
        console.log( personaE.idioma); //Aquí comprobamos el valor que tiene, si lo ha cambiado


    //CONSTRUCTORES
        //Función constructor de objeto tipo persona, esto permite crear diferentes valores para un objeto

        function Persona(nombre, apellido, mail){
            this.nombre = nombre;
            this.apellido = apellido;
            this.mail = mail;
        }
        let padre = new Persona("Juan", "Perez", "jperez@mail.com");
        console.log( padre );

        let madre = new Persona("Ana", "Sanchez", "as@mail.com");
        console.log(madre);

        padre.nombre = "Carlos"; //modificar una de las propiedades
        console.log(padre);

    //AGREGAR MÉTODOS
        function Persona(nombre, apellido, mail){
            this.nombre = nombre;
            this.apellido = apellido;
            this.mail = mail;
            this.nombreCompleto = function(){ //método nuevo
                return this.nombre + " " + this.apellido
            }
        }
        console.log( padre.nombreCompleto() );

    //FORMAS DE CREAR NUEVOS OBJETOS

        let miObjeto = new Object("Marta");
        let miObjeto2 = ("Marta"); //forma simplificada de la línea de arriba

        let miCadena = new String("Hola");
        let miCadena2 = "Hola";

        let miNumero = new Number(1);
        let miNumero2 = 1;

        let miBoolean = new Boolean(false);
        let miBoolean2 = false;

        let miArrgelo = new Array();
        let miArreglo2 = [];

        let miFuncion = new Function();
        let miFuncion2 = function(){};

    //PROTOTYPE
        //Cuándo queremos agregar una propiedad que sea común a todos los objetos (ej: tfn el mismo para todos)
        Persona.prototype.tel = "85434589"; //cambias la propiedad para todos

        padre.tel = "65434679" //cambias la propiedad solo para padre
        console.log( padre.tel );
        console.log( madre.tel );

    //MÉTODO CALL

        let personaF = {
            nombre: "Ana",
            apellido: "Lopez",
            nombreCompleto: function(){
                return this.nombre + " " + this.apellido;
            }
        }
        let personaG = {
            nombre: "Marta",
            apellido: "Gonzalez"
        }

        console.log( personaF.nombreCompleto () );
        console.log( personaF.nombreCompleto.call( personaG));

            //Paso de argumentos desde CALL
                let personaH = {
                    nombre: "Lucia",
                    apellido: "Martinez",
                    nombreCompleto: function(titulo, tel){
                        return titulo + ":" + this.nombre + " " + this.apellido + ", " + tel;
                    }
                }
                let personaI = {
                    nombre: "Andrea",
                    apellido: "Huertas"
                }
                console.log( personaH.nombreCompleto.call( personaI, "Ing", "8978554"));

    //MÉTODO APPLY
        let personaJ = {
            nombre: "Ursula",
            apellido: "Moreno",
            nombreCompleto: function(titulo, tel){
                return titulo + ":" + this.nombre + " " + this.apellido + ", " + tel;
            }
        }
        let personaK = {
            nombre: "Vicky",
            apellido: "Reguero"
        }
        console.log( personaJ.nombreCompleto( "Lic", "98766490"));

        //la dif con CALL es que aquí podemos llamarlo solo con la palabra arreglo, pero esta tiene que ser definida previamente:
        let arreglo3 = ["Ing", "55438907"]
        console.log( personaJ.nombreCompleto.apply( personaK, arreglo3)); 
        //otra forma de escribirlo, esta forma es igual que CALL
        console.log( personaJ.nombreCompleto.apply( personaK, ["Ing", "55438907"])); 
