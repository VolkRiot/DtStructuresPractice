function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
}

function Stack() {
  const dataStore = [];
  let top = 0;

  const push = elm => {
    dataStore[top++] = elm;
  };

  const pop = () => dataStore[--top];

  const peek = () => dataStore[top - 1];

  const length = () => top;

  const clear = () => {
    top = 0;
  };

  return {
    push,
    pop,
    peek,
    length,
    clear
  };
}

module.exports = Stack;

// const s = Stack();
//
// s.push('David');
// s.push('Raymond');
// s.push('Bryan');
// console.log('length: ' + s.length());
// console.log(s.peek());
// var popped = s.pop();
// console.log('The popped element is: ' + popped);
// console.log(s.peek());
// s.push('Cynthia');
// console.log(s.peek());
// s.clear();
// console.log('length: ' + s.length());
// console.log(s.peek());
// s.push('Clayton');
// console.log(s.peek());
