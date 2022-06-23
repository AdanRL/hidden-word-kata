
const dictionary = {
  "1": "b",
  "2": "l",
  "3": "i",
  "4": "e",
  "5": "t",
  "6": "a",
  "7": "d",
  "8": "n",
  "9": "m",
  "0": "o",
}
export const decryptWord = (encryptedWord: number): string => {
  let decryptedWord: string = "";
  const encryptedWordString = encryptedWord.toString().split("");
  const isValidString = checkValidString(encryptedWordString);
  if(!isValidString)
    return "ERROR"
  encryptedWordString.forEach(element => decryptedWord += decodeLetter(element));
  
  return decryptedWord;
};

export const decodeLetter = (letter: string): string => {
  return dictionary[letter];
};

export const checkValidString = (encryptedWord: string[]): boolean => {
  let isValid: boolean = true;
  encryptedWord.forEach((element) =>{
    if(!Number.isInteger(parseInt(element)))
      isValid = false;
    
  });
  return isValid;
};
