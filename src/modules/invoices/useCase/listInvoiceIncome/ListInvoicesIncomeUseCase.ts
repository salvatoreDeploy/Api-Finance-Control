import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../../user/repositories/IUserRepository";
import { Invoices } from "../../entities/invoices";
import { IInvoiceRepository } from "../../repositories/IInvoiceRepository";

interface IRequest {
  type: string;
  user_id: string;
}

interface IResponse {
  invoice: Invoices[];
}

@injectable()
class ListInvoiceIcomeUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository,

    @inject("InvoiceRepository")
    private invoiceRepository: IInvoiceRepository
  ) {}

  async execute({ type, user_id }: IRequest): Promise<IResponse> {
    const invoice = await this.invoiceRepository.getIncomeInvoices({
      type,
      user_id,
    });
    return invoice as IResponse;
  }
}

export { ListInvoiceIcomeUseCase };
