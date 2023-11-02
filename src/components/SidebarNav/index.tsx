'use client'
import * as Ch from '@chakra-ui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navCadastro = [
  {
    href: '/',
    title: 'Produtos',
  },
]

const navEstoque = [
  {
    href: '/balance',
    title: 'Saldo',
  },
  {
    href: '/stockentries',
    title: 'Entrada',
  },
  {
    href: '/stockoutputs',
    title: 'Saída',
  },
]

export function SidebarNav() {
  const asPath = usePathname()

  return (
    <Ch.Stack spacing={6}>
      <Ch.Stack>
        <Ch.Text fontSize="xs" fontWeight="bold" color="gray.400">
          Cadastro
        </Ch.Text>

        <Ch.Stack>
          {navCadastro.map(({ href, title }) => (
            <Ch.Link
              key={href}
              _hover={{ bg: 'gray.100' }}
              px="4"
              py="2"
              borderRadius={5}
              bg={asPath === href ? 'gray.200' : ''}
            >
              <Link href={href}>
                <Ch.Text fontSize="md" fontWeight="medium" color="gray.500">
                  {title}
                </Ch.Text>
              </Link>
            </Ch.Link>
          ))}
        </Ch.Stack>
      </Ch.Stack>

      <Ch.Stack>
        <Ch.Text fontSize="xs" fontWeight="bold" color="gray.400">
          Estoque
        </Ch.Text>

        <Ch.Stack>
          {navEstoque.map(({ href, title }) => (
            <Ch.Link
              key={href}
              _hover={{ bg: 'gray.100' }}
              px="2"
              py="2"
              borderRadius={5}
              bg={asPath === href ? 'gray.200' : ''}
            >
              <Link href={href}>
                <Ch.Text fontSize="md" fontWeight="medium" color="gray.500">
                  {title}
                </Ch.Text>
              </Link>
            </Ch.Link>
          ))}
        </Ch.Stack>
      </Ch.Stack>
    </Ch.Stack>
  )
}
