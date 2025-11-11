// TODO: Create a multiline string using template literals
let templateLiterals = `
I'm Nina 
JavaScript is frying me
I have no idea what I'm doing!
`;

console.log(templateLiterals)

// TODO: Create a function that uses template literals for HTML generation
function htmlGeneration(name, price, description) {
    return `
        <div class="card">
            <h2>${name}</h2>
            <p>R${price}</p>
            <p>${description}</p>
        </div>
    `;
}

 console.log(htmlGeneration("Tote bag", 99.99, "denim"))

// TODO: Convert regular functions to arrow functions
let add = (a,b) => a + b;
const square = num => num * num

console.log(add(5,6));
console.log(square(8));

// TODO: Use arrow functions with array methods
const numbers = [1, 2, 3, 4, 5];
let double = numbers.map(num => num * 2);

console.log("Doubled: ", double);
