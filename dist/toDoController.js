"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoModel_1 = require("./todoModel");
exports.default = (req, res, repository, payload) => {
    var _a, _b;
    if (!((_a = req.url) === null || _a === void 0 ? void 0 : _a.split('/')[2])) {
        switch (req.method) {
            case 'GET':
                res.writeHead(200, { 'Content-Type': 'application/json' })
                    .end(JSON.stringify(repository.getAll()));
                break;
            case 'POST':
                try {
                    const todo = JSON.parse(payload.toString());
                    todo.done = false;
                    const validationresult = todoModel_1.toDoSchema.validate(todo);
                    if (validationresult.error) {
                        res.writeHead(400, { 'Content-Type': 'application/json' })
                            .end(JSON.
                            stringify({
                            message: 'Bad request, missing arguments',
                            errors: validationresult.error.details
                        }));
                        return;
                    }
                    // if (!isTodoValid(todo)) {
                    // res.writeHead(400, { 'Content-Type': 'application/json' })
                    // .end(JSON.stringify({ message: 'Bad request, missing arguments' }));
                    // return;
                    // }
                    repository.add(todo);
                    res.writeHead(201, { 'Content-Type': 'application/json' })
                        .end(JSON.stringify(todo));
                    break;
                }
                catch (error) {
                    res.writeHead(400, { 'Content-Type': 'application/json' })
                        .end(JSON.stringify({ message: 'Bad request, content is not JSON' }));
                }
            default:
                res.writeHead(404, { 'Content-Type': 'application/json' })
                    .end(JSON.stringify({ message: 'Not found' }));
                break;
        }
    }
    else {
        const id = parseInt((_b = req.url) === null || _b === void 0 ? void 0 : _b.split('/')[2]);
        switch (req.method) {
            case 'GET':
                const todo = repository.get(id);
                if (!todo) {
                    res.writeHead(404, { 'Content-Type': 'application/json' })
                        .end(JSON.stringify({ message: 'Not found' }));
                    break;
                }
                res.writeHead(200, { 'Content-Type': 'application/json' })
                    .end(JSON.stringify(repository.get(id)));
                break;
            case 'DELETE':
                if (!repository.delete(id)) {
                    res.writeHead(404, { 'Content-Type': 'application/json' })
                        .end(JSON.stringify({ message: 'Not found' }));
                    break;
                }
                res.writeHead(204, { 'Content-Type': 'application/json' })
                    .end();
                break;
            default:
                res.writeHead(404, { 'Content-Type': 'application/json' })
                    .end(JSON.stringify({ message: 'Not found' }));
                break;
        }
    }
};
