'use strict';

var people = [
  { name: 'AJ'
  , age: 29
  }
, { name: 'Adeline'
  , age: 25
  }
];

var aj = people[0];

function isOver25(person) {
  if (person.age > 25) {
    return true;
  }
  return false;
}
function getName(person) {
  return person.name;
}
function getAge(person) {
  return person.age;
}

console.log(isOver25(aj));
console.log(isOver25(people[1]));
console.log(getName(people[0]));
console.log(getAge(people[0]));
