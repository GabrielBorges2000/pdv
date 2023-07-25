'use client'
import * as Ch from '@chakra-ui/react'
import { SidebarNav } from '../SidebarNav'
import { useSidebarContext } from '@/contexts/SidebarContext'


export function Sidebar<UseDisclosureProps>() {
  const { isOpen, onClose }: Ch.UseDisclosureProps = useSidebarContext()

  const isDrawerSidebar = Ch.useBreakpointValue({
    base: true,
    lg: false,
  })

  if (isDrawerSidebar) {
    return (
      <Ch.Drawer isOpen={isOpen} placement="left" onClose={() => onClose()}>
        <Ch.DrawerOverlay>
          <Ch.DrawerContent p="2" onClick={() => onClose()}>
            <Ch.DrawerCloseButton />
            <Ch.DrawerHeader />

            <Ch.DrawerBody>
              <SidebarNav />
            </Ch.DrawerBody>
          </Ch.DrawerContent>
        </Ch.DrawerOverlay>
      </Ch.Drawer>
    );
  }

  return (
    <Ch.Box as='aside' w='64' mr='8'>
      <SidebarNav />
    </Ch.Box>
  )
}
