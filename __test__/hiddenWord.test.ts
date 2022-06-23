import { decryptWord } from '../src/hiddenWord';

describe("decryptWord function should return", () =>{
  test("a when recieves 6", () =>{
    expect(decryptWord(6)).toBe("a");
  })
});
