import { FastifyInstance } from "fastify";
import { z } from "zod";
import axios from "axios";
import { api } from "../api/api";

// [{ "id": "1", "descricao": "TESTE PRODUTO ALTERADO", "preco": "222" }] 
const createProductBodySchema = z.object({
  id: z.string(),
  descricao: z.string(),
  preco: z.string(),
});

export async function productRoutes(app: FastifyInstance) {
  app.get('/product', async (req, res) => {
    const productResponse = await  axios.get(`${api}?pacao=listar-produtos`)

    return res.send(productResponse.data)
  })

  app.get('/product/:id', async (req, res) => {

    try {
      const { id } = createProductBodySchema.parse(req.params);

      const response = await axios.get(`${api}?pacao=ler-produto&pcodigo=${id}`);

      return res.send(response.data)

    } catch (error) {
      console.log('Erro:', error);
    }
  })

  app.post('/product/post', (req, res) => {
    const createProductPostBodySchema = z.object({
      id: z.string(),
      descricao: z.string(),
      preco: z.string(),
    });
    
    try {

      const { id, descricao, preco } = createProductPostBodySchema.parse(req.body);

      const response = axios.post(`${api}?pacao=incluir-produto&pcodigo=${id}&pdescricao=${descricao}&ppreco=${preco}`);

      return res.send(response)

    } catch (error) {
      console.log('Erro:', error);
    }
  })

  app.put('/product/:id', async (req, res) => {
    try {
      const { id } = createProductBodySchema.parse(req.params);
      const { descricao, preco } = createProductBodySchema.parse(req.body);

      const response = await axios.put(`${api}?pacao=alterar-produto&pcodigo=${id}&pdescricao=${descricao}&ppreco=${preco}`);

      return res.send(response.data);

    } catch (error) {
      console.log('Erro:', error);
    }
  })

  app.delete('/product/:id', async (req, res) => {
    try {
      const { id } = createProductBodySchema.parse(req.params);

      const response = await axios.delete(`${api}?pacao=excluir-produto&pcodigo=${id}`);

      return res.send(response)
    } catch (error) {
      console.log('Erro:', error);
    }
  })
}