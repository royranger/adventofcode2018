const fs = require('fs');

const getInput = (source) => {
  const data = fs.readFileSync(source);
  const stringified = data.toString();
  const arrayOfIds = stringified.split('\n');
  arrayOfIds.pop();
  return arrayOfIds;
};

const ids = getInput('./puzzleInput.txt');
const twiceArray = [];
const thriceArray = [];

ids.forEach(id => {
  for (let i = 97; i <= 122; i++) {
    if (id.split(String.fromCharCode(i)).length-1 === 2) {
      twiceArray.push(id);
    }
    if (id.split(String.fromCharCode(i)).length-1 === 3) {
      thriceArray.push(id);
    }
  }
});

const uniqueTwiceArray = [...new Set(twiceArray)];
const uniqueThriceArray = [...new Set(thriceArray)];

const checksum = uniqueTwiceArray.length * uniqueThriceArray.length;
console.log(`The checksum is ${checksum}!`);

let commonLetters = '';

ids.forEach(id => {
  ids.forEach(otherId => {
    let commonLettersArray = [];
    for (let i = 0; i < id.length; i++) {
      if (id[i] === otherId[i]) {
        commonLettersArray.push(id[i]);
      }
    }
    if (commonLettersArray.length === id.length-1) {
      commonLetters = (commonLettersArray.join(''));
      return;
    }
  })
});

console.log(`The common letters are ${commonLetters}`);
