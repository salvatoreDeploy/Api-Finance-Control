import { inject, injectable } from "tsyringe";
import { IInvoiceRepository } from "../../repositories/IInvoiceRepository";
import { IDeleteInvoiceDTO } from "./DeleteInvoiceDTO";

@injectable()
class DeleteInvoiceUseCase {
  constructor(
    @inject("InvoiceRepository")
    private invoiceRepository: IInvoiceRepository
  ) {}

  async execute({ id }: IDeleteInvoiceDTO) {
    const deleteInvoice = await this.invoiceRepository.delete({ id });

    return deleteInvoice;
  }
}
export { DeleteInvoiceUseCase };
