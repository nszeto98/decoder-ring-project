// Write your tests here!
const { polybius } = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius tests written by student", () => {
  it("translates j into 42", () => {
    let input = "j";
    let actual = polybius(input, (encode = true));
    let expected = "42";
    expect(actual).to.equal(expected);
  });
  it("translates i into 42", () => {
    let input = "i";
    let actual = polybius(input, (encode = true));
    let expected = "42";
    expect(actual).to.equal(expected);
  });
  it("translates 42 into i/j", () => {
    let input = "42";
    let actual = polybius(input, (encode = false));
    let expected = "(i/j)";
    expect(actual).to.equal(expected);
  });
  it("ignore capital letters", () => {
    let input = "IIIJJJ";
    let actual = polybius(input, (encode = true));
    let expected = "424242424242";
    expect(actual).to.equal(expected);
  });
  it("maintain spaces encoding", () => {
    let input = "hello world";
    let actual = polybius(input, (encode = true));
    let expected = "3251131343 2543241341";
    expect(actual).to.equal(expected);
  });
  it("maintain spaces decoding", () => {
    let input = "3251131343 2543241341";
    let actual = polybius(input, (encode = false));
    let expected = "hello world";
    expect(actual).to.equal(expected);
  });
});
