import type ToDoListRepository from './toDoListsRepository'
import { type IncomingMessage, type ServerResponse } from 'http'
import { type IToDo, toDoSchema } from './todoModel'

export default (req: IncomingMessage, res: ServerResponse, repository: ToDoListRepository, payload: string | Buffer): void => {
  if (req?.url?.split('/')[2].length === 0) {
    switch (req.method) {
      case 'GET':
        res.writeHead(200, { 'Content-Type': 'application/json' })
          .end(JSON.stringify(repository.getAll()))
        break

      case 'POST':
        try {
          const todo: IToDo = JSON.parse(payload.toString())
          todo.done = false
          const validationresult = toDoSchema.validate(todo)

          if (validationresult.error != null) {
            res.writeHead(400, { 'Content-Type': 'application/json' })
              .end(JSON
                .stringify({
                  message: 'Bad request, missing arguments',
                  errors: validationresult.error.details
                }))
            return
          }
          // if (!isTodoValid(todo)) {
          // res.writeHead(400, { 'Content-Type': 'application/json' })
          // .end(JSON.stringify({ message: 'Bad request, missing arguments' }));
          // return;
          // }

          repository.add(todo)
          res.writeHead(201, { 'Content-Type': 'application/json' })
            .end(JSON.stringify(todo))

          break
        } catch (error) {
          res.writeHead(400, { 'Content-Type': 'application/json' })
            .end(JSON.stringify({ message: 'Bad request, content is not JSON' }))
        }
        break
      default:
        res.writeHead(404, { 'Content-Type': 'application/json' })
          .end(JSON.stringify({ message: 'Not found' }))
        break
    }
  } else {
    const id = parseInt(req?.url?.split('/')[2].length)

    switch (req.method) {
      case 'GET':
        const todo = repository.get(id)
        if (!todo) {
          res.writeHead(404, { 'Content-Type': 'application/json' })
            .end(JSON.stringify({ message: 'Not found' }))
          break
        }
        res.writeHead(200, { 'Content-Type': 'application/json' })
          .end(JSON.stringify(repository.get(id)))
        break
      case 'DELETE':
        if (!repository.delete(id)) {
          res.writeHead(404, { 'Content-Type': 'application/json' })
            .end(JSON.stringify({ message: 'Not found' }))
          break
        }
        res.writeHead(204, { 'Content-Type': 'application/json' })
          .end()
        break
      default:
        res.writeHead(404, { 'Content-Type': 'application/json' })
          .end(JSON.stringify({ message: 'Not found' }))
        break
    }
  }
}
