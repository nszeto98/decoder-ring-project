// Write your tests here!
const { caesar } = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar tests written by student", () => {
  it("should return false if shift not present", () => {
    let input = "Test";
    let shift = undefined;
    let actual = caesar(input, shift, (encode = true));
    let expected = false;
    expect(actual).to.equal(expected);
  });
  it("should return false if shift > 25", () => {
    let input = "Test";
    let shift = 26;
    let actual = caesar(input, shift, (encode = true));
    let expected = false;
    expect(actual).to.equal(expected);
  });
  it("should return false if shift < -25", () => {
    let input = "Test";
    let shift = -26;
    let actual = caesar(input, shift, (encode = true));
    let expected = false;
    expect(actual).to.equal(expected);
  });
  it("should return the same output capital or not", () => {
    let input = "TEST";
    let shift = 3;
    let actual = caesar(input, shift, (encode = true));
    let expected = "whvw";
    expect(actual).to.equal(expected);
  });
  it("should loop at z", () => {
    let input = "z";
    let shift = 3;
    let actual = caesar(input, shift, (encode = true));
    let expected = "c";
    expect(actual).to.equal(expected);
  });
  it("should loop at a", () => {
    let input = "c";
    let shift = -3;
    let actual = caesar(input, shift, (encode = true));
    let expected = "z";
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces in the text", () => {
    let input = "test test test";
    let shift = 3;
    let actual = caesar(input, shift, (encode = true));
    let expected = "whvw whvw whvw";
    expect(actual).to.equal(expected);
  });
});
