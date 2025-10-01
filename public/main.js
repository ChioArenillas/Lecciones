//console.log("hello world");

/* 
const text = "hello world";
const vowels = "aeiou";
let counter = 0;

for (let i=0; i<text.length; i++){
    if (vowels.includes(text.charAt(i))){
        counter++;
    }
}


document.getElementById("root").innerHTML = "Number of vowels is ${counter}";
*/

/*
let text = "Hi, I am learning Javascript";
const vowels = "aeiouAEIOU";

for (let i = 0; i<vowels.length; i++){
    const vowel = vowels.charAt(i);

    if (text.includes(vowel)){
        text = text.replaceAll(vowels.charAt(i), "");
    }

}

document.getElementById("root").innerHTML = Text;
console.log ("Hi, I am learning Javascript");
*/

/*
function isPalindrome(text){
    const accents = "áéíóú";
    const vowels = "aeiou";

    text = text.toLowerCase(text);
    text = text.replaceAll(" ", "");

    for (let i = 0; i < accents.length; i++ ){
        if (text.includes(accents.charAt(i))){
            text = text.replaceAll(accents.charAt(i), vowels.charAt(i));
        }

    }

    for (let i = 0; i < text.length /2; i++){
        const lChar = text.charAt(i);
        const rChar = text.charAt(text.length - 1 - i);
        if (lChar !== rChar){
            return false
        }
    }
    return true;
}

const text = "Dábale arroz a la zorra el abad";
document.getElementById("root").innerHTML = isPalindrome(text);
*/

/* 
EEjercicio. Escribe una o varias funciones que generen un array de 10 números aleatorios entre 0 y 100, encontrar
el número más bajo y el más alto. Finalmente el resultado con estos números deben mostrarse en la consola.
Recuerda utilizar los principios para escribir código limpio. 

function getRandom() {
    const numRand = Math.random() * 100;
    return Math.floor(numRand);
}

function randomArray(numberOfItems) {
    const randomArray = [];
    const max = 100

    for (let i = 1; i <= numberOfItems; i++) {
        randomArray.push(getRandom(max));
    }
    return randomArray;
}
function findMinMaxInArray(array) {
    let min;
    let max;

    array.forEach(randomNum => {
        if (min === undefined) {
            min = randomNum;
            max = randomNum;
        } else if (randomNum < min) {
            min = randomNum;  
        } else if (randomNum > max){
            max = randomNum;
        }
    });

    return [min, max];
}

const randArr = randomArray(10, 100)
console.log(getRandom(100));
console.log(randArr);
console.log(findMinMaxInArray(randArr));

*/

/* const text = "Dabale arroz a la zorra el abad";

function isPalindrome(text){
    text = text.replaceAll(" ","");
    text = text.toLowerCase();
    }
    reversedText = text.split("").reverse().join("");
    return text === reversedText;
} */

 
/* Ejercicio. Escribe una o varias funciones para que, dado un String, devuelva un array que contenga 
la posición que ocupa cada carácter en el abecedario. Elimina los espacios y tildes.Ejercicio 

let text = "Dábale arroz a la zorra el abad";
const alphabet = "abcdefghijklmnopqrstuvwxyz";

text = formatText(text);
text = removeAccents(text);

let arrText = text.split("");
let arrAlphabet = alphabet.split("");
let arrResult = [];

arrText.forEach(char => arrResult.push(arrAlphabet.indexOf(char)));

console.log(arrResult);
document.getElementById("root").innerHTML = Text;
*/



/* let num1 = 5;
let num2 = 7;

num2 = 7;
console.log(num1, num2);

let arr1 = [1,2,3];
let arr2 = arr1;

arr2 = [4,5,6];
console.log(arr1,arr2);
 */

