"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Map2d {
    constructor(size) {
        this.size = size;
        this.objects = [];
        this.movableObjects = [];
    }
    get(x, y) {
        return [...this.objects, ...this.movableObjects].filter(o => o.x === x && o.y === y);
    }
    print() {
        // console.clear()
        for (let y = 0; y < this.size; y++) {
            let row = "";
            for (let x = 0; x < this.size; x++) {
                const objects = this.get(x, y);
                if (objects.length > 0) {
                    row += objects[0].symbol + " ";
                }
                else {
                    row += "* ";
                }
            }
            console.log(row);
        }
    }
    move(object) {
        let moved = false;
        // chose a random direction
        while (!moved) {
            Math.floor(Math.random() * 2) ?
                object.turnLeft() :
                object.turnRight();
            if (object.direction === "N" && object.y > 0) {
                object.move();
                moved = true;
            }
            else if (object.direction === "E" && object.x < this.size - 1) {
                object.move();
                moved = true;
            }
            else if (object.direction === "S" && object.y < this.size - 1) {
                object.move();
                moved = true;
            }
            else if (object.direction === "W" && object.x > 0) {
                object.move();
                moved = true;
            }
        }
        return object;
    }
}
exports.default = Map2d;
