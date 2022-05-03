import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateInvoiceUseCase } from "./UpdateInvoiceUseCase";

class UpdateInvoiceController {
  async execute(request: Request, response: Response) {
    const { id } = request.params;
    const { description, categorie_id, value } = request.body;

    const updateInvoice = container.resolve(UpdateInvoiceUseCase);

    const invoice = await updateInvoice.execute({
      id,
      description,
      categorie_id,
      value,
    });

    return response.status(204).json(invoice);
  }
}

export { UpdateInvoiceController };
