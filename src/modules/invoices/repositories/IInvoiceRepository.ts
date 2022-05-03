import { Invoices } from "../../invoices/entities/invoices";
import { ICreateInvoiceDTO } from "../useCase/createInvoice/ICreateInvoiceDTO";
import { IDeleteInvoiceDTO } from "../useCase/deleteInvoice/DeleteInvoiceDTO";
import { IListInvoiceAllDTO } from "../useCase/listInvoiceAll/ListInvoiceAllDTO";
import { IListInvoiceExpenseDTO } from "../useCase/listInvoiceExpense/ListInvoiceExpenseDTO";
import { IListInvoiceIncomeDTO } from "../useCase/listInvoiceIncome/ListInvoiceIncomeDTO";
import { IUpdateInvoiceDTO } from "../useCase/updateInvoice/UpdateInvoiceDTO";

export interface IInvoiceRepository {
  create: (data: ICreateInvoiceDTO) => Promise<Invoices>;
  delete: (id: IDeleteInvoiceDTO) => Promise<Invoices | undefined>;
  update: (data: IUpdateInvoiceDTO) => Promise<Invoices | undefined>;
  getAllInvoices: (
    data: IListInvoiceAllDTO
  ) => Promise<
    Invoices[] | { value: number } | { value: number; invoice: Invoices[] }
  >;
  getIncomeInvoices: (
    data: IListInvoiceIncomeDTO
  ) => Promise<
    Invoices[] | { value: number } | { value: number; invoice: Invoices[] }
  >;
  getInvoiceExpense: (
    data: IListInvoiceExpenseDTO
  ) => Promise<
    Invoices[] | { value: number } | { value: number; invoice: Invoices[] }
  >;
}
