let person = {
  name: 'Emaan',
  age: 22,
  class: 'Nursery',
  school: 'MC High School',
  address: {
    area: 'Hajiabad',
    city: 'Fsd',
  },
};

//To access object property
console.log(person.name);

//To access nested object
console.log(person.address.area);

//To add new property in object
person.hobby = 'Cooking';

//To delete property in object
delete person.class;

//Destructuring of object -> always with const
const {name, age, address, school} = person;
const {area, city} = address;
console.log(age, school, area, city);

//for loop on object -> for-in loop -> use to access the names of object properties
for (const prop in person) {
  console.log(prop);
}
