
/*
STATIC


*/



//PALABRA STATIC
    class Persona{
        constructor(nombre, apellido){
            this._nombre = nombre; 
            this._apellido = apellido;
        }
        get nombre(){
            return this._nombre;
        }
        set nombre(nombre){ 
            this._nombre = nombre;
        }
        get apellido(){
            return this._apellido;
        }
        set apellido(apellido){
            this._apellido = apellido;
        }
        nombreCompleto(){ 
            return this._nombre + " " + this._apellido;
        }
        toString(){ 
            return this.nombreCompleto(); 
        }
        static saludar(){ //MÉTODO STATIC
            console.log("saludos desde el método static");
        }
        static saludar2(persona){
            console.log(persona.nombre);
        }
    }
    class Empleado extends Persona{
        constructor(nombre, apellido, departamento){
            super(nombre, apellido); 
            this._departamento = departamento;
        }
        get departamento(){
            return this._departamento;
        }
        set departamento(departamento){
            this._departamento = departamento;
        }
        nombreCompleto(){ 
            return super.nombreCompleto() + ", " + this._departamento
        }
    }
    let persona = new Persona ("Hans", "Sanchez");
    console.log(persona);

    let empleado = new Empleado("Jacobo", "Mulero", "Sistemas");
    console.log( empleado.nombreCompleto());
    console.log( empleado.toString());

    //persona.saludar(); no es posible llamar un método STATIC desde un objeto pero si desde una clase
    Persona.saludar(); //los métodos státicos lo hace directamente en la consola
    Persona.saludar2(persona);

    Empleado.saludar();
    Empleado.saludar2(empleado);


//ATRIBUTOS ESTÁTICOS 

    class PersonaB{

        static contadorObjetosPersona = 0; //Atributo estático

        constructor(nombre, apellido){
            this._nombre = nombre; 
            this._apellido = apellido;
            PersonaB.contadorObjetosPersona++; //Incremento de Atributo
            console.log( "Se incrementa contador:" + PersonaB.contadorObjetosPersona);
        }
        get nombre(){
            return this._nombre;
        }
        set nombre(nombre){ 
            this._nombre = nombre;
        }
        get apellido(){
            return this._apellido;
        }
        set apellido(apellido){
            this._apellido = apellido;
        }
        nombreCompleto(){ 
            return this._nombre + " " + this._apellido;
        }
        toString(){ 
            return this.nombreCompleto(); 
        }
        static saludar(){ //MÉTODO STATIC
            console.log("saludos desde el método static");
        }
        static saludar2(persona){
            console.log(persona.nombre);
        }
    }
    class EmpleadoB extends PersonaB{
        constructor(nombre, apellido, departamento){
            super(nombre, apellido); 
            this._departamento = departamento;
        }
        get departamento(){
            return this._departamento;
        }
        set departamento(departamento){
            this._departamento = departamento;
        }
        nombreCompleto(){ 
            return super.nombreCompleto() + ", " + this._departamento
        }
    }
    let personaB = new PersonaB ("Hans", "Sanchez");
    console.log(personaB);

    let empleadoB = new EmpleadoB("Jacobo", "Mulero", "Sistemas");
    console.log( empleadoB.nombreCompleto());
    console.log( empleadoB.toString());

    console.log( personaB.contadorObjetosPersona); //en este caso no estamos usando la clase
    console.log( PersonaB.contadorObjetosPersona);
    console.log( EmpleadoB.contadorObjetosPersona); //el hijo también la hereda

//ATRIBUTOS ESTÁTICOS VS NO ESTÁTICOS
    class PersonaC{

        static contadorObjetosPersona = 0; //Atributo estático de nuestra clase

        email = "valor default email"; //Atributo de nuestros objetos, no estático

        constructor(nombre, apellido){
            this._nombre = nombre; 
            this._apellido = apellido;
            PersonaC.contadorObjetosPersona++; //Incremento de Atributo
            console.log( "Se incrementa contador:" + PersonaC.contadorObjetosPersona);
        }
        get nombre(){
            return this._nombre;
        }
        set nombre(nombre){ 
            this._nombre = nombre;
        }
        get apellido(){
            return this._apellido;
        }
        set apellido(apellido){
            this._apellido = apellido;
        }
        nombreCompleto(){ 
            return this._nombre + " " + this._apellido;
        }
        toString(){ 
            return this.nombreCompleto(); 
        }
        static saludar(){ //MÉTODO STATIC
            console.log("saludos desde el método static");
        }
        static saludar2(persona){
            console.log(persona.nombre);
        }
    }
    class EmpleadoC extends PersonaC{
        constructor(nombre, apellido, departamento){
            super(nombre, apellido); 
            this._departamento = departamento;
        }
        get departamento(){
            return this._departamento;
        }
        set departamento(departamento){
            this._departamento = departamento;
        }
        nombreCompleto(){ 
            return super.nombreCompleto() + ", " + this._departamento
        }
    }
    let personaC = new PersonaC ("Hans", "Sanchez");
    console.log(personaC);

    let empleadoC = new EmpleadoC("Jacobo", "Mulero", "Sistemas");
    console.log( empleadoC.nombreCompleto());
    console.log( empleadoC.toString());

    console.log( personaC.contadorObjetosPersona); //en este caso no estamos usando la clase, sino el obajeto
    console.log( PersonaC.contadorObjetosPersona);
    console.log( EmpleadoC.contadorObjetosPersona); //el hijo también la hereda

    console.log( personaC.email);
    console.log( empleadoC.email);
    console.log( PersonaC.email); //no podemos acceder a él desde la clase, solo desde el objeto

// EJEMPLO
    class PersonaD{

        static contadorPersona = 0; //Atributo estático de nuestra clase

        constructor(nombre, apellido){
            this._nombre = nombre; 
            this._apellido = apellido;
            this.idPersona = ++PersonaD.contadorPersona; //Por cada objeto se crea un valor único
        }
        get nombre(){
            return this._nombre;
        }
        set nombre(nombre){ 
            this._nombre = nombre;
        }
        get apellido(){
            return this._apellido;
        }
        set apellido(apellido){
            this._apellido = apellido;
        }
        nombreCompleto(){ 
            return this._nombre + " " + this._apellido;
        }
        toString(){ 
            return this.idPersona + " " + this.nombreCompleto(); 
        }
        static saludar(){ //MÉTODO STATIC
            console.log("saludos desde el método static");
        }
        static saludar2(persona){
            console.log(persona.nombre);
        }
    }
    class EmpleadoD extends PersonaD{
        constructor(nombre, apellido, departamento){
            super(nombre, apellido); 
            this._departamento = departamento;
        }
        get departamento(){
            return this._departamento;
        }
        set departamento(departamento){
            this._departamento = departamento;
        }
        nombreCompleto(){ 
            return super.nombreCompleto() + ", " + this._departamento
        }
    }
    let personaD = new PersonaD ("Hans", "Sanchez");
    console.log( personaD );

    let empleadoD = new EmpleadoD("Jacobo", "Mulero", "Sistemas");
    console.log( empleadoD.toString( ));

    console.log( PersonaD.contadorPersona);

    let personaE = new PersonaD("Sergio", "Moral");
    console.log( personaE.toString());
    console.log( PersonaD.contadorPersona);

//CREACIÓN DE CONSTANTES ESTÁTICAS

    class PersonaF{

        static contadorPersona = 0; //Atributo estático de nuestra clase

        static get MAX_OBJ(){ //Constante estático
            return 5;
        }

        constructor(nombre, apellido){
            this._nombre = nombre; 
            this._apellido = apellido;
            if( PersonaF.contadorPersona < PersonaF.MAX_OBJ){
                this.idPersona = ++PersonaF.contadorPersona;
            }
            else{
                console.log("Se ha superado el máximo de objetos permitidos");
            }
        }
        get nombre(){
            return this._nombre;
        }
        set nombre(nombre){ 
            this._nombre = nombre;
        }
        get apellido(){
            return this._apellido;
        }
        set apellido(apellido){
            this._apellido = apellido;
        }
        nombreCompleto(){ 
            return this._nombre + " " + this._apellido;
        }
        toString(){ 
            return this.idPersona + " " + this.nombreCompleto(); 
        }
        static saludar(){ //MÉTODO STATIC
            console.log("saludos desde el método static");
        }
        static saludar2(persona){
            console.log(persona.nombre);
        }
    }
    class EmpleadoF extends PersonaF{
        constructor(nombre, apellido, departamento){
            super(nombre, apellido); 
            this._departamento = departamento;
        }
        get departamento(){
            return this._departamento;
        }
        set departamento(departamento){
            this._departamento = departamento;
        }
        nombreCompleto(){ 
            return super.nombreCompleto() + ", " + this._departamento
        }
    }
    let personaF = new PersonaF ("Hans", "Sanchez");
    console.log( personaF );

    let empleadoF = new EmpleadoF("Jacobo", "Mulero", "Sistemas");
    console.log( empleadoD.toString( ));

    console.log( PersonaF.contadorPersona);


    console.log( PersonaF.MAX_OBJ);
    Persona.MAX_OBJ = 10; //No se puede realizar ya que es un get y no un set

    let perosna2 = new PersonaF("a", "a")
    let perosna3 = new PersonaF("b", "b")
    let perosna4 = new PersonaF("c", "c")
    let perosna5 = new PersonaF("d", "d")
    console.log(perosna4.toString());
    console.log (perosna5.toString());
