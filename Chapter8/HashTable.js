function HashTable() {
  var table = new Array(137);

  // Simple Hash
  // function simpleHash(data) {
  //   return data.split('').reduce((acc, val) => {
  //     acc += val.charCodeAt();
  //     return acc;
  //   }, 0) % table.length;
  // }

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

  function put(data) {
    let pos = betterHash(data);
    table[pos] = data;
  }

  function showDistro() {
    table.forEach((elm, i) => {
      elm && console.log(`${i}: ${elm}`);
    });
  }

  return {
    betterHash,
    put,
    showDistro
  };
}

var someNames = [
  'David',
  'Dave',
  'Jennifer',
  'Donnie',
  'Raymond',
  'Cynthia',
  'Mike',
  'Clayton',
  'Danny',
  'Dan',
  'Jonathan'
];

var hTable = HashTable();

someNames.forEach(elm => {
  hTable.put(elm);
});

hTable.showDistro();
