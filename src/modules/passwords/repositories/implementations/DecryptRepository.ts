import { Password } from "../../entities/Password";
import { IDecryptRepository } from "../IDecryptRepository";

class DecryptRepository implements IDecryptRepository {
  async decrypt(password: string): Promise<Password> {
    throw new Error("Method not implemented.");
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
}

export { DecryptRepository };