"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tank {
    constructor(x, y, direction, symbol) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.symbol = symbol;
        this.symbol = "T";
        this.y = y;
        this.x = x;
        this.direction = direction;
    }
    getPosition() {
        return { x: this.x, y: this.y };
    }
    turnLeft() {
        switch (this.direction) {
            case "N":
                this.direction = "W";
                break;
            case "E":
                this.direction = "N";
                break;
            case "S":
                this.direction = "E";
                break;
            case "W":
                this.direction = "S";
                break;
        }
    }
    turnRight() {
        switch (this.direction) {
            case "N":
                this.direction = "E";
                break;
            case "E":
                this.direction = "S";
                break;
            case "S":
                this.direction = "W";
                break;
            case "W":
                this.direction = "N";
                break;
        }
    }
    move() {
        console.log(this.x, this.y);
        switch (this.direction) {
            case "N":
                this.y = this.y - 1;
                break;
            case "E":
                this.x = this.x + 1;
                break;
            case "S":
                this.y = this.y + 1;
                break;
            case "W":
                this.x = this.x - 1;
                break;
        }
    }
}
exports.default = Tank;
