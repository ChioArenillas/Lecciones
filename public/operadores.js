let a = 3, b = 2;
let z = a + b;

//Operaciones básicas
console.log("Resultado de la suma: " + z );

z = a - b;
console.log("Resultado de la resta: " + z );

z = a * b;
console.log("Resultado de la multiplicacion: " + z );

z = a / b;
console.log("Resultado de la division: " + z );

z = a % b; // división redondeado
console.log("Resultado de la residuo: " + z );

z = a ** b; // elevado a 
console.log("Resultado de operador exponente: " + z );

//Incremento
// Pre-incremento (el operador ++ antes de la variable, se incrementa en el momento)
z = ++a;
console.log(a);
console.log(z);

//Post-incremento (el operador ++ despues de la variable) (se incrementa no en el momento en que lo usas, sino la siguiente vez que se usa esa variable, la prox vez que se use estará incrementada)
z = b++;
console.log(b);
console.log(z);



