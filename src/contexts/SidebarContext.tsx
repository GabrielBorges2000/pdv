import { UseDisclosureProps, useDisclosure } from '@chakra-ui/react'
import { ReactNode, createContext, useContext } from 'react'

const SidebarContext = createContext({})

interface ContextProps {
  children: ReactNode
}

export const SidebarProvider = ({ children }: ContextProps) => {
  const disclosure: UseDisclosureProps = useDisclosure()

  return (
    <SidebarContext.Provider value={disclosure}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebarContext = () => useContext(SidebarContext)
