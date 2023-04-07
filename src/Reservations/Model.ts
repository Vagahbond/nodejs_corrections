import Joi from 'joi'
import { Room } from '../Rooms/Model';
import { User } from '../Users/Model';
import mongoose from '../services/mongooseService';

export const ReservationValidationSchema = Joi.object({
    dateStart: Joi.date().required(),
    dateEnd: Joi.date().required(),
    price: Joi.number().positive().required(),
    cancelled: Joi.boolean().required(),
    userId: Joi.string().required().uuid(),
    roomId: Joi.string().required().uuid()
})

export const ReservationSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    dateStart: { type: Date, required: true },
    dateEnd: { type: Date, required: true },
    price: { type: Number, required: true },
    cancelled: { type: Boolean, required: true, default: false },
    userId: { type: String, required: true, ref: User },
    roomId: { type: String, required: true, ref: Room }
})

export const Reservation = mongoose.model('Reservation', ReservationSchema);

