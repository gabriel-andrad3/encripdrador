import { Password } from "../../entities/Password";
import { IDecryptRepository } from "../IDecryptRepository";

class DecryptRepository implements IDecryptRepository {
  private encryptedPassword = new Password();

  decrypt(password: string): Password {    
    let actualChar: string;    
    let isLetterOrNumber, isEvenPosition: boolean;

    for (let iChar = 0; iChar < password.length; iChar++) {
      actualChar = password.charAt(iChar);

      isLetterOrNumber = this.isLetter(actualChar) || this.isNumber(actualChar);

      if (isLetterOrNumber) {      
        isEvenPosition = iChar % 2 == 0;
        
        if (isEvenPosition) { 
          this.increaseChar(actualChar);
        } else {           
          this.decreaseChar(actualChar);
        }
      } else { // special character
        this.encryptedPassword.password += actualChar;
      }
    }

    return this.encryptedPassword;
  }

  isLetter(char: string): boolean {
    return char.toUpperCase() != char.toLowerCase();
  }

  isNumber(char: string): boolean {
    return char >= '0' && char <= '9';
  }

  decreaseChar(char: string): void {
    let previousCharAscii: string;

    if (this.isDecreasingSpecialCase(char)) {
      this.encryptedPassword.password += this.treatDecreasingSpecialCase(char);
    } else {
      previousCharAscii = String.fromCodePoint(char.charCodeAt(0) - 1);          
      this.encryptedPassword.password += previousCharAscii;     
    }
  }

  increaseChar(char: string): void {
    let nextCharAscii: string;

    if (this.isIncreasingSpecialCase(char)) {
      this.encryptedPassword.password += this.treatIncreasingSpecialCase(char);
    } else {
      nextCharAscii = String.fromCodePoint(char.charCodeAt(0) + 1);
      this.encryptedPassword.password += nextCharAscii; 
    }    
  }

  isDecreasingSpecialCase(char: string): boolean {
    return char.toLowerCase() === 'a' || char === '0';
  }

  isIncreasingSpecialCase(char: string): boolean {
    return char.toLowerCase() === 'z' || char === '9';
  }

  treatDecreasingSpecialCase(char: string): string {
    let treatedChar = '';
    
    switch (char) {
        case 'a':
            treatedChar = 'z';
            break;
        case 'A':
            treatedChar = 'Z';
            break;
        case '0':
            treatedChar = '9';
            break;
    }

    return treatedChar;
  }

  treatIncreasingSpecialCase(char: string): string {
    let treatedChar = '';

    switch (char) {
        case 'z':
            treatedChar = 'a';
            break;
        case 'Z':
            treatedChar = 'A';
            break;
        case '9':
            treatedChar = '0';
            break;
    }

    return treatedChar;
  }  
}

export { DecryptRepository };