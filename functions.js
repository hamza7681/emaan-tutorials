let a = 10;
let b = 20;
let sum = 0;
let minus = 0;
let multiply;

// common js function declaration
function calculateSum() {
  sum = a + b;
}

calculateSum();

console.log(sum);

//Immediate Invoked Functions (IIEFs)
(function () {
  minus = b - a;
})();

console.log(minus);

// fat arrow function
const calculateMultiplication = () => {
  multiply = a * b;
};

calculateMultiplication();

console.log(multiply);

// parameters and arguments
const getSum = (x, y) => {
  return x + y;
};

const result = getSum(30, 40);
const result2 = getSum(40, 40);
console.log(result);
console.log(result2);

// parameters and arguments inside object
const getFullName = ({firstName, lastName}) => {
  return firstName + ' ' + lastName;
};

const yourName = getFullName({firstName: 'Emaan', lastName: 'Attitude Girl'});
console.log(yourName);

// use of Template Literals -> allow to use JS variables inside string
const getAge = ({age}) => {
  return `My age is ${age}`;
};

const myAge = getAge({age: 20});
console.log(myAge);
