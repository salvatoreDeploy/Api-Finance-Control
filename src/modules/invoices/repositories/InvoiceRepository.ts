import { getRepository, ObjectID, Repository } from "typeorm";
import { Invoices } from "../../invoices/entities/invoices";
import { ICreateInvoiceDTO } from "../useCase/createInvoice/ICreateInvoiceDTO";
import { IDeleteInvoiceDTO } from "../useCase/deleteInvoice/DeleteInvoiceDTO";
import { DeleteInvoiceError } from "../useCase/deleteInvoice/DeleteInvoiceError";
import { IListInvoiceAllDTO } from "../useCase/listInvoiceAll/ListInvoiceAllDTO";
import { GetInvoiceOperationError } from "../useCase/listInvoiceAll/ListInvoiceAllError";
import { IListInvoiceExpenseDTO } from "../useCase/listInvoiceExpense/ListInvoiceExpenseDTO";
import { IListInvoiceIncomeDTO } from "../useCase/listInvoiceIncome/ListInvoiceIncomeDTO";
import { IUpdateInvoiceDTO } from "../useCase/updateInvoice/UpdateInvoiceDTO";
import { IInvoiceRepository } from "./IInvoiceRepository";

class InvoiceRepository implements IInvoiceRepository {
  private repository: Repository<Invoices>;

  constructor() {
    this.repository = getRepository(Invoices);
  }

  async create({
    user_id,
    categorie_id,
    description,
    type,
    value,
  }: ICreateInvoiceDTO): Promise<Invoices> {
    const invoice = this.repository.create({
      user_id,
      categorie_id,
      description,
      type,
      value,
    });
    return this.repository.save(invoice);
  }

  async delete({ id }: IDeleteInvoiceDTO): Promise<Invoices | undefined> {
    const invoice = await this.repository.findOne(id);
    if (!invoice) {
      throw new DeleteInvoiceError.UserNotFound();
    }
    await this.repository.delete({
      id,
    });
    return invoice;
  }

  async update({
    id,
    description,
    categorie_id,
    value,
  }: IUpdateInvoiceDTO): Promise<Invoices | undefined> {
    await this.repository.update({ id }, { description, value, categorie_id });
    return this.repository.findOne(id);
  }

  async getAllInvoices({
    user_id,
  }: IListInvoiceAllDTO): Promise<
    Invoices[] | { value: number } | { value: number; invoice: Invoices[] }
  > {
    const invoiceAll = await this.repository.find({ where: { user_id } });

    if (invoiceAll.length === 0) {
      throw new GetInvoiceOperationError.StatementNotFound();
    }

    return invoiceAll;
  }

  async getIncomeInvoices({
    type,
    user_id,
  }: IListInvoiceIncomeDTO): Promise<
    Invoices[] | { value: number } | { value: number; invoice: Invoices[] }
  > {
    const invoiceIncome = await this.repository.find({
      where: { type, user_id },
    });

    return invoiceIncome;
  }
  async getInvoiceExpense({
    type,
    user_id,
  }: IListInvoiceExpenseDTO): Promise<
    Invoices[] | { value: number } | { value: number; invoice: Invoices[] }
  > {
    const invoiceExpense = await this.repository.find({
      where: { type, user_id },
    });

    return invoiceExpense;
  }
}

export { InvoiceRepository };
