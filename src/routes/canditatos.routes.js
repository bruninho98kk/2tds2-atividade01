import { Router } from "express";

const candidatosRoutes = Router();

let candidatos = [
    {  
   id: Math.floor(Math.random() * 1000000),
    nome: "Capitã Lucimara",
    partido: "PSD",
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
candidatosRoutes.get("/", (req, res) => {
   return res.status(200).send(candidatos)
});

candidatosRoutes.post("/", (req, res) => {
    const { nome, partido, idade, segundo, propostas } = req.body;

    //Validação dos campos nome e partido

if(!nome || !partido) {
    return res.status(400).send({
        message: "O nome ou o partido não foi preenchido!"
    });
} 
    // validação de idade
    if(idade < 18) {
        return res.status(400).send({
            message: "O candidato não é adulto!"
        })
    }

    const novoCandidato = {
        id: Math.floor(Math.random() * 1000000),
        nome, 
        partido,
        idade,
        segundo, 
        propostas 
    }

    candidatos.push(novoCandidato);

    return res.status(201).send({
        message: "Candidato cadastrado com sucesso!",
        novoCandidato,
    });
});

candidatosRoutes.get("/:id", (req, res) => {
    const {id} = req.params;
 
//console.log(id);

    const candidato = candidatos.find((politico) => politico.id == id);

  if (!candidato){  
    return res.status(404).send({
        message: "Candidato não encontrado",
    });
}








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