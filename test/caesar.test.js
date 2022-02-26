const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar() tests", () => {
  describe("error handling", () => {
    it("should return false if input is not defined", () => {
      const message = undefined;
      const shift = 3;
      const actual = caesar(message, shift);
      expect(actual).to.be.false;
    });
    it("should return false if shift is equal to 0", () => {
      const message = "This is a message";
      const shift = 0;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it("should return false if shift is less than -25", () => {
      const message = "This is another message";
      const shift = -65;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it("should return false if shift is greater than 25", () => {
      const message = "This is yet another message";
      const shift = 47;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });
  });

  describe("encoding a message", () => {
    it("should ignore capital letters", () => {
      const message = "tHiNkFuL";
      const expected = "ymnspkzq";
      const shift = 5;
      const actual = caesar(message, shift);

      expect(actual).to.equal(expected);
    });
    it("should encode via shifting the letters by the input shift value", () => {
      const message = "This test shall pass";
      const expected = "drsc docd crkvv zkcc";
      const shift = 10;
      const actual = caesar(message, shift);

      expect(actual).to.equal(expected);
    });
    it("should allow for a negative shift value for encoding", () => {
      const message = "Please allow for negative SHIFT! ;)";
      const expected = "kgzvnz vggjr ajm izbvodqz ncdao! ;)";
      const shift = -5;
      const actual = caesar(message, shift);

      expect(actual).to.equal(expected);
    });
    it("should handle wrapping around the alphabet if necessary", () => {
      const message = "xyzzy";
      const expected = "abccb";
      const shift = 3;
      const actual = caesar(message, shift);

      expect(actual).to.equal(expected);
    });
    it("should maintain spaces and nonalphabetic symbols in the encoded message", () => {
      const message = "M@king thi$ t3$t   wa$ v3ry  3@$y";
      const expected = "t@rpun aop$ a3$a   dh$ c3yf  3@$f";
      const shift = 7;
      const actual = caesar(message, shift);

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("should ignore capital letters", () => {
      const message = "OruhP lsVXp";
      const expected = "lorem ipsum";
      const shift = 3;
      const actual = caesar(message, shift, false);

      expect(actual).to.equal(expected);
    });
    it("should decode via shifting the letters by the input shift value", () => {
      const message = "vybow szcew";
      const expected = "lorem ipsum";
      const shift = 10;
      const actual = caesar(message, shift, false);

      expect(actual).to.equal(expected);
    });
    it("should allow for a negative shift value", () => {
      const expected = "kqeeudewu";
      const message = "Yessirski";
      const shift = -12;
      const actual = caesar(message, shift, false);

      expect(actual).to.equal(expected);
    });
    it("should handle wrapping around the alphabet if necessary", () => {
      const message = "abccb";
      const expected = "uvwwv";
      const shift = 6;
      const actual = caesar(message, shift, false);

      expect(actual).to.equal(expected);
    });
    it("should maintain spaces and nonalphabetic symbols in the encoded message", () => {
      const message = "jgdc'q e00b! -.-";
      const expected = "life's g00d! -.-";
      const shift = -2;
      const actual = caesar(message, shift, false);

      expect(actual).to.equal(expected);
    });
  });
});
