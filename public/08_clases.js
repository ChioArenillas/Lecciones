/*
CLASES
    MÉTODO GET & SET
    HERENCIA
        Clase Padre
        Clase hijo
    HEREDAR MÉTODOS
    SOBREESCRIBIR
    MÉTODO TO STRING, SOBREESCRITURA Y POLIFORMISMO
*/

/* 
CLASES:
Una clase es una plantilla para los OBJETOS que tiene NOMBRE, ATRIBUTOS y MÉTODOS (attributes operations).
Los OBJETOS son considerados INSTANCIAS de una clase
(EJ: Persona(clase) = contiene las siguiente s instancias: Carla(objeto), Nicolás(objeto)...) 
*/

class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
let perosnaA = new Persona("Ana", "Moran");
console.log(perosnaA);

let personaB = new Persona("Alberto", "Díaz");
console.log(personaB)

//MÉTODO GET & SET
    class PersonaB{
        constructor(nombre, apellido){
            this._nombre = nombre; //el método GET no deja poner el mismo nombre por lo que se le añade un _ a la propiedad
            this._apellido = apellido;
        }
        get nombre(){
            return this._nombre;
        }
        set nombre(nombre){ //se usa para modificar
            this._nombre = nombre;
        }
    }
    let personaC = new PersonaB("Hans", "Sanchez");
    personaC.nombre = "Hans Anthony"; //set nombre
    console.log(personaC.nombre); //get nombre

//*HOISTING: no se aplica en el caso de las clases. Primero hay que definir la clase y después crear el objeto. El orden si importa.

//HERENCIA EN JS
    //clase padre:
        class PersonaC{
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
        }
    //clase hijo:
        class EmpleadoC extends PersonaC{
            constructor(nombre, apellido, departamento){
                super(nombre, apellido); //llamar al constructor de la clase padre
                this._departamento = departamento; //añadido a la clase hijo solamente
            }
            get departamento(){
                return this._departamento;
            }
            set departamento(departamento){
                this._departamento = departamento;
            }
        }
        let personaD = new PersonaC ("Hans", "Sanchez");
        console.log(personaD);

        let empleadoD = new EmpleadoC("Jacobo", "Mulero", "Sistemas");
        console.log( empleadoD);

//HEREDAR MÉTODOS
    class PersonaE{
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
        nombreCompleto(){ //le añadimos un método que heredará tb la clase hijo
            return this._nombre + " " + this._apellido;
        }
    }
    class EmpleadoE extends PersonaE{
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
    }
    let personaF = new PersonaE ("Hans", "Sanchez");
    console.log(personaF);

    let empleadoF = new EmpleadoE("Jacobo", "Mulero", "Sistemas");
    console.log( empleadoF.nombreCompleto());

//SOBREESCRIBIR
    class PersonaG{
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
        nombreCompleto(){ //le añadimos un método que heredará tb la clase hijo
            return this._nombre + " " + this._apellido;
        }
    }
    class EmpleadoG extends PersonaG{
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
        nombreCompleto(){ //sobreescritura al parámetro de la clase padre. Se tiene que llamar igual que el de la clase padre
            return super.nombreCompleto() + ", " + this._departamento
        }
    }
    let personaH = new PersonaG ("Hans", "Sanchez");
    console.log(personaH);

    let empleadoH = new EmpleadoG("Jacobo", "Mulero", "Sistemas");
    console.log( empleadoH.nombreCompleto());

//MÉTODO TO STRING, SOBREESCRITURA Y POLIFORMISMO
    //Las clases son de tipo OBJECT por defecto. Podemos cambiarlo a STRING

    console.log(empleadoH.toString()); //esta es la info que nos daría el ordenador. Debemos cambiar la info a String para que nos mande los valores

    class PersonaI{
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
        toString(){ //sobreescribe el método de la clase padre (nombre.Completo)
            return this.nombreCompleto(); //se aplica POLIMOSFIRMO (múltiples formas en tiempo de ejecución, dependiendo si lo estamos llamando desde el padre o el hijo aplica uno u otro), ya que al llamar a toString, estamos llamando a nombreCompleto.
        }
    }
    class EmpleadoI extends PersonaI{
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
        nombreCompleto(){ //sobreescritura al parámetro de la clase padre. Se tiene que llamar igual que el de la clase padre
            return super.nombreCompleto() + ", " + this._departamento
        }
    }
    let personaJ = new PersonaI ("Hans", "Sanchez");
    console.log(personaJ);

    let empleadoJ = new EmpleadoI("Jacobo", "Mulero", "Sistemas");
    console.log( empleadoJ.nombreCompleto());
    console.log( empleadoJ.toString());

