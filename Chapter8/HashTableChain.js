function HashTable() {
  var table = new Array(137);

  for (let i = 0; i < table.length; i++) {
    table[i] = [];
  }

  // Horner's method
  function betterHash(string) {
    const H = 37;
    return (
      +string.split('').reduce((acc, val) => {
        acc += H * acc + val.charCodeAt();
        return acc;
      }, 0) % table.length
    );
  }

  function put(key, data) {
    let i = 0;
    let pos = betterHash(key);

    if (!table[pos]) {
      table[pos].push(key, data);
    } else {
      while (table[pos][i] !== undefined) {
        i++;
      }
      table[pos].push(key, data);
    }
  }

  function get(key) {
    const pos = betterHash(key);
    let i = 0;
    while (table[pos][i] && table[pos][i] !== key) {
      i++;
    }
    return table[pos][i + 1];
  }

  function showDistro() {
    table.forEach((elm, i) => {
      elm[0] && console.log(`${i}: ${elm}`);
    });
  }

  return {
    betterHash,
    put,
    showDistro,
    get
  };
}

var hTable = new HashTable();
var someNames = [
  'David',
  'Jennifer',
  'Donnie',
  'Raymond',
  'Cynthia',
  'Mike',
  'Clayton',
  'Danny',
  'Jonathan'
];
for (var i = 0; i < someNames.length; ++i) {
  hTable.put(someNames[i]);
}
hTable.showDistro();
