const asyncHandler = require('express-async-handler');
const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const fillArray = (filledArr, emptyArr) => {
  filledArr.map((i) => {
    let word = i
      .replace(new RegExp('\n', 'g'), ' ')
      .replace(/[.,\/#!?$%\^&\*;:{}=\_`~"“()]/g, ' ')
      .toLowerCase();

    if (word.includes(' ')) {
      let cleanup = word.split(' ');
      for (let j = 0; j < cleanup.length; j++) {
        emptyArr.push(cleanup[j]);
      }
    } else {
      emptyArr.push(word);
    }
  });
};

const parseFile = asyncHandler(async (req, res) => {
  let bookBuffer = fs.readFileSync(path.join(__dirname, '../seedData/mobyDick.pdf'));
  let bookArr = [];

  pdf(bookBuffer).then((book) => {
    let file = book.text.split(' ');
    fillArray(file, bookArr);
    res.send(bookArr);
  });
});

const parseStopWords = asyncHandler(async (req, res) => {
  let excludeBuffer = fs.readFileSync(path.join(__dirname, '../seedData/stopWordList.pdf'));
  let excludeArr = [];

  pdf(excludeBuffer).then((stopWords) => {
    let file = stopWords.text.split(' ');
    fillArray(file, excludeArr);
    res.send(excludeArr);
  });
});

module.exports = {
  parseFile,
  parseStopWords,
};
