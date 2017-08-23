function Node(elm) {
  return {
    elm,
    prev: null,
    next: null
  };
}

function DoublyLList() {
  const head = Node('head');
  let current = head;

  function insert(newElement, item) {
    var newNode = Node(newElement);
    var currNode = find(item);

    newNode.next = currNode.next;
    newNode.prev = currNode;
    currNode.next = newNode;
  }

  function find(item) {
    let node = head;
    while (node && node.elm !== item) {
      node = node.next;
    }

    return node;
  }

  function remove(item) {
    let toRemove = find(item);
    const prevNode = toRemove.prev;
    prevNode.next = toRemove.next;
    toRemove.next.prev = prevNode;
    delete toRemove.next;
    delete toRemove.prev;
  }

  function findLast() {
    let start = head;
    while (start.next !== null) {
      start = start.next;
    }
    return start;
  }

  function dispReverse() {
    let currNode = this.findLast();
    while (currNode.prev !== null) {
      currNode = currNode.prev;
    }
  }

  function display() {
    let currNode = head;
    while (currNode.next !== null) {
      console.log(currNode.next.elm);
      currNode = currNode.next;
    }
  }

  function advance(n) {
    for (let i = 0; i < n; i++) {
      current = current.next;
      if (current === null) {
        break;
      }
    }
    return current;
  }

  function back(n) {
    for (let i = 0; i < n; i++) {
      current = current.prev;
      if (current === null) {
        break;
      }
    }
    return current;
  }

  function show() {
    return current.elm;
  }

  return {
    insert,
    find,
    remove,
    findLast,
    dispReverse,
    display,
    advance
  };
}

var cities = DoublyLList();
cities.insert('Conway', 'head');
cities.insert('Russellville', 'Conway');
cities.insert('Carlisle', 'Russellville');
cities.insert('Alma', 'Carlisle');
cities.display();
cities.remove('Carlisle');
cities.display();
cities.dispReverse();
