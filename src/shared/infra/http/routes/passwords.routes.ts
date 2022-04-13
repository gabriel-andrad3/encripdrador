import { Router } from "express";
import { decryptController } from "../../../../modules/passwords/useCases/decrypt";

import { encryptController } from "../../../../modules/passwords/useCases/encrypt";

const passwordRoutes = Router();

passwordRoutes.post("/encrypt", (request, response) => {
  encryptController.handle(request, response);
});

passwordRoutes.post("/decrypt", (request, response) => {
  decryptController.handle(request, response);
});

export { passwordRoutes };