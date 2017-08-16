function Node(elm) {
  return {
    elm,
    next: null
  };
}

function LList() {
  let head = Node('head');

  function find(item) {
    let node = head;
    while (node && node.elm !== item) {
      node = node.next;
    }

    return node;
  }

  function insert(newElm, item) {
    let newNode = Node(newElm);
    let prevNode = find(item);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
  }

  function display() {
    let currNode = head;
    while (currNode.next !== null) {
      console.log(currNode.next.elm);
      currNode = currNode.next;
    }
  }

  function findprev(item) {
    let currNode = head;
    while (currNode.next !== null && currNode.next.elm !== item) {
      currNode = currNode.next;
    }
  }

  function remove(item) {
    let prev = findprev(item);
    if (prev.next !== null) {
      prev.next = prev.next.next;
    }
  }

  return {
    find,
    insert,
    display,
    findprev
  };
}

let cities = LList();
cities.insert('Conway', 'head');
cities.insert('Russellville', 'Conway');
cities.insert('Alma', 'Russellville');
cities.display();
