import { Request, Response } from "express";
import { EncryptUseCase } from "./EncryptUseCase";

class EncryptController {
  constructor(private encryptUseCase: EncryptUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { password } = request.body;    

    try {
      const encryptedPassword = await this.encryptUseCase.execute({ password });

      return response.status(200).json(encryptedPassword);
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error'
      });
    }

  }
}

export { EncryptController };