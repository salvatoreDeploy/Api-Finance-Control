import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../../user/repositories/IUserRepository";
import { Invoices } from "../../entities/invoices";
import { IInvoiceRepository } from "../../repositories/IInvoiceRepository";
import { IListInvoiceAllDTO } from "./ListInvoiceAllDTO";

interface IRequest {
  user_id: string;
}

interface IResponse {
  invoice: Invoices[];
}

@injectable()
class ListInvoiceAllUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository,

    @inject("InvoiceRepository")
    private invoiceRepository: IInvoiceRepository
  ) {}

  async execute({ user_id }: IRequest): Promise<IResponse> {
    const invoice = await this.invoiceRepository.getAllInvoices({ user_id });
    return invoice as IResponse;
  }
}

export { ListInvoiceAllUseCase };
