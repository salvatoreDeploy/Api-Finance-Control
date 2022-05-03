import { User } from "../../user/entities/User";
import { Categories } from "../../categories/entities/Categories";
import { v4 as uuid } from "uuid";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("invoices")
class Invoices {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column("uuid")
  user_id: string;

  @ManyToOne(() => User, (user) => user.invoice)
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column("int4")
  categorie_id: number;

  @ManyToOne(() => Categories, (categorie) => categorie.invoice)
  @JoinColumn({ name: "categorie_id" })
  categorie: Categories;

  @Column()
  description: string;

  @Column()
  type: "income" | "expense";

  @Column("decimal", { precision: 5, scale: 2 })
  value: number;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Invoices };
