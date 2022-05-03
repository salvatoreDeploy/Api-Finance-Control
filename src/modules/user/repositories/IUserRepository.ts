import { User } from "../entities/User";
import { ICreateUserDTO } from "../useCase/createUser/ICreateUserDTO";

interface IUserRepository {
  create: (data: ICreateUserDTO) => Promise<User>;
  findById: (user_id: string) => Promise<User | undefined>;
  findByEmail: (email: string) => Promise<User | undefined>;
}

export { IUserRepository };
