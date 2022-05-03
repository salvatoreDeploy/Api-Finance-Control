import { Router } from "express";
import { CreateUserController } from "../modules/user/useCase/createUser/CreateUserController";

const usersRouter = Router();
const createUserController = new CreateUserController();

usersRouter.post("/", createUserController.execute);

export { usersRouter };
