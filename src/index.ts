import express from "express"
import { PORT } from "./config"

const app = express()

app.use(express.json())

app.get("/", (_req, res) => {
    res.send("Hola desde Express")
})

app.listen(PORT, () => {
    console.log("Servidor escuchando en el puerto:", PORT)
})