import Joi from 'joi'
import { Room } from '../Rooms/Model';
import { User } from '../Users/Model';

export interface Reservation {
    id: number;
    dateStart: Date;
    dateEnd: Date;
    price: number;
    cancelled: boolean;
    userId: number;
    roomId: number;
}

export const ReservationSchema = Joi.object({
    id: Joi.number().required().integer().positive(),
    dateStart: Joi.date().required(),
    dateEnd: Joi.date().required(),
    price: Joi.number().positive().required(),
    cancelled: Joi.boolean(),
    userId: Joi.number().required().integer().positive(),
    roomId: Joi.number().required().integer().positive()
})