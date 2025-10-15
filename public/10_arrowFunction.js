/* 
Usa función normal cuando:
    Necesitas usar this dentro del método (como en clases u objetos).
    Vas a declarar una función global o reutilizable.

Usa arrow function cuando:
    Es una función pequeña o temporal.
    Es un callback (map, filter, forEach, then, etc.).
    No necesitas this ni arguments.
*/
//FUNCION NORMAL:
    let miFuncion = function (){
        console.log('saludos');

    }
//ARROW FUNCTION
     
    const miFuncionFlecha = () => {  //también se puede usar let cuándo no vamos a modificarla después, normalmente se usa const
        console.log('saludos');
    }
    miFuncionFlecha();  //la llamada a la función tiene que ir después, no se aplica HOISTING para las funciones flecha

//OTRA FORMA DE ESCRIBIRLA EN UNA SOLA LÍNEA
    const miFuncionFlechaB = () => console.log('saludos');
    miFuncionFlecha();

//OTROS FORMATOS
    
    const saludar = () => {
        return 'saludos';
    }
    console.log(saludar()); 
    
   
   const saludarB = () => 'saludos';
   console.log( saludar() );
    

    //para que regrese un objeto
   const regresaObjeto = () => ({nombre: 'Ana', apellido: 'Moran'});
   console.log( regresaObjeto());
    
    
    //para definir un parámetro
   const funcionConParametros = (mensaje) => console.log( mensaje );
   funcionConParametros('saludos');

   //para definir varios:
   const funcionConVariosParametros = (op1, op2) => {
    let resultado = op1 + op2;
    return `resultado ${resultado}`;
    };
    console.log( funcionConVariosParametros(3,5));
    
