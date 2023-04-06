import { type Direction, type MapObject } from './map'

export interface ITank extends MapObject {
  move: () => void
  turnLeft: () => void
  turnRight: () => void
}

export default class Tank implements ITank {
  constructor (public x: number, public y: number, public direction: Direction, public symbol: string) {
    this.symbol = 'T'

    this.y = y
    this.x = x
    this.direction = direction
  }

  public getPosition (): { x: number, y: number } {
    return { x: this.x, y: this.y }
  }

  public turnLeft (): void {
    switch (this.direction) {
      case 'N':
        this.direction = 'W'
        break
      case 'E':
        this.direction = 'N'
        break
      case 'S':
        this.direction = 'E'
        break
      case 'W':
        this.direction = 'S'
        break
    }
  }

  public turnRight (): void {
    switch (this.direction) {
      case 'N':
        this.direction = 'E'
        break
      case 'E':
        this.direction = 'S'
        break
      case 'S':
        this.direction = 'W'
        break
      case 'W':
        this.direction = 'N'
        break
    }
  }

  move (): void {
    console.log(this.x, this.y)
    switch (this.direction) {
      case 'N':
        this.y = this.y - 1
        break
      case 'E':
        this.x = this.x + 1
        break
      case 'S':
        this.y = this.y + 1
        break
      case 'W':
        this.x = this.x - 1
        break
    }
  }
}
