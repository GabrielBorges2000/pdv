import { FastifyInstance } from "fastify";
import { z } from "zod";
import axios from "axios";
import { api } from "../api/api";

// { "id": "1", "estoque": "1100" }

export async function productStockRoutes(app: FastifyInstance) {
  app.get('/stock',  (req, res) => {
    const stockResponse = axios.get(`${api}?pacao=ler-estoque`)
    return res.send(stockResponse)
  })

  app.get('/stock/:id',  (req, res) => {
    const createStockBodyIdSchema = z.object({
      id: z.string(),
    });

    try {
      const { id } = createStockBodyIdSchema.parse(req.params);

      const response = axios.get(`${api}?pacao=ler-estoque&pcodigo=${id}`);
      return res.send(response)
    } catch (error) {
      console.log('Erro:', error);
    }
  })

  app.post('/stock/post',  (req, res) => {
    try {
      const createStockBodySchema = z.object({
        id: z.string(),
        quantidade: z.string(),
      });

      const { id, quantidade } = createStockBodySchema.parse(req.body);

      const response = axios.post(`${api}?pacao=incluir-estoque&pcodigo=${id}&pquantidade=${quantidade}`);
      return res.send(response)

    } catch (error) {
      console.log('Erro:', error);
    }
  })

  app.put('/stock/:id',  (req, res) => {
    const updateStockBodySchema = z.object({
      id: z.string(),
      estoque: z.string(),
    });

    try {
      const { id } = updateStockBodySchema.parse(req.params);
      const { estoque } = updateStockBodySchema.parse(req.body);

      const response = axios.put(`${api}?pacao=alterar-estoque&pcodigo=${id}&pquantidade=${estoque}`);
      return res.send(response);

    } catch (error) {
      console.error('Erro:', error);
    }
  });

  app.delete('/stock/:id',  (req, res) => {
    const deleteStockBodySchema = z.object({
      id: z.string(),
    });

    try {
      const { id } = deleteStockBodySchema.parse(req.params);

      const response = axios.delete(`${api}?pacao=excluir-estoque&pcodigo=${id}`);
      return res.send(console.log('cadastrado com suceso', response))
      
    } catch (error) {
      console.log('Erro:', error);
    }

  })
}