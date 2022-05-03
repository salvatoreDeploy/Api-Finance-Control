import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListInvoiceIcomeUseCase } from "./ListInvoicesIncomeUseCase";

class ListInvoiceIncomeController {
  async execute(request: Request, response: Response) {
    const { type } = request.query;
    const { user_id } = request.params;

    const listInvoiceIncome = container.resolve(ListInvoiceIcomeUseCase);

    const listAll = await listInvoiceIncome.execute({
      type: type as string,
      user_id,
    });

    return response.status(200).json(listAll);
  }
}

export { ListInvoiceIncomeController };
