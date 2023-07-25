import { useDisclosure } from "@chakra-ui/react";
import { ReactNode, createContext, useContext } from "react";

const SidebarContext = createContext({})

export const SidebarProvider = ({ children } : { children: ReactNode }) => {
  const disclosure = useDisclosure();

  return (
    <SidebarContext.Provider value={disclosure}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebarContext = () => useContext(SidebarContext);