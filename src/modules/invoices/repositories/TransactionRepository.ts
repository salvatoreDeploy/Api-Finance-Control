import { EntityRepository, Repository } from "typeorm";
import { Invoices } from "../entities/invoices";

interface IUser {
  user_id: string;
}

interface Balance {
  income: number;
  expense: number;
  total: number;
}

enum Type {
  INCOME = "income",
  EXPENSE = "expense",
}

interface TypeDTO {
  income: number;
  expense: number;
}

@EntityRepository(Invoices)
class TransactionsRepository extends Repository<Invoices> {
  private calculateBalance(transactions: Array<Invoices>): TypeDTO {
    return transactions.reduce(
      (accumulator, transaction) => {
        switch (transaction.type) {
          case Type.INCOME:
            accumulator.income += Number(transaction.value);
            break;
          case Type.EXPENSE:
            accumulator.expense += Number(transaction.value);
            break;
          default:
            break;
        }

        return accumulator;
      },
      { income: 0, expense: 0 }
    );
  }

  public async getBalance({ user_id }: IUser): Promise<Balance> {
    const transactions = await this.find({ where: { user_id } });

    const { income, expense } = this.calculateBalance(transactions);
    const total = income - expense;

    const balance: Balance = { income, expense, total };

    return balance;
  }
}

export { TransactionsRepository };
