import { Router } from "express";
import { authenticateRouter } from "./authenticate.routes";
import { invoiceRouter } from "./invoice.routes";
import { usersRouter } from "./users.routes";

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/login", authenticateRouter);
routes.use("/invoice", invoiceRouter);

export { routes };
