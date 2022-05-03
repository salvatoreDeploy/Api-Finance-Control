import { getRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { ICreateUserDTO } from "../useCase/createUser/ICreateUserDTO";
import { IUserRepository } from "./IUserRepository";

class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name,
    lastname,
    email,
    password,
  }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({ name, lastname, email, password });

    return this.repository.save(user);
  }

  async findById(id: string): Promise<User | undefined> {
    return this.repository.findOne({
      id,
    });
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.repository.findOne({
      email,
    });
  }
}

export { UserRepository };
