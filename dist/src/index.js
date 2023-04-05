"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = __importDefault(require("events"));
const fs_1 = __importDefault(require("fs"));
const fileModifiedEmmiter = new events_1.default.EventEmitter();
const file = '/tmp/nodejs/file.txt';
const EVENT_NAME = 'fileModified';
fileModifiedEmmiter.on(EVENT_NAME, (fileSizeDifference) => {
    // write a log on logs.txt
    fs_1.default.appendFile('logs.txt', `Entry at ${new Date().toISOString()} - File size changed by ${fileSizeDifference} bytes`, (err) => {
        if (err) {
            console.log(err);
        }
    });
});
fs_1.default.watchFile(file, (before, curr) => {
    console.log("File modified");
    const fileSizeDifference = curr.size - before.size;
    fileModifiedEmmiter.emit(EVENT_NAME, fileSizeDifference);
});
console.log("hello");
