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
    if (this.getElement() > elm) {
      return;
    }
    this.next();
  }

  this.append(elm);
};

newList.insertIfGreatest(3);

console.log(newList.toString());
