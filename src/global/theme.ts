import { extendTheme } from '@chakra-ui/react'

import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['500', '700'] })

const theme = {
  color: {
    white: '#fff',
  },
  font: {
    poppins: `${poppins.style.fontFamily}`,
  },
}

export const themeType = extendTheme({ theme })
