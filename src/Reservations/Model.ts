import Joi from 'joi'
import { Room } from '../Rooms/Model';
import { User } from '../Users/Model';

export interface Reservation {
    id: string;
    dateStart: Date;
    dateEnd: Date;
    price: number;
    cancelled: boolean;
    userId: string;
    roomId: string;
}

export const ReservationSchema = Joi.object({
    id: Joi.string().required().uuid(),
    dateStart: Joi.date().required(),
    dateEnd: Joi.date().required(),
    price: Joi.number().positive().required(),
    cancelled: Joi.boolean().required(),
    userId: Joi.string().required().uuid(),
    roomId: Joi.string().required().uuid()
})


// {
//     "dateStart": "2023/06/06",
//     "dateEnd": "2023/06/10",
//     "userId": "",
//     "roomId": "",
// }