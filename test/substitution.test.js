// Write your tests here!
const { substitution } = require("../src/substitution") 
const expect = require("chai").expect;

describe("substitution tests written by student", () => {
    it("should return false if alphabet > 26", () => {
        let input = "Test"
        let alphabet = "abcdefghijklmnopqrstuvwxyz!"
        let actual = substitution(input, alphabet, (encode=true))
        let expected = false
        expect(actual).to.equal(expected)
    })
    it("should return false if alphabet < 26", () => {
        let input = "Test"
        let alphabet = "abcdefghijklmnopqrstuvwxy"
        let actual = substitution(input, alphabet, (encode=true))
        let expected = false
        expect(actual).to.equal(expected)
    })
    it("should return false if any letters in alphabet repeat", () => {
        let input = "Test"
        let alphabet = "abcdefghijklmnopqrstuvwyzz"
        let actual = substitution(input, alphabet, (encode=true))
        let expected = false
        expect(actual).to.equal(expected)
    })
    it("capital letters are ignored", () => {
        let input = "TEST"
        let alphabet = "abcdefghijklmnopqrstuvwxyz"
        let actual = substitution(input, alphabet, (encode=true))
        let expected = "test"
        expect(actual).to.equal(expected)
    })
    it("maintain spacing", () => {
        let input = "You are an excellent spy"
        let alphabet = "xoyqmcgrukswaflnthdjpzibev"
        let actual = substitution(input, alphabet, (encode=true))
        let expected = "elp xhm xf mbymwwmfj dne"
        expect(actual).to.equal(expected)
    })
    it("special characters", () => {
        let input = "y&ii$r&"
        let alphabet = "$wae&zrdxtfcygvuhbijnokmpl"
        let actual = substitution(input, alphabet, (encode=false))
        let expected = "message"
        expect(actual).to.equal(expected)
    })
})