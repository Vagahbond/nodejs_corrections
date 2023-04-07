import Joi from "joi";
import mongoose from "../services/mongooseService";

// export interface Room {
//     id: string;
//     number: number;
//     floor: number;
//     price: number;
// }

export const RoomValidationSchema = Joi.object({
    id: Joi.string().required().uuid(),
    number: Joi.number().required().integer().positive(),
    floor: Joi.number().required().integer().min(0),
    price: Joi.number().required().positive()
})

export const RoomSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    number: { type: Number, required: true },
    floor: { type: Number, required: true },
    price: { type: Number, required: true}
})

export const Room = mongoose.model('Room', RoomSchema);
    

