// TODO: Create a function called ‘multiply’ that will take in 3 parameter and multiply all 3 numbers together. Note: The argument passed must NOT be the same number. 
function multiply (x,y,z){
    return x * y * z;
}

console.log("Multiply: " + multiply( 5,6,7));

// TODO: Create a function expression called ‘convertToSeconds’ that takes in a number of minutes as an argument and returns the amount in seconds. ***Do not use a console.log() inside of the function***
const convertToSeconds = function(minutes){
    return minutes * 60;
}

console.log("20 Minutes: " + convertToSeconds(20) + " Seconds");

// TODO: Create a function called fahrenheitToCelsius that takes the temperatureasan parameter and returns the equivalent temperature in Celsius. ***Do not useaconsole.log() inside of the function***
const fahrenheitToCelsius = function(fahrenheit){
    return (fahrenheit - 32) * 5/9;
}

console.log("100F: " + fahrenheitToCelsius(100) + "C");

// TODO: Create a function that takes a string as a parameter and returns the reverse of the string. ***Do not use a console.log() inside of the function ***
function reverseString(string){
    return string.split("").reverse().join("");
}

console.log("Reversed: " + reverseString("Hello World"));

// TODO: Create a function that takes in a string and returns the number of Vowels in the sentence. E.g. countVowels(‘Javascript’) //output =3 ***Do not use a console.log() inside of the function***
function countVowels(string){
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of string){
        if (vowels.includes(char)){
            count++;
        }
    }
    return count;
}

console.log("Amount of vowels: " + countVowels("Javascript"));

// TODO: Create a “isPrime” function that takes a number as a parameter and returns true if the number is prime, and false otherwise. Make sure to test your code with 4 numbers
function isPrime(number){
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i ===0) return false;
    }
    return true;
}

console.log("Is 7 a prime number? " + isPrime(7));
console.log("Is 10 a prime number? " + isPrime(10));
console.log("Is 13 a prime number? " + isPrime(13));
console.log("Is 1 a prime number? " + isPrime(1));