import { IPassword } from "../../dtos/IPassword";
import { Password } from "../../entities/Password";
import { IDecryptRepository } from "../../repositories/IDecryptRepository";

class DecryptUseCase {
  constructor(private decryptRepository: IDecryptRepository) {}

  execute( { password }: IPassword ): Password {
    return this.decryptRepository.decrypt(password);
  }
}

export { DecryptUseCase };