import Joi from 'joi';
import { InferSchemaType } from 'mongoose';
import mongoose from '../services/mongooseService';

export type Role = 'admin' | 'user' | 'worker';

interface IUser {
    id: string;
    name: string;
    surname: string;
    username: string;
    password: string;
    role: Role;
}

export const UserValidationSchema = Joi.object({
    id: Joi.string().uuid().required(),
    name: Joi.string().required(),
    surname: Joi.string().required(),
    username: Joi.string().alphanum().required(),
    password: Joi.string().required(),
    role: Joi.string().valid('admin', 'user', 'worker').required(),
});

export const UserSchema = new mongoose.Schema<IUser>({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ['admin', 'user', 'worker'] },
})

export type User = InferSchemaType<typeof UserSchema>;
export const UserModel = mongoose.model('User', UserSchema)
