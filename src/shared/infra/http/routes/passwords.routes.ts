import { Router } from "express";

import { EncryptController } from "../../../../modules/passwords/useCases/encrypt/EncryptController";

const passwordRoutes = Router();

const encryptController = new EncryptController();

passwordRoutes.post("/encrypt", encryptController.handle);

export { passwordRoutes };