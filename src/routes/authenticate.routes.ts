import { Router } from "express";
import { AuthenticateUserController } from "../modules/user/useCase/authenticateUser/AuthenticateUserController";

const authenticateRouter = Router();
const authenticateUserController = new AuthenticateUserController();

authenticateRouter.post("/", authenticateUserController.execute);

export { authenticateRouter };
