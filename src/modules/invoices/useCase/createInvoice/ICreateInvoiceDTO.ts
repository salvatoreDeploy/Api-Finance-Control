import { Invoices } from "../../entities/invoices";

export type ICreateInvoiceDTO = Pick<
  Invoices,
  "user_id" | "categorie_id" | "description" | "type" | "value"
>;
