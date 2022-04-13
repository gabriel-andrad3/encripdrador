import { EncryptRepository } from "../../repositories/implementations/EncryptRepository";
import { EncryptController } from "./EncryptController";
import { EncryptUseCase } from "./EncryptUseCase";

const encryptRepository = new EncryptRepository();
const encryptUseCase = new EncryptUseCase(encryptRepository);
const encryptController = new EncryptController(encryptUseCase);

export { encryptUseCase, encryptController };