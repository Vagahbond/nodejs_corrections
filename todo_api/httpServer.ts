import http from 'http'
import logEventEmitter, { REQUEST_EVENT } from './logsEventEmitor'
import toDoController from './toDoController'
import ToDoListRepository from './toDoListsRepository'

const getResourceFromURL = (url: string = '/'): string => url.split('/')[1]

export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'

export default (port: number): void => {
  const repository = new ToDoListRepository()

  const server = http.createServer((req, res) => {
    let payload: string = ''

    req.on('data', (chunk: string | Buffer) => {
      payload += chunk.toString()
    })

    req.on('end', () => {
      logEventEmitter.emit(REQUEST_EVENT, {
        time: new Date(),
        route: req.url ?? '/',
        method: req.method as Method,
        issuer: req.socket.address(),
        payload: payload.toString()
      })

      const resource = getResourceFromURL(req.url)

      switch (resource) {
        case '':
          res.writeHead(200, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ message: 'Welcome to my swamp' }))
          break
        case 'todos':
          toDoController(req, res, repository, payload)
          break
        default:
          res.writeHead(404, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ message: 'Not found' }))
          break
      }
    })
  })

  server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`)
  }
  )
}
