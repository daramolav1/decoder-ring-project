// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  /*
    - input refers to the inputted text to be encoded or decoded.
    - encode refers to whether you should encode or decode the message. By default it is set to true.
    
    - You are welcome to assume that no additional symbols will be included as part of the input. Only spaces and letters will be included.
    - When encoding, your output should still be a string.
    - When decoding, the number of characters in the string excluding spaces should be even. Otherwise, return false.
    - Spaces should be maintained throughout.
    - Capital letters can be ignored.
    - The letters I and J share a space. When encoding, both letters can be converted to 42, but when decoding, both letters should somehow be shown.
  */

  const polybiusSquare = {
    a: 11,
    b: 21,
    c: 31,
    d: 41,
    e: 51,
    f: 12,
    g: 22,
    h: 32,
    i: 42,
    j: 42,
    k: 52,
    l: 13,
    m: 23,
    n: 33,
    o: 43,
    p: 53,
    q: 14,
    r: 24,
    s: 34,
    t: 44,
    u: 54,
    v: 15,
    w: 25,
    x: 35,
    y: 45,
    z: 55,
  };

  const polybiusSquareReversed = {
    11: "a",
    12: "f",
    13: "l",
    14: "q",
    15: "v",
    21: "b",
    22: "g",
    23: "m",
    24: "r",
    25: "w",
    31: "c",
    32: "h",
    33: "n",
    34: "s",
    35: "x",
    41: "d",
    42: "(i/j)",
    43: "o",
    44: "t",
    45: "y",
    51: "e",
    52: "k",
    53: "p",
    54: "u",
    55: "z",
  };

  function polybius(input, encode = true) {
    if (!input) return false;

    if (encode) {
      return input
        .toLowerCase()
        .split("")
        .map((char) => {
          if (polybiusSquare[char]) return polybiusSquare[char];
          return char;
        })
        .join("");
    } else {
      if (input.replace(" ", "").length % 2 !== 0) return false;

      return input
        .match(/[0-9]{2}|\s/g)
        .map((numPairs) => {
          if (polybiusSquareReversed[numPairs])
            return polybiusSquareReversed[numPairs];
          return numPairs;
        })
        .join("");
    }
  }

  /* console.log(polybius("thinkful")); //> "4432423352125413"
  console.log(polybius("Hello world")); //> '3251131343 2543241341'
  console.log(polybius("3251131343 2543241341", false)); //> "hello world"
  console.log(polybius("4432423352125413", false)); //> "th(i/j)nkful
  console.log(polybius("44324233521254134", false)); //> false */

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
