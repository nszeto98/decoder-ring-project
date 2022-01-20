// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // test if any letteres in the alphabet repeats
    let repeatLetters = /(.).*\1/.test(alphabet);
    if (repeatLetters) {
      return false;
    }
    // test that the alphabet string is exactly 26 char long and that it exists
    if (alphabet.length != 26 || !alphabet) {
      return false;
    }
    // create array from the alphabet input
    const scrambledLetters = alphabet.split("");
    // regular letters array
    const letters = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
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

    // create a helper function that matches the scrambled letters with the regular alphabet based on index in the arrays
    function helper(alphabetA, alphabetB) {
      // create var to hold final result
      let result = "";
      // create new var to hold lowercase input
      let msg = input.toLowerCase();
      // loop through letters in the msg var from the input
      for (let i = 0; i < msg.length; i++) {
        let letter = msg[i];
        // any char other than space is encoded or decoded
        if (letter.match(/[^ ]/)) {
          let index = alphabetA.indexOf(letter);
          result += alphabetB[index];
        } else {
          // spaces are added directly to the final result
          result += letter;
        }
      }
      return result;
    }
    // if encoding, we use the proper alphabet first and match to scrambledLetters
    if (encode === true) {
      let ans = helper(letters, scrambledLetters);
      return ans;
    } else {
      // if decoding, we use scrambledLetters first and match to letters array
      let ans = helper(scrambledLetters, letters);
      return ans;
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
