const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
  it("returns human/cat/dog year", () => {
    expect(humanCatDogYears(10)).toEqual([10, 56, 64]);
  });
});
