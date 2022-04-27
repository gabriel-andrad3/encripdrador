import { IPassword } from "../../dtos/IPassword";
import { Password } from "../../entities/Password";
import { IEncryptRepository } from "../../repositories/IEncryptRepository";


class EncryptUseCase {
  constructor(private encryptRepository: IEncryptRepository) {}

  execute( { password }: IPassword ): Password {
    return this.encryptRepository.encrypt(password);     
  }
}

export { EncryptUseCase };