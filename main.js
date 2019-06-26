// <!-- https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript -->
// <!-- A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
//
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation. -->
//
// <!--
// First, I think letters should be in a variable. Then the value of all 26 letters should be placed into a string. In order to pull every letter, there needs to be a loop cycling through every letter and subtracting it from the other 27 letters. -->

function isPangram(string) {
  let letters = 'abcdefghijklmnopqrstuvwxyz'


  for (let i = 0; i < string.length; i++) {
    let char = string.charAt(i)
    let index = letters.indexOf(char.toLowerCase())
    if (index >= 0) {
      // This code below slices the string and takes the letter before the index and the letter after the index leaving one letter in the string.
      letters = letters.slice(0, index) + letters.slice(index+1)
    }

    }
      console.log(letters);
}

isPangram("bob")
isPangram("The quick brown fox Jumps over the lazy dog")


// ************************************************************************
// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

// Complete the solution so that it reverses the string value passed into it.
//
// solution('world'); // returns 'dlrow'

// To solve this, I searched MDN for the split string method. Splitting the sting will separate and isolate the words, Next, I searched MDN to reverse and and rejoin the string.The reverse method is primarily for arrays, however strings can sometimes act like arrays.

function solution(str){
  return str.split('').reverse().join('');
}

solution('world');

//
// ***************************************************************************
// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript
// Welcome. In this kata, you are asked to square every digit of a number.
//
// // For example, if we run 9119 through the function, 811181 will come out,
//  because 9^2 is 81 and 1^2 is 1.
//
// Note: The function accepts an integer and returns an integer

// I was a bit stumped on this code for a while and got help -- but from my understanding, the for loop was necessary within the function to cycle through numbers to get the the digit's exponential factors. Will need to spend more time with this code to understand it better.

function squareDigits(num){
  let strNum = String(num);
  let newNum ='';

  for (i=0; i<=strNum.length-1 ;i++){
    newNum += strNum[i]*strNum[i];
  }

  return Number(newNum);
}

squareDigits(9119)

//
//
// ********************************************************************

// https://www.codewars.com/kata/5aa736a455f906981800360d/train/javascript

//
// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
//
// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
//
// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

  // To get the first letter of the beast and dish I used the .length method to get the first letter of both the beast and dish. Played around with the code a little while to understand the if conditional better.

function feast(beast, dish) {

  if (beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]) {
    return true;
  } else {
    return false;
  }
}

feast("giraffe", "granola")

// *********************************************************************************
// https://www.codewars.com/kata/583710ccaa6717322c000105/train/javascript

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// Question mark operator is known as ternary -- looked at how to approach this code using  javascript.info
function simpleMultiplication(n){
    return n % 2 ? n * 9 : n * 8;
}
