import Joi, { ValidationErrorItem } from 'joi';
import IRepository from '../interfaces/IRepository'
import idService from '../services/idService';
import CreateRoomDTO from './DTO/createRoom.dto';
import { Room, RoomValidationSchema } from './Model';

type TRoom = typeof Room;

export class RoomsRepository implements IRepository<TRoom, CreateRoomDTO> {

    async getAll(): Promise<TRoom[]> {
        return await Room.find();
    }

    async getOne(id: string): Promise<TRoom | null> {
        return await Room.findById(id);
    }

    async deleteOne(id: string): Promise<boolean> {
        const room = Room.findByIdAndDelete(id);

        if (room === null) {
            return false;
        }

        return true;
    }

    async createOne(object: CreateRoomDTO): Promise<null | ValidationErrorItem[]> {
        const room = new Room(object)

        const validationResult = RoomValidationSchema.validate(room)

        if (validationResult.error) {
            return validationResult.error.details
        }

        await room.save();

        return null;

    }
}

export default new RoomsRepository();