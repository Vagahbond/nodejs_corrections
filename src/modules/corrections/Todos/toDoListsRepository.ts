import type IRepository from './repository'
import { type IToDo } from './todoModel'

export default class ToDoListRepository implements IRepository<IToDo> {
  todos: IToDo[]

  constructor () {
    this.todos = []
  }

  getAll (): IToDo[] {
    return this.todos.map((todo, index) => {
      return {
        ...todo,
        id: index + 1
      }
    })
  }

  get (id: number): IToDo {
    return this.todos[id - 1]
  }

  add (item: IToDo): void {
    this.todos.push(item)
  }

  delete (id: number): boolean {
    if (this.todos[id - 1] === undefined) {
      return false
    }
    this.todos.splice(id - 1, 1)

    return true
  }
}
