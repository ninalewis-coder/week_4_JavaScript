// TODO: Create a function that validates user input
function validateUserInput(name, age) {
    if (typeof name !== "string" || name.trim() === "") {
        console.log(" Invalid name. It must be a non-empty string.");
        return false;
    }

    if (typeof age !== "number" || age <= 0) {
        console.log("Invalid age. It must be a positive number.");
        return false;
    }

    console.log("User input is valid!");
    return true;
}

// Test it:
validateUserInput("Nina", 25);
validateUserInput("", 25);
validateUserInput("Nina", -5);

// TODO: Create a function that demonstrates multiple error types
function demoErrorTypes(value) {
    try {
        if (typeof value !== "string") {
            throw new TypeError("Expected a string value");
        }

        if (value.length < 3) {
            throw new RangeError("String is too short");
        }

        console.log("Valid string:", value);

    } catch (error) {
        if (error instanceof TypeError) {
            console.log("Type Error:", error.message);
        } else if (error instanceof RangeError) {
            console.log("Range Error:", error.message);
        } else {
            console.log("Unknown Error:", error.message);
        }
    }
}

// Test:
demoErrorTypes(123);
demoErrorTypes("Hi");
demoErrorTypes("Hello");

// TODO: Create a collection of helper functions for string manipulation
const stringHelpers = {
    capitalize: function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    },
    reverse: function(str) {
        return str.split("").reverse().join("");
    },
    countVowels: function(str) {
        let vowels = str.match(/[aeiou]/gi);
        return vowels ? vowels.length : 0;
    },
    isPalindrome: function(str) {
        let clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
        return clean === stringHelpers.reverse(clean);
    }
};

// Test:
console.log(stringHelpers.capitalize("nINA"));
console.log(stringHelpers.reverse("hello"));
console.log(stringHelpers.countVowels("JavaScript"));
console.log(stringHelpers.isPalindrome("Madam"));


// TODO: Create helper functions for array operations
const arrayHelpers = {
    getMax: function(arr) {
        return Math.max(...arr);
    },
    getMin: function(arr) {
        return Math.min(...arr);
    },
    getAverage: function(arr) {
        let sum = arr.reduce((a, b) => a + b, 0);
        return sum / arr.length;
    },
    removeDuplicates: function(arr) {
        return [...new Set(arr)];
    }
};

// Test:
let nums = [3, 5, 7, 3, 5, 9];
console.log(arrayHelpers.getMax(nums));
console.log(arrayHelpers.getMin(nums));
console.log(arrayHelpers.getAverage(nums));
console.log(arrayHelpers.removeDuplicates(nums));
