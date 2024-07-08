const firstName = 'Alex';
console.log(firstName);

let secondName = 'Emaan';
secondName = 'New Emaan';
console.log(secondName);

let fullName = firstName + ' ' + secondName;

console.log(fullName);

let number = 10;
console.log(typeof number);

let number1 = 10;
let number2 = 20;
let sum = 0;
sum = number1 - number2;

console.log(sum);

let number3 = 4;
let number4 = 3;
let remainder;

remainder = number3 % number4;

console.log(remainder);

let number5 = 3;
let number6 = 2;
let exponent = number5 ** number6;

console.log(exponent);

let increment = 1;
increment++;
console.log(increment);

let decrement = 1;
decrement--;
console.log(decrement);

let newIncrement = 1;
newIncrement += 3;
console.log(newIncrement);

let newDecrement = 1;
newDecrement -= 3;
console.log(newDecrement);

let number7 = 8;
let number8 = '8';

console.log(number7 == number8);
console.log(number7 === number8);

let number9 = 7;
let number10 = '9';

console.log(number9 != number10);
console.log(number9 !== number10);

// AND T <-> T = T
let number11 = 10;
let number12 = 12;

console.log(number11 === 10 && number12 === 12);
console.log(number11 && number12);

// OR F <-> F = F , F <-> T = T
console.log(number11 === 12 || number12 === 10);
console.log(number11 || number12);

//NOT Inverter
let check = false;
console.log(!check);

const displayName = check ? 'Hamza' : 'Emaan';

console.log(displayName);

// kebab case -> first-name
// camel case -> upper camel case -> lower camel case

// upper camel case -> FirstName
// lower camel case -> firstName
