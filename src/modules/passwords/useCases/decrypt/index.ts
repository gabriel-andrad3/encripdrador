import { DecryptRepository } from "../../repositories/implementations/DecryptRepository";
import { DecryptController } from "./DecryptController";
import { DecryptUseCase } from "./DecryptUseCase";

const decryptRepository = new DecryptRepository();
const decryptUseCase = new DecryptUseCase(decryptRepository);
const decryptController = new DecryptController(decryptUseCase);

export { decryptUseCase, decryptController };