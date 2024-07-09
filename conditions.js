// 1) if condition
// 2) if-else condition
// 3) if else if condition
// 4) switch condition

let firstName = 'Hamza';

if (firstName === 'Hamza') {
  console.log('Pass');
}

if (firstName === 'Hamasdsadza') {
  console.log('Pass');
} else {
  console.log('Fail');
}

if (firstName === 'Hamza') {
  console.log('Pass');
} else if (firstName === 'Emaan') {
  console.log('Fair');
} else if (firstName === 'Ali') {
  console.log('Good');
} else {
  console.log('Fail');
}

switch (firstName) {
  case 'Hamza':
    console.log('Pass');
    break;
  case 'Emaan':
    console.log('Fair');
    break;
  default:
    console.log('Fail');
    break;
}

let day;

console.log(new Date().getDay());

switch (new Date().getDay()) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 2:
    day = 'Tuesday';
    break;
  case 3:
    day = 'Wednesday';
    break;
  case 4:
    day = 'Thursday';
    break;
  case 5:
    day = 'Friday';
    break;
  case 6:
    day = 'Saturday';
}

console.log(day);

// Today Task

// Scenario:

// let person has taken 90 marks in english, 80 marks in maths, 70 marks in Physics, 60 in urdu,
//     calculate the average and percentage of this person
// Note : Marks are out of 100

// greater than 90 percentage then A grade
// greater than or equal to 80 percentage but less than 90 percentage then B grade
// greater than or equal to 70 percentage but less than 80 percentage then C grade
// greater than or equal to 60 percentage but less than 70 percentage then D grade
// less than 60 will be fail

// Hint: use comparison and logical operators
