import express from "express"
import cors from "cors"  
import { createServer } from 'http';
import { Server } from 'socket.io';
 
class Servidor {
  constructor() {
    this.app = express() //creamos la aplicación de express
    this.port = process.env.PORT || 3000

    this.server = createServer(this.app)
    this.io = new Server(this.server) // Socket.io: Servidor de sockets

    this.paths = { }

    //Conectar a base de datos

    // Middleware
    this.Middleware()

    //Rutas de mi aplicación
    this.routes()
  }

 

  Middleware() {
    //CORS
    this.app.use(cors())

    // parseo y lectura del body
    this.app.use(express.json())

    // Directorio publico
    this.app.use(express.static("public"))
    
  }

  routes() {
    //rutas separadas
    // this.app.use(this.paths.archivos, archivosRouter) 
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log(`Example app listening on port ${this.port}`)
    })
  }
}

export default Servidor