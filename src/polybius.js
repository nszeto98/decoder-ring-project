// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // create array to hold all numbers
    const numbers = [
      "11",
      "21",
      "31",
      "41",
      "51",
      "12",
      "22",
      "32",
      "42",
      "52",
      "13",
      "23",
      "33",
      "43",
      "53",
      "14",
      "24",
      "34",
      "44",
      "54",
      "15",
      "25",
      "35",
      "45",
      "55",
    ];
    // create array to store all letters and match index with numbers array
    const letters = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i/j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    // run different code if the encoding or decoding
    if (encode) {
      let result = "";
      let msg = input.toLowerCase();
      // loop through letters in the input string
      for (let i = 0; i < msg.length; i++) {
        let letter = msg[i];
        // if letter is alphabet, continue code to change into number form based on index from each array
        // use indexOf to find the index of the letter in the array.  use index to add the same index from numbers array
        // else add directly to result (keeps spaces)
        if (letter.match(/[a-z]/)) {
          // if the letter is i or j, encodes to 42
          if (letter === "i" || letter === "j") {
            result += "42";
          } else {
            // turn letters into numbers by using matching index by using .indexOf()
            let index = letters.indexOf(letter);
            result += numbers[index];
          }
        } else {
          result += letter;
        }
      }
      return result;
    } else {
      // start of code for decoding input
      // turn input into array of each word split by however many spaces
      let wordsArray = input.split(" ");
      let lettersArray = [];
      // each word in array of words must be turned into sections of 2 numbers
      for (let i = 0; i < wordsArray.length; i++) {
        lettersArray.push(wordsArray[i].match(/.{2}/g));
      }
      // make sure every word is even in length or return false
      let isEven = wordsArray.every((entry) => entry.length % 2 === 0);
      if (!isEven) {
        return false;
      }
      let finalArr = [];
      // loop through letters
      for (let numCode of lettersArray) {
        let tempArr = [];
        for (let code of numCode) {
          // allow 42 to be either i or j
          if (code === "42") {
            tempArr.push("(i/j)");
          } else {
            // turn number into letter by using the matching index of different array
            let index = numbers.indexOf(code);
            let newLetter = letters[index];
            tempArr.push(newLetter);
          }
        }
        finalArr.push(tempArr);
      }
      let decodedArr = [];
      for (let letter of finalArr) {
        let word = letter.join("");
        decodedArr.push(word);
      }
      let ans = decodedArr.join(" ");
      return ans;
      console.log("end: " + ans);
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
