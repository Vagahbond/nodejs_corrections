import Joi from 'joi';

export type Role = 'admin' | 'user' | 'worker';

export interface User {
    id: number;
    nom: string;
    prenom: string;
    username: string;
    password: string;
    role: Role;
}

export const UserSchema = Joi.object({
    id: Joi.number().integer().positive().required(),
    nom: Joi.string().required(),
    prenom: Joi.string().required(),
    username: Joi.string().alphanum().required(),
    password: Joi.string().required(),
    role: Joi.string().valid('admin', 'user', 'worker').required(),
});
