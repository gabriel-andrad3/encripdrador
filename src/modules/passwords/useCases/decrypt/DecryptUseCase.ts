import { IPassword } from "../../dtos/IPassword";
import { Password } from "../../entities/Password";
import { IDecryptRepository } from "../../repositories/IDecryptRepository";

class DecryptUseCase {
  constructor(private decryptRepository: IDecryptRepository) {}

  async execute( { password }: IPassword ): Promise<Password> {
    const encryptedPassword = this.decryptRepository.decrypt(password);
    
    return encryptedPassword;
  }
}

export { DecryptUseCase };