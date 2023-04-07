import Joi, { ValidationErrorItem } from 'joi';
import IRepository from '../interfaces/IRepository'
import idService from '../services/idService';
import CreateRoomDTO from './DTO/createRoom.dto';
import { Room, RoomSchema } from './Model';


export class RoomsRepository implements IRepository<Room, CreateRoomDTO> {
    rooms: Room[];

    constructor() {
        this.rooms = [];
    }

    getAll(): Room[] {
        return this.rooms;
    }

    getOne(id: string): Room | void  {
        return this.rooms.find(r => r.id == id)
    }

    deleteOne(id: string): boolean {
        const index = this.rooms.findIndex(r => r.id == id)


        if (index == -1) {
            return false;
        }

        this.rooms.splice(index, 1);
        return true;
    }

    createOne(object: CreateRoomDTO): void | ValidationErrorItem[] {
        const room = {
            ...object,
            id: idService()
        };

        const validationResult = RoomSchema.validate(room)

        if (validationResult.error) {
            return validationResult.error.details
        }

        this.rooms.push(room);

    }
}

export default new RoomsRepository();