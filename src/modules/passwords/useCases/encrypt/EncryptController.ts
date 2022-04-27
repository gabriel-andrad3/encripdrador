import { Request, Response } from "express";
import { EncryptUseCase } from "./EncryptUseCase";

class EncryptController {
  constructor(private encryptUseCase: EncryptUseCase) {}

  handle(request: Request, response: Response): Response {
    const { password } = request.body;    

    try {
      const encryptedPassword = this.encryptUseCase.execute({ password });
              
      return response.status(200).json(encryptedPassword);
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error'
      });
    }

  }
}

export { EncryptController };