import Joi, { ValidationErrorItem } from 'joi';
import IRepository from '../interfaces/IRepository'
import { Room, RoomSchema } from './Model';


export class RoomsRepository implements IRepository<Room> {
    rooms: Room[];

    constructor() {
        this.rooms = [];
    }

    getAll(): Room[] {
        return this.rooms;
    }

    getOne(id: number): Room | void  {
        return this.rooms.find(r => r.id == id)
    }

    deleteOne(id: number): boolean {
        const index = this.rooms.findIndex(r => r.id == id)


        if (index == -1) {
            return false;
        }

        this.rooms.splice(index, 1);
        return true;
    }

    createOne(object: Room): void | ValidationErrorItem[] {
        object.id = this.rooms.length;

        const validationResult = RoomSchema.validate(object)

        if (validationResult.error) {
            return validationResult.error.details
        }

        this.rooms.push(object);

    }
}

export default new RoomsRepository();