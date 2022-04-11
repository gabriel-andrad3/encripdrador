import { Request, Response } from "express";


class EncryptController {
  async handle(request: Request, response: Response): Promise<Response> {
    return response.send();
  }
}

export { EncryptController };