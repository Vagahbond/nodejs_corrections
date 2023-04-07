import Joi from 'joi';
import { Document, InferSchemaType } from 'mongoose';
import mongoose from '../services/mongooseService';

export type Role = 'admin' | 'user' | 'worker';

export interface IUser extends Document{
    name: string;
    surname: string;
    username: string;
    password: string;
    role: Role;
}

export const UserValidationSchema = Joi.object({
    name: Joi.string().required(),
    surname: Joi.string().required(),
    username: Joi.string().alphanum().required(),
    password: Joi.string().required(),
    role: Joi.string().valid('admin', 'user', 'worker').required(),
});

export const UserSchema = new mongoose.Schema<IUser>({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ['admin', 'user', 'worker'] },
})

export default mongoose.model<IUser>('User', UserSchema)
