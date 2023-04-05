export type Direction = 'N' | 'E' | 'S' | 'W'

export interface IMap2d {
  size: number
  get: (x: number, y: number) => MapObject[]
  print: () => void
  move: (object: MapObject) => MapObject
  objects: MapObject[]
  movableObjects: MovableMapObject[]
}

export interface MapObject {
  x: number
  y: number
  symbol: string
}

export interface MovableMapObject extends MapObject {
  move: () => void
  direction: Direction
  turnLeft: () => void
  turnRight: () => void
}

export default class Map2d implements IMap2d {
  size: number
  objects: MapObject[]
  movableObjects: MovableMapObject[]

  constructor (size: number) {
    this.size = size
    this.objects = []
    this.movableObjects = []
  }

  get (x: number, y: number): MapObject[] {
    return [...this.objects, ...this.movableObjects].filter(o => o.x === x && o.y === y)
  }

  print (): void {
    // console.clear()
    for (let y = 0; y < this.size; y++) {
      let row = ''
      for (let x = 0; x < this.size; x++) {
        const objects = this.get(x, y)
        if (objects.length > 0) {
          row += objects[0].symbol + ' '
        } else {
          row += '* '
        }
      }
      console.log(row)
    }
  }

  move (object: MovableMapObject): MovableMapObject {
    let moved = false

    // chose a random direction

    while (!moved) {
      Math.floor(Math.random() * 2)
        ? object.turnLeft()
        : object.turnRight()

      if (object.direction === 'N' && object.y > 0) {
        object.move()
        moved = true
      } else if (object.direction === 'E' && object.x < this.size - 1) {
        object.move()
        moved = true
      } else if (object.direction === 'S' && object.y < this.size - 1) {
        object.move()
        moved = true
      } else if (object.direction === 'W' && object.x > 0) {
        object.move()
        moved = true
      }
    }

    return object
  }
}
