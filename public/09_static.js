
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
