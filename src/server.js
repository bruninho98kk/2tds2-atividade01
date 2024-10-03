import express from "express"
import { config } from "dotenv"

import routes from "./routes/index.routes.js"

config()

const serverPort = process.env.PORT || 3000;

const app = express()
app.use(express.json())
app.use (routes);

const emocoes = [
    {
        id: 1,
        nome: "Raiva",
        cor: "Vermelho"
    },

    {
        id: 2,
        nome: "Ansiedade",
        cor: "Laranja"
    },

    {
        id: 3,
        nome: "Alegria",
        cor: "Amarelo"
    },

]


app.get("/emocoes",(req, res) => {
    return res.status(200).send( emocoes )
})

app.post("/emocoes",(req, res) => {
    const { nome, cor } = req.body
    const novaEmocao = {
        id: emocoes.length + 1,
        nome: nome,
        cor: cor
    }
    emocoes.push(novaEmocao)
    return res.status(200).send( emocoes )
})

app.listen(serverPort, () => {
    console.log(`🎃 Server started on http://localhost:${serverPort}`)
})