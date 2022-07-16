import 'dotenv/config'

import vilaoController from './controller/vilaoController.js'
    
import express from 'express'
import cors from 'cors'


const server = express();
server.use(cors());
server.use(express.json());

server.use(vilaoController);




server.listen(process.env.PORT, () => console.log(`API Conectada na Porta ${process.env.PORT}`));