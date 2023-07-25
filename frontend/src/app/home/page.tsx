'use client'
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { useEffect, useState } from 'react'

import * as Ch from '@chakra-ui/react'
import API from '@/app/api'
import { string, z } from "zod";

interface ProductProps {
  id: string,
  descricao: string
  preco: string
}

const Home = () => {
  const [descricao, setDescricao] = useState<string>('')
  const [preco, setPreco] = useState<string>('')
  const [listProducts, setListProducts] = useState<ProductProps[]>([])

  useEffect(() => {
    API.get('/product').then(
      response => {
        console.log(response.data)
        setListProducts(response.data)
      }
    ).catch(error => {
      console.log('Erro: ', error)
    })

  }, [])

  const verifyProductDescricao = () => {
    return !!listProducts.find((prod: { descricao: string }) => prod.descricao === descricao)
  }

  const handleNewProducts = () => {
    if (!descricao || !preco) {
      alert('Preencha todos os campos antes de cadastrar o produto.');
      return;
    }

    if (verifyProductDescricao()) {
      alert('Produto já cadastrado');
      return;
    }

    const id = Math.random().toString(36).substring(2);

    try {
      const createSchemaProduct = z.object({
        id: z.string(),
        descricao: z.string(),
        preco: z.string()
      })

      const productData = createSchemaProduct.parse({ id, descricao, preco })

      const response = API.post('/product/post', productData);
      console.log('Produto cadastrado com sucesso!');

      setListProducts([...listProducts, response]);

      setDescricao('');
      setPreco('');
    } catch (error) {
      console.log('Erro: ', error);
      alert('Houve um erro ao cadastrar o produto. Por favor, tente novamente.');
    }
  };

  const removeProduct = async (id: string) => {
    // const hasOutputs = db_strock_outputs.filter((item: { product_id: string }) => item.product_id === id).length;
    // const hasOuEntries = db_stock_entries.filter((item: { product_id: string }) => item.product_id === id).length;

    // if (hasOuEntries || hasOutputs) {
    //   alert('Esse produto possui movimentação!');
    //   return;
    // }

    try {
      await API.delete(`/product/${id}`);
      console.log('Produto excluído com sucesso!');

      const updatedListProducts = listProducts.filter((prod: { id: string }) => prod.id !== id);
      setListProducts(updatedListProducts);

    } catch (error) {
      console.log('Erro: ', error);
      alert('Houve um erro ao excluir o produto. Por favor, tente novamente.');
    }
  };

  return (
    <Ch.Flex h='100vh' flexDirection='column'>
      <Header />
      <Ch.Flex w='100%' h='100vh' my='6px' maxW={1120} mx='auto' px='6px'>
        <Sidebar />
        <Ch.Box w='100%'>
          <Ch.SimpleGrid minChildWidth={240} h={"fit-content"} spacing='6' >
            <Ch.Input
              value={descricao}
              type="text"
              onChange={(e) => setDescricao(e.target.value)}
              placeholder="Nome do Produto"
            />
            <Ch.Input
              value={preco}
              type="number"
              onChange={(e) => setPreco(e.target.value)}
              placeholder="Preço do Produto"
            />
            <Ch.Button w={40} onClick={handleNewProducts}>Cadastrar</Ch.Button>
          </Ch.SimpleGrid>

          <Ch.Box overflowY='auto' height='80vh' >
            <Ch.Table mt='6'>

              <Ch.Thead>
                <Ch.Tr>
                  <Ch.Th fontWeight='bold' fontSize='14px'>
                    Nome
                  </Ch.Th>
                  <Ch.Th>
                    Preço
                  </Ch.Th>
                </Ch.Tr>
              </Ch.Thead>

              <Ch.Tbody>
                {listProducts.map((item: { descricao: string, preco: string, id: string }, i: number) => (
                  <Ch.Tr key={i}>
                    <Ch.Td color='gray.500'>{item.descricao}</Ch.Td>
                    <Ch.Td color='gray.500'>R${item.preco}</Ch.Td>
                    <Ch.Td textAlign='end'>
                      <Ch.Button
                        p='2'
                        h='auto'
                        fontSize='11px'
                        color='red.500'
                        fontWeight='bold'
                        onClick={() => removeProduct(item.id)}
                      >
                        Deletar
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

export default Home
