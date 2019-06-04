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
// ====================================================================
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
// ====================================================================
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
// ====================================================================
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
    let currentWordTally = 0;

    while (counter < currentWord.length) {
      let character = currentWord.charAt(counter).toLowerCase();
      currentWordTally += letters.indexOf(character) + 1;
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
}

highScoreWord(practiceString);
highScoreWord("Oh what a wonderful morning, oh what a wonderful day!");
// End #4
// ====================================================================
// Start #5   Circle of Numbers
function circleOfNumbers(n, firstNumber) {
  // let totalNumbers = (n + 1) - firstNumber;
  // console.log(totalNumbers);
  // let half = totalNumbers/2;
  // console.log(half)
  // let opposite = firstNumber + half;
  // console.log(opposite);

  console.log((firstNumber + n / 2) % n);
}

circleOfNumbers(10, 7);
// End #5
// ====================================================================
// Start #6  "Who is going to pay for the wall?""
function whoIsPaying(name) {
  // show full name
  var finalProduct = [];
  finalProduct.push(name);
  // if name <= 2 characters, return name
  if (name.length <= 2) {
    console.log(finalProduct);
  } else {
    // show two letters from each neighbors names as array
    var firstTwo = name.slice(0, 2);
    finalProduct.push(firstTwo);
    console.log(finalProduct);
  }
}

whoIsPaying("Gopher");
// Efficient Solution
//function whoIsPaying(name){
//return (name.length>2)?([name, name.substr(0,2)]):[name];
//}
// End #6
// ====================================================================
// Start #7  Reverse words
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  return str
    .split("")
    .reverse()
    .join("")
    .split(" ")
    .reverse()
    .join(" ");
}

console.log(reverseWords("The quick brown   fox jumped over the lazy dog."));

// Thanks for that one Stack Overflow
// End #7
// ====================================================================
// Start #8   Filter out the Geese
var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
var birds = [
  "Goosers",
  "Bumbles",
  "African",
  "Canadian",
  "Steinbacher",
  "Superbad"
];

function gooseFilter(birds) {
  console.log(birds.filter(b => !geese.includes(b)));
}

// Function reference
function filterFun(b) {
  console.log(!geese.includes(b));
}
birds.filter(filterFun);

// Anonymous function
// birds.filter(function (b) {
//   console.log( !geese.includes(b));
// })
// Arrow function with full body
// birds.filter((b) => {
//   console.log( !geese.includes(b));
// })

// One line shortcut. Just one statement which automatic is acted as a return
console.log("wtf?  " + birds.filter(b => !geese.includes(b)));

gooseFilter(birds);
filterFun(birds);

// End #8
// ====================================================================
// Start #9  Regex count lowercase letters
function lowercaseCount(str) {
  var lowers = str.match(/[a-z]/g);
  console.log(lowers ? lowers.length : 0);
}

lowercaseCount(practiceString);
lowercaseCount("this is SHOUTING");
// End #9
// ====================================================================
// Start #10  Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right
function remove(s, n) {
  for (var i = 0; i < n; i++) {
    s = s.replace("!", "");
  }
  console.log(s);
  return s;
}

remove("!bel!!i!!!eve!!!", 7);
// End #10

// Start #11  Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
function replace(s) {
  console.log(s.replace(/[aeoiu]/gi, "!"));
  return s.replace(/[aeoiu]/gi, "!");
}

replace("aeiou");
replace("What is Going On??");
// End #11
// ====================================================================
// SDJavascript warm-up - write out three exampls of how to de-duplicate an array.
let dupes = [1, 1, 2, 3, 4, 4, 10, 5, 5];
let unique = [...new Set(dupes)];
console.log(unique);
// don't ever next terniary's
// using 'set'  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
// ====================================================================
// Start #12 If you can't sleep, just count sheep!!

var countSheep = function(num) {
  // count up and concantenate until count = n   count = (n-(n-1)) + 1
  let count = num - (num - 1);
  let phrase = "";
  while (count <= num) {
    let fragmentPhrase = count + " sheep... ";
    phrase = phrase.concat(fragmentPhrase);
    count++;
  }
  console.log(phrase);
};
countSheep(12);
// End #12
// ====================================================================
// Start #13  A wolf in sheep's clothing
function shortCut(arr) {
  var wolf = arr.indexOf("wolf") + 1;
  var dinner = arr.length - wolf;
  // console.log("arr length is " + arr.length + "   and then wolf is " + wolf);
  console.log(
    wolf === arr.length
      ? "Please go away and stop eating my sheep!"
      : "Oi! Sheep number " + dinner + "! You are about to be eaten by a wolf!"
  );
}
let theHerd = [
  "sheep",
  "sheep",
  "sheep",
  "sheep",
  "sheep",
  "wolf",
  "sheep",
  "sheep",
  "sheep",
  "sheep"
];
shortCut(theHerd);
// Emd #13   this one was FUN and my answer a bit more elegant than previous kata solutions
// ====================================================================
// Start #14  Training JS #8: Conditional statement--switch
// function howManydays(month) {
//   var days = "";
//   var thirtyRegex = /4|6|9|11/;
//   var thirtyoneRegex = /1|3|5|7|8|10|12/;
//   var short = thirtyRegex.test(month);
//   var long = thirtyoneRegex.test(month);

//   if (long) {
//     days = 31;
//   } else if (short) {
//     days = 30;
//   } else {
//     days = 28;
//   }
//  console.log (days);
// }

function howManydays(month) {
  var days;
  switch (month) {
    case 1:
      days = 31;
      break;
    case 2:
      days = 28;
      break;
    case 3:
      days = 31;
      break;
    case 4:
      days = 30;
      break;
    case 5:
      days = 31;
      break;
    case 6:
      days = 30;
      break;
    case 7:
      days = 31;
      break;
    case 8:
      days = 31;
      break;
    case 9:
      days = 30;
      break;
    case 10:
      days = 31;
      break;
    case 11:
      days = 30;
      break;
    case 12:
      days = 31;
      break;
  }
  console.log(days);
}

howManydays(11);
// End #14. I like my regex and if/else solution but the kata required a switch statement.
// ====================================================================
// Start #15 - Reduce but Grow
function grow(x) {
  let total = x[0] * x[1];
  for (var i = 2; i < x.length; i++) {
    let multiplier = x[i];
    total = total * multiplier;
  }
  console.log(total);
}

grow([1, 2, 3, 4]);
// End #15 - Heck yeah! Getting a little smoother and quicker on the logic
// ====================================================================
// Start #16  Sum Mixed Array
function sumMix(x) {
  const numArr = x.map(i => parseInt(i));
  const sum = numArr.reduce((total, amount) => total + amount);
  console.log(sum);
}

let mixedArray = [1, 3, 5, "700", 3, "1000"];

sumMix(mixedArray);
// End #16 - best Google Foo I've done in a while!
// ====================================================================
// Start #17 - Spinning Rings

function spinningRings(innerMax, outerMax) {
  let inNum = innerMax;
  let counter = 1;
  let outNum = 1;

  while (inNum != outNum) {
    inNum--;
    outNum++;
    counter++;
    if (inNum < 0) {
      inNum = innerMax;
    }
    if (outNum > outerMax) {
      outNum = 0;
    }
  }

  if (inNum === outNum) {
    console.log(counter);
  }
}
spinningRings(3, 3);

// End #17 - was a good challenge!
// ====================================================================
// Start #18  Complementary DNA
function DNAStrand(dna) {
  let newArr = [];
  let newString = "";
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "A") {
      newArr.push("T");
    }
    if (dna[i] === "T") {
      newArr.push("A");
    }
    if (dna[i] === "G") {
      newArr.push("C");
    }
    if (dna[i] === "C") {
      newArr.push("G");
    }
    newString = newArr.toString().replace(/,/g, "");
  }

  console.log(typeof newArr);
  console.log(newString);
  console.log(typeof newString);
}

DNAStrand("ATTGAC");
// End #18  - good morning Kata ... eager to see other solutions. Mine felt - clunky.

// ====================================================================

// BONUS: BUBBLE SORT!
var exNumArray = [9, 2, 2, 3, 12, 5, 6, 4, 3, 7, 10, 17, 1, 8];

// swap function helper
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// correct implementation of Bubble Sort: this is the usual implementation of the bubble sort algorithm. Some loops execution are avoided if not they are not needed
function bubbleSort(array) {
  var swapped;
  do {
    swapped = false;
    for (var i = 0; i < array.length; i++) {
      if (array[i] && array[i + 1] && array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        swapped = true;
      }
    }
  } while (swapped);
  return array;
}

console.log(bubbleSort(exNumArray)); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// ====================================================================

// Start #19 - Check the Exam
function checkExam(array1, array2) {
  let grade = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] === array2[i]) {
      grade = grade + 4;
    } else if (!array2[i]) {
      grade = grade;
    } else if (array1[i] != array2[i]) {
      grade--;
    }
  }
  console.log (grade>=0 ? grade : 0);
}

checkExam(["b", "c", "b", "a"], ["", "a", "b", "c"]);

// End #19
// ====================================================================
// Start #20 - Remove String Spaces
function noSpace(x){
  console.log(x.split(' ').join(''));
  }
  noSpace('8 j 8   mBliB8g  imjB8B8  jl  B');
// End #20
// ====================================================================
// Start #21 - Removing Elements

function removeEveryOther(arr){
  let newArr = [arr[0]]
   for (i=0; i< arr.length; i++) {
     if (i != 0 && i%2===0) {
      newArr.push(arr[i])
     }
   }
   console.log(newArr)
 }

removeEveryOther(['Hello', 'Goodbye', 'Hello Again', 'Blessings', 'Beauty']);
// End #21
// ====================================================================
// Start #22
