'use client'
import { useEffect, useState } from 'react'
import * as Ch from '@chakra-ui/react'
import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'

type ListProducts = {
  id?: string
  name?: string
  amount: string | number
  product_id?: string
  product_name?: string
}

export function getlocalStorage(key: string) {
  const data: string | null = window.localStorage.getItem(key)

  return JSON.parse(data!)
}

const Balance = () => {
  const [productFiltered, setProductFiltered] = useState<string>('')
  const [listProducts, setListProducts] = useState<ListProducts[]>([])
  const [cmbProducts, setCmbProducts] = useState<ListProducts[]>([])

  const BuildBalanceArray = () => {
    const db_stock_outputs = getlocalStorage('db_stock_outputs')

    const db_stock_entries = getlocalStorage('db_stock_entries')

    const db_products = getlocalStorage('db_products')

    const newArray: ListProducts[] = []

    db_products?.map((prod: { id: string; name: string }) => {
      const entries = db_stock_entries
        .filter(({ product_id }: ListProducts) => product_id === prod.id)
        .map(({ amount }: ListProducts) => Number(amount))
        .reduce((acc: number, cur: number) => acc + cur, 0)

      const outputs = db_stock_outputs
        .filter(({ product_id }: ListProducts) => product_id === prod.id)
        .map(({ amount }: ListProducts) => Number(amount))
        .reduce((acc: number, cur: number) => acc + cur, 0)

      const total = Number(entries) - Number(outputs)

      newArray.push({
        product_id: prod.id,
        product_name: prod.name,
        amount: total,
      })

      setListProducts(newArray)
      setCmbProducts(newArray)
    })
  }

  useEffect(() => {
    BuildBalanceArray()
  }, [])

  const handleFilterProducts = () => {
    if (!productFiltered) {
      setListProducts(cmbProducts)
      return
    }

    const newArray = cmbProducts.filter(
      (item: ListProducts) => item.product_id === productFiltered,
    )

    setListProducts(newArray)
  }

  return (
    <Ch.Flex h="100vh" flexDirection="column">
      <Header />

      <Ch.Flex w="100%" my="6" maxW={1120} mx="auto" px="6" h="100vh">
        <Sidebar />

        <Ch.Box w="100%">
          <Ch.SimpleGrid minChildWidth={240} h="fit-content" spacing="6">
            <Ch.Select
              value={productFiltered}
              onChange={(e) => setProductFiltered(e.target.value)}
            >
              <option value="">Selecione um item</option>
              {cmbProducts &&
                cmbProducts.length > 0 &&
                cmbProducts.map((item: ListProducts, i) => (
                  <option key={i} value={item.product_id}>
                    {item.product_name}
                  </option>
                ))}
            </Ch.Select>
            <Ch.Button w="40px" onClick={handleFilterProducts}>
              FILTRAR
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
                </Ch.Tr>
              </Ch.Thead>
              <Ch.Tbody>
                {listProducts.map((item: ListProducts, i) => (
                  <Ch.Tr key={i}>
                    <Ch.Td color="gray.500">{item.product_name}</Ch.Td>
                    <Ch.Td color="gray.500">{item.amount}</Ch.Td>
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

export default Balance
