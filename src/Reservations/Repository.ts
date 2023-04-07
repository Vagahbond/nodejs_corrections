import Joi, { ValidationErrorItem } from 'joi';
import NotFoundError from '../errors/NotFoundError';
import ValidationError from '../errors/ValidationError';
import IRepository from '../interfaces/IRepository'
import idService from '../services/idService';
import { User } from '../Users/Model';
import createReservationDTO from './dto/createReservation.dto';
import updateReservationDto from './dto/updateReservation.dto';
import { Reservation, ReservationValidationSchema } from './Model';


type TReservation = typeof Reservation;

export class ReservationsRepository implements IRepository<TReservation, createReservationDTO> {

    async getAll(): Promise<TReservation[]> {
        return await Reservation.find();
    }

    async getOne(id: string): Promise<TReservation | null> {
        return await Reservation.findById(id);
    }

    async deleteOne(id: string): Promise<boolean> {
        const result = await Reservation.findByIdAndDelete(id);
        if (!result) {
            return false;
        }

        return true;
    }

    async createOne(object: createReservationDTO): Promise<null | ValidationErrorItem[]> {
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


        const validationResult = ReservationValidationSchema.validate(reservation)

        if (validationResult.error) {
            return validationResult.error.details
        }

        this.reservations.push(reservation);

    }

    async updateOne(id: string, updateDTO: updateReservationDto): Promise<void> {
        const newReservation = await Reservation.findByIdAndUpdate(id, updateDTO, { new: true })
        
        if (newReservation === null) {
            throw new NotFoundError("No reservation with this ID.")
        }
        const validateResult = ReservationValidationSchema.validate(newReservation);

        if (validateResult.error) {
            throw new ValidationError("Invalid request body", validateResult.error.details)
        }
    }
}

export default new ReservationsRepository();