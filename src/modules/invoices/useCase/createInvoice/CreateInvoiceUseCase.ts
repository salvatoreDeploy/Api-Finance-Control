import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../../user/repositories/IUserRepository";
import { IInvoiceRepository } from "../../repositories/IInvoiceRepository";
import { CreateInvoiceError } from "./CreateInvoiceError";
import { ICreateInvoiceDTO } from "./ICreateInvoiceDTO";

@injectable()
class CreateInvoiceUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository,

    @inject("InvoiceRepository")
    private invoiceRepository: IInvoiceRepository
  ) {}

  async execute({
    user_id,
    categorie_id,
    description,
    type,
    value,
  }: ICreateInvoiceDTO) {
    const user = await this.userRepository.findById(user_id);

    if (!user) {
      throw new CreateInvoiceError.UserNotFound();
    }

    const invoiceOperation = await this.invoiceRepository.create({
      user_id,
      categorie_id,
      description,
      type,
      value,
    });

    return invoiceOperation;
  }
}

export { CreateInvoiceUseCase };
