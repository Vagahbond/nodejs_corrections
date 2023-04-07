import Joi from "joi";
import mongoose from "../services/mongooseService";

export interface IRoom extends mongoose.Document {
    number: number;
    floor: number;
    price: number;
}

export const RoomValidationSchema = Joi.object({
    number: Joi.number().required().integer().positive(),
    floor: Joi.number().required().integer().min(0),
    price: Joi.number().required().positive()
})

export const RoomSchema = new mongoose.Schema({
    number: { type: Number, required: true },
    floor: { type: Number, required: true },
    price: { type: Number, required: true}
})

export default mongoose.model<IRoom>('Room', RoomSchema);
    

