import Joi, { ValidationErrorItem } from 'joi';
import IRepository from '../interfaces/IRepository'
import idService from '../services/idService';
import { User, UserSchema } from './Model';


export class UsersRepository implements IRepository<User, User> {
    users: User[];

    constructor() {
        this.users = [];
    }

    getAll(): User[] {
        return this.users;
    }

    getOne(id: string): User | void  {
        return this.users.find(u => u.id == id)
    }

    deleteOne(id: string): boolean {
        const index = this.users.findIndex(u => u.id == id)


        if (index == -1) {
            return false;
        }

        this.users.splice(index, 1);
        return true;
    }

    createOne(object: User): void | ValidationErrorItem[] {
        object.id = idService();

        const validationResult = UserSchema.validate(object)

        if (validationResult.error) {
            return validationResult.error.details
        }

        this.users.push(object);

    }
}

export default new UsersRepository();