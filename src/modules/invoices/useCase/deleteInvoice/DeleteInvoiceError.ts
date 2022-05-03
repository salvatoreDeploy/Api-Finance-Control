import { AppError } from "../../../../shared/errors/AppError";

export namespace DeleteInvoiceError {
  export class UserNotFound extends AppError {
    constructor() {
      super("Transactions not exist", 404);
    }
  }
}
