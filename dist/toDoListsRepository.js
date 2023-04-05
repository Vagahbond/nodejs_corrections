"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ToDoListRepository {
    constructor() {
        this.todos = [];
    }
    getAll() {
        return this.todos.map((todo, index) => {
            return Object.assign(Object.assign({}, todo), { id: index + 1 });
        });
    }
    get(id) {
        return this.todos[id - 1];
    }
    add(item) {
        this.todos.push(item);
    }
    delete(id) {
        if (!this.todos[id - 1]) {
            return false;
        }
        this.todos.splice(id - 1, 1);
        return true;
    }
}
exports.default = ToDoListRepository;
