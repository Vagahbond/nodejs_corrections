"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const map_1 = __importDefault(require("./map"));
class Scene {
    constructor(mapSize = 8, frameTime) {
        this.interval = null;
        this.map = new map_1.default(mapSize);
        this.frameTime = frameTime;
    }
    start() {
        this.interval = setInterval(() => {
            this.update();
        }, this.frameTime);
    }
    stop() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
    update() {
        this.map.movableObjects.forEach(o => {
            this.map.move(o);
        });
        this.map.print();
    }
}
exports.default = Scene;
