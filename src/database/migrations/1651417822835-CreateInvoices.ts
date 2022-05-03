import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateInvoices1651417822835 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "invoices",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "user_id",
            type: "uuid",
          },
          {
            name: "categorie_id",
            type: "int",
          },
          {
            name: "description",
            type: "varchar",
          },
          {
            name: "type",
            type: "varchar",
          },
          {
            name: "value",
            type: "decimal",
            precision: 5,
            scale: 2,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
        foreignKeys: [
          {
            name: "FKUserInvoice",
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            columnNames: ["user_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
          {
            name: "FKCategoriesInvoice",
            referencedTableName: "categories",
            referencedColumnNames: ["id"],
            columnNames: ["categorie_id"],
            onDelete: "SET NULL",
            onUpdate: "SET NULL",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("invoices");
  }
}
