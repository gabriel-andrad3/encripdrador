import { Request, Response } from "express";
import { DecryptUseCase } from "./DecryptUseCase";

class DecryptController {
  constructor(private decryptUseCase: DecryptUseCase) {}

  handle(request: Request, response: Response): Response {
    const { password } = request.body;    

    try {
      const decryptedPassword = this.decryptUseCase.execute({ password });
              
      return response.status(200).json(decryptedPassword);
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error'
      });
    }

  }
}

export { DecryptController };