import { inject, injectable } from "tsyringe";
import { IInvoiceRepository } from "../../repositories/IInvoiceRepository";
import { IUpdateInvoiceDTO } from "./UpdateInvoiceDTO";

@injectable()
class UpdateInvoiceUseCase {
  constructor(
    @inject("InvoiceRepository")
    private invoiceRepository: IInvoiceRepository
  ) {}

  async execute({ id, description, categorie_id, value }: IUpdateInvoiceDTO) {
    const updateInvoice = await this.invoiceRepository.update({
      id,
      description,
      categorie_id,
      value,
    });

    return updateInvoice;
  }
}

export { UpdateInvoiceUseCase };
