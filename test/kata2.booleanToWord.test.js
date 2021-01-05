const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("returns string form boolean", () => {
    expect(booleanToWord(true)).toBe("Yes");
    expect(booleanToWord(false)).toBe("No");
  });
});
