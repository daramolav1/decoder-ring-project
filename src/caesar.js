// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  /* 
    - input refers to the inputted text to be encoded or decoded.
    - shift refers to how much each letter is "shifted" by. A positive number means shifting to the right (i.e., A becomes D) whereas a negative number means shifting to the left (i.e., M becomes K).
    - encode refers to whether you should encode or decode the message. By default it is set to true.

    - If the shift value isn't present, equal to 0, less than -25, or greater than 25, the function should return false.
    - Spaces should be maintained throughout, as should other nonalphabetic symbols.
    - Capital letters can be ignored.
    - If a letter is shifted so that it goes "off" the alphabet (e.g., a shift of 3 on the letter z), it should wrap around to the front of the alphabet (e.g., z becomes c).
  */

  function caesar(input, shift, encode = true) {
    if (!input || !shift || shift === 0 || shift < -25 || shift > 25)
      return false;

    if (!encode) shift *= -1;

    return input
      .toLowerCase()
      .split("")
      .map((char) => {
        if (/[^A-Za-z_]/.test(char)) return char;
        let intCode = char.charCodeAt(0);
        if (intCode + shift < 97) intCode += 26;
        if (intCode + shift > 122) intCode -= 26;
        return String.fromCharCode(intCode + shift);
      })
      .join("");
  }

  /* console.log(caesar("thinkful", -3)); //> 'qefkhcri'
  console.log(caesar("thinkful", 3)); //> 'wklqnixo'
  console.log(caesar("wklqnixo", 3, false)); //> 'thinkful'

  console.log(caesar("This is a secret message!", 8)); //> 'bpqa qa i amkzmb umaaiom!'
  console.log(caesar("BPQA qa I amkzmb umaaiom!", 8, false)); //> 'this is a secret message!'

  console.log(caesar("thinkful")); //> false
  console.log(caesar("thinkful", 99)); //> false
  console.log(caesar("thinkful", -26)); //> false */

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
