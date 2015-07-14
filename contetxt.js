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

console.log(isOver25(aj));
console.log(isOver25(people[1]));
