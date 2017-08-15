function Queue() {
  let dataStore = [];

  function enqueue(elm) {
    dataStore.push(elm);
  }

  function dequeue() {
    return dataStore.shift();
  }

  function front() {
    return dataStore[0];
  }

  function back() {
    return dataStore[dataStore.length - 1];
  }

  function toString() {
    let final = '';
    for (let i = 0; i < dataStore.length; i++) {
      final += `${dataStore[i]}, `;
    }
    return final;
  }

  function empty() {
    return dataStore.length === 0;
  }

  return {
    enqueue,
    dequeue,
    front,
    back,
    toString
  };
}

const q = Queue();
q.enqueue('Meredith');
q.enqueue('Cynthia');
q.enqueue('Jennifer');
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log(`Front of queue: ${q.front()}`);
console.log(`Back of queue: ${q.back()}`);
