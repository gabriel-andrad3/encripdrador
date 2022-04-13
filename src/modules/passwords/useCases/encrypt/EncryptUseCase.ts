import { IPassword } from "../../dtos/IPassword";
import { Password } from "../../entities/Password";
import { IEncryptRepository } from "../../repositories/IEncryptRepository";


class EncryptUseCase {
  constructor(private encryptRepository: IEncryptRepository) {}

  async execute( { password }: IPassword ): Promise<Password> {
    const encryptedPassword = this.encryptRepository.encrypt(password);
    
    return encryptedPassword;
  }
}

export { EncryptUseCase };