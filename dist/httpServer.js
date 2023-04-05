"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const logsEventEmitor_1 = __importStar(require("./logsEventEmitor"));
const toDoController_1 = __importDefault(require("./toDoController"));
const toDoListsRepository_1 = __importDefault(require("./toDoListsRepository"));
const getResourceFromURL = (url = "/") => url.split("/")[1];
exports.default = (port) => {
    const repository = new toDoListsRepository_1.default();
    const server = http_1.default.createServer((req, res) => {
        let payload = "";
        req.on("data", (chunk) => {
            payload += chunk;
        });
        req.on("end", () => {
            var _a;
            logsEventEmitor_1.default.emit(logsEventEmitor_1.REQUEST_EVENT, {
                time: new Date(),
                route: (_a = req.url) !== null && _a !== void 0 ? _a : "/",
                method: req.method,
                issuer: req.socket.address(),
                payload: payload.toString()
            });
            const resource = getResourceFromURL(req.url);
            switch (resource) {
                case "":
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ message: 'Welcome to my swamp' }));
                case "todos":
                    (0, toDoController_1.default)(req, res, repository, payload);
                    break;
                default:
                    res.writeHead(404, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ message: 'Not found' }));
                    break;
            }
        });
    });
    server.listen(port, () => {
        console.log(`Server running at http://localhost:${port}/`);
    });
};
