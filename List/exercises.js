const List = require('./lists');

let newList = List();

for (let i = 0; i < 12; i++) {
  newList.append(Math.floor(Math.random() * 20));
}

/*1. Write a function that inserts an element into a list only if the element to
be inserted is larger than any of the elements currently in the list. Larger
can mean either greater than when working with numeric values, or further down
in the alphabet, when working with textual values. */

newList.insertIfGreatest = function(elm) {
  this.front();

  while (this.currPos() < this.length()) {
    if (this.getElement() >= elm) {
      return;
    }
    this.next();
  }

  this.append(elm);
};

newList.insertIfGreatest(25);

console.log(newList.toString());

/* 2. Write a function that inserts an element into a list only if the element
to be inserted is smaller than any of the elements currently in the list. */

newList.insertIfSmallest = function(elm) {
  this.front();

  while (this.currPos() < this.length()) {
    if (this.getElement() <= elm) {
      return;
    }
    this.next();
  }

  this.append(elm);
};

newList.insertIfSmallest(-1);

console.log(newList.toString());

/* Create a Person class that stores a person’s name and their gender. Create a
list of at least 10 Person objects. Write a function that displays all the
people in the list of the same gender. */

function Person(nmn, gndr) {
  // We are more than just our names and genders JS exercise, but ok...
  const name = nmn;
  const gender = gndr;

  const getName = () => name;
  const getGender = () => gender;
  const showPerson = () => {
    console.log(`Name: ${name}\nGender: ${gender}\n\n`);
  };

  return {
    getName,
    getGender,
    showPerson
  };
}

const newMan /* Lol get it! */ = Person('Newman', 'male');

const personList = List();

let names = [
  'Misha',
  'Crystal',
  'David',
  'Flavio',
  'Dima',
  'Rima',
  'Alla',
  'Ryan',
  'Sarah',
  'Michelle'
];
let gender = [
  'male',
  'female',
  'male',
  'male',
  'male',
  'female',
  'female',
  'male',
  'female',
  'female'
];

personList.clear();
personList.front();

for (let p = 0; p < 10; p++) {
  personList.append(
    Person(
      names[Math.floor(Math.random() * names.length)],
      Math.floor(Math.random() * 2) === 0 ? 'male' : 'female'
    )
  );
}

function allOfGender(gndr, list) {
  const gender = typeof gndr === 'string' ? String(gndr.trim()) : null;
  let final = [];
  if (gender !== 'male' && gender !== 'female') {
    return [];
  } else {
    for (let i = 0; i < list.length(); i++) {
      if (list.getElement().getGender() === gender) {
        list.getElement().showPerson();
      }
      list.next();
    }
  }
}

allOfGender('female', personList);
