// Number one
const grades = {
  scores: [90, 85, 73, 98],
  addGrade: function(newGrade) {
    this.scores.push(newGrade);
  },
  showAvg: function() {
    return (
      this.scores.reduce((acc, elm) => {
        return (acc += elm);
      }, 0) / this.scores.length
    );
  }
};

console.log(grades.showAvg());

// Number two

const words = ['one', 'brown', 'dog', 'cat'];

words.forEach(elm => {
  console.log(elm);
});

// Reverse

words.forEach((elm, i, array) => {
  console.log(array[array.length - 1 - i]);
});

//  Number 3
function weekTemps() {
  this.dataStore = [];
  this.add = add;
  this.averageWeek = averageWeek;
  this.averageMonth = averageMonth;
}

function add(week, temps) {
  if (week > -1 && week < 4) {
    this.dataStore[week] = temps;
  }
}

function averageWeek(week) {
  var total = 0;
  var week = this.dataStore[week] ? [...this.dataStore[week]] : null;

  if (!week) return 0;

  for (var i = 0; i < week.length; ++i) {
    total += week[i];
  }
  return total / week.length;
}

function averageMonth() {
  return (
    this.dataStore.reduce((acc, week, i) => {
      return (acc += this.averageWeek(i));
    }, 0) / 4
  );
}

let monthTemps = new weekTemps();

monthTemps.add(0, [86, 77, 65, 68, 55, 90, 101]);
monthTemps.add(1, [56, 67, 105, 68, 55, 91, 84]);
monthTemps.add(2, [86, 77, 78, 68, 55, 90, 101]);
monthTemps.add(3, [38, 77, 43, 68, 45, 90, 101]);

console.log(monthTemps.averageMonth());

// 4 Letters array

function letterObj(string) {
  let ltrArr = string.split('');

  return {
    showWord: function() {
      console.log(ltrArr.join(''));
    }
  };
}

const myWord = letterObj('Doggo');
myWord.showWord();
