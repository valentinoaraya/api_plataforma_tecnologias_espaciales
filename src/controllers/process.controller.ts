import { Request, Response } from "express"

export const saludar = async (_req: Request, res: Response) => {
    try {
        res.status(200).send({ data: "Hola desde la ruta 'process'" })
    } catch (error: any) {
        console.error("Error al saludar: ", error)
        res.status(500).send({ error: error.message })
    }
}