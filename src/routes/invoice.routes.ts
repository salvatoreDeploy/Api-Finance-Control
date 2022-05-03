import { Router } from "express";
import { getCustomRepository } from "typeorm";
import { TransactionsRepository } from "../modules/invoices/repositories/TransactionRepository";

import { CreateInvoiceController } from "../modules/invoices/useCase/createInvoice/CreateInvoiceController";
import { DeleteInvoiceController } from "../modules/invoices/useCase/deleteInvoice/DeleteInvoiceController";
import { ListInvoiceAllController } from "../modules/invoices/useCase/listInvoiceAll/ListInvoiceAllController";
import { ListInvoiceExpenseController } from "../modules/invoices/useCase/listInvoiceExpense/ListInvoiceExpenseController";
import { ListInvoiceIncomeController } from "../modules/invoices/useCase/listInvoiceIncome/ListInvoiceIncomeController";
import { UpdateInvoiceController } from "../modules/invoices/useCase/updateInvoice/UpdateInvoiceController";

const invoiceRouter = Router();

const createInvoiceController = new CreateInvoiceController();
const deleteInvoice = new DeleteInvoiceController();
const updateInvoice = new UpdateInvoiceController();
const listInvoiceAll = new ListInvoiceAllController();
const listInvoiceIncome = new ListInvoiceIncomeController();
const listInvoiceExpense = new ListInvoiceExpenseController();

invoiceRouter.post("/receita", createInvoiceController.execute);
invoiceRouter.post("/despesa", createInvoiceController.execute);
invoiceRouter.delete("/delete/receita/:id", deleteInvoice.exceute);
invoiceRouter.delete("/delete/despesa/:id", deleteInvoice.exceute);

invoiceRouter.put("/update/despesa/:id", updateInvoice.execute);
invoiceRouter.put("/update/receita/:id", updateInvoice.execute);

invoiceRouter.get("/list/invoiceall/:user_id", listInvoiceAll.execute);
invoiceRouter.get("/list/invoiceincome/:user_id", listInvoiceIncome.execute);
invoiceRouter.get("/list/invoiceexpense/:user_id", listInvoiceExpense.execute);

invoiceRouter.get("/list/balanceinvoice/:id", async (request, response) => {
  const transactionsRepositories = getCustomRepository(TransactionsRepository);

  const { id: user_id } = request.params;

  const transactions = await transactionsRepositories.find({
    where: { user_id },
    select: ["id", "user_id", "description", "value", "type", "categorie"],
    relations: ["categorie"],
  });

  const balance = await transactionsRepositories.getBalance({ user_id });
  return response.status(200).json({ transactions, balance });
});

export { invoiceRouter };
