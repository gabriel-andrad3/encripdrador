import { Password } from "../entities/Password";

interface IDecryptRepository {
  decrypt(password: string): Promise<Password>;
}

export { IDecryptRepository };