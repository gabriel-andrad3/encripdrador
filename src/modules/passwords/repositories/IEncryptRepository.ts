import { Password } from "../entities/Password";
import { IPasswordsRepository } from "./IPasswordsRepository";

interface IEncryptRepository extends IPasswordsRepository {
  encrypt(password: string): Promise<Password>;
}

export { IEncryptRepository };