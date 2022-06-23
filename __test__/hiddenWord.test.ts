import { decryptWord } from '../src/hiddenWord';

describe("decryptWord function should return", () =>{
  test("a when recieves 6", () =>{
    expect(decryptWord(6)).toBe("a");
  });
  test("ab when recieves 61", () =>{
    expect(decryptWord(61)).toBe("ab");
  });
  test("led when recieves 247", () =>{
    expect(decryptWord(247)).toBe("led");
  });
  test("tone when recieves 5084", () =>{
    expect(decryptWord(5084)).toBe("tone");
  });
  test("ERROR when recieves 508.5", () =>{
    expect(decryptWord(508.5)).toBe("ERROR");
  });
});
