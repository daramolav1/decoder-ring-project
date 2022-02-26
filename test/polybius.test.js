const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() tests", () => {
  describe("error handling", () => {
    it("should return false if input is not defined", () => {
      const message = undefined;
      const actual = polybius(message);
      expect(actual).to.be.false;
    });
    it("should return false if the total number of characters in the input string is odd", () => {
      const message = "54321";
      const actual = polybius(message, false);
      expect(actual).to.be.false;
    });
  });
  describe("encoding an input", () => {
    it("should encode a message by translating each letter to number pairs according to the Polybius Square", () => {
      const message = "message";
      const actual = polybius(message);
      const expected = "23513434112251";

      expect(actual).to.equal(expected);
    });

    it("should translate the letters i and j to 42", () => {
      const message = "jacuzzi";
      const actual = polybius(message);
      const expected = "42113154555542";

      expect(actual).to.equal(expected);
    });

    it("should maintain spaces in the message, before and after encoding", () => {
      const message = "please   retain   spaces";
      const actual = polybius(message);
      const expected = "531351113451   245144114233   345311315134";

      expect(actual).to.equal(expected);
    });

    it("should return a string when encoding", () => {
      const message = "pleasereturnastring";
      const actual = polybius(message);
      expect(actual).to.be.a("string");
    });

    it("should ignore capital letters", () => {
      const message = "PlEaSe IgNoRe CapitaL lETTERs";
      const actual = polybius(message);
      const expected =
        "531351113451 422233432451 31115342441113 13514444512434";

      expect(actual).to.equal(expected);
    });
  });
  describe("decoding an input", () => {
    it("should decode a message by translating number pairs into letters according to the Polybius Square", () => {
      const expected = "test(i/j)ng";
      const message = "44513444423322";
      const actual = polybius(message, false);
      expect(actual).to.equal(expected);
    });

    it("should translate 42 to (i/j)", () => {
      const expected = "(i/j)acuzz(i/j)";
      const message = "42113154555542";
      const actual = polybius(message, false);
      expect(actual).to.equal(expected);
    });

    it("should maintain spaces in the message, before and after decoding", () => {
      const expected = "name user";
      const message = "33112351 54345124";
      const actual = polybius(message, false);
      expect(actual).to.equal(expected);
    });

    it("should return a string when decoding", () => {
      const message = "12324354 45342312";
      const actual = polybius(message, false);
      expect(actual).to.be.a("string");
    });
  });
});
