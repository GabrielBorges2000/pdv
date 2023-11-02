'use client'
import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'
import * as Ch from '@chakra-ui/react'
import { useEffect, useState } from 'react'

interface ProductProps {
  id: string
  product_id?: string
  amount?: string
  name: string
}

export function getlocalStorage(key: string) {
  const data = window.localStorage.getItem(key)

  return JSON.parse(data!)
}

export function setlocalStorage(key: string, value: unknown) {
  const data = JSON.stringify(value)

  return window.localStorage.setItem(key, data)
}

const Produtos = () => {
  const [name, setName] = useState('')
  const [listProducts, setListProducts] = useState<ProductProps[]>([])

  useEffect(() => {
    const db_products = getlocalStorage('db_products')

    setListProducts(db_products)
  }, [])

  const handleNewProduct = () => {
    if (!name) return
    if (verifyProductName()) {
      alert('Produto já cadastrado!')
      return
    }

    const id = Math.random().toString(36).substring(2)

    if (listProducts && listProducts.length) {
      setlocalStorage('db_products', [...listProducts, { id, name }])

      setListProducts([...listProducts, { id, name }])
    } else {
      setlocalStorage('db_products', [{ id, name }])

      setListProducts([{ id, name }])
    }

    setName('')
  }

  const verifyProductName = () => {
    return !!listProducts.find((prod) => prod.name === name)
  }

  const removeProduct = (id: string | number) => {
    const db_stock_outputs = getlocalStorage('db_stock_outputs')

    const db_stock_entries = getlocalStorage('db_stock_entries')

    const hasOutputs = db_stock_outputs.filter(
      (item: ProductProps) => item.product_id === id,
    ).length
    const hasEntries = db_stock_entries.filter(
      (item: ProductProps) => item.product_id === id,
    ).length

    if (hasEntries || hasOutputs) {
      alert('Esse produto possuí movimentações!')
      return
    }

    const newArray = listProducts.filter((item: ProductProps) => item.id !== id)

    setlocalStorage('db_products', newArray)

    setListProducts(newArray)
  }

  return (
    <Ch.Flex h="100vh" flexDirection="column">
      <Header />

      <Ch.Flex w="100%" my="6" maxW={1120} mx="auto" px="6" h="100vh">
        <Sidebar />

        <Ch.Box w="100%">
          <Ch.SimpleGrid minChildWidth={240} h="fit-content" spacing="6">
            <Ch.Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome do produto"
            />
            <Ch.Button w="40" onClick={handleNewProduct}>
              CADASTRAR
            </Ch.Button>
          </Ch.SimpleGrid>

          <Ch.Box overflowY="auto" height="80vh">
            <Ch.Table mt="6">
              <Ch.Thead>
                <Ch.Tr>
                  <Ch.Th fontWeight="bold" fontSize="14px">
                    Nome
                  </Ch.Th>
                  <Ch.Th></Ch.Th>
                </Ch.Tr>
              </Ch.Thead>
              <Ch.Tbody>
                {listProducts.map((item: ProductProps, i) => (
                  <Ch.Tr key={i}>
                    <Ch.Td color="gray.500">{item.name}</Ch.Td>
                    <Ch.Td textAlign="end">
                      <Ch.Button
                        p="2"
                        h="auto"
                        fontSize={11}
                        color="red.500"
                        fontWeight="bold"
                        onClick={() => removeProduct(item.id)}
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
export default Produtos
