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
