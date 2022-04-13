import { Password } from "../../entities/Password";
import { IEncryptRepository } from "../IEncryptRepository";

class EncryptRepository implements IEncryptRepository {
  async encrypt(password: string): Promise<Password> {
    let encryptedPassword = new Password();
    let actualChar = "";

    for (let iChar = 0; iChar < password.length; iChar++) {
      actualChar = password.charAt(iChar);

      if (this.isLetter(actualChar) || this.isNumber(actualChar)) { 
        if (iChar % 2 == 0) { // decrease
        
        } else { // increase

        }
        
      } else { // special character
        encryptedPassword.password += actualChar;
      }
    }

    return encryptedPassword;
  }

  async isDecreasingSpecialCase(char: string): Promise<string> {
    throw new Error("Method not implemented.");
  }

  async treatDecreasingSpecialCase(char: string): Promise<string> {
    throw new Error("Method not implemented.");
  }

  async isIncreasingSpecialCase(char: string): Promise<string> {
    throw new Error("Method not implemented.");
  }

  async treatIncreasingSpecialCase(char: string): Promise<string> {
    throw new Error("Method not implemented.");
  }

  isLetter(char: string): boolean {
    return char.toUpperCase() != char.toLowerCase();
  }

  isNumber(char: string): boolean {
    return char >= '0' && char <= '9';
  }
}

export { EncryptRepository };