import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Invoices } from "../../invoices/entities/invoices";

@Entity("categories")
class Categories {
  @PrimaryGeneratedColumn("identity")
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @OneToMany(() => Invoices, (invoice) => invoice.categorie)
  invoice: Invoices[];

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;
}

export { Categories };
