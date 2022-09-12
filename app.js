import * as dotenv from "dotenv" // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import Servidor from "./models/server.js"
dotenv.config()

const servidor = new Servidor()
// import path from "path"
// import { fileURLToPath } from "url"
// //Needed for Path
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

servidor.listen()