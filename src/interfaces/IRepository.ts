import { ValidationErrorItem } from "joi";

export default interface Repository<T> {
    getAll(): T[];
    getOne(id: number): T | void;
    deleteOne(id: number): boolean;
    createOne(object: T): void | ValidationErrorItem[];
}