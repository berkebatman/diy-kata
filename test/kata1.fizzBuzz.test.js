const { fizzBuzz } = require("../src");

describe("fizzBuzz", () => {
  it("returns Fizz when passed a multiple of 3", () => {
    const result = fizzBuzz(3);

    expect(result).toBe('Fizz');

  });

  it("returns Buzz when passed a multiple of 5", () => {
    const result = fizzBuzz(5);

    expect(result).toBe('Buzz');

  });

  it("returns FizzBuzz when passed a multiple 3 and 5", () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
    expect(fizzBuzz(30)).toBe('FizzBuzz');
    expect(fizzBuzz(45)).toBe('FizzBuzz');
    expect(fizzBuzz(60)).toBe('FizzBuzz');
  });

  it("returns the number when it isn't a multiple of 3 or 5", () => {
    expect(fizzBuzz(16)).toBe(16);
    expect(fizzBuzz(13)).toBe(13);
    expect(fizzBuzz(101)).toBe(101);
    expect(fizzBuzz(14)).toBe(14);
  });
});