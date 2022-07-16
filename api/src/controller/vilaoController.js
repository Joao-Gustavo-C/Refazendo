import { inserirVilao, listarTodosViloes } from '../repository/vilaoRepository.js'

import { Router } from 'express'

const server = Router();



server.post('/vilao', async (req, resp) => {
    try {
        const novoVilao = req.body;

        if (!novoVilao.nome)
            throw new Error('Nome do filme é obrigatório!');
        
        if (!novoVilao.maldades)
            throw new Error('Maldades do filme é obrigatório!');

        if (novoVilao.poder == undefined)
            throw new Error('Campo Poder é obrigatório!');

        const vilaoInserido = await inserirVilao(novoVilao);
        resp.send(vilaoInserido);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


server.get('/vilao', async (req, resp) => {
    try {
        const resposta = await listarTodosViloes();
        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default server;