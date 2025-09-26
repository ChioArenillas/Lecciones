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