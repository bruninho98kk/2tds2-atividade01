import { Router } from "express";

const candidatosRoutes = Router();

let candidatos = [
    {  
   id: Math.random() * 1000000,
    nome: "Capitã Lucimara",
    partido: "Partido Aleatório",
    idade: 42,
    segundo: true, // Concorrente ao segundo mandato
    propostas: [
      "Aumento do salário mínimo",
      "Redução de impostos",
      "Mais investimentos em educação"
    ]
    },
];

//rota pra buscar todas candidatos
candidatosRoutes.post("/", (req, res) => {
});

candidatosRoutes.get("/", (req, res) => {
    return res .status(200).send(candidatos);
});
candidatosRoutes.post("/candidatos", (req, res) => {
    const { nome, cor } = req.body;
    const novaEmocao = {
        id: candidatos.length + 1,
        nome: nome,
        cor: cor
    }


    candidatos.push(novaEmocao)
    return res .status(201).send(novaEmocao);
});
candidatosRoutes.get ("/:id", (req, res)  => {
    const {id} = req.params;
    console.log(id);

    //console.log(id);

  const emocao = candidatos.find((emotion) => emotion.id == id)

    if (!emocao) {
        return res.status(404).send({
            message: "Emoção não encontrada!",
        });
    }

return res.status(200).send({
    message: "Emoção encontrada",
    emocao,
});

});

candidatosRoutes.put("/:id", (req, res) => {
    const{ id } = req.params;

    const emocao = candidatos.find((emotion) => emotion.id = id);
    if(!emocao) {
        return res.status(404).send({
            message: "Emoção não encontra!"
        })
    }
    const {nome, cor} = req.body
    emocao.nome = nome;
    emocao.cor = cor;

    return res.status(200).send({
        message: "Emoção atualizada!",
        emocao,
    })
});

candidatosRoutes.delete("/:id", (req, res) => {
    const{ id } = req.params;

    const emocao = candidatos.find((emotion) => emotion.id = id);
    if(!emocao) {
        return res.status(404).send({
            message: "Emoção não encontrada!"
        })
    }

    candidatos = candidatos.filter((emotion) => emotion.id != id);
    
    return res.status(200).send({
        message: "Emoção deletada!",
        emocao,
    });
});
export default candidatosRoutes;