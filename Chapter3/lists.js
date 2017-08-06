function List() {
  let listSize = 0;
  let pos = 0;
  let dataStore = [];

  const clear = () => {
    dataStore = [];
    listSize = pos = 0;
  };

  const append = val => {
    dataStore[listSize++] = val;
  };

  const find = elm => {
    for (let i = 0; i < dataStore.length; i++) {
      if (dataStore[i] === elm) {
        return i;
      }
    }
    return -1;
  };

  const remove = elm => {
    const foundIdx = find(elm);

    if (foundIdx > -1) {
      dataStore.splice(foundIdx, 1);
      --listSize;
      return true;
    }

    return false;
  };

  const length = () => listSize;

  const toString = () => dataStore;

  const insert = (elm, after) => {
    const location = find(after);
    if (location > -1) {
      dataStore.splice(location++, 0, elm);
      --listSize;
      return true;
    }
    return false;
  };

  const contains = elm => (find(elm) !== -1 ? true : false);

  const front = () => {
    pos = 0;
  };

  const end = () => {
    pos = listSize - 1;
  };

  const prev = () => {
    if (pos > 0) {
      --pos;
    }
  };

  const next = () => {
    if (pos < listSize - 1) {
      pos++;
    }
  };

  const currPos = () => pos;

  const moveTo = position => {
    if (position > -1 && position < listSize) {
      pos = position;
    }
  };

  const getElement = () => dataStore[pos];

  return {
    clear,
    append,
    find,
    remove,
    length,
    toString,
    insert,
    contains,
    front,
    end,
    prev,
    next,
    currPos,
    moveTo,
    getElement
  };
}

var names = List();
names.append('Cynthia');
names.append('Raymond');
names.append('Barbara');

console.log(names.toString());
names.remove('Raymond');
console.log(names.toString());
