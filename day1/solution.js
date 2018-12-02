const fs = require('fs');

const getInput = (source) => {
  const data = fs.readFileSync('./puzzleinput.txt');
  return data.toString();
};

const data = getInput('./puzzleinput.txt');
const frequency = eval(data);

console.log(`Part 1: The resulting frequency is ${frequency}.`);

const dataArray = data.split('\n');
// removes empty string due to annoying blank line at end of file on save
dataArray.pop();

let duplicateFrequencyFound = false;
let currentFrequency = 0;
const arrayOfFrequencies = [];

while (!duplicateFrequencyFound) {
  let dataArrayLength = dataArray.length;
  for (let i = 0; i < dataArrayLength; i++) {
    currentFrequency = eval(currentFrequency + dataArray[i]);
    if (arrayOfFrequencies.includes(currentFrequency)) {
      console.log(`Part 2: The first frequency it reaches twice is ${currentFrequency}.`);
      duplicateFrequencyFound = true;
      return;
    } else {
      arrayOfFrequencies.push(currentFrequency);
    }
  }
}
