const _ = require('lodash');
var months = ['A', 'B', 'C', 'D', 'E', 'H', 'L', 'M', 'P', 'R', 'S', 'T'];
var birthTown = [
  'A271',
  'A345',
  'A944',
  'B519',
  'D612',
  'F205',
  'G237',
  'G942',
  'L219',
  'L424',
  'Z236',
];

let indexAndEvenValues = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
  F: 5,
  G: 6,
  H: 7,
  I: 8,
  J: 9,
  K: 10,
  L: 11,
  M: 12,
  N: 13,
  O: 14,
  P: 15,
  Q: 16,
  R: 17,
  S: 18,
  T: 19,
  U: 20,
  V: 21,
  W: 22,
  X: 23,
  Y: 24,
  Z: 25,
};
let indexAndOddValues = {
  0: 1,
  1: 0,
  2: 5,
  3: 7,
  4: 9,
  5: 13,
  6: 15,
  7: 17,
  8: 19,
  9: 21,
  A: 1,
  B: 0,
  C: 5,
  D: 7,
  E: 9,
  F: 13,
  G: 15,
  H: 17,
  I: 19,
  J: 21,
  K: 2,
  L: 4,
  M: 18,
  N: 20,
  O: 11,
  P: 3,
  Q: 6,
  R: 8,
  S: 12,
  T: 14,
  U: 16,
  V: 10,
  W: 22,
  X: 25,
  Y: 24,
  Z: 23,
};

let name = 'Shahzaib';
let surName = 'Tariq';
let d = '08-12-1995';
let town = 10;
let finalCharater = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

function removeEmptyspces(name) {
  return name.replace(/[,]/g, '');
}

let takeFirstThreeChratcers = name => name.substr(0, 3);
let str = string => string.replace(/[aeiou]/g, '');

function replaceName(name) {
  let result = removeEmptyspces(
    _.uniq(name)
      .map(str)
      .toString()
  );
  return takeFirstThreeChratcers(result);
}
let day = d => d.substr(0, 2);
let month = d => parseInt(d.substr(3, 5));
let year = d => d.substr(8, 10);
let monthCharacter = month => months[month - 1];
let townCode = t => birthTown[t];

let date = year(d) + monthCharacter(month(d)) + day(d);
let code = replaceName(name) + replaceName(surName) + date + townCode(town);
let allUpperCase = code.toUpperCase();

function evencharcters(str) {
  let evenArray = [];
  for (let i = 1; i < str.length; i += 2) {
    evenArray.push(str[i]);
  }
  return evenArray;
}

function oddcharcters(str) {
  let oddArray = [];
  for (let i = 0; i < str.length; i += 2) {
    oddArray.push(str[i]);
  }
  return oddArray;
}
let allEvenNumbers = evencharcters(allUpperCase);
let allOddNumbers = oddcharcters(allUpperCase);

let evenVal = v => indexAndEvenValues[v];
let oddVal = v => indexAndOddValues[v];

function evenValued(arr) {
  let sum = 0;
  let retArr = [];
  for (let i = 0; i < arr.length; i++) {
    sum += retArr.push(evenVal(arr[i]));
  }
  return sum;
}

function oddValued(arr) {
  let retArr = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += retArr.push(oddVal(arr[i]));
  }
  return sum;
}
let sumOfEvenAndOddNumbers =
  evenValued(allEvenNumbers) + oddValued(allOddNumbers);

let remainder = r => r % 26;
let finalLetter = remainder(sumOfEvenAndOddNumbers);
console.log(allUpperCase + finalCharater[finalLetter]);
