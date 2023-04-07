import Joi from "joi";

export interface Room {
    id: string;
    number: number;
    floor: number;
    price: number;
}

export const RoomSchema = Joi.object({
    id: Joi.string().required().uuid(),
    number: Joi.number().required().integer().positive(),
    floor: Joi.number().required().integer().min(0),
    price: Joi.number().required().positive()
})

