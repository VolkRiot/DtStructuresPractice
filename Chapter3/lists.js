function List() {
  let listSize = 0;
  let pos = 0;
  let dataStore = [];

  const clear = () => {
    dataStore = [];
    listSize = 0;
    pos = 0;
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

  const length = () => {
    return listSize;
  };

  const toString = () => {
    // I know tehnically not a string but a useful view
    // Can be cast to String() is so wish
    return dataStore;
  };

  return {
    clear,
    append,
    find,
    remove,
    length,
    toString
  };
}

var names = List();
names.append('Cynthia');
names.append('Raymond');
names.append('Barbara');

console.log(names.toString());
names.remove('Raymond');
console.log(names.toString());
