import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteInvoiceUseCase } from "./DeleteInvoiceUseCase";

class DeleteInvoiceController {
  async exceute(request: Request, response: Response) {
    const { id } = request.params;

    const deleteInvoice = container.resolve(DeleteInvoiceUseCase);

    const invoice = await deleteInvoice.execute({ id });

    return response.status(204).json(invoice);
  }
}

export { DeleteInvoiceController };
