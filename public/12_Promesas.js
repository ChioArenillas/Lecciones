/* 
PROMESAS:
    PROMISE //Pending
        -> .then() //Resolved
        -> .catch() //Rejected
    SETTIMEOUT
    ASYNC
    ASYNC + AWAIT
    ASYNC + AWAIT + SETTIMEOUT
 */

//PROMESAS
    let miPromesa = new Promise((resolver, rechazar) => { //tiene dos parámetros, uno en caso de ser Resolved y otro en caso de ser Rejected
        let expresion = true; //si pones true te lo marcará como correcto, si pones false, te lo marcará como error
        if(expresion)
            resolver('Resolvió correcto');
        else
            rechazar('Se produjo un error');    
    });

    // miPromesa.then( valor => console.log(valor), error => console.log(error)); //Llamada solo con .then
    miPromesa
    .then(valor => console.log(valor))
    .catch(error => console.log(error)); //llamada con .then + .catch (se puede escribir en una o dos líneas)

//SETTIMEOUT con Promesas
    let promesa = new Promise((resolver) => {
        setTimeout(() => { resolver( 'saludos con promesa y timeout')}, 3000);
    });
    promesa.then(valor => console.log(valor));

//ASYNC indica que una función devuelve una promesa
    async function miFuncionConPromesa(){
        return 'saludos con promesa y async';
    }
    miFuncionConPromesa().then(valor => console.log(valor));

//AWAIT + ASYNC (Await espera la llamada de una promesa, solo se puede usar dentro de una función declarada con async)
    async function funcionConPromesaYAwait(){
        let miPromesaB = new Promise( resolver => {
            resolver('Promesa con await');
        });
        console.log( await miPromesaB);
    }
    funcionConPromesaYAwait();

//PROMESAS CON AWAIT + ASYNC + TIMEOUT
    async function funcionConPromesaAwaitTimeOut() {
        let miPromesaC = new Promise(resolver => {
            setTimeout(() => resolver ('promesa con await y timeout'), 3000);
        });
        console.log(await miPromesaC);
    }
    funcionConPromesaAwaitTimeOut();