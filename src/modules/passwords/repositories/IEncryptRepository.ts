import { Password } from "../entities/Password";

interface IEncryptRepository {
  encrypt(password: string): Password;
}

export { IEncryptRepository };