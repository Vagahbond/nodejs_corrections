import Joi, { ValidationErrorItem } from 'joi';
import IRepository from '../interfaces/IRepository'
import idService from '../services/idService';
import { User, UserSchema } from './Model';


export class UsersRepository implements IRepository<User, User> {
    users: User[];

    constructor() {
        this.users = [];

        // Push admin
        this.users.push({
            id: "f15d5fc6-1ece-4571-857d-528a98e1811f",
            name: "Calamar",
            surname: "Carlo",
            username: "BigBoss",
            password: process.env.ADMIN_PASSWORD ?? "secret",
            role: "admin"
        })

        //remove when app ready
        
    }

    getAll(): User[] {
        return this.users;
    }

    getOne(id: string): User | void  {
        return this.users.find(u => u.id == id)
    }

    getOneByUsername(username: string): User | void {
        return this.users.find(u => u.username == username);
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