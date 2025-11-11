// TODO: Create a function called sum. The function will take in a parameter and calculate all the numbers from 0 -> the parameter. You must check if the parameter is an integer first before any calculation is made. If the parameter is not a number, return a message stating, “The value passed is not a number”. You are NOT allowed to use methods(!Number.isInteger(n)) or regular expressions(.match(/cat/g)). Make sure to test your code effectively. 
function sum(x) {
    if (typeof x !== "number") {
        return "The value passed is not a number";
    }
    if (x % 1 !== 0) {
        return "The value passed is not a number";
    }
    let total = 0;
    for (let i = 0; i <= x; i++){
        total += i;
    }
    return total;
}
console.log("Sum up to 12: " + sum(12));
console.log("Sum up to 20: " + sum(20));
console.log("Sum with non-integer: " + sum(9.9));
console.log("Sum with non-number: " + sum("Nina"));

// TODO: Create a function called ‘factorial’ that takes in a number as a parameter. The function will print the factorial of the entered number, e.g. factorial(4) ->4*3*2*1 //output 24
function factorial(number) {
    if (typeof number !== "number" || number % 1 !== 0 || number < 0) {
        return "Please enter a valid positive integer.";
    }
    if (number === 0 || number === 1) 
        return 1;
    
    let result = 1;
    for (let i = number; i >= 1; i--) {
        result *= i
    }
    return result;
}

console.log("Factorial of 4: " + factorial(4));
console.log("Factorial of -3: " + factorial(-3));
console.log("Factorial of 5.5: " + factorial(5.5));
console.log("Factorial of 0: " + factorial(0));
console.log("Factorial of 1: " + factorial(1));

// TODO: Create a function called funkyMath . If this function is called with 2 arguments the function will subtract the first from the second. If the function is called with 3 arguments it will add all 3 numbers together. If the function is called with 4 arguments it will add together argument 1 and 2 , 3 and 4 separately. Then divide them accordingly, eg funkyMath(8,2,3,5) -> 8+2 divided by 3+5 -> 10/8 //output 1,25
function funkyMath(...args) {
    if (args.length === 2) {
        return args[1] - args[0];
    }
    else if (args.length ===3) {
        return args[0] + args[1] + args[2];
    }
    else if (args.length ===4) {
        const sum1 = args[0] + args[1];
        const sum2 = args[2] + args[3];
        if (sum2 ===0) {
            return "Division by zero is not allowed.";
        }
        return sum1 / sum2;
    }
    else {
        return "Please provide between 2 and 4 arguments.";
    }
}

console.log("FunkyMath with 1 args (6): " + funkyMath(6));
console.log("FunkyMath with 2 args (5,10): " + funkyMath(5,10));
console.log("FunkyMath with 3 args (1,2,3): " + funkyMath(1,2,3));
console.log("FunkyMath with 4 args (8,2,3,5): " + funkyMath(8,2,3,5));
console.log("FunkyMath with 4 args (8,2,0,0): " + funkyMath(8,2,0,0));
console.log("FunkyMath with 5 args (1,2,3,4,5): " + funkyMath(1,2,3,4,5));


// TODO: Create a loop that will remove all the odd numbers from the array and add them to a new array. Use the current array [1, 2 , 33, 45, 6, 44]. Bonus: Make sure to arrange them from smallest to biggest.()
let arr = [1, 2, 33, 45, 6, 44];
let oddNumbers = [];
for (let a = 0; a < arr.length; a++) {
    if (arr[a] % 2 !== 0){
        oddNumbers.push(arr[a]);
    }
}
oddNumbers.sort((a, b) => a-b)
console.log("Odd Numbers: [" + oddNumbers + "]")


// TODO: Create an object called ‘me’ with properties of first name, last name, age, favourite colour, dream car
let me = {
    firstName: "Nina",
    lastName: "Lewis",
    age: 25,
    favouriteColour: "Green",
    dreamCar: "Mercedes-AMG G63"
}

// TODO: Create and add a new property and value of ‘favourite food’ to the object. 
me.favouriteFood = "Vietnamese rice paper rolls";


// TODO: . Now delete the age property from the object.
delete me.age;

console.log("About me: ", me)