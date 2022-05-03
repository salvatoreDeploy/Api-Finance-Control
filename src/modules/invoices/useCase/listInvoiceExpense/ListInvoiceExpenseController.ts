import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListInvoiceExpenseUseCase } from "./ListInvoicesExpenseUseCase";

class ListInvoiceExpenseController {
  async execute(request: Request, response: Response) {
    const { type } = request.query;
    const { user_id } = request.params;

    const listInvoiceIncome = container.resolve(ListInvoiceExpenseUseCase);

    const listAll = await listInvoiceIncome.execute({
      type: type as string,
      user_id,
    });

    return response.status(200).json(listAll);
  }
}

export { ListInvoiceExpenseController };
