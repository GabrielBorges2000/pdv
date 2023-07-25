'use client'
import { useEffect, useState } from "react"

import * as Ch from '@chakra-ui/react'
import API from '@/app/api'

import { Header } from "@/components/Header"
import { Sidebar } from "@/components/Sidebar"
import { z } from "zod"

interface ProductProps {
  id: string,
  product_id: string,
  amount: string,
  name: string
}

 const StockOutputs = () => {
  const [amount, setAmount] = useState<string>("")
  const [product_id, setProduct_id] = useState<string>("0")
  const [listStockOutputs, setStockOutputs] = useState<ProductProps[]>([])
  const [listProducts, setListProducts] = useState<ProductProps[]>([])

  useEffect(() => {
    const db_stock_outputs = localStorage.getItem("db_stock_outputs")
      ? JSON.parse(localStorage.getItem("db_stock_outputs")) : [];

    setStockOutputs(db_stock_outputs)

    const db_products = localStorage.getItem("db_products")
      ? JSON.parse(localStorage.getItem("db_products")) : [];

    setListProducts(db_products)
  }, [])

   const handleNewOutput = async () => {
     if (!amount || product_id === "0") {
       return alert("Selecione o produto e a quantidade!");
     }

     const id = Math.random().toString(36).substring(2);

     try {

      const createSchemaProduct = z.object({
        id: string(),
        quantidade: z.string()

      })

      const stockProduct = createSchemaProduct.parse({
        id: id,
        quantidade: amount,
      })

       const response = await API.post("/stock_output", stockProduct);
       console.log("Saída de estoque cadastrada com sucesso!");


       setStockOutputs([...listStockOutputs, response]);
     } catch (error) {
       console.log("Erro: ", error);
       alert("Houve um erro ao cadastrar a saída de estoque. Por favor, tente novamente.");
     }

     setAmount("");
     setProduct_id("0");
   };

  const removeOutput = (id: string) => {
    const newArray = listStockOutputs.filter((item) => item.id !== id)

    localStorage.setItem("db_stock_outputs", JSON.stringify(newArray))

    setStockOutputs(newArray)
  }

  const getProductById = (id: string) => {
    return listProducts.filter((item) => item.id === id)[0]?.name
  }

  return (
    <Ch.Flex h="100vh" flexDirection="column">
      <Header />

      <Ch.Flex w="100%" my="6" maxW={1120} mx="auto" px="6" h="100vh">
        <Sidebar />

        <Ch.Box w="100%">
          <Ch.SimpleGrid minChildWidth={240} h="fit-content" spacing="6">
            <Ch.Select
              value={product_id}
              onChange={(e) => setProduct_id(e.target.value)}
            >
              <option value="0">Selecione um item</option>
              {listProducts &&
                listProducts.length > 0 &&
                listProducts.map((item: ProductProps, i) => (
                  <option key={i} value={item.id}>
                    {item.name}
                  </option>
                ))}
            </Ch.Select>
            <Ch.Input
              placeholder="Quantidade"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <Ch.Button w="40" onClick={handleNewOutput}>
              SALVAR
            </Ch.Button>
          </Ch.SimpleGrid>

          <Ch.Box overflowY="auto" height="80vh">
            <Ch.Table mt="6">
              <Ch.Thead>
                <Ch.Tr>
                  <Ch.Th fontWeight="bold" fontSize="14px">
                    Nome
                  </Ch.Th>
                  <Ch.Th fontWeight="bold" fontSize="14px">
                    Qtd.
                  </Ch.Th>
                  <Ch.Th></Ch.Th>
                </Ch.Tr>
              </Ch.Thead>
              <Ch.Tbody>
                {listStockOutputs.map((item: ProductProps, i) => (
                  <Ch.Tr key={i}>
                    <Ch.Td color="gray.500">{getProductById(item.product_id)}</Ch.Td>
                    <Ch.Td color="gray.500">{item.amount}</Ch.Td>
                    <Ch.Td textAlign="end">
                      <Ch.Button
                        p="2"
                        h="auto"
                        fontSize={11}
                        color="red.500"
                        fontWeight="bold"
                        onClick={() => removeOutput(item.id)}
                      >
                        DELETAR
                      </Ch.Button>
                    </Ch.Td>
                  </Ch.Tr>
                ))}
              </Ch.Tbody>
            </Ch.Table>
          </Ch.Box>
        </Ch.Box>
      </Ch.Flex>
    </Ch.Flex>
  )
}

export default StockOutputs