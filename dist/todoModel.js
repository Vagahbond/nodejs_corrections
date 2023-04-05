"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDoSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.toDoSchema = joi_1.default.object({
    name: joi_1.default.string().max(32).min(3).required().description("Name of the todo"),
    description: joi_1.default.string().required().description("Description of the todo"),
    done: joi_1.default.boolean().required().description("Is the todo done")
});
