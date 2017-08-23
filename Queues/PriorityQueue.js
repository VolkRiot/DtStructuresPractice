function Node(name, priority) {
  return {
    name,
    priority
  };
}

function PQueue() {
  let dataStore = [];

  function enqueue(elm) {
    dataStore.push(elm);
  }

  function dequeue() {
    // Lower num means higher priority
    let highPriority = dataStore[0].priority;
    let highPrioIdnx = 0;
    for (let i = 0; i < dataStore.length; i++) {
      if (dataStore[i].priority < highPriority) {
        highPriority = dataStore[i].priority;
        highPrioIdnx = i;
      }
    }
    return dataStore.splice(highPrioIdnx, 1);
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
      final += `${dataStore[i].name}, priority: ${dataStore[i].priority} \n`;
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

var p = Node('Smith', 5);
var ed = PQueue();
ed.enqueue(p);
p = Node('Jones', 4);
ed.enqueue(p);
p = Node('Fehrenbach', 6);
ed.enqueue(p);
p = Node('Brown', 1);
ed.enqueue(p);
p = Node('Ingram', 1);
ed.enqueue(p);
console.log(ed.toString());
var seen = ed.dequeue();
console.log('Patient being treated: ' + seen[0].name);
console.log('Patients waiting to be seen: ');
console.log(ed.toString());
// another round
var seen = ed.dequeue();
console.log('Patient being treated: ' + seen[0].name);
console.log('Patients waiting to be seen: ');
console.log(ed.toString());
var seen = ed.dequeue();
console.log('Patient being treated: ' + seen[0].name);
console.log('Patients waiting to be seen: ');
console.log(ed.toString());
