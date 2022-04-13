import { Password } from "../entities/Password";

interface IEncryptRepository {
  encrypt(password: string): Promise<Password>;
}

export { IEncryptRepository };