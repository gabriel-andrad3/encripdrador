import { Password } from "../entities/Password";
import { IPasswordsRepository } from "./IPasswordsRepository";

interface IDecryptRepository extends IPasswordsRepository {
  decrypt(password: string): Promise<Password>;
}

export { IDecryptRepository };