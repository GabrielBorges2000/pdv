'use client'
import { useSidebarContext } from '@/contexts/SidebarContext'

import * as Ch from '@chakra-ui/react'

import { FiMenu } from 'react-icons/fi'

export function Header() {
  const isMobile = Ch.useBreakpointValue({
    base: true,
    lg: false,
  })

  const { onOpen }: Ch.UseDisclosureProps = useSidebarContext()

  return (
    <Ch.Flex
      as="header"
      w="100%"
      maxW={1120}
      h="20"
      mx="auto"
      px="2"
      py="2"
      align="center"
      boxShadow="0 1px 0 #ccc"
      color="gray.500"
      fontWeight="bold"
    >
      {isMobile && (
        <Ch.IconButton
          icon={<Ch.Icon as={FiMenu} />}
          onClick={onOpen}
          variant="unstyled"
          fontSize="20"
          mr="2"
          aria-label="Este botão é para abrir a sidebar"
        ></Ch.IconButton>
      )}

      <Ch.Text as="h1">Estoque</Ch.Text>
      <Ch.Flex ml="auto">
        <Ch.HStack>
          <Ch.Text>Gabriel Borges</Ch.Text>
          <Ch.Avatar size="md" name="" src='https://avatars.githubusercontent.com/u/112534393?v=4'/>
        </Ch.HStack>
      </Ch.Flex>
    </Ch.Flex>
  )
}
