"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.REQUEST_EVENT = void 0;
const fs_1 = __importDefault(require("fs"));
const events_1 = __importDefault(require("events"));
const LOGS_FILENAME = "logs.txt";
exports.REQUEST_EVENT = "request";
const writeStream = fs_1.default.createWriteStream(LOGS_FILENAME, { flags: "a" });
const logEventEmitter = new events_1.default.EventEmitter();
logEventEmitter.on(exports.REQUEST_EVENT, (event) => {
    writeStream.write(`Accepted request at: ${event.time.toISOString()}`);
    writeStream.write(` - method: ${event.method}`);
    writeStream.write(` - route: ${event.route}`);
    writeStream.write(`- issuer: ${JSON.stringify(event.issuer)}`);
    if (event.payload) {
        writeStream.write(` - payload: ${event.payload}`);
    }
    writeStream.write(`\n`);
});
exports.default = logEventEmitter;
