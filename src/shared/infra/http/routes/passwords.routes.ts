import { Router } from "express";

import { encryptController } from "../../../../modules/passwords/useCases/encrypt";

const passwordRoutes = Router();

passwordRoutes.post("/encrypt", (request, response) => {
  encryptController.handle(request, response);
});

export { passwordRoutes };