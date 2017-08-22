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

  function put(key, data) {
    let pos = betterHash(key);
    table[pos] = data;
  }

  function get(key) {
    const pos = betterHash(key);
    return table[pos];
  }

  function showDistro() {
    table.forEach((elm, i) => {
      elm && console.log(`${i}: ${elm}`);
    });
  }

  return {
    betterHash,
    put,
    showDistro,
    get
  };
}

// var someNames = [
//   'David',
//   'Jennifer',
//   'Donnie',
//   'Raymond',
//   'Cynthia',
//   'Mike',
//   'Clayton',
//   'Danny',
//   'Dan',
//   'Jonathan'
// ];
//
// var hTable = HashTable();
//
// someNames.forEach(elm => {
//   hTable.put(elm);
// });
//
// hTable.showDistro();

var pnumbers = HashTable();
var name, number;

pnumbers.put('Misha', '555-555-555');
pnumbers.put('Flavio', '666-666-555');
pnumbers.put('Rima', '444-444-444');

console.log(`Misha key returns ${pnumbers.get('Misha')}`);
console.log(`Rima key returns ${pnumbers.get('Rima')}`);
console.log(`Flavio key returns ${pnumbers.get('Flavio')}`);
