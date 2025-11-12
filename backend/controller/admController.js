import {Router} from 'express';
import { ContarUsuarios,listarUsuarios } from '../repository/admRepository.js';

const endpoint = Router();

endpoint.get('/usuarios', async (req, resp) => {
    const lista = await listarUsuarios();
    resp.send(lista);
  });

endpoint.get("/totalusuarios",async(req,resp)=>{
    let registro = await ContarUsuarios()
    resp.send(registro);
})


export default endpoint;