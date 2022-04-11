import { Password } from "../../entities/Password";

class EncryptUseCase {
  async execute(): Promise<Password> {
    const password = new Password();

    return password;
  }

}

export { EncryptUseCase };