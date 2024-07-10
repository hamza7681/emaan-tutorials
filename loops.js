// 1) while loop
// 2) do while loop
// 3) for loop -> Most Important Loop

let firstName = 'Emaan';
let i = 0;

while (i < 5) {
  console.log(firstName, 'Loop running attempts', i);
  i++;
}

let j = 0;

do {
  console.log(firstName, 'Loop running attempts', j);
  j++;
} while (j < 5);

for (let k = 0; k < 5; k++) {
  console.log(firstName, 'Loop running attempts', k);
}

// Today Task

// Create the table of 2 using for loop like following
// 2 x 1 = 2
// 2 x 2 = 4
// 2 x 3 = 6
