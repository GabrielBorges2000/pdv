import fastify, { FastifyInstance } from "fastify";
import { productRoutes } from "./routes/product";
import { productStockRoutes } from "./routes/stock";
import { productSalesRoutes } from "./routes/sales";

export const app: FastifyInstance = fastify();

app.get('/', async (req, res) => {
  res.redirect('http://localhost:3000')
})

app.register(productRoutes)
app.register(productStockRoutes)
app.register(productSalesRoutes)

app.listen({
  port: 3333,
  host: '0.0.0.0',
}).then(() => {
  console.log('Server Running on http://localhost:3333')
})
