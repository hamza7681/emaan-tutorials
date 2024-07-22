const fruits = ['Banana', 'Apple', 'Orange', 'Mango'];

//To access element of array using index
console.log(fruits[2]);

//Destructuring of Array
const [first, second, third, forth] = fruits;

console.log(first);

//add element to the last of array
fruits.push('Pear');

console.log(fruits);

//remove element from the last
fruits.pop();

console.log(fruits);

//add element in the start of array
fruits.unshift('Pear');

console.log(fruits);

//remove element from the start of array
fruits.shift();

console.log(fruits);

//count elements of array / total length of array
const totalLength = fruits.length;

console.log(totalLength);

//To find the index of any element present in array -> findIndex() -> It returns number
const findIndexOfElem = fruits.findIndex((item) => item === 'Apple');

console.log(findIndexOfElem);

//To display the elements of array -> map() -> It returns array
fruits.map((item) => {
  console.log(item);
});

//To display the elements of array -> forEach() -> It returns nothing
fruits.forEach((item) => {
  console.log(item);
});

//To filter the array -> filter() -> It returns array
const filteredArr = fruits.filter((item) => item !== 'Apple');

console.log(filteredArr);

//To find single element in array -> find() -> it return single value
const findElem = fruits.find((item) => item === 'Apple');

console.log(findElem);

//To sort elements of array -> sort() -> It returns sorted array
const sortedArr = fruits.sort();
console.log(sortedArr);

let personData = [
  {name: 'Emaan', age: 22, city: 'FSD'},
  {name: 'Hamza', age: 26, city: 'LHR'},
  {name: 'Ali', age: 18, city: 'ISB'},
  {name: 'Umar', age: 30, city: 'KHI'},
];

//Format array with map method
const formattedArr = personData.map((item, index) => {
  return {
    name: item.name,
    city: item.city,
    id: index + 1,
  };
});

console.log(formattedArr);

//Find those persons which are greater than 18
const filteredData = personData.filter((item) => item.age > 18);

console.log(filteredData);

//Find person who live in FSD
const findPerson = personData.find((item) => item.city === 'FSD');

console.log(findPerson.name);

//Find single person by filter method
const findFilteredPerson = personData.filter((item) => item.city === 'FSD')[0];

console.log(findFilteredPerson.name);

//Find fruit by includes() -> It return boolean -> true/false
const findFruit = fruits.includes('Apple');

console.log(findFruit);

//To validate every element of array -> every() -> It return boolean -> true/false
const everyData = personData.every((item) => item.age > 18);

console.log(everyData);

//To validate some element of array -> some() -> It return boolean -> true/false
const someData = personData.some((item) => item.age > 18);

console.log(someData);

//for loops on array
let newPersonData = [
  {name: 'Emaan', city: 'FSD'},
  {name: 'Hamza', city: 'LHR'},
  {name: 'Ali', city: 'ISB'},
  {name: 'Umar', city: 'KHI'},
];

// Basic For Loop
for (let i = 0; i < newPersonData.length; i++) {
  console.log(newPersonData[i].name);
}

//for-of loop
for (const item of newPersonData) {
  console.log(item.name);
}

//condition in for loop
for (let i = 0; i < newPersonData.length; i++) {
  if (newPersonData[i].name === 'Emaan') {
    console.log(newPersonData[i]);
  }
}

//condition in for-of loop
for (const item of newPersonData) {
  if (item.name === 'Hamza') {
    console.log(item);
  }
}

// convert string into array
let firstName = 'How are you doing today?';
const nameArray = firstName.split(' ');

console.log(nameArray);

// convert string array into string
const name = nameArray.join(' ');
console.log(name);
