'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { ReactNode } from 'react'

import { themeType } from '@/global/theme'
import { SidebarProvider } from '@/contexts/SidebarContext'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={themeType}>
        <SidebarProvider>{children}</SidebarProvider>
      </ChakraProvider>
    </CacheProvider>
  )
}
