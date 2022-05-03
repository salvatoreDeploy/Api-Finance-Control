import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { container } from "tsyringe";

class CreateUserController {
  async execute(request: Request, response: Response): Promise<Response> {
    const { name, lastname, email, password } = request.body;

    const createUser = container.resolve(CreateUserUseCase);

    const user = await createUser.execute({ name, lastname, email, password });

    return response.status(201).json(user);
  }
}

export { CreateUserController };
