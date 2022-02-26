// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  /* 
    - input refers to the inputted text to be encoded or decoded.
    - alphabet refers to substitution alphabet.
    - encode refers to whether you should encode or decode the message. By default it is set to true

    - The input could include spaces and letters as well as special characters such as #, $, *, etc.
    - Spaces should be maintained throughout.
    - Capital letters can be ignored.
    - The alphabet parameter must be a string of exactly 26 characters, which could include special characters such as #, $, *, etc. Otherwise, it should return false.
    - All the characters in the alphabet parameter must be unique. Otherwise, it should return false.
  */

  const abc = [..."abcdefghijklmnopqrstuvwxyz!@#$%^&*()-_+=[{]};:',<.>/?`~"]; // abc is regular alphabet (["a","b","c"...]) + special chars

  function substitution(input, alphabet, encode = true) {
    if (
      !input ||
      !alphabet ||
      alphabet.length !== 26 ||
      new Set(alphabet.split("")).size !== alphabet.split("").length
    )
      return false;

    return input
      .toLowerCase()
      .split("")
      .map((letter) => {
        if (letter === " ") return letter;
        if (encode) {
          return alphabet[abc.indexOf(letter)];
        } else {
          return abc[alphabet.indexOf(letter)];
        }
      })
      .join("");
  }

  /* console.log(substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")); //> 'jrufscpw'
  console.log(
    substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
  ); //> 'elp xhm xf mbymwwmfj dne'
  console.log(substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)); //> 'thinkful'

  console.log(substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")); //> "y&ii$r&"
  console.log(substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)); //> "message"

  console.log(substitution("thinkful", "short")); //> false
  console.log(substitution("thinkful", "abcabcabcabcabcabcabcabcyz")); //> false */

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
