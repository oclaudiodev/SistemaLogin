import express from 'express';
import adicionarRotas from './rotas.js';
import cors from 'cors';

const api = express();
api.use(express.json());
api.use(cors());

adicionarRotas(api);

api.listen(5011, () => console.log("API subiu com sucesso")); 