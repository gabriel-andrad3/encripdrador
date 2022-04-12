import { IPassword } from "../../dtos/IPassword";
import { Password } from "../../entities/Password";

class EncryptUseCase {
  async execute( { password }: IPassword ): Promise<Password> {
    const encryptedPassword = new Password(password);
    // encryptedPassword.password = "aaa";
    return encryptedPassword;
  }
}

export { EncryptUseCase };