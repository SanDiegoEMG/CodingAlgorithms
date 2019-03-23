// Universal variables
var letters = "abcdefghijklmnopqrstuvwxyz".split("");
var practiceString = "My Bonnie lies under the ocean";

//  #1
function abbrevName(name) {
  //  separate string at the space
  var space = name.search(" ");
  var start = space + 1;
  var end = start + 1;

  //  take first letter of each new string
  var firstInitial = name.slice(0, 1);
  var secondInitial = name.slice(start, end);
  //  make uppercase and concatenate with a .

  //   console.log('this is start ' + start);
  //   console.log('end ' + end);
  //   console.log('firstWord is ' + firstWord);
  //   console.log('secondWord is ' + secondWord);
  //   console.log('this is firstInitial: ' + firstInitial);
  //   console.log('this is secondInitial: ' + secondInitial);

  console.log(firstInitial + "." + secondInitial);
}
// "E.C"  "D.M"   "P.F");
abbrevName("Evan Cole");
abbrevName("David Mendieta");
abbrevName("P Favuzzi");
// End #1

// #2
//  loop through string
//  ignore anything that isn't a letter
//  if it is a letter, push its cooresponding number of the alphabet to newArray
//  as a string, return all the numbers - sequentially and separated by a space

function alphabetPosition(text) {
  var character = "";
  var newArray = [];

  for (var i = 0; i < text.length; i++) {
    character = text.charAt(i).toLowerCase();
    if (letters.indexOf(character) > -1) {
      newArray.push(letters.indexOf(character) + 1);
      var stringArray = newArray.toString();
    }
  }

  if (stringArray) {
    stringArray = stringArray.replace(/,/g, " ");
    console.log("stringArray: " + stringArray);
  } else console.log("wtf?!!");
}

alphabetPosition(practiceString);
// End #2

// #3  Find numbers which are divisible by given number
function divisibleBy(numbers, divisor) {
  const divArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % divisor === 0) {
      divArray.push(numbers[i]);
    }
  }
  console.log(divArray);
}
divisibleBy([3, 5, 6, 8, 9, 14, 16, 22, 25, 36, 38], 5);
// End #3

// #4 Highest Scoring Word (6 kyu)
// Given a string of words, find the highest scoring word.

//  return highest scoring word as a string
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid
function highScoreWord(str) {
  // split the words in the provided string apart
  var words = str.split(" ");
  let wordValueArray = [];
  //  sum the total of each word
  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];
    let counter = 0;
    let currentWordTally=0;

    while (counter < currentWord.length) {
      let character = currentWord.charAt(counter).toLowerCase();
      currentWordTally += (letters.indexOf(character) + 1);
      counter++;
     }
     wordValueArray.push(currentWordTally);

  }
  // compare to find highest word value
  console.log(wordValueArray);
  let highBid = Math.max.apply(null, wordValueArray);
  console.log(highBid);
  console.log(str);
  let index = wordValueArray.indexOf(highBid);
  // returns word with matching index
  console.log(words[index]);
};

highScoreWord(practiceString);
highScoreWord("Oh what a wonderful morning, oh what a wonderful day!")
// End #4

// Start #5   Circle of Numbers
function circleOfNumbers(n, firstNumber) {
  // let totalNumbers = (n + 1) - firstNumber;
  // console.log(totalNumbers);
  // let half = totalNumbers/2;
  // console.log(half)
  // let opposite = firstNumber + half;
  // console.log(opposite);

    console.log ((firstNumber + n/2) % n)

}

circleOfNumbers(10, 7);


// End #5


// Start #6  "Who is going to pay for the wall?""

function whoIsPaying(name){
  // show full name 
  var finalProduct = [];
  finalProduct.push(name);
  // if name <= 2 characters, return name
  if (name.length <= 2) {
  console.log(finalProduct);
  }
  else {
  // show two letters from each neighbors names as array
  var firstTwo = name.slice(0,2);
  finalProduct.push(firstTwo);
  console.log(finalProduct);
  }
}

whoIsPaying("Gopher");