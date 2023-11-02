'use client'
import { useEffect, useState } from 'react'
import * as Ch from '@chakra-ui/react'

import { Header } from '@/components/Header'
import { Sidebar } from '@/components/Sidebar'

interface ProductProps {
  id: string,
  product_id: string,
  amount: string,
  name?: string
}

export function getlocalStorage(key: string) {
  const data = window.localStorage.getItem(key)

  return JSON.parse(data!)
}

export function setlocalStorage(key: string, value: unknown) {
  const data = JSON.stringify(value)

  return window.localStorage.setItem(key, data)
}

const StockEntries = () => {
  const [amount, setAmount] = useState<string>("");
  const [product_id, setProduct_id] = useState<string>("0");
  const [listStockEntries, setStockEntries] = useState<ProductProps[]>([]);
  const [listProducts, setListProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    const db_stock_entries = getlocalStorage("db_stock_entries");

    setStockEntries(db_stock_entries);

    const db_products = getlocalStorage("db_products");

    setListProducts(db_products);
  }, []);

  const handleNewEntry = () => {
    if (!amount || product_id === "0") {
      return alert("Selecione o produto e a quantidade!");
    }

    const id = Math.random().toString(36).substring(2);

    if (listStockEntries && listStockEntries.length) {
      setlocalStorage("db_stock_entries", [...listStockEntries, { id, amount, product_id }]);

      const NewStockProduct: ProductProps = { id, amount, product_id }

      setStockEntries([...listStockEntries, NewStockProduct]);
    } else {
      setlocalStorage("db_stock_entries", [{ id, amount, product_id }]);

      const NewStockProduct: ProductProps = { id, amount, product_id }

      setStockEntries([NewStockProduct]);
    }

    setAmount("");
    setProduct_id("0");
  };

  const removeEntries = (id: string) => {
    const newArray = listStockEntries.filter((item) => item.id !== id);

    setlocalStorage("db_stock_entries", newArray);

    setStockEntries(newArray);
  };

  const getProductById = (id: string) => {
    return listProducts.filter((item) => item.id === id)[0]?.name;
  };

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
                listProducts.map((item, i) => (
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
            <Ch.Button w="40" onClick={handleNewEntry}>
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
                {listStockEntries.map(({ product_id, amount, id }: ProductProps, i) => (
                  <Ch.Tr key={i}>
                    <Ch.Td color="gray.500">{getProductById(product_id)}</Ch.Td>
                    <Ch.Td color="gray.500">{amount}</Ch.Td>
                    <Ch.Td textAlign="end">
                      <Ch.Button
                        p="2"
                        h="auto"
                        fontSize={11}
                        color="red.500"
                        fontWeight="bold"
                        onClick={() => removeEntries(id)}
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

export default StockEntries
