function HashTable() {
  var table = new Array(137)

  function simpleHash(data) {

    return data.split('').reduce((acc, val) => {
      acc += val.charCodeAt();
      return acc;
    }, 0) % table.length;

  }

  function put(data) {
    let pos = simpleHash(data);
    table[pos] = data
  }

  function showDistro() {
    table.forEach((elm, i) => {
      elm && console.log(`${i}: ${elm}`);
    });
  }

  return {
    simpleHash,
    put,
    showDistro
  }

}

var someNames = ["David", "Jennifer", "Donnie", "Raymond",
"Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];

var hTable = HashTable();

someNames.forEach((elm) => {
  hTable.put(elm);
});

hTable.showDistro();
