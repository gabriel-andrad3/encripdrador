import { Router } from "express";

import { EncryptController } from "../../../../modules/passwords/useCases/encrypt/EncryptController";
import { EncryptUseCase } from "../../../../modules/passwords/useCases/encrypt/EncryptUseCase";


const passwordRoutes = Router();

const encryptUseCase = new EncryptUseCase();
const encryptController = new EncryptController(encryptUseCase);

passwordRoutes.post("/encrypt", encryptController.handle);

export { passwordRoutes };