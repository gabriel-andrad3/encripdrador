import { Request, Response } from "express";
import { EncryptUseCase } from "./EncryptUseCase";

class EncryptController {
  constructor(private encryptUseCase: EncryptUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { password } = request.body;    
    const encryptedPassword = await this.encryptUseCase.execute({ password });
    return response.status(200).json(encryptedPassword);
  }
}

export { EncryptController };