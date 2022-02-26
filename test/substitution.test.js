// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution module", () => {
  describe("error handling", () => {
    it("should return false if input is not defined", () => {
      const message = undefined;
      const alphabet = "qwertyuiopasdfghjklzxcvbnm,";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });
    it("should return false if there is no substitution alphabet parameter", () => {
      const message = "this is a message";
      const actual = substitution(message);
      expect(actual).to.be.false;
    });
    it("should return false if the length of the given alphabet isn't exactly 26 characters long", () => {
      const message = "hello world";
      const alphabet = "qwertyuiopasdfghjklzxcvbnm,";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });
    it("should return false if each character in the input alphabet is not unique.", () => {
      const message = "this should not work";
      const alphabet = "aabbccddeeffgghhiijjkkllmm";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });
  });
  describe("encoding a message", () => {
    it("should correctly encode the given phrase, based on the alphabet given to the function", () => {
      const message = "message";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const expected = "ykrrpik";
      const actual = substitution(message, alphabet);
      expect(actual).to.equal(expected);
    });
    it("should maintain spaces in the message, before and after encoding", () => {
      const message = "Spaces    maintained     forsure";
      const alphabet = "qwertyuiopasdfghjklzxcvbnm";
      const expected = "lhqetl    dqofzqoftr     ygklxkt";
      const actual = substitution(message, alphabet);
      expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
      const message = "CAPITAL LETTERS";
      const alphabet = "qwertyuiopasdfghjklzxcvbnm";
      const expected = "eqhozqs stzztkl";
      const actual = substitution(message, alphabet);
      expect(actual).to.equal(expected);
    });

    it("should work with any combination of 26 unique characters as the substitution alphabet", () => {
      const message = "still works";
      const alphabet = "bcdefghijklmnopqr%tuvwxyza";
      const expected = "tujmm xp%lt";
      const actual = substitution(message, alphabet);
      expect(actual).to.equal(expected);
    });
  });
  describe("decoding a message", () => {
    it("should correctly decode the given phrase, based on the alphabet given to the function", () => {
      const message = "ykrrpik";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const expected = "message";
      const actual = substitution(message, alphabet, false);
      expect(actual).to.equal(expected);
    });
    it("should maintain spaces in the message, before and after decoding", () => {
      const message = "lhqetl    dqofzqoftr     ygklxkt";
      const alphabet = "qwertyuiopasdfghjklzxcvbnm";
      const expected = "spaces    maintained     forsure";
      const actual = substitution(message, alphabet, false);
      expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
      const message = "EQHOZQS STZZTKL";
      const alphabet = "qwertyuiopasdfghjklzxcvbnm";
      const expected = "capital letters";
      const actual = substitution(message, alphabet, false);
      expect(actual).to.equal(expected);
    });

    it("should work with any combination of 26 unique characters as the substitution alphabet", () => {
      const message = "tujmm xp%lt";
      const alphabet = "bcdefghijklmnopqr%tuvwxyza";
      const expected = "still works";
      const actual = substitution(message, alphabet, false);
      expect(actual).to.equal(expected);
    });
  });
});
