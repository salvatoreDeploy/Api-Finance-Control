import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateInvoiceUseCase } from "./CreateInvoiceUseCase";

class CreateInvoiceController {
  async execute(request: Request, response: Response) {
    const { description, type, value, categorie_id, user_id } = request.body;

    const createInvoice = container.resolve(CreateInvoiceUseCase);

    const invoice = await createInvoice.execute({
      user_id,
      categorie_id,
      description,
      type,
      value,
    });

    return response.status(201).json(invoice);
  }
}

export { CreateInvoiceController };
