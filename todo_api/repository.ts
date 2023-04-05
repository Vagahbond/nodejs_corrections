export default interface IRepository<T> {
  getAll: () => T[]
  get: (id: number) => T
  add: (item: T) => void
  delete: (id: number) => void
}
