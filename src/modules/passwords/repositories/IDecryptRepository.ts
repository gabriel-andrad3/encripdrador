import { Password } from "../entities/Password";

interface IDecryptRepository {
  decrypt(password: string): Password;
}

export { IDecryptRepository };