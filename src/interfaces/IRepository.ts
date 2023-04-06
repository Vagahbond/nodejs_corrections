import { ValidationErrorItem } from "joi";

export default interface Repository<T, CREATE_DTO_T> {
    getAll(): T[];
    getOne(id: string): T | void;
    deleteOne(id: string): boolean;
    createOne(object: CREATE_DTO_T): void | ValidationErrorItem[];
}