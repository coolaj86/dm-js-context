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

function isOver25() {
  var person = this;

  if (person.age > 25) {
    return true;
  }
  return false;
}
function getName() {
  var person = this;
  return person.name;
}
function getAge() {
  var person = this;
  return person.age;
}
/*
var Person = {};
Person.create = function () {
}
*/

for (var i = 0; i < people.length; i += 1) {
  people[i].isOver25 = isOver25;
  people[i].getAge = getAge;
}

//isOver25()
aj.isOver25(); // Implicit // aj is context, isOver25
// context.isOver25
// this.isOver25

var getAjsAge = getAge.bind(aj);
console.log(getAjsAge());

var skills = ['Programmer', 'DJ', 'Mathmagician'];
function showSkillz(skillA, skillB) {
  var person = this;

  console.log(
      person.name + " has Ninja "
    + skillA + " skills"
    + " and is a Wizard " + skillB
  );
}

// showSkillz.bind(context) // context becomes 'this'
var showAjsSkillz = showSkillz.bind(aj); // Explicit, returns new fn
//showAjsSkillz('Bat', 'Rabbit');

// showSkillz.call(aj, skills[0], skills[1]);
showSkillz.call(aj, skills[0], skills[1]); // Explicit, execs with params
showSkillz.apply(aj, skills); // Explicit, execs decomposes / expands arr

//console.log(aj.isOver25());
//console.log(aj.getAge());
