import { FastifyInstance } from "fastify";
import { z } from "zod";
import axios from "axios";
import { api } from "../api/api";

// [{ "id": "1", "descricao": "TESTE PRODUTO ALTERADO", "preco": "25", "quantidade": 10, "cpf": "171.47.128-09" }]
const createSalesBodySchema = z.object({
  id: z.number(),
  quantidade: z.number(),
  data: z.string(),
  preco: z.number(),
  cpf: z.string()
});

export async function productSalesRoutes(app: FastifyInstance) {
  app.get('/sales', (req, res) => {
    const { data } = createSalesBodySchema.parse(req.body)

    const salestResponse = axios.get(`${api}?pacao=listar-vendas&pdata=${data}`)

    return res.send(salestResponse)
  })

  app.get('/sales/:id', (req, res) => {
    return (console.log('Roda em desenvimento'))
  })

  app.post('/sales', (req, res) => {
    try {
      const { id, quantidade, data, preco, cpf } = createSalesBodySchema.parse(req.body);

      const response = axios.post(`${api}?pacao=incluir-venda&pdata=${data}&pcodigo=${id}&pquantidade=${quantidade}&ppreco=${preco},pcpf=${cpf}`);

      return res.send(response)

    } catch (error) {
      console.log('Erro:', error);
    }
  })

  // app.put('/sales/:id', (req, res) => {

  // })

  app.delete('/sales/:id', (req, res) => {
    try {
      const { id, data } = createSalesBodySchema.parse(req.params);

      const response = axios.delete(`${api}?pacao=excluir-venda&pdata=${data}&pcodigo=${id}`);

      return res.send(response)
    } catch (error) {
      console.log('Erro:', error);
    }
  })
}