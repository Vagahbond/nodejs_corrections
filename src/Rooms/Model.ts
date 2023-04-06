import Joi from "joi";

export interface Room {
    id: number;
    number: number;
    floor: number;
    price: number;
}

export const RoomSchema = Joi.object({
    id: Joi.number().required().integer().positive(),
    number: Joi.number().required().integer().positive(),
    floor: Joi.number().required().integer().positive(),
    price: Joi.number().required().positive()
})

