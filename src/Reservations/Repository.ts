import Joi, { ValidationErrorItem } from 'joi';
import IRepository from '../interfaces/IRepository'
import { Reservation, ReservationSchema } from './Model';


export class ReservationsRepository implements IRepository<Reservation> {
    reservations: Reservation[];

    constructor() {
        this.reservations = [];
    }

    getAll(): Reservation[] {
        return this.reservations;
    }

    getOne(id: number): Reservation | void {
        return this.reservations.find(r => r.id == id)
    }

    deleteOne(id: number): boolean {
        const index = this.reservations.findIndex(r => r.id == id)


        if (index == -1) {
            return false;
        }

        this.reservations.splice(index, 1);
        return true;
    }

    createOne(object: Reservation): void | ValidationErrorItem[] {
        object.cancelled = false;

        if (object.dateStart > object.dateEnd
            || object.dateStart < new Date()) {
            throw Error("Invalid reservation Date.")
        }

        object.id = this.reservations.length;

        const validationResult = ReservationSchema.validate(object)

        if (validationResult.error) {
            return validationResult.error.details
        }

        this.reservations.push(object);

    }
}

export default new ReservationsRepository();