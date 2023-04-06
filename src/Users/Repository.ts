import Joi, { ValidationErrorItem } from 'joi';
import IRepository from '../interfaces/IRepository'
import { User, UserSchema } from './Model';


export class UsersRepository implements IRepository<User> {
    users: User[];

    constructor() {
        this.users = [];
    }

    getAll(): User[] {
        return this.users;
    }

    getOne(id: number): User | void  {
        return this.users.find(u => u.id == id)
    }

    deleteOne(id: number): boolean {
        const index = this.users.findIndex(u => u.id == id)


        if (index == -1) {
            return false;
        }

        this.users.splice(index, 1);
        return true;
    }

    createOne(object: User): void | ValidationErrorItem[] {
        object.id = this.users.length;

        const validationResult = UserSchema.validate(object)

        if (validationResult.error) {
            return validationResult.error.details
        }

        this.users.push(object);

    }
}

export default new UsersRepository();