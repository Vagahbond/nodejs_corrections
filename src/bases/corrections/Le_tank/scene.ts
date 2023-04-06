import Map2d, { type IMap2d } from './map'

export interface IScene {
  map: IMap2d
  frameTime: number
  start: () => void
  stop: () => void
  update: () => void
}

export default class Scene implements IScene {
  map: IMap2d
  frameTime: number

  private interval: NodeJS.Timer | null = null

  constructor (mapSize: number = 8, frameTime: number) {
    this.map = new Map2d(mapSize)
    this.frameTime = frameTime
  }

  start (): void {
    this.interval = setInterval(() => {
      this.update()
    }
    , this.frameTime)
  }

  stop (): void {
    if (this.interval != null) {
      clearInterval(this.interval)
    }
  }

  update (): void {
    this.map.movableObjects.forEach(o => {
      this.map.move(o)
    })

    this.map.print()
  }
}
