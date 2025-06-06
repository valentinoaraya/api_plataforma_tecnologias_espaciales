import express from "express"
import { PORT } from "./config"
import { processRouter } from "./routes/process.routes"
import { queryRouter } from "./routes/query.routes"

const app = express()

app.use(express.json())

app.get("/", (_req, res) => {
    res.send("Hola desde Express")
})

app.use("/api/process", processRouter)
app.use("/api/query", queryRouter)

app.listen(PORT, () => {
    console.log("Servidor escuchando en el puerto:", PORT)
})