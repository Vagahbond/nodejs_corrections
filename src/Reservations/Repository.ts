import Joi, { ValidationErrorItem } from 'joi';
import IRepository from '../interfaces/IRepository'
import idService from '../services/idService';
import createReservationDTO from './dto/createReservation.dto';
import updateReservationDto from './dto/updateReservation.dto';
import { Reservation, ReservationSchema } from './Model';


export class ReservationsRepository implements IRepository<Reservation, createReservationDTO> {
    reservations: Reservation[];

    constructor() {
        this.reservations = [];
    }

    getAll(): Reservation[] {
        return this.reservations;
    }

    getOne(id: string): Reservation | void {
        return this.reservations.find(r => r.id == id)
    }

    deleteOne(id: string): boolean {
        const index = this.reservations.findIndex(r => r.id == id)


        if (index == -1) {
            return false;
        }

        this.reservations.splice(index, 1);
        return true;
    }

    createOne(object: createReservationDTO): void | ValidationErrorItem[] {
        const reservation: Reservation = {
            ...object,
            cancelled: false,
            id: idService(),
            price: 1.00
        }

        if (object.dateStart > object.dateEnd
            || object.dateStart < new Date()) {
            throw Error("Invalid reservation Date.")
        }


        const validationResult = ReservationSchema.validate(reservation)

        if (validationResult.error) {
            return validationResult.error.details
        }

        this.reservations.push(reservation);

    }

    updateOne(id: string, updateDTO: updateReservationDto): Reservation | ValidationErrorItem[] | void {
        let reservation = this.reservations
            .find(r => r.id == id)

        if (reservation === undefined) {
            return;
        }

        const newReservation = {
            ...reservation,
            ...updateDTO
        }

        const validateResult = ReservationSchema.validate(newReservation);

        if (validateResult.error) {
            return validateResult.error.details
        }

        reservation = newReservation;

        return newReservation;
    }
}

export default new ReservationsRepository();