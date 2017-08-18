function Dictionary() {
  const dataStore = [];
  count = 0;

  function add(key, value) {
    dataStore[key] = value;
    count++;
  }

  function find(key) {
    return dataStore[key];
  }

  function remove(key) {
    delete dataStore[key];
    --count;
  }

  function showAll() {
    for (let key in dataStore) {
      console.log(`Key is ${key} and value is ${dataStore[key]}\n`);
    }
  }

  function getCount() {
    return count;
  }

  function clear() {
    for (let item in dataStore) {
      delete dataStore[item];
    }
  }

  return {
    add,
    find,
    remove,
    showAll,
    getCount
  };
}

var pbook = Dictionary();
pbook.add('Mike', '123');
pbook.add('David', '345');
pbook.add('Cynthia', '456');
console.log("David's extension: " + pbook.find('David'));
pbook.remove('David');
pbook.showAll();
console.log(`Number of entries ${pbook.getCount()}`);
