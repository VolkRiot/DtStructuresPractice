function HashTable() {
  var table = new Array(137);

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

  function buildChains() {
    for (let i = 0; i < table.lengh; i++) {
      table[i] = [];
    }
  }

  function put(key, data) {
    let i = 0;
    let pos = betterHash(key);
    console.log('This thing', table[pos]);
    if (!table[pos]) {
      table[pos].push(key, data);
    } else {
      while (table[pos][i] !== undefined) {
        i++;
      }
      table[pos][i].push(key, data);
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

  buildChains();

  return {
    betterHash,
    put,
    showDistro,
    get,
    buildChains
  };
}

var hTable = HashTable();
hTable.buildChains();
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
