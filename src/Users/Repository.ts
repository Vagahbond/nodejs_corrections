import Joi, { ValidationErrorItem } from 'joi';
import IRepository from '../interfaces/IRepository'
import idService from '../services/idService';
import { User, UserValidationSchema } from './Model';

type TUser = typeof User;
export class UsersRepository implements IRepository<TUser, TUser> {

    async getAll(): Promise<TUser[]> {
        return await User.find();
    }

    async getOne(id: string): Promise<TUser | null>  {
        return await User.findById(id);
    }

    async getOneByUsername(username: string): Promise<TUser | null> {
        return await User.findOne({username});
    }

    deleteOne(id: string): boolean {
        const index = this.users.findIndex(u => u.id == id)


        if (index == -1) {
            return false;
        }

        this.users.splice(index, 1);
        return true;
    }

    async createOne(object: TUser): Promise<void | ValidationErrorItem[]> {
        

        const validationResult = UserValidationSchema.validate(object)

        if (validationResult.error) {
            return validationResult.error.details
        }

        const user = new User(object);
        
        await user.save();

    }
}

export default new UsersRepository();