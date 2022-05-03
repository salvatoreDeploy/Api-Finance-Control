import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListInvoiceAllUseCase } from "./ListInvoicesAllUseCase";

class ListInvoiceAllController {
  async execute(request: Request, response: Response) {
    const { user_id } = request.params;

    const listInvoiceAll = container.resolve(ListInvoiceAllUseCase);

    const listAll = await listInvoiceAll.execute({ user_id });

    return response.status(200).json(listAll);
  }
}

export { ListInvoiceAllController };
