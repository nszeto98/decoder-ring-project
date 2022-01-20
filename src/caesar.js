// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // if shift >25 or shift < -25 or shift === 0, return false
    if (!shift || shift > 25 || shift < -25 || shift === 0) {
      return false;
    }
    // invert if shift value if turning encrypted into unencrypted (decoding)
    if (!encode) {
      shift *= -1;
    }
    // turn input to lowercase
    let msg = input.toLowerCase();
    // create empty string to store end message
    let ans = "";
    // loop through text input
    for (let i = 0; i < msg.length; i++) {
      let letter = msg[i];
      // require that input be a letter (non alphabet inputs are added directly to final string)
      if (letter.match(/[a-z]/)) {
        // add shift to the charCode
        let newCharCode = msg.charCodeAt(i) + shift;
        // if shift adds too much, subtract 26 to loop back to the beginning of the alphabet (z going to a)
        if (newCharCode > 122) {
          newCharCode -= 26;
        }
        // loop back to other end of alphabet
        if (newCharCode < 97) {
          newCharCode += 26;
        }
        // turn code back into character
        let newLetter = String.fromCharCode(newCharCode);
        ans += newLetter;
      }
      // if input wasn't within a-z, add it without altering
      else ans += letter;
    }
    return ans;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
