
//FUNCION NORMAL:
    let miFuncion = function (){
        console.log('saludos');

    }
//ARROW FUNCTION
    /* 
    const miFuncionFlecha = () => {  //también se puede usar let cuándo no vamos a modificarla después, normalmente se usa const
        console.log('saludos');
    }
    miFuncionFlecha();  //la llamada a la función tiene que ir después, no se aplica HOISTING para las funciones flecha
    */

//OTRA FORMA DE ESCRIBIRLA EN UNA SOLA LÍNEA
    // const miFuncionFlecha = () => console.log('saludos');
    //miFuncionFlecha();

//OTROS FORMATOS
    /*
    const saludar = () => {
        return 'saludos';
    }
    console.log(saludar()); 
    */
   /* 
   const saludar = () => 'saludos';
   console.log( saludar() );
    */
    /* 
    //para que regrese un objeto
   const regresaObjeto = () => ({nombre: 'Ana', apellido: 'Moran'});
   console.log( regresaObjeto());
    */
    /* 
    //para definir un parámetro
   const funcionConParametros = (mensaje) => console.log( mensaje );
   funcionConParametros('saludos');
    */
