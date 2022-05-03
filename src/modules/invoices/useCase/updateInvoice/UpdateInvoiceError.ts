import { AppError } from "../../../../shared/errors/AppError";

export namespace UpdateInvoiceError {
  export class UserNotFound extends AppError {
    constructor() {
      super("Transactions not exist", 404);
    }
  }
}
