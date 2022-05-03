import { container } from "tsyringe";
import { IInvoiceRepository } from "../../modules/invoices/repositories/IInvoiceRepository";
import { InvoiceRepository } from "../../modules/invoices/repositories/InvoiceRepository";

import { IUserRepository } from "../../modules/user/repositories/IUserRepository";
import { UserRepository } from "../../modules/user/repositories/UserRepository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
container.registerSingleton<IInvoiceRepository>(
  "InvoiceRepository",
  InvoiceRepository
);
