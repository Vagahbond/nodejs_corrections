import Joi from 'joi';

export type Role = 'admin' | 'user' | 'worker';

export interface User {
    id: string;
    name: string;
    surname: string;
    username: string;
    password: string;
    role: Role;
}

export const UserSchema = Joi.object({
    id: Joi.string().uuid().required(),
    name: Joi.string().required(),
    surname: Joi.string().required(),
    username: Joi.string().alphanum().required(),
    password: Joi.string().required(),
    role: Joi.string().valid('admin', 'user', 'worker').required(),
});
