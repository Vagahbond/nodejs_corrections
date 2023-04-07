import Joi, { ValidationErrorItem } from 'joi';
import IRepository from '../interfaces/IRepository'
import idService from '../services/idService';
import { User, UserModel, UserValidationSchema } from './Model';

export class UsersRepository implements IRepository<User, User> {

    async getAll(): Promise<User[]> {
        return await UserModel.find();
    }

    async getOne(id: string): Promise<User | null>  {
        return await UserModel.findById(id);
    }

    async getOneByUsername(username: string): Promise<User | null> {
        return await UserModel.findOne({username});
    }

    async deleteOne(id: string): Promise<boolean> {
        const user = await UserModel.findByIdAndDelete(id);

        if (!user) {
            return false;
        }

        return true;
    }

    async createOne(object: User): Promise<null | ValidationErrorItem[]> {
        

        const validationResult = UserValidationSchema.validate(object)

        if (validationResult.error) {
            return validationResult.error.details
        }

        const user = new UserModel(object);
        
        await user.save();

        return null;

    }
}

export default new UsersRepository();