import Joi, { ValidationErrorItem } from 'joi';
import NotFoundError from '../errors/NotFoundError';
import ValidationError from '../errors/ValidationError';
import IRepository from '../interfaces/IRepository'
import idService from '../services/idService';
import createReservationDTO from './dto/createReservation.dto';
import updateReservationDto from './dto/updateReservation.dto';
import { Reservation, ReservationSchema } from './Model';


export class ReservationsRepository implements IRepository<Reservation, createReservationDTO> {
    reservations: Reservation[];

    constructor() {
        this.reservations = [];

        this.reservations.push({
            id: "f15d5fc6-1ece-4571-857d-52938471811f",
            dateStart: new Date(),
            dateEnd: new Date(),
            cancelled: false,
            price: 1.00,
            userId: "f15d5fc6-1ece-4571-857d-528a98e1811f",
            roomId: "f15d5fc6-1ece-4571-857d-456a98e1811f"
        })

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

    updateOne(id: string, updateDTO: updateReservationDto): Reservation {
        let index = this.reservations
            .findIndex(r => r.id == id)

        if (index === -1) {
            throw new NotFoundError("No reservation with this ID.")
        }

        const newReservation = {
            ...this.reservations[index],
            ...updateDTO
        }

        const validateResult = ReservationSchema.validate(newReservation);

        if (validateResult.error) {
            throw new ValidationError("Invalid request body", validateResult.error.details)
        }

        this.reservations[index] = newReservation


        return this.reservations[index];
    }
}

export default new ReservationsRepository();