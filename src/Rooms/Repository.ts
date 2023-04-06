import Joi, { ValidationErrorItem } from 'joi';
import IRepository from '../interfaces/IRepository'
import idService from '../services/idService';
import { Room, RoomSchema } from './Model';


export class RoomsRepository implements IRepository<Room, Room> {
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

    createOne(object: Room): void | ValidationErrorItem[] {
        object.id = idService();

        const validationResult = RoomSchema.validate(object)

        if (validationResult.error) {
            return validationResult.error.details
        }

        this.rooms.push(object);

    }
}

export default new RoomsRepository();